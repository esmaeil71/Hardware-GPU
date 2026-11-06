# بخش چهارم: فهرست مدل‌های GPU (نسل جاری و پرچمدار)

**دامنه:** محصولات ~۲۰۲۴–۲۰۲۶؛ جزئیات کامل در [`../data/gpu-models.json`](../data/gpu-models.json).

**تاریخ گزارش:** ۶ نوامبر ۲۰۲۶

---

## ۱. GPUهای مصرفی دسکتاپ

### NVIDIA GeForce RTX 5090
| فیلد | مقدار |
|------|--------|
| معماری | Blackwell GB202 |
| سال | 2025 |
| هسته | 21760 CUDA؛ Tensor 5th؛ RT 4th |
| کلاک | Base 2.01 / Boost 2.41 GHz |
| حافظه | 32GB GDDR7، 512-bit، 1792 GB/s |
| TGP | 575W |
| AI | 3352 AI TOPS (INT8, NVIDIA spec) |
| RT / AI | بله |
| نرم‌افزار | CUDA 12, DX12 Ultimate, Vulkan 1.4 |
| MSRP عرضه | $1999 |
| رقیب | RX 9070 XT (class) |
| منبع | [NVIDIA RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) |

### Intel Arc B580
| فیلد | مقدار |
|------|--------|
| معماری | Xe2 Battlemage |
| سال | Q4 2024 |
| هسته | 20 Xe-core، 20 RT، 160 XMX |
| کلاک | 2670 MHz |
| حافظه | 12GB GDDR6، 192-bit، 456 GB/s |
| TBP | 190W |
| AI | 233 TOPS INT8 |
| MSRP | $249 |
| رقیب | RTX 4060 class |
| منبع | [Intel ARK B580](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) |

### AMD Radeon RX 9070 XT
| فیلد | مقدار |
|------|--------|
| معماری | RDNA 4 |
| سال | 2025 |
| کاربرد | 1440p–4K gaming |
| حافظه | 16GB GDDR6 (typical) |
| RT / AI | FSR 4، RT |
| محدودیت | مشخصات رسمی کامل در JSON `partial` — مراجعه AMD product page |
| منبع | amd.com RX 9000 series |

---

## ۲. GPUهای لپ‌تاپ

- **GeForce RTX 50 Mobile** — Blackwell، TGP متغیر OEM — [NVIDIA laptops 50-series](https://www.nvidia.com/en-us/geforce/laptops/50-series/)
- **Radeon RX 7000/9000 Mobile** — **داده عمومی معتبر یکپارچه TGP/کلاک در این گزارش تکمیل نشده** (OEM-specific)

---

## ۳–۴. دیتاسنتر و شتاب‌دهندهٔ AI

فهرست **کامل و به‌روزشونده** در [`../data/gpu-models.json`](../data/gpu-models.json) است؛ در JSON روی مدل‌هایی با `"segment": "datacenter_ai"` (و در صورت نیاز `"automotive_embedded"` برای edge) فیلتر کنید. چند نمونهٔ پرکاربرد:

| مدل | معماری | حافظه | BW (تقریبی) | یادداشت |
|-----|--------|-------|-------------|---------|
| NVIDIA B300 / B200 SXM | Blackwell | تا 288 / 180 GB HBM3e | تا ~8 TB/s | آموزش و inference بسیار بزرگ |
| NVIDIA H200 / H100 SXM | Hopper | 141 / 80 GB | 4.8 / 3.35 TB/s | استاندارد بسیاری از خوشه‌ها |
| NVIDIA A100 / L40S / L4 | Ampere / Ada | HBM2e یا GDDR6 | — | آموزش، inference، ویدئو |
| AMD MI355X / MI350X / MI300X | CDNA4 / CDNA3 | تا 288 / 192 GB HBM | تا ~8 / 5.3 TB/s | رقابت با Blackwell/Hopper |
| AMD MI250X / MI210 | CDNA2 | 128 / 64 GB HBM2e | — | نسل قبلی |
| Intel Gaudi 3 / Gaudi 2 | Gaudi | 128 / 96 GB HBM2e | — | شتاب‌دهندهٔ AI اختصاصی |
| Intel Data Center GPU Max | Xe-HPC (Ponte Vecchio) | 128 GB HBM2e | — | HPC / AI |

برای هر SKU، فیلدهای بدون منبع واحد با `"data_status": "partial"` یا `null` مشخص شده‌اند؛ فیلد `"catalog_note"` در **انتهای** همان فایل JSON محدودیت فهرست را توضیح می‌دهد.

---

## ۵. ورک‌استیشن

- **NVIDIA RTX 5000 Ada** — 32GB ECC، CUDA، Pro drivers
- **AMD Radeon Pro W7900** — RDNA3، **داده FP32 رسمی در JSON partial**

### ورک‌استیشن / ابررایانهٔ شخصی AI (محلی)

- **NVIDIA DGX Spark** — پلتفرم دسکتاپ مبتنی بر **سوپرچیپ GB10 (Grace Blackwell)**؛ حافظهٔ یکپارچهٔ LPDDR5X (پیکربندی **۶۴ یا ۱۲۸ GB** بسته به SKU/OEM)، پهنای باند حافظهٔ اعلام‌شده توسط انویدیا ~۲۷۳ GB/s، شبکه ConnectX-7 — [صفحه محصول](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)، [راهنمای سخت‌افزار](https://docs.nvidia.com/dgx/dgx-spark/hardware.html). در JSON با `"segment": "ai_workstation"` و `"product_family": "DGX Spark"` قابل فیلتر است.

---

## ۶. موبایل (inside SoC)

| SoC | GPU IP | RT | AI |
|-----|--------|----|-----|
| Snapdragon 8 Elite | Adreno | Yes | Hexagon + Adreno |
| Dimensity 9400 | Immortalis-G925 | Yes | NPU + GPU |
| Apple A19 Pro | Apple GPU | Yes | Neural Engine |

*سهم بازار = SoC — جدول E در `03-market-share.md`*

---

## ۷. GPU مجتمع (iGPU)

- **Intel Core Ultra (Xe-LPG/Xe2)** — Lunar Arrow Lake lines
- **AMD Ryzen AI (RDNA 3.5 iGPU)**
- **Apple Silicon (M1–M4)** — GPU داخل SoC؛ در [`../data/gpu-models.json`](../data/gpu-models.json) چند سطح (M1، M1 Pro/Max، M1 Ultra، M2، M2 Pro/Max، M2 Ultra، M3 family، M4/M4 Pro، M4 Max) به‌صورت ردیف جدا ثبت شده‌اند.
- **MLX** — چارچوب ML اپل روی **Metal** (روی همان GPU مجتمع اجرا می‌شود)، نه یک «کارت گرافیک» جدا — [mlx](https://ml-explore.github.io/mlx/)

---

## ۸. خودرو و Embedded

- **NVIDIA DRIVE Thor / Orin** — Drive OS، CUDA
- **Imagination automotive RT GPU IP** — licensee-based
- **Qualcomm Snapdragon Ride** — ADAS

---

## یادداشت

فیلدهای `null` در JSON = **داده عمومی معتبر در دسترس نیست** یا OEM-variant.

برای **اتصال به مادربرد در مقابل لینک بین GPUها** در [`../data/gpu-models.json`](../data/gpu-models.json) ببینید: `host_interface` (مثلاً PCIe نسل و عرض، SXM، OAM، SoC)، `gpu_interconnect` (مثلاً NVLink، Infinity Fabric، Xe Link)، `max_gpu_domain` (تقریب تعداد GPU در یک **دامنهٔ لینک** در پیکربندی‌های رایج مثل سینی ۸‌تایی — دقیقاً بسته به مدل سرور متفاوت است)، و `interconnect_note` برای توضیح کوتاه. مقدار `—` در داشبورد یعنی ردیفِ مربوطه روی آن محصول اعمال نمی‌شود یا در منبع یکپارچه نیست.
