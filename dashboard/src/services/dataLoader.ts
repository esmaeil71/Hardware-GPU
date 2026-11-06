import bundledGpu from "../data/gpu-models.json";
import bundledMarket from "../data/market-share.json";
import { dataUrl } from "../config";
import type { GpuModel, MarketDataset } from "../types";

export const STORAGE = {
  gpu: "gpu-dashboard-cache-gpu-models-v1",
  market: "gpu-dashboard-cache-market-share-v1",
  meta: "gpu-dashboard-cache-meta-v1",
} as const;

type CacheMeta = {
  gpuFetchedAt: string | null;
  marketFetchedAt: string | null;
  gpuSource: "network" | "cache" | "bundle";
  marketSource: "network" | "cache" | "bundle";
};

export type DashboardPayload = {
  models: GpuModel[];
  marketDatasets: MarketDataset[];
  kpiStats: typeof bundledMarket.kpi_stats;
  sourceLinks: typeof bundledMarket.source_links;
  reportDate: string;
};

type GpuFile = {
  schema_version?: string;
  models?: GpuModel[];
};

type MarketFile = {
  report_date?: string;
  market_datasets?: MarketDataset[];
  kpi_stats?: typeof bundledMarket.kpi_stats;
  source_links?: typeof bundledMarket.source_links;
};

const GPU_FETCH_URL = dataUrl("/data/gpu-models.json");
const MARKET_FETCH_URL = dataUrl("/data/market-share.json");

function readCache(key: string): unknown | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeCache(key: string, data: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
}

function readMeta(): Partial<CacheMeta> {
  return (readCache(STORAGE.meta) as Partial<CacheMeta>) ?? {};
}

function writeMeta(partial: Partial<CacheMeta>) {
  const prev = readMeta();
  writeCache(STORAGE.meta, { ...prev, ...partial });
}

function parseGpu(json: unknown): GpuModel[] | null {
  const o = json as GpuFile;
  if (!o?.models || !Array.isArray(o.models)) return null;
  return o.models as GpuModel[];
}

function parseMarket(json: unknown): {
  reportDate: string;
  datasets: MarketDataset[];
  kpi: typeof bundledMarket.kpi_stats;
  links: typeof bundledMarket.source_links;
} | null {
  const o = json as MarketFile;
  if (!o?.market_datasets || !Array.isArray(o.market_datasets)) return null;
  return {
    reportDate: o.report_date ?? bundledMarket.report_date,
    datasets: o.market_datasets as MarketDataset[],
    kpi: o.kpi_stats ?? bundledMarket.kpi_stats,
    links: o.source_links ?? bundledMarket.source_links,
  };
}

export type LoadDashboardResult = {
  payload: DashboardPayload;
  gpuFrom: "network" | "cache" | "bundle";
  marketFrom: "network" | "cache" | "bundle";
  error: string | null;
  fetchedAt: string;
};

export async function loadDashboard(options?: { skipNetwork?: boolean }): Promise<LoadDashboardResult> {
  const now = new Date().toISOString();
  let gpuFrom: "network" | "cache" | "bundle" = "bundle";
  let marketFrom: "network" | "cache" | "bundle" = "bundle";
  let error: string | null = null;

  const bundledPayload: DashboardPayload = {
    models: parseGpu(bundledGpu) ?? [],
    marketDatasets: (bundledMarket.market_datasets as MarketDataset[]) ?? [],
    kpiStats: bundledMarket.kpi_stats,
    sourceLinks: bundledMarket.source_links,
    reportDate: bundledMarket.report_date,
  };

  let models = bundledPayload.models;
  let marketDatasets = bundledPayload.marketDatasets;
  let kpiStats = bundledPayload.kpiStats;
  let sourceLinks = bundledPayload.sourceLinks;
  let reportDate = bundledPayload.reportDate;

  const cachedGpu = readCache(STORAGE.gpu);
  const cachedMarket = readCache(STORAGE.market);
  const parsedGpuCache = cachedGpu ? parseGpu(cachedGpu) : null;
  const parsedMarketCache = cachedMarket ? parseMarket(cachedMarket) : null;

  if (parsedGpuCache?.length) {
    models = parsedGpuCache;
    gpuFrom = "cache";
  }
  if (parsedMarketCache) {
    marketDatasets = parsedMarketCache.datasets;
    kpiStats = parsedMarketCache.kpi;
    sourceLinks = parsedMarketCache.links;
    reportDate = parsedMarketCache.reportDate;
    marketFrom = "cache";
  }

  if (options?.skipNetwork) {
    return {
      payload: { models, marketDatasets, kpiStats, sourceLinks, reportDate },
      gpuFrom,
      marketFrom,
      error: null,
      fetchedAt: now,
    };
  }

  try {
    const [gpuRes, marketRes] = await Promise.all([
      fetch(GPU_FETCH_URL, { cache: "no-store" }),
      fetch(MARKET_FETCH_URL, { cache: "no-store" }),
    ]);

    if (gpuRes.ok) {
      const gpuJson = await gpuRes.json();
      const parsed = parseGpu(gpuJson);
      if (parsed?.length) {
        models = parsed;
        gpuFrom = "network";
        writeCache(STORAGE.gpu, gpuJson);
        writeMeta({ gpuFetchedAt: now, gpuSource: "network" });
      }
    }

    if (marketRes.ok) {
      const marketJson = await marketRes.json();
      const parsed = parseMarket(marketJson);
      if (parsed) {
        marketDatasets = parsed.datasets;
        kpiStats = parsed.kpi;
        sourceLinks = parsed.links;
        reportDate = parsed.reportDate;
        marketFrom = "network";
        writeCache(STORAGE.market, marketJson);
        writeMeta({ marketFetchedAt: now, marketSource: "network" });
      }
    }

    if (!gpuRes.ok && !marketRes.ok) {
      error = `خطای شبکه (${gpuRes.status} / ${marketRes.status})`;
    } else if (!gpuRes.ok) {
      error = `gpu-models: ${gpuRes.status}`;
    } else if (!marketRes.ok) {
      error = `market-share: ${marketRes.status}`;
    }
  } catch (e) {
    error = e instanceof Error ? e.message : "خطای شبکه";
  }

  if (gpuFrom !== "network" && !models.length && bundledPayload.models.length) {
    models = bundledPayload.models;
    gpuFrom = "bundle";
  }
  if (marketFrom !== "network" && !marketDatasets.length) {
    marketDatasets = bundledPayload.marketDatasets;
    kpiStats = bundledPayload.kpiStats;
    sourceLinks = bundledPayload.sourceLinks;
    reportDate = bundledPayload.reportDate;
    marketFrom = marketFrom === "cache" ? "cache" : "bundle";
  }

  writeMeta({
    gpuFetchedAt: gpuFrom === "network" ? now : readMeta().gpuFetchedAt ?? null,
    marketFetchedAt: marketFrom === "network" ? now : readMeta().marketFetchedAt ?? null,
    gpuSource: gpuFrom,
    marketSource: marketFrom,
  });

  return {
    payload: { models, marketDatasets, kpiStats, sourceLinks, reportDate },
    gpuFrom,
    marketFrom,
    error,
    fetchedAt: now,
  };
}

export function getLastSyncedLabel(): string | null {
  const m = readMeta();
  const t = m.gpuFetchedAt || m.marketFetchedAt;
  if (!t) return null;
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(t));
  } catch {
    return t;
  }
}
