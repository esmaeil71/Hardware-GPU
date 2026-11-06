# بخش اول: خلاصه اجرایی

**تاریخ آخرین به‌روزرسانی داده‌ها:** ۶ آبان ۱۴۰۵ (۶ نوامبر ۲۰۲۶، UTC+3:30)  
**پوشش منابع:** تا JPR Q3 2025 (منتشر ۲۰۲۵-۱۲-۰۱)، IDC Server Q4 2024 PR (۲۰۲۵-۰۳-۱۸)، NVIDIA Q4 FY2025 (۲۰۲۵-۰۲)، Counterpoint SoC 2025

---

## ۱۰–۱۵ یافته کلیدی

1. **دسکتاپ discrete (AIB):** در Q3 2025 سهم **واحد ارسال** تقریباً **NVIDIA 92%، AMD 7%، Intel 1%** — منبع Jon Peddie Research (2025-12-01). Intel برای نخستین بار در سال‌ها به **~1%** رسید.

2. **تفاوت حیاتی متریک:** Intel **~61%** از **همه GPUهای PC** (Q3 2025) را دارد — این **iGPU روی CPU** است، نه کارت گرافیک. NVIDIA **~24%** در همان تعریف کل GPU PC.

3. **دیتاسنتر GPU (واحد سرور):** IDC گزارش کرد NVIDIA در Q4 2024 **بیش از 90%** ارسال GPU در سرورهای دارای GPU تعبیه‌شده را دارد — **≠** سهم درآمد gaming.

4. **درآمد NVIDIA Data Center:** فقط NVIDIA — **$35.6 میلیارد** در Q4 FY2025 و **$115.2 میلیارد** در FY2025 — `[رسمی]`؛ سهم درصدی AMD/Intel از این درآمد جهانی در گزارش عمومی یکپارچه **موجود نیست**.

5. **AMD Instinct:** MI350X با **288GB HBM3e** و **8 TB/s** (AMD specs 2025) رقابت حافظه‌محور با Blackwell B200 class.

6. **Intel Arc B580:** Xe2، **12GB**، **190W**، MSRP **$249** — positioning ارزش 1440p؛ سهم AIB همچنان **~1%**.

7. **GeForce RTX 5090:** Blackwell، **32GB GDDR7**، **575W TGP**، از **$1999** — `[NVIDIA official]`.

8. **موبایل:** سهم **SoC** (نه GPU جدا) — Counterpoint: MediaTek **~34.4%**، Qualcomm **~25.1%**، Apple **~18.1%** (2025).

9. **ASIC ابری** (TPU, Trainium, …): رقیب GPU در AI — **سهم جهانی واحد عمومی** در این گزارش **در دسترس نیست** (IDC pivot پولی).

10. **زنجیره تأمین:** CoWoS/HBM محدودیت عرضه در 2024–2025 در گزارش‌های JPR/NVIDIA CFO ذکر شده.

11. **سال 2025 AIB:** ~**44.28M** واحد (Tom's نقل JPR) — رشد نسبت به 2024؛ AMD سهم پایان سال **~5%** در Q4 (دوره جدا از Q3).

12. **نرم‌افزار:** CUDA همچنان مزیت غالب AI؛ ROCm/oneAPI برای کاهش lock-in در حال بهبود.

13. **Steam HW Survey:** پایگاه **نصب** گیمینگ — برای shipment استفاده **نشد**.

14. **Mercury Research:** عدد مستقیم در منابع عمومی جمع‌آوری‌شده **یافت نشد**.

15. **گزارش کامل:** ۱۳ بخش + JSON/CSV در [`report/README.md`](README.md).

---

## بزرگ‌ترین شرکت‌ها (by available metric)

| بعد | پیشرو |
|-----|--------|
| **واحد AIB دسکتاپ** | NVIDIA (~92%) |
| **واحد کل GPU PC** | Intel (~61%) |
| **واحد GPU سرور (IDC)** | NVIDIA (>90%) |
| **درآمد DC GPU (vendor)** | NVIDIA ($115.2B FY25 DC) |
| **SoC موبایل** | MediaTek (~34.4% 2025) |

---

## پیشروی به تفکیک بازار

| بازار | پیشرو |
|--------|--------|
| دسکتاپ gaming discrete | NVIDIA |
| لپ‌تاپ dGPU (vendor %) | **داده عمومی معتبر در دسترس نیست** |
| AI training cluster | NVIDIA (ecosystem + shipment) |
| iGPU volume via CPU | Intel |
| APU gaming-value | AMD (integrated) |
| Premium mobile SoC GPU | Apple / Qualcomm flagship |
| Mobile SoC volume | MediaTek |
| Workstation dGPU share | **داده عمومی معتبر در دسترس نیست** |
| Automotive compute | NVIDIA Drive (revenue/ design wins PR) |

---

## NVIDIA vs AMD vs Intel

- **NVIDIA:** تسلط **AIB** و **server GPU**؛ اکوسystem CUDA؛ Blackwell ramp؛ gaming supply intermittently constrained.  
- **AMD:** **دوم در DC** با Instinct؛ **RDNA 4** retail؛ **~7% AIB** — رشد نسبت به پایین‌ترین نقاط 2025 ولی far from NVIDIA.  
- **Intel:** **رهبر واحد GPU از مسیر iGPU**؛ **Arc ~1% AIB**؛ Gaudi/oneAPI برای AI enterprise.

---

## روند کلی

- **AI:** سخت‌افزار به سمت **HBM زیاد، توان بالا، chiplet، networking scale-out/scale-up**.  
- **Gaming:** **RT + frame generation + upscaling** standard؛ flagship **power/up** (5090 575W).  
- **موبایل:** **GenAI SoC** و NPU — GPU part of heterogeneous compute.  
- **رقابت:** ASICs در cloud برای inference/training ثابت **فشار** روی merchant GPU **در سگمنت hyperscaler** — سهم دقیق **نامشخص عمومی**.

---

ادامه: [02-companies.md](02-companies.md) | [03-market-share.md](03-market-share.md) | [limitations.md](limitations.md)
