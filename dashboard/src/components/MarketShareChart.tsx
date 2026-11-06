import type { MarketDataset } from "../types";
import { companyColor } from "../types";
import { formatShare } from "../utils";

type Props = {
  dataset: MarketDataset;
  onSelectCompany?: (company: string) => void;
};

export function MarketShareChart({ dataset, onSelectCompany }: Props) {
  const numericMax = Math.max(
    ...dataset.entries.map((e) => e.sharePercent ?? 0),
    1
  );

  return (
    <div className="market-chart">
      <dl className="meta-grid">
        <div>
          <dt>دوره</dt>
          <dd>{dataset.period}</dd>
        </div>
        <div>
          <dt>روش</dt>
          <dd>{dataset.methodFa}</dd>
        </div>
        <div className="meta-span">
          <dt>منبع</dt>
          <dd>
            <a href={dataset.sourceUrl} target="_blank" rel="noreferrer">
              {dataset.sourceName}
            </a>
            <span className="meta-date"> · {dataset.sourceDate}</span>
          </dd>
        </div>
      </dl>

      {dataset.warningFa && (
        <div className="inline-alert" role="status">
          {dataset.warningFa}
        </div>
      )}

      <div className="bars" role="img" aria-label={`نمودار ${dataset.titleFa}`}>
        {dataset.entries.map((entry) => {
          const label = formatShare(entry);
          const pct = entry.sharePercent;
          const width =
            pct != null && pct > 0
              ? (pct / numericMax) * 100
              : entry.shareLabel
                ? 92
                : 6;
          const color = companyColor(entry.company);
          return (
            <button
              type="button"
              key={entry.company}
              className="bar-row"
              onClick={() => onSelectCompany?.(entry.company)}
              title={entry.note ?? `فیلتر ${entry.company}`}
            >
              <span className="bar-label">
                <span className="bar-dot" style={{ backgroundColor: color }} />
                {entry.company}
              </span>
              <span className="bar-track">
                <span
                  className="bar-fill"
                  style={{ width: `${width}%`, backgroundColor: color }}
                />
              </span>
              <span className="bar-value">{label}</span>
              {entry.note && <span className="bar-note">{entry.note}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
