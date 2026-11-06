import type { MarketDataset } from "../types";
import marketPayload from "./market-share.json";

export const REPORT_DATE = marketPayload.report_date;

export const MARKET_DATASETS = marketPayload.market_datasets as MarketDataset[];

export const KPI_STATS = marketPayload.kpi_stats as {
  label: string;
  value: string;
  sub: string;
  datasetId: string;
}[];

export type SourceLink =
  | { title: string; path: string; internal: boolean; url?: never }
  | { title: string; url: string; internal?: false; path?: never };

export const SOURCE_LINKS = marketPayload.source_links as SourceLink[];
