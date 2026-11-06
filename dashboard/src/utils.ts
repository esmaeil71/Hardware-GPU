import type { GpuModel } from "./types";

export function exportModelsCsv(models: GpuModel[], filename = "gpu-models-filtered.csv") {
  if (models.length === 0) return;
  const keys = [
    "company",
    "model",
    "segment",
    "architecture",
    "intro_year",
    "host_interface",
    "gpu_interconnect",
    "max_gpu_domain",
    "interconnect_note",
    "memory_gb",
    "memory_type",
    "tdp_w",
    "msrp_usd_launch",
    "data_status",
    "source_specs",
  ];
  const escape = (v: unknown) => {
    const s = v == null ? "" : String(v);
    if (s.includes(",") || s.includes('"') || s.includes("\n")) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };
  const lines = [
    keys.join(","),
    ...models.map((m) => keys.map((k) => escape(m[k])).join(",")),
  ];
  const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function formatShare(entry: { sharePercent: number | null; shareLabel?: string }): string {
  if (entry.shareLabel) return entry.shareLabel;
  if (entry.sharePercent == null) return "—";
  return `${entry.sharePercent}%`;
}

export function getNumericField(m: GpuModel, key: string): number | null {
  const v = m[key];
  return typeof v === "number" ? v : null;
}
