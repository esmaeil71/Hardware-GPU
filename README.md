# GPU Market Report & Dashboard

گزارش تحقیقی بازار **GPU و شتاب‌دهنده‌های محاسباتی** (فارسی، Markdown) به‌همراه **داشبورد وب RTL** (React + Vite) برای مرور سهم بازار، کاتالوگ مدل‌ها، مقایسه و خروجی CSV.

**English:** A curated Persian research report on the GPU / AI accelerator market, structured data (`json`/`csv`), and a Persian RTL interactive dashboard.

---

## Contents

| Path | Description |
|------|-------------|
| [`report/`](report/) | Full report in Markdown (executive summary, market share tables A–G, catalog notes, DC/AI, supply chain, sources, limitations) — see [`report/README.md`](report/README.md) |
| [`data/`](data/) | `gpu-models.json` / `gpu-models.csv` — model catalog with segments, specs, interconnect fields (`host_interface`, `gpu_interconnect`, …), and `catalog_note` |
| [`dashboard/`](dashboard/) | Vite + React app: charts, filters, compare (up to 3 SKUs), online fetch + `localStorage` cache — see [`dashboard/README.md`](dashboard/README.md) |

---

## Quick start (dashboard)

```bash
cd dashboard
npm install
npm run dev
```

Open **http://localhost:5173** (default Vite port).

Production build:

```bash
npm run build
npm run preview
```

Optional: set a remote data base URL (copy `dashboard/.env.example` to `dashboard/.env`):

```bash
VITE_DATA_BASE_URL=https://your-cdn.example.com/path
```

The app loads `/data/gpu-models.json` and `/data/market-share.json`, caches successful responses in **localStorage**, and falls back to bundled data when offline.

---

## Data

- **Source of truth for the catalog:** [`data/gpu-models.json`](data/gpu-models.json)  
- **CSV export:** [`data/gpu-models.csv`](data/gpu-models.csv)  
- The dashboard keeps copies under `dashboard/src/data/` and `dashboard/public/data/` for bundling and static fetch — keep them in sync when you edit the root `data/` files (commands in [`dashboard/README.md`](dashboard/README.md)).

The list is **curated**, not a complete global SKU database; see the `catalog_note` field at the bottom of `gpu-models.json`.

---

## Tech stack

- **Report:** Markdown  
- **Dashboard:** TypeScript, React 19, Vite 6  
- **Styling:** RTL Persian UI, custom CSS  

---

## Repository layout

```
Hardware/
├── README.md                 # this file
├── .gitignore
├── data/                     # JSON + CSV (catalog & exports)
├── report/                   # Persian report chapters + sources
└── dashboard/                # Web app (npm install here)
    ├── package.json
    ├── public/data/          # Served as static /data/*.json
    └── src/
```

---

## Contributing

Issues and pull requests are welcome. When changing the GPU catalog, update:

1. `data/gpu-models.json`  
2. Sync to `dashboard/src/data/` and `dashboard/public/data/`  
3. Regenerate `data/gpu-models.csv` if you rely on it for distribution  

Prefer **official vendor datasheets** or clearly cited public sources for new rows; use `data_status: "partial"` and `null` fields when a single authoritative sheet is missing.

---

## License

Specify your license here (e.g. MIT, CC BY 4.0 for the report text, or “All rights reserved” if not open-sourcing the content).

---

## Disclaimer

Market figures and specifications are **informational** and tied to cited sources and dates in the report. They are not financial or procurement advice.
