# یادداشت‌های تحقیق (اعتبارسنجی اولیه)

**آخرین به‌روزرسانی:** ۶ نوامبر ۲۰۲۶ (UTC+3:30)

این فایل **کارگاه داخلی** است؛ اعداد نهایی فقط پس از تطبیق تعریف بازار در [`03-market-share.md`](03-market-share.md) استفاده می‌شوند.

---

## دسکتاپ discrete (AIB)

| فیلد | مقدار |
|------|--------|
| دوره | Q3 2025 (تقویم) |
| واحد | 12.0M AIB (~12.02M در برخی گزارش‌ها) |
| سهم | NVIDIA −1.2pp QoQ → **~92%**؛ AMD +0.8pp → **~7%**؛ Intel +0.4pp → **~1%** |
| روش | سهم **ارسال واحد** AIB (کارت/add-in board) |
| منبع اصلی | [JPR — Global add-in board market Q3'25](https://www.jonpeddie.com/news/global-add-in-board-market-8-8-billion-in-q325-with-a-cagr-of-0-7-to-2029/) — 2025-12-01 |
| تأیید رسانه | [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/latest-gpu-market-analysis-shows-nvidia-losing-ground-to-amd-and-intel-cracks-the-1-percent-share-milestone-for-the-first-time) |

**Q3 2024 AIB (مقایسه تاریخی، دوره جدا):** NVIDIA ~90%, AMD ~10%, Intel ~0% — [JPR Q3'24 AIB](https://www.jonpeddie.com/news/q324-pc-graphics-add-in-board-shipments-decreased-14-5-from-last-quarter/) — 2024-12-10

**سال تقویمی 2025 AIB (سالانه، ≠ فصل):** ~44.28M واحد؛ NVIDIA Q4 2025 ~94%, AMD Q4 ~5% — [Tom's Hardware / JPR](https://www.tomshardware.com/pc-components/gpus/nvidia-dominates-discrete-gpu-market-as-sales-of-amd-radeon-graphics-cards-hit-historical-low) — برچسب `[رسانه]` نقل JPR

---

## کل GPU PC (iGPU + dGPU + eGPU)

| فیلد | مقدار |
|------|--------|
| دوره | Q3 2025 |
| واحد | 76.6M GPU |
| سهم (گرد شده در رسانه) | Intel **61%**, NVIDIA **24%**, AMD **15%** |
| روش | سهم **واحد** همه GPUهای PC |
| منبع اصلی | [JPR Q3'25 PC GPU shipments](https://www.jonpeddie.com/news/q325-pc-gpu-shipments-increased-by-2-5-from-last-quarter-which-might-suggest-a-creep-forward/) |
| یادداشت | **≠ جدول AIB** — Intel به‌دلیل حجم iGPU روی CPU |

---

## دیتاسنتر / سرور GPU

| فیلد | مقدار |
|------|--------|
| دوره | Q4 2024 (تقویم) |
| متریک | NVIDIA **بیش از 90%** از **ارسال** سرورهای دارای GPU تعبیه‌شده |
| منبع | [IDC Server Tracker PR](https://my.idc.com/getdoc.jsp?containerId=prUS53264225) — 2025-03-18 |
| تعریف IDC | GPU discrete یا IGP روی مادربرد سرور؛ سرور بدون accelerator جداگانه |

**درآمد Data Center NVIDIA (≠ سهم بازار رقیب):**

- Q4 FY2025: **$35.580B** Data Center (compute $32.556B + networking $3.024B)
- FY2025 Data Center: **$115.2B**
- منبع: [NVIDIA Q4 FY25 PR](https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2025/default.aspx) + [CFO Commentary PDF](https://s201.q4cdn.com/141608511/files/doc_financials/2025/Q425/Q4FY25-CFO-Commentary.pdf)

**سهم درآمد AI DC (تحلیلی ثانویه — برای جدول D با احتیاط):**

- Visual Capitalist جدول فصلی Intel/AMD/NVIDIA «AI data center revenue share» تا 2025 Q3 E — [Charted](https://www.visualcapitalist.com/charted-the-battle-for-ai-data-center-revenue-2021-2025/) — برچسب `[تحلیلی]`؛ methodology باید در `uncertain-data.md` باشد

---

## موبایل (SoC — نه GPU IP جدا)

| فیلد | مقدار |
|------|--------|
| دوره | سال 2025 (پیش‌بینی/گزارش) |
| MediaTek 34.4%, Qualcomm 25.1%, Apple 18.1%, UNISOC 12.1%, Samsung 5.7% | واحد **SoC** |
| منبع | Counterpoint via [Sina Finance 2026-01-28](https://finance.sina.com.cn/roll/2026-01-30/doc-inhkazcc3494294.shtml) |
| جدول فصلی | [Counterpoint AP-SoC quarterly page](https://counterpointresearch.com/en/insights/global-smartphone-apsoc-market-share-quarterly) |

---

## محصولات کلیدی — منابع مشخصات

| محصول | منبع |
|--------|------|
| AMD MI325X / MI350X | [amd.com](https://www.amd.com/en/products/accelerators/instinct/mi325x.html), [ROCm workload doc](https://rocm.docs.amd.com/projects/ai-ecosystem/en/latest/optimization/workload-optimization.html) |
| NVIDIA B200 HBM | [HGX RA — 180GB vs config variants](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html); 192GB/8TB/s در برخی پیکربندی‌ها (Grace Blackwell) — Cornell/TACC `[آموزشی]` |
| Intel Arc B580 | Intel ARK / PR Battlemage (2024 Q4) |

---

## بنچمارک (برای بخش ۶ — نمونه)

- **MLPerf Training/Inference:** mlcommons.org — نسخه و ruleset در گزارش ذکر شود (عدم ادغام با FPS بازی).
- **3DMark / بازی:** TechPowerUp، Tom's Hardware — درایور و رزولوشن اجباری.

---

## شکاف‌های عمدی

- Mercury Research discrete share 2024–2025: **عدم یافت در منبع عمومی مستقیم**
- IDC laptop dGPU / workstation share by vendor (units): **پولی** — [US53919025](https://my.idc.com/getdoc.jsp?containerId=US53919025)
- IDC AI accelerator by vendor (GPU vs ASIC units): **پولی** — [US54009725](https://my.idc.com/getdoc.jsp?containerId=US54009725)
