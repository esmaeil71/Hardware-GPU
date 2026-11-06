import { useMemo } from "react";
import type { GpuModel } from "../types";
import { SEGMENT_LABELS, companyColor } from "../types";
import { ModelComboBox } from "./ModelComboBox";
import { Card, CardHeader } from "./ui";

type Props = {
  allModels: GpuModel[];
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
};

function modelId(m: GpuModel) {
  return `${m.company}::${m.model}`;
}

const SPEC_ROWS: { key: string; label: string; fmt: (m: GpuModel) => string }[] = [
  { key: "company", label: "شرکت", fmt: (m) => m.company },
  { key: "segment", label: "بازار", fmt: (m) => SEGMENT_LABELS[m.segment] ?? m.segment },
  { key: "architecture", label: "معماری", fmt: (m) => m.architecture },
  { key: "intro_year", label: "سال", fmt: (m) => String(m.intro_year ?? "—") },
  {
    key: "memory",
    label: "حافظه",
    fmt: (m) => {
      if (m.memory_gb == null) return "—";
      const bw = m.memory_bandwidth_gbs
        ? ` · ${m.memory_bandwidth_gbs} GB/s`
        : m.memory_bandwidth_tbs
          ? ` · ${m.memory_bandwidth_tbs} TB/s`
          : "";
      return `${m.memory_gb} GB ${m.memory_type ?? ""}${bw}`;
    },
  },
  { key: "tdp", label: "TDP/TBP", fmt: (m) => (m.tdp_w != null ? `${m.tdp_w} W` : "—") },
  {
    key: "ai",
    label: "AI TOPS / FP8",
    fmt: (m) => {
      if (m.ai_tops_int8 != null) return `${m.ai_tops_int8} TOPS INT8`;
      if (m.fp8_pflops != null) return `${m.fp8_pflops} PF FP8`;
      return "—";
    },
  },
  {
    key: "cuda",
    label: "CUDA / SP",
    fmt: (m) => {
      if (m.cuda_cores != null) return String(m.cuda_cores);
      const sp = m.stream_processors;
      if (typeof sp === "number") return String(sp);
      return "—";
    },
  },
  {
    key: "msrp",
    label: "MSRP",
    fmt: (m) => (m.msrp_usd_launch != null ? `$${m.msrp_usd_launch}` : "—"),
  },
  { key: "rt", label: "Ray Tracing", fmt: (m) => (m.ray_tracing ? "بله" : "خیر") },
  {
    key: "host_if",
    label: "PCIe / شکل",
    fmt: (m) => (typeof m.host_interface === "string" ? m.host_interface : "—"),
  },
  {
    key: "gpu_link",
    label: "لینک GPU",
    fmt: (m) =>
      typeof m.gpu_interconnect === "string" && m.gpu_interconnect
        ? m.gpu_interconnect
        : "—",
  },
  {
    key: "domain",
    label: "حداکثر GPU در دامنهٔ لینک",
    fmt: (m) =>
      typeof m.max_gpu_domain === "number" ? String(m.max_gpu_domain) : "—",
  },
  {
    key: "ic_note",
    label: "یادداشت اتصال",
    fmt: (m) => (typeof m.interconnect_note === "string" ? m.interconnect_note : "—"),
  },
];

export function ComparePanel({ allModels, selectedIds, setSelectedIds }: Props) {
  const modelOptions = useMemo(
    () =>
      allModels.map((m) => ({
        value: modelId(m),
        label: `${m.company} — ${m.model}`,
      })),
    [allModels]
  );

  /** هر اسلات، مدل‌های انتخاب‌شده در دو اسلات دیگر را از لیست حذف می‌کند (تکرار ممکن نیست). */
  const optionsBySlot = useMemo(() => {
    return [0, 1, 2].map((slotIndex) => {
      const current = selectedIds[slotIndex] ?? "";
      const takenElsewhere = new Set(
        selectedIds.filter((id, j) => j !== slotIndex && id !== "")
      );
      return modelOptions.filter(
        (o) => !takenElsewhere.has(o.value) || o.value === current
      );
    });
  }, [modelOptions, selectedIds]);

  const picked = selectedIds
    .map((id) => allModels.find((m) => modelId(m) === id))
    .filter((m): m is GpuModel => m != null);

  const addSlot = (index: number, value: string) => {
    const next = [...selectedIds];
    while (next.length <= index) next.push("");
    next[index] = value;
    setSelectedIds(next.filter(Boolean).slice(0, 3));
  };

  return (
    <div className="compare stack-lg">
      <Card className="toolbar-card compare-toolbar-card">
        <CardHeader title="انتخاب مدل" subtitle="حداکثر ۳ محصول" />
        <div className="compare-pickers">
          {[0, 1, 2].map((i) => (
            <div key={i} className="compare-picker-cell">
              <label className="field compare-picker-field">
                <span className="field-label" id={`compare-field-${i}`}>
                  مدل {i + 1}
                </span>
                <ModelComboBox
                  id={`compare-combo-${i}`}
                  aria-labelledby={`compare-field-${i}`}
                  value={selectedIds[i] ?? ""}
                  options={optionsBySlot[i]!}
                  onChange={(v) => addSlot(i, v)}
                />
              </label>
            </div>
          ))}
        </div>
      </Card>

      {picked.length >= 2 ? (
        <Card className="compare-results-card">
          <div className="table-wrap compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>مشخصه</th>
                  {picked.map((m) => (
                    <th key={modelId(m)}>
                      <span className="compare-vendor" style={{ color: companyColor(m.company) }}>
                        {m.company}
                      </span>
                      <span className="compare-model">{m.model}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row) => (
                  <tr key={row.key}>
                    <td className="compare-row-label">{row.label}</td>
                    {picked.map((m) => (
                      <td key={modelId(m) + row.key}>{row.fmt(m)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <div className="empty-state">
          <p>حداقل دو مدل انتخاب کنید تا جدول مقایسه نمایش داده شود.</p>
        </div>
      )}
    </div>
  );
}

export { modelId };
