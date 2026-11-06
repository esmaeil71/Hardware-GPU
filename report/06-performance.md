# بخش ششم: مقایسه عملکرد

**تاریخ:** ۶ نوامبر ۲۰۲۶

> **قانون این بخش:** نتایج **بازی**، **AI**، و **HPC** جدا نگه داشته می‌شوند. **هیچ امتیاز واحد ترکیبی** وجود ندارد.

---

## ۱. بازی (Raster)

| سناریو | روش اندازه‌گیری | یادداشت |
|--------|------------------|---------|
| 1080p / 1440p / 4K | FPS در عناوین مشخص | وابسته به **CPU، درایور، preset** |
| RT 1080p | FPS با RT Ultra | often DLSS/FSR/XeSS on/off جداگانه |

**مثال قابل استناد (سخت‌افزار مشخص — نه rank کلی):**

| GPU | منبع | شرایط |
|-----|------|--------|
| RTX 5090 vs RTX 4090 | [NVIDIA Blackwell WP Table 1–3](https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf) | NVIDIA internal benchmarks — برچسب `[رسمی]` marketing |
| Arc B580 vs A750 | [Intel Newsroom B-Series](https://www.intel.com/content/www/us/en/newsroom/news/intel-launches-arc-b-series-graphics-cards.html) | ~24% avg 1440p vs A750 — `[رسمی]` |

**عملکرد تئوری vs واقعی:** spec TFLOPS/FLOPS peak ≠ FPS — bounded by memory, L2, drivers, API overhead.

---

## ۲. Ray Tracing

- RTX 5090: **318 TFLOPS RT** (NVIDIA product page) — **≠** in-game FPS
- Arc B580: 20 RT units Xe2
- RDNA 4: improved RT vs RDNA 3 — **داده عمومی benchmark واحد در این گزارش aggregating نشده**

---

## ۳. تولید محتوا و رندر ۳D

- **SPECviewperf 2020** — workstation; per-viewset scores vary
- **Blender Cycles** — OptiX (NVIDIA) vs HIP (AMD) vs oneAPI (Intel)
- **Adobe / DaVinci** — often CUDA/NVENC advantage on NVIDIA

**داده عمومی معتبر cross-vendor یک جدول 2026:** **در دسترس نیست** بدون انتخاب یک review با تاریخ ثابت.

---

## ۴. آموزش مدل AI (Training)

| بنچمارک | نسخه | کاربرد |
|---------|------|--------|
| **MLPerf Training** | mlcommons.org — version per submission | ResNet, BERT, LLM subsets |

**مقایسه رسمی:** MLPerf results per **system** (8×H100 vs 8×MI300X) — must cite submission date and config.

**Peak spec comparison (theoretical, not MLPerf merged):**

| Accelerator | FP8 peak (vendor) |
|-------------|-------------------|
| MI350X | 4.6 PFLOPS OCP-FP8 |
| MI325X | 2.61 PFLOPS FP8 |
| B200 | see NVIDIA DGX/HGX docs (PFLOPS inference 144 on DGX B200 datasheet — workload-specific) |

---

## ۵. Inference

- **MLPerf Inference** — separate from Training
- **LLM local:** limited by **VRAM/Unified memory** — RTX 5090 32GB vs MI325X 256GB (DC) — **different segments**

DeepSeek-era inference demand noted TrendForce / NVIDIA earnings — efficiency over raw TFLOPS.

---

## ۶. HPC

- **TOP500** — >75% systems NVIDIA-powered (NVIDIA Q4 FY25 PR claim)
- **FP64:** MI350X 72.1 TFLOPS FP64 vs gaming GPUs crippled FP64

---

## ۷. مصرف انرژی و عملکرد بر وات

| GPU class | TGP/TBP | یادداشت |
|-----------|---------|---------|
| RTX 5090 | 575W | FPS/W requires same game benchmark |
| Arc B580 | 190W | Intel claims 50% perf/w vs prior gen `[رسمی]` |
| MI350X | 1000W | AI perf/W via MLPerf or vendor efficiency claims |

---

## ۸. عملکرد بر قیمت

- Arc B580 **$249** MSRP — strong value metric at launch (Intel claim up to 32% perf/$ vs competition — `[رسمی]`)
- RTX 5090 **$1999** — flagship pricing

**قیمت فعلی retail:** **داده عمومی معتبر در دسترس نیست** (متغیر منطقه‌ای).

---

## عوامل distorter

1. **VRAM capacity** — 12GB vs 16GB at 4K textures  
2. **Bandwidth** — GDDR7 5090 vs GDDR6 B580  
3. **Driver version** — e.g. Game Ready 5xx.xx  
4. **Upscaler** — DLSS 4 vs XeSS 2 vs FSR 4  
5. **Model size (AI)** — 70B LLM needs quantization + memory  

---

## منابع پیشنهادی برای به‌روزرسانی

- TechPowerUp reviews (driver date in URL)
- AnandTech / Tom's Hardware GPU reviews
- mlcommons.org results
