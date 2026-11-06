import { useCallback, useEffect, useMemo, useState } from "react";
import { CatalogPanel } from "./components/CatalogPanel";
import { ComparePanel } from "./components/ComparePanel";
import { MarketShareChart } from "./components/MarketShareChart";
import { Card, CardHeader, SectionHint } from "./components/ui";
import { useDashboardData } from "./hooks/useDashboardData";
import { uniqueValues, useFilteredModels } from "./hooks/useFilteredModels";
import { usePersistedFilters, usePersistedTab } from "./hooks/usePersistedState";
import type { GpuModel, TabId } from "./types";
import { SEGMENT_LABELS, companyColor } from "./types";
import { exportModelsCsv } from "./utils";

const TABS: { id: TabId; label: string; desc: string }[] = [
  { id: "overview", label: "نمای کلی", desc: "شاخص‌ها و خلاصه بازار" },
  { id: "market", label: "سهم بازار", desc: "جدول‌های A تا G" },
  { id: "catalog", label: "کاتالوگ", desc: "مدل‌ها و فیلتر" },
  { id: "compare", label: "مقایسه", desc: "تا ۳ محصول" },
  { id: "sources", label: "منابع", desc: "لینک و گزارش" },
];

const PAGE_TITLES: Record<TabId, { title: string; subtitle: string }> = {
  overview: {
    title: "نمای کلی",
    subtitle: "مهم‌ترین شاخص‌های بازار GPU و میانبر به بخش‌ها",
  },
  market: {
    title: "سهم بازار",
    subtitle: "هر نمودار یک تعریف متریک و یک دوره — بدون ترکیب",
  },
  catalog: {
    title: "کاتالوگ GPU",
    subtitle: "جستجو، فیلتر چندگانه و خروجی CSV",
  },
  compare: {
    title: "مقایسه محصول",
    subtitle: "انتخاب حداکثر سه مدل برای مقایسه مشخصات",
  },
  sources: {
    title: "منابع",
    subtitle: "گزارش Hardware و مراجع اصلی داده",
  },
};

function sourceLabel(from: "network" | "cache" | "bundle"): string {
  if (from === "network") return "آنلاین";
  if (from === "cache") return "کش محلی";
  return "پیش‌فرض بسته";
}

export default function App() {
  const [tab, setTab] = usePersistedTab("overview");
  const { filters, setFilters, reset } = usePersistedFilters();
  const {
    models: allModels,
    marketDatasets,
    kpiStats,
    sourceLinks,
    reportDate,
    status,
    refresh,
  } = useDashboardData();

  const [marketDatasetId, setMarketDatasetId] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<GpuModel | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    if (marketDatasets.length === 0) return;
    setMarketDatasetId((id) => {
      if (id && marketDatasets.some((d) => d.id === id)) return id;
      return marketDatasets[0].id;
    });
  }, [marketDatasets]);

  useEffect(() => {
    if (!selectedModel) return;
    const still = allModels.some(
      (m) => m.company === selectedModel.company && m.model === selectedModel.model
    );
    if (!still) setSelectedModel(null);
  }, [allModels, selectedModel]);

  const filtered = useFilteredModels(allModels, filters);
  const { companies, segments, minYear, maxYear } = useMemo(
    () => uniqueValues(allModels),
    [allModels]
  );

  const marketDataset =
    marketDatasets.find((d) => d.id === marketDatasetId) ?? marketDatasets[0];

  const page = PAGE_TITLES[tab as TabId];

  const applyCompanyFilter = useCallback(
    (company: string) => {
      setFilters((f) => ({
        ...f,
        companies: f.companies.includes(company) ? f.companies : [company],
      }));
      setTab("catalog");
    },
    [setFilters, setTab]
  );

  const jumpToCompare = useCallback(
    (m: GpuModel) => {
      const id = `${m.company}::${m.model}`;
      setCompareIds((prev) => {
        if (prev.includes(id)) return prev;
        return [id, ...prev].slice(0, 3);
      });
      setTab("compare");
    },
    [setTab]
  );

  const segmentCounts = useMemo(
    () =>
      Object.entries(
        allModels.reduce<Record<string, number>>((acc, m) => {
          acc[m.segment] = (acc[m.segment] ?? 0) + 1;
          return acc;
        }, {})
      ).sort((a, b) => b[1] - a[1]),
    [allModels]
  );

  const isInitialEmpty =
    status.loading && allModels.length === 0 && marketDatasets.length === 0;

  if (isInitialEmpty) {
    return (
      <div className="app-shell">
        <div className="loading-full">
          <p className="loading-title">در حال بارگذاری داده…</p>
          <p className="loading-sub">دریافت از سرور یا بازیابی از کش مرورگر</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">GPU</span>
          <div>
            <p className="brand-title">بازار GPU</p>
            <p className="brand-tag">داشبورد تعاملی</p>
          </div>
        </div>

        <nav className="side-nav" aria-label="ناوبری">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={tab === t.id ? "nav-item active" : "nav-item"}
              onClick={() => setTab(t.id)}
            >
              <span className="nav-label">{t.label}</span>
              <span className="nav-desc">{t.desc}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-foot">
          <p className="sidebar-date">گزارش: {reportDate || "—"}</p>
          <p className="sidebar-meta">{allModels.length} مدل · کاتالوگ</p>
          <p className="sidebar-meta source-tags">
            GPU: {sourceLabel(status.gpuFrom)} · بازار: {sourceLabel(status.marketFrom)}
          </p>
        </div>
      </aside>

      <div className="content-wrap">
        <header className="topbar">
          <div>
            <h1>{page.title}</h1>
            <p className="topbar-sub">{page.subtitle}</p>
            {status.error && (
              <p className="topbar-warn" role="alert">
                {status.error} — نمایش از کش یا دادهٔ پیش‌فرض
              </p>
            )}
          </div>
          <div className="topbar-actions">
            {tab === "catalog" && (
              <span className="pill">{filtered.length} نتیجه</span>
            )}
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => void refresh()}
              disabled={status.loading}
              title="دریافت مجدد از /data/*.json"
            >
              {status.loading ? "…" : "بروزرسانی"}
            </button>
          </div>
        </header>

        <main className="main" key={tab}>
          {tab === "overview" && marketDataset && (
            <div className="stack-lg">
              <div className="kpi-grid">
                {kpiStats.map((k) => (
                  <button
                    type="button"
                    key={k.label}
                    className="kpi"
                    onClick={() => {
                      setMarketDatasetId(k.datasetId);
                      setTab("market");
                    }}
                  >
                    <span className="kpi-value">{k.value}</span>
                    <span className="kpi-label">{k.label}</span>
                    <span className="kpi-sub">{k.sub}</span>
                  </button>
                ))}
              </div>

              <div className="overview-grid">
                <Card>
                  <CardHeader
                    title="سهم AIB دسکتاپ"
                    subtitle="Q3 2025 · واحد ارسال کارت"
                  />
                  <MarketShareChart
                    dataset={marketDatasets[0]}
                    onSelectCompany={applyCompanyFilter}
                  />
                </Card>
                <Card>
                  <CardHeader title="مدل‌ها بر اساس بازار" subtitle="کلیک → فیلتر کاتالوگ" />
                  <ul className="segment-list">
                    {segmentCounts.map(([seg, count]) => (
                      <li key={seg}>
                        <button
                          type="button"
                          className="segment-btn"
                          onClick={() => {
                            setFilters((f) => ({ ...f, segments: [seg] }));
                            setTab("catalog");
                          }}
                        >
                          <span>{SEGMENT_LABELS[seg] ?? seg}</span>
                          <span className="segment-count">{count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="inline-alert">
                <strong>توجه:</strong> سهم AIB (~92% NVIDIA) با سهم کل GPU PC (~61% Intel) یک
                متریک نیست — iGPU در تعریف دوم لحاظ می‌شود.
              </div>
            </div>
          )}

          {tab === "market" && marketDataset && (
            <div className="stack-lg">
              <Card className="toolbar-card">
                <label className="field field-inline">
                  <span className="field-label">مجموعه داده (جدول A–G)</span>
                  <select
                    className="select-lg"
                    value={marketDatasetId}
                    onChange={(e) => setMarketDatasetId(e.target.value)}
                  >
                    {marketDatasets.map((d) => (
                      <option key={d.id} value={d.id}>
                        [{d.tableId}] {d.titleFa} — {d.period}
                      </option>
                    ))}
                  </select>
                </label>
              </Card>
              <Card>
                <CardHeader title={marketDataset.titleFa} subtitle={marketDataset.period} />
                <MarketShareChart
                  dataset={marketDataset}
                  onSelectCompany={applyCompanyFilter}
                />
              </Card>
              <SectionHint>
                با کلیک روی نام شرکت در نمودار، کاتالوگ با فیلتر همان شرکت باز می‌شود.
              </SectionHint>
            </div>
          )}

          {tab === "catalog" && (
            <CatalogPanel
              models={filtered}
              filters={filters}
              setFilters={setFilters}
              companies={companies}
              segments={segments}
              yearRange={{ min: minYear, max: maxYear }}
              onReset={reset}
              onExport={() => exportModelsCsv(filtered)}
              onSelectModel={setSelectedModel}
              selectedModel={selectedModel}
            />
          )}

          {tab === "compare" && (
            <ComparePanel
              allModels={allModels}
              selectedIds={compareIds}
              setSelectedIds={setCompareIds}
            />
          )}

          {tab === "sources" && (
            <div className="stack-lg">
              <Card>
                <CardHeader title="منابع و گزارش" />
                <ul className="source-list">
                  {sourceLinks.map((s) => (
                    <li key={s.title}>
                      {"url" in s && s.url ? (
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.title}
                        </a>
                      ) : (
                        <span>
                          {s.title}
                          <code>{s.path}</code>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <CardHeader title="رنگ برند در نمودارها" />
                <div className="legend">
                  {["NVIDIA", "AMD", "Intel", "Apple", "Qualcomm", "MediaTek"].map((c) => (
                    <span key={c} className="legend-item">
                      <span className="legend-swatch" style={{ background: companyColor(c) }} />
                      {c}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </main>

        {selectedModel && tab === "catalog" && (
          <div className="fab">
            <button type="button" className="btn btn-primary" onClick={() => jumpToCompare(selectedModel)}>
              افزودن «{selectedModel.model}» به مقایسه
            </button>
          </div>
        )}

        <footer className="page-footer">
          داده از /data/*.json · کش: localStorage · {status.lastRefresh
            ? `آخرین دریافت: ${new Date(status.lastRefresh).toLocaleString("fa-IR")}`
            : ""}
        </footer>
      </div>
    </div>
  );
}
