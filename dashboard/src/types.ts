export type GpuModel = {
  company: string;
  model: string;
  architecture: string;
  intro_year: number | null;
  segment: string;
  process_node?: string | null;
  cuda_cores?: number | null;
  memory_gb?: number | null;
  memory_type?: string | null;
  memory_bandwidth_gbs?: number | null;
  memory_bandwidth_tbs?: number | null;
  tdp_w?: number | null;
  ai_tops_int8?: number | null;
  fp32_tflops?: number | null;
  fp16_pflops?: number | null;
  fp8_pflops?: number | null;
  ray_tracing?: boolean;
  ai_acceleration?: boolean;
  software_apis?: string[];
  host_interface?: string | null;
  gpu_interconnect?: string | null;
  max_gpu_domain?: number | null;
  interconnect_note?: string | null;
  msrp_usd_launch?: number | null;
  direct_competitor?: string | null;
  source_specs?: string;
  source_date?: string | null;
  data_status?: string;
  [key: string]: unknown;
};

export type MarketEntry = {
  company: string;
  sharePercent: number | null;
  shareLabel?: string;
  note?: string;
};

export type MarketDataset = {
  id: string;
  tableId: string;
  titleFa: string;
  period: string;
  methodFa: string;
  sourceName: string;
  sourceUrl: string;
  sourceDate: string;
  warningFa?: string;
  entries: MarketEntry[];
};

export type TabId = "overview" | "market" | "catalog" | "compare" | "sources";

export type CatalogFilters = {
  search: string;
  companies: string[];
  segments: string[];
  minYear: number | null;
  maxYear: number | null;
  rayTracingOnly: boolean;
  aiOnly: boolean;
  officialOnly: boolean;
  sortKey: "model" | "company" | "memory_gb" | "tdp_w" | "msrp_usd_launch" | "intro_year";
  sortDir: "asc" | "desc";
};

export const SEGMENT_LABELS: Record<string, string> = {
  desktop_gaming: "گیمینگ دسکتاپ",
  laptop: "لپ‌تاپ",
  datacenter_ai: "دیتاسنتر / AI",
  workstation: "ورک‌استیشن",
  ai_workstation: "ایستگاه کاری AI (محلی)",
  mobile: "موبایل",
  integrated_soc: "SoC مجتمع",
  automotive_embedded: "خودرو / Embedded",
};

export const COMPANY_COLORS: Record<string, string> = {
  NVIDIA: "#76B900",
  AMD: "#ED1C24",
  Intel: "#0071C5",
  Apple: "#1D1D1F",
  Qualcomm: "#3253DC",
  MediaTek: "#EC943C",
  Samsung: "#1428A0",
  UNISOC: "#6B7280",
  default: "#64748B",
};

export function companyColor(name: string): string {
  return COMPANY_COLORS[name] ?? COMPANY_COLORS.default;
}
