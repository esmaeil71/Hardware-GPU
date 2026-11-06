# بخش سوم: سهم بازار

**تاریخ به‌روزرسانی گزارش:** ۶ نوامبر ۲۰۲۶ (UTC+3:30)

> **هشدار تعریف:** «سهم بازار GPU» بدون ذکر **بازار (segment)**، **دوره**، و **روش اندازه‌گیری** معتبر نیست. اعداد این بخش **ترکیب نمی‌شوند**.

---

## جدول A: سهم بازار GPUهای دسکتاپ (Discrete AIB)

| شرکت | سهم بازار | دوره زمانی | روش اندازه‌گیری | منبع | توضیحات |
|--------|-----------|------------|-----------------|------|---------|
| NVIDIA | ~92% | Q3 2025 (تقویم) | سهم **واحد ارسال** Add-In Board (dGPU دسکتاپ) | [JPR](https://www.jonpeddie.com/news/global-add-in-board-market-8-8-billion-in-q325-with-a-cagr-of-0-7-to-2029/) (2025-12-01) `[تحقیقاتی]` | کاهش 1.2pp نسبت به Q2 2025؛ ~12.0M واحد در فصل |
| AMD | ~7% | Q3 2025 | همان | همان | +0.8pp QoQ |
| Intel | ~1% | Q3 2025 | همان | همان | اولین بار ~1% پس از چند فصل ~0% |
| NVIDIA | ~90% | Q3 2024 | همان | [JPR Q3'24 AIB](https://www.jonpeddie.com/news/q324-pc-graphics-add-in-board-shipments-decreased-14-5-from-last-quarter/) (2024-12-10) | **دوره متفاوت** — فقط برای روند |
| AMD | ~10% | Q3 2024 | همان | همان | |
| Intel | ~0% | Q3 2024 | همان | همان | |

**سال تقویمی 2025 (ارسال سالانه AIB، نه فصل):** JPR از طریق [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidia-dominates-discrete-gpu-market-as-sales-of-amd-radeon-graphics-cards-hit-historical-low) — ~44.28M AIB در 2025؛ سهم Q4 2025 گزارش‌شده NVIDIA ~94%, AMD ~5% `[رسانه]` نقل JPR — **≠ Q3 2025**.

---

## جدول B: سهم بازار GPUهای لپ‌تاپ (Discrete)

| شرکت | سهم بازار | دوره زمانی | روش اندازه‌گیری | منبع | توضیحات |
|--------|-----------|------------|-----------------|------|---------|
| — | **داده عمومی معتبر در دسترس نیست** (تفکیک vendor) | — | واحد/درآمد dGPU موبایل PC | IDC [Worldwide PC and Workstation Discrete GPU, 2Q25](https://my.idc.com/getdoc.jsp?containerId=US53919025) `[تحقیقاتی]` پولی | JPR Market Watch شامل notebook dGPU در اشتراک؛ پست‌های عمومی JPR سهم vendor لپ‌تاپ dGPU را جدا منتشر نمی‌کنند |

**داده مرتبط ولی غیرهم‌تراز:** رشد **notebook GPU** (کل، بدون سهم vendor) در Q3 2025 +1.4% YoY — [JPR Q3'25 PC GPU](https://www.jonpeddie.com/news/q325-pc-gpu-shipments-increased-by-2-5-from-last-quarter-which-might-suggest-a-creep-forward/) — روش: **واحد کل GPU نوت‌بوک** (iGPU+dGPU).

---

## جدول C: سهم بازار GPUهای دیتاسنتر

| شرکت | سهم بازار | دوره زمانی | روش اندازه‌گیری | منبع | توضیحات |
|--------|-----------|------------|-----------------|------|---------|
| NVIDIA | **>90%** | Q4 2024 | سهم **واحد ارسال** در سرورهای دارای **GPU تعبیه‌شده** | [IDC Server Tracker PR](https://my.idc.com/getdoc.jsp?containerId=prUS53264225) (2025-03-18) | شامل discrete GPU روی سرور؛ تعریف IDC در PR |
| AMD | **داده عمومی معتبر در دسترس نیست** (درصد دقیق واحد) | — | — | IDC pivot پولی [US53381925](https://my.idc.com/getdoc.jsp?containerId=US53381925) | |
| Intel | **داده عمومی معتبر در دسترس نیست** (درصد دقیق واحد) | — | — | همان | |

**درآمد (≠ سهم واحد):** NVIDIA Data Center **$35.6B** در Q4 FY2025 — [NVIDIA IR](https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2025/default.aspx) `[رسمی]`. سهم درآمد AMD/Intel از کل بازار GPU دیتاسنتر در گزارش عمومی یکپارچه **در دسترس نیست**؛ AMD فقط Instinct revenue در earnings (جزئی).

---

## جدول D: سهم بازار شتاب‌دهنده‌های هوش مصنوعی (GPU + رقبای مستقیم)

تعریف عملی این جدول: **پردازش شتاب‌یافته در دیتاسنتر برای AI training/inference** — شامل GPU merchant (NVIDIA, AMD, Intel) و **AI ASIC/ASSP** (TPU, Trainium, Inferentia, …) در گزارش‌های IDC؛ **داده vendor عمومی یکپارچه محدود است**.

| شرکت / دسته | سهم بازار | دوره | روش | منبع | توضیحات |
|-------------|-----------|------|-----|------|---------|
| NVIDIA (GPU DC) | ~86% (درآمد ترکیبی Intel+AMD+NVIDIA DC) | 2025 Q3 | **درآمد** سهم سه‌تایی (تحلیل ثانویه) | [Visual Capitalist](https://www.visualcapitalist.com/charted-the-battle-for-ai-data-center-revenue-2021-2025/) `[تحلیلی]` | **≠** سهم IDC GPU unit؛ **≠** کل AI silicon شامل Google/AWS ASIC |
| AMD | ~7% | 2025 Q3 | همان | همان | |
| Intel | ~7% | 2025 Q3 | همان | همان | شامل Xeon + GPU/GAUDI در مدل نمودار — methodology مبهم |
| GPU server (NVIDIA) | >90% | Q4 2024 | **واحد** GPU در سرور | IDC PR (جدول C) | فقط بخش GPU سرور |
| TPU / Trainium / سایر ASIC | **داده عمومی معتبر در دسترس نیست** (سهم جهانی واحد/درآمد یکپارچه) | — | — | [IDC Datacenter Processing 3Q25](https://my.idc.com/getdoc.jsp?containerId=US54009725) پولی | افشای جزئی per-cloud |

---

## جدول E: سهم بازار GPUهای موبایل

GPU موبایل عمدتاً **داخل SoC** است (Adreno، Mali/Immortalis، Apple GPU، Xclipse). سهم **IP GPU** جداگانه به‌ندرت عمومی است؛ جایگزین معتبر: **سهم AP/SoC**.

| شرکت (SoC / GPU IP) | سهم بازار | دوره | روش | منبع | توضیحات |
|---------------------|-----------|------|-----|------|---------|
| MediaTek (Mali/Immortalis در Dimensity) | 34.4% | سال 2025 | **واحد ارسال SoC** گوشی | Counterpoint via [Sina 2026-01-28](https://finance.sina.com.cn/roll/2026-01-30/doc-inhkazcc3494294.shtml) | **≠ GPU-only** |
| Qualcomm (Adreno) | 25.1% | 2025 | همان | همان | |
| Apple (GPU اختصاصی) | 18.1% | 2025 | همان | همان | |
| UNISOC | 12.1% | 2025 | همان | همان | |
| Samsung (Exynos + Xclipse) | 5.7% | 2025 | همان | همان | |
| MediaTek | 31% | Q4 2025 | واحد SoC فصلی | [Counterpoint quarterly table](https://counterpointresearch.com/en/insights/global-smartphone-apsoc-market-share-quarterly) | **دوره ≠ سال 2025 بالا** |

---

## جدول F: سهم بازار GPUهای مجتمع (iGPU / کل GPU PC)

| شرکت | سهم بازار | دوره | روش | منبع | توضیحات |
|--------|-----------|------|-----|------|---------|
| Intel | ~61% | Q3 2025 | سهم **واحد** از **همه GPUهای PC** (iGPU+dGPU+eGPU) | [JPR Q3'25](https://www.jonpeddie.com/news/q325-pc-gpu-shipments-increased-by-2-5-from-last-quarter-which-might-suggest-a-creep-forward/) + [PCWorld/JPR](https://www.pcworld.com/article/2996364/intel-storms-back-to-power-1-percent-of-pc-graphics-cards.html) | Intel از حجم CPU با iGPU — **≠ iGPU-only market** |
| NVIDIA | ~24% | Q3 2025 | همان | همان | شامل dGPU + برخی iGPU (Tegra/قدیم) در تعریف JPR PC GPU |
| AMD | ~15% | Q3 2025 | همان | همان | شامل iGPU Ryzen/APU + dGPU |

**سهم iGPU خالص (فقط integrated، بدون dGPU):** **داده عمومی معتبر در دسترس نیست** در پست‌های JPR رایگان.

---

## جدول G: سهم بازار GPUهای ورک‌استیشن

| شرکت | سهم بازار | دوره | روش | منبع | توضیحات |
|--------|-----------|------------|-----------------|------|---------|
| — | **داده عمومی معتبر در دسترس نیست** (vendor %) | — | واحد/درآمد workstation dGPU | IDC [US53919025](https://my.idc.com/getdoc.jsp?containerId=US53919025) | بخش «Workstation GPU» در pivot پولی |
| NVIDIA | — (فقط درآمد مطلق) | FY2025 | **درآمد** Professional Visualization | [NVIDIA CFO Q4 FY25](https://s201.q4cdn.com/141608511/files/doc_financials/2025/Q425/Q4FY25-CFO-Commentary.pdf) | $2.0B+ FY25 Pro Viz — **≠ سهم بازار** |

---

## اختلاف منابع (خلاصه)

| موضوع | توضیح |
|--------|--------|
| JPR AIB vs کل GPU | 92% NVIDIA فقط **کارت دسکتاپ**؛ 24% NVIDIA **کل GPU PC** |
| IDC >90% vs Visual Capitalist 86% | اولی **واحد GPU سرور Q4 2024**؛ دومی **درآمد سه‌شرکتی DC** 2025 — دوره و تعریف متفاوت |
| Counterpoint سال vs فصل | 34.4% (2025) vs 31% MediaTek Q4 2025 — همزمان استفاده نشود |

---

## مرجع نصب (غیر ارسال): Steam Hardware Survey

برای **پایگاه نصب فعال گیمینگ PC** (نه shipment): [Steam HW Survey](https://store.steampowered.com/hwsurvey/videocard/) — برچسب `[نصب]`. در جداول A–G **استفاده نشده**.
