import { useEffect, useState } from "react";
import type { CatalogFilters } from "../types";

const STORAGE_KEY = "gpu-dashboard-filters-v1";

const defaultFilters: CatalogFilters = {
  search: "",
  companies: [],
  segments: [],
  minYear: null,
  maxYear: null,
  rayTracingOnly: false,
  aiOnly: false,
  officialOnly: false,
  sortKey: "model",
  sortDir: "asc",
};

export function usePersistedFilters() {
  const [filters, setFilters] = useState<CatalogFilters>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaultFilters, ...JSON.parse(raw) };
    } catch {
      /* ignore */
    }
    return defaultFilters;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  const reset = () => setFilters(defaultFilters);

  return { filters, setFilters, reset };
}

export function usePersistedTab(defaultTab: string) {
  const key = "gpu-dashboard-tab";
  const [tab, setTab] = useState(() => localStorage.getItem(key) ?? defaultTab);
  useEffect(() => {
    localStorage.setItem(key, tab);
  }, [tab]);
  return [tab, setTab] as const;
}
