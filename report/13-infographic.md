# بخش سیزدهم: اینفوگرافیک

**تاریخ داده‌های درج‌شده:** تا Q3 2025 (JPR AIB / PC GPU) و Q4 FY2025 (NVIDIA DC revenue) — جزئیات در [`sources.md`](sources.md)

---

## مشخصات طراحی

| مورد | مقدار |
|------|--------|
| زبان | فارسی |
| جهت | راست‌به‌چپ (RTL) |
| ابعاد | عمودی A4 (210×297 mm) + نسخه 1080×1920 px شبکه اجتماعی |
| وضوح | 300 DPI چاپ (2480×3508 px A4) |
| پس‌زمینه | روشن (#F8F9FA) |
| رنگ برند | NVIDIA #76B900، AMD #ED1C24، Intel #0071C5، Apple #1D1D1F، Qualcomm #3253DC، MediaTek #EC943C |

---

## پنل ۱ — عنوان

**نقشه جامع بازار GPU و شتاب‌دهنده‌های محاسباتی**  
زیرعنوان: دسکتاپ • دیتاسنتر • موبایل • روند ۲۰۲۴–۲۰۲۶  
تاریخ داده: آبان ۱۴۰۵ | منابع: JPR، IDC، NVIDIA IR، Counterpoint

---

## پنل ۲ — مقایسه شرکت‌های اصلی (آیکون + یک خط)

| شرکت | پیام کلیدی |
|--------|------------|
| NVIDIA | پیشتاز AI و کارت دسکتاپ |
| AMD | Instinct حافظه‌بالا + RDNA 4 |
| Intel | iGPU حجم بالا + Arc ارزش‌محور |
| Apple / Qualcomm / MediaTek | SoC موبایل |

---

## پنل ۳ — سهم بازار (میله‌ای — فقط AIB Q3 2025)

**عنوان:** دسکتاپ discrete — واحد ارسال AIB  
- NVIDIA: **92%**  
- AMD: **7%**  
- Intel: **1%**  
منبع: Jon Peddie Research، ۲۰۲۵-۱۲-۰۱

**جداگانه (متن کوچک):** کل GPU PC Q3 2025 — Intel 61% / NVIDIA 24% / AMD 15% (واحد، شامل iGPU)

---

## پنل ۴ — خط زمانی معماری (افقی)

```
2019 Ampere → 2022 Ada/Hopper → 2024 RDNA3/CDNA3/Xe2 → 2025 Blackwell/RDNA4/MI350
```

برچسب‌ها: GeForce، Instinct، Arc Battlemage

---

## پنل ۵ — خانواده محصول

- **NVIDIA:** RTX 50 | B200/H200 | DRIVE  
- **AMD:** RX 9000 | MI350X/MI325X  
- **Intel:** Arc B | Gaudi 3 | Core Ultra Xe  

---

## پنل ۶ — گیمینگ vs حرفه‌ای vs دیتاسنتر

| لایه | نماد | مثال |
|------|------|------|
| گیمینگ | دسته | RTX 5090 |
| ورک‌استیشن | مانیتور | RTX Ada |
| دیتاسنتر | رک | HGX B200 |

---

## پنل ۷ — حافظه • توان • عملکرد (جدول فشرده)

| محصول | حافظه | TGP/TBP | نکته |
|--------|--------|---------|------|
| RTX 5090 | 32GB GDDR7 | 575W | 1792 GB/s |
| Arc B580 | 12GB GDDR6 | 190W | ارزش 1440p |
| MI350X | 288GB HBM3e | 1000W | 8 TB/s |

---

## پنل ۸ — اکوسیستم نرم‌افزار

میله cualitative: CUDA (بلند) | ROCm (متوسط) | oneAPI (متوسط) | Metal (Apple)

---

## پنل ۹ — کاربرد مناسب

- **AI training:** NVIDIA / AMD Instinct  
- **بازی ارزان:** Intel Arc B580  
- **موبایل:** MediaTek / Qualcomm SoC  
- **Mac:** Apple Silicon  

---

## پنل ۱۰ — روندهای آینده

- HBM و chiplet  
- NPU+GPU  
- ASIC ابری  
- DLSS/XeSS/FSR  

---

## پنل ۱۱ — منابع (پاورقی)

JPR Dec 2025 | IDC Mar 2025 | NVIDIA Feb 2025 earnings | Counterpoint 2025 SoC  
«تخمینی» روی نمودار استفاده نشده.

---

## پرامپت انگلیسی برای تولید تصویر

```
Create a professional vertical infographic poster, A4 aspect ratio (210:297), 300 DPI equivalent, light background #F8F9FA, modern tech style, clean grid layout, RTL Persian (Farsi) typography for all headings and labels — text must read right-to-left.

Title (large, Farsi): «نقشه جامع بازار GPU و شتاب‌دهنده‌های محاسباتی»
Subtitle (Farsi): «داده‌ها: JPR Q3 2025، IDC Q4 2024، NVIDIA FY25»

Brand accent colors (use as bar/chart colors only, NO official logos): NVIDIA green #76B900, AMD red #ED1C24, Intel blue #0071C5, Apple dark gray #1D1D1F, Qualcomm blue #3253DC, MediaTek orange #EC943C.

Panel 1: Horizontal bar chart labeled in Farsi «سهم بازار کارت دسکتاپ (AIB) — واحد ارسال Q3 2025» with three bars: NVIDIA 92%, AMD 7%, Intel 1%. Small disclaimer in Farsi: «منبع: Jon Peddie Research».

Panel 2: Separate small note box in Farsi explaining total PC GPU share is different: Intel 61%, NVIDIA 24%, AMD 15% — do not merge with first chart.

Panel 3: Timeline left-to-right visually but Farsi labels: Ampere, Ada, Hopper, RDNA4, Blackwell, CDNA4, Xe2 Battlemage.

Panel 4: Three columns with icons (gamepad, workstation monitor, server rack) and Farsi captions: GeForce RTX 5090, RTX Ada, HGX B200.

Panel 5: Compact comparison table in Farsi: memory and power for RTX 5090 (32GB GDDR7, 575W), Arc B580 (12GB, 190W), MI350X (288GB HBM3e, 1000W).

Panel 6: Software ecosystem horizontal bars (CUDA, ROCm, oneAPI, Metal) — qualitative lengths only.

Panel 7: Future trends bullet icons in Farsi: HBM, chiplet, NPU, cloud ASIC, AI upscaling.

Footer in Farsi with source line and date «آبان ۱۴۰۵ / ۶ نوامبر ۲۰۲۶».

No fabricated statistics beyond those listed. No trademark logos; generic geometric icons only. High readability, ample whitespace, no cluttered micro-table. Suitable for print and social crop.
```
