import type { Dispatch, SetStateAction } from "react";
import type { CatalogFilters, GpuModel } from "../types";
import { SEGMENT_LABELS, companyColor } from "../types";
import { Badge, Card } from "./ui";

type Props = {
  models: GpuModel[];
  filters: CatalogFilters;
  setFilters: Dispatch<SetStateAction<CatalogFilters>>;
  companies: string[];
  segments: string[];
  yearRange: { min: number; max: number };
  onReset: () => void;
  onExport: () => void;
  onSelectModel: (m: GpuModel) => void;
  selectedModel: GpuModel | null;
};

function toggleList(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((x) => x !== value) : [...list, value];
}

export function CatalogPanel({
  models,
  filters,
  setFilters,
  companies,
  segments,
  yearRange,
  onReset,
  onExport,
  onSelectModel,
  selectedModel,
}: Props) {
  return (
    <div className="catalog-layout">
      <aside className="filters">
        <Card className="filters-card">
          <p className="filters-title">فیلترها</p>
          <label className="field">
            جستجو
            <input
              type="search"
              value={filters.search}
              onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
              placeholder="مدل، شرکت، معماری…"
            />
          </label>

          <fieldset>
            <legend>شرکت</legend>
            <div className="chip-group">
              {companies.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`chip ${filters.companies.includes(c) ? "active" : ""}`}
                  style={
                    filters.companies.includes(c)
                      ? { borderColor: companyColor(c), color: companyColor(c) }
                      : undefined
                  }
                  onClick={() =>
                    setFilters((f) => ({ ...f, companies: toggleList(f.companies, c) }))
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>بازار</legend>
            <div className="chip-group">
              {segments.map((s) => (
                <button
                  type="button"
                  key={s}
                  className={`chip ${filters.segments.includes(s) ? "active" : ""}`}
                  onClick={() =>
                    setFilters((f) => ({ ...f, segments: toggleList(f.segments, s) }))
                  }
                >
                  {SEGMENT_LABELS[s] ?? s}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="field-row">
            <label className="field">
              از سال
              <input
                type="number"
                min={yearRange.min}
                max={yearRange.max}
                value={filters.minYear ?? ""}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    minYear: e.target.value ? Number(e.target.value) : null,
                  }))
                }
              />
            </label>
            <label className="field">
              تا سال
              <input
                type="number"
                min={yearRange.min}
                max={yearRange.max}
                value={filters.maxYear ?? ""}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    maxYear: e.target.value ? Number(e.target.value) : null,
                  }))
                }
              />
            </label>
          </div>

          <label className="check">
            <input
              type="checkbox"
              checked={filters.rayTracingOnly}
              onChange={(e) =>
                setFilters((f) => ({ ...f, rayTracingOnly: e.target.checked }))
              }
            />
            فقط Ray Tracing
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={filters.aiOnly}
              onChange={(e) => setFilters((f) => ({ ...f, aiOnly: e.target.checked }))}
            />
            فقط شتاب AI
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={filters.officialOnly}
              onChange={(e) =>
                setFilters((f) => ({ ...f, officialOnly: e.target.checked }))
              }
            />
            فقط داده رسمی (official)
          </label>

          <label className="field">
            مرتب‌سازی
            <select
              value={`${filters.sortKey}:${filters.sortDir}`}
              onChange={(e) => {
                const [sortKey, sortDir] = e.target.value.split(":") as [
                  CatalogFilters["sortKey"],
                  CatalogFilters["sortDir"],
                ];
                setFilters((f) => ({ ...f, sortKey, sortDir }));
              }}
            >
              <option value="model:asc">نام مدل (الفبا)</option>
              <option value="company:asc">شرکت</option>
              <option value="memory_gb:desc">حافظه (نزولی)</option>
              <option value="tdp_w:desc">TDP (نزولی)</option>
              <option value="msrp_usd_launch:asc">قیمت MSRP</option>
              <option value="intro_year:desc">سال معرفی</option>
            </select>
          </label>

          <div className="filter-actions">
            <button type="button" className="btn secondary" onClick={onReset}>
              پاک کردن فیلترها
            </button>
            <button type="button" className="btn" onClick={onExport} disabled={models.length === 0}>
              خروجی CSV ({models.length})
            </button>
          </div>
        </Card>
      </aside>

      <div className="catalog-main">
        <p className="result-count">{models.length} مدل</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>شرکت</th>
                <th>مدل</th>
                <th>بازار</th>
                <th>PCIe / بستر</th>
                <th>لینک GPU</th>
                <th>حافظه</th>
                <th>TDP</th>
                <th>MSRP</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr
                  key={`${m.company}-${m.model}`}
                  className={selectedModel?.model === m.model ? "selected" : ""}
                  onClick={() => onSelectModel(m)}
                >
                  <td>
                    <Badge color={companyColor(m.company)}>{m.company}</Badge>
                  </td>
                  <td>{m.model}</td>
                  <td>{SEGMENT_LABELS[m.segment] ?? m.segment}</td>
                  <td>{typeof m.host_interface === "string" ? m.host_interface : "—"}</td>
                  <td>
                    {typeof m.gpu_interconnect === "string" && m.gpu_interconnect
                      ? m.gpu_interconnect
                      : "—"}
                  </td>
                  <td>
                    {m.memory_gb != null ? `${m.memory_gb} GB` : "—"}{" "}
                    {m.memory_type ? ` ${m.memory_type}` : ""}
                  </td>
                  <td>{m.tdp_w != null ? `${m.tdp_w} W` : "—"}</td>
                  <td>{m.msrp_usd_launch != null ? `$${m.msrp_usd_launch}` : "—"}</td>
                  <td>{m.data_status ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedModel && (
          <Card className="detail-panel">
            <div className="card-header" style={{ marginBottom: "0.75rem", paddingBottom: "0.65rem" }}>
              <h2 className="card-title">{selectedModel.model}</h2>
            </div>
            <dl className="spec-grid">
              <dt>معماری</dt>
              <dd>{selectedModel.architecture}</dd>
              <dt>RT / AI</dt>
              <dd>
                {selectedModel.ray_tracing ? "RT" : "—"} /{" "}
                {selectedModel.ai_acceleration ? "AI" : "—"}
              </dd>
              <dt>API</dt>
              <dd>{(selectedModel.software_apis ?? []).join(" · ") || "—"}</dd>
              <dt>PCIe / بستر</dt>
              <dd>
                {typeof selectedModel.host_interface === "string"
                  ? selectedModel.host_interface
                  : "—"}
              </dd>
              <dt>لینک بین GPU</dt>
              <dd>
                {typeof selectedModel.gpu_interconnect === "string" &&
                selectedModel.gpu_interconnect
                  ? selectedModel.gpu_interconnect
                  : "—"}
              </dd>
              <dt>حداکثر GPU در دامنهٔ لینک</dt>
              <dd>
                {typeof selectedModel.max_gpu_domain === "number"
                  ? String(selectedModel.max_gpu_domain)
                  : "—"}
              </dd>
              <dt>یادداشت اتصال</dt>
              <dd>
                {typeof selectedModel.interconnect_note === "string"
                  ? selectedModel.interconnect_note
                  : "—"}
              </dd>
              <dt>رقیب</dt>
              <dd>{selectedModel.direct_competitor ?? "—"}</dd>
              <dt>منبع</dt>
              <dd>
                {selectedModel.source_specs ? (
                  <a href={selectedModel.source_specs} target="_blank" rel="noreferrer">
                    مشخصات رسمی
                  </a>
                ) : (
                  "—"
                )}
              </dd>
            </dl>
          </Card>
        )}
      </div>
    </div>
  );
}
