import { useCallback, useEffect, useState } from "react";
import type { DashboardPayload, LoadDashboardResult } from "../services/dataLoader";
import { loadDashboard } from "../services/dataLoader";
import type { GpuModel, MarketDataset } from "../types";

type Status = {
  loading: boolean;
  error: string | null;
  gpuFrom: LoadDashboardResult["gpuFrom"];
  marketFrom: LoadDashboardResult["marketFrom"];
  lastRefresh: string | null;
};

const initialPayload: DashboardPayload = {
  models: [],
  marketDatasets: [],
  kpiStats: [],
  sourceLinks: [],
  reportDate: "",
};

export function useDashboardData() {
  const [payload, setPayload] = useState<DashboardPayload>(initialPayload);
  const [status, setStatus] = useState<Status>({
    loading: true,
    error: null,
    gpuFrom: "bundle",
    marketFrom: "bundle",
    lastRefresh: null,
  });

  const refresh = useCallback(async () => {
    setStatus((s) => ({ ...s, loading: true, error: null }));
    const result = await loadDashboard();
    setPayload(result.payload);
    setStatus({
      loading: false,
      error: result.error,
      gpuFrom: result.gpuFrom,
      marketFrom: result.marketFrom,
      lastRefresh: result.fetchedAt,
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await loadDashboard();
      if (cancelled) return;
      setPayload(result.payload);
      setStatus({
        loading: false,
        error: result.error,
        gpuFrom: result.gpuFrom,
        marketFrom: result.marketFrom,
        lastRefresh: result.fetchedAt,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    models: payload.models as GpuModel[],
    marketDatasets: payload.marketDatasets as MarketDataset[],
    kpiStats: payload.kpiStats,
    sourceLinks: payload.sourceLinks,
    reportDate: payload.reportDate,
    status,
    refresh,
  };
}
