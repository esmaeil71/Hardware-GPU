import { useMemo } from "react";
import type { CatalogFilters, GpuModel } from "../types";
import { getNumericField } from "../utils";

export function filterAndSortModels(models: GpuModel[], filters: CatalogFilters): GpuModel[] {
  let list = [...models];

  const q = filters.search.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (m) =>
        m.model.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.architecture.toLowerCase().includes(q) ||
        (m.direct_competitor?.toLowerCase().includes(q) ?? false)
    );
  }

  if (filters.companies.length > 0) {
    list = list.filter((m) => filters.companies.includes(m.company));
  }

  if (filters.segments.length > 0) {
    list = list.filter((m) => filters.segments.includes(m.segment));
  }

  if (filters.minYear != null) {
    list = list.filter((m) => m.intro_year != null && m.intro_year >= filters.minYear!);
  }
  if (filters.maxYear != null) {
    list = list.filter((m) => m.intro_year != null && m.intro_year <= filters.maxYear!);
  }

  if (filters.rayTracingOnly) {
    list = list.filter((m) => m.ray_tracing === true);
  }
  if (filters.aiOnly) {
    list = list.filter((m) => m.ai_acceleration === true);
  }
  if (filters.officialOnly) {
    list = list.filter((m) => m.data_status === "official");
  }

  const dir = filters.sortDir === "asc" ? 1 : -1;
  list.sort((a, b) => {
    const key = filters.sortKey;
    if (key === "model" || key === "company") {
      return dir * a[key].localeCompare(b[key], "fa");
    }
    const na = getNumericField(a, key) ?? -Infinity;
    const nb = getNumericField(b, key) ?? -Infinity;
    return dir * (na - nb);
  });

  return list;
}

export function useFilteredModels(models: GpuModel[], filters: CatalogFilters) {
  return useMemo(() => filterAndSortModels(models, filters), [models, filters]);
}

export function uniqueValues(models: GpuModel[]) {
  const companies = [...new Set(models.map((m) => m.company))].sort();
  const segments = [...new Set(models.map((m) => m.segment))].sort();
  const years = models
    .map((m) => m.intro_year)
    .filter((y): y is number => y != null)
    .sort((a, b) => a - b);
  return { companies, segments, minYear: years[0] ?? 2023, maxYear: years[years.length - 1] ?? 2026 };
}
