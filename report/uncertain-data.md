# فهرست داده‌های نامطمئن یا ناقص

**تاریخ:** ۶ نوامبر ۲۰۲۶

---

## متناقض یا نیازمند تفکیک

| موضوع | توضیح |
|--------|--------|
| **B200 memory size** | NVIDIA HGX RA lists **180GB** HBM3e per GPU; برخی Grace Blackwell configs **192GB** cited (TACC/Cornell) — **پیکربندی-dependent** |
| **Visual Capitalist vs IDC** | 86% revenue share (2025 Q3) vs >90% **unit** shipment (Q4 2024) — متریک و دوره متفاوت |
| **Wccftech vs JPR Q3'25 total GPU share** | مقادیر Intel/NVIDIA/AMD total GPU باید فقط از **JPR Market Watch chart** بیاید؛ رسانه ممکن است گرد کند |
| **Calendar 2025 AIB Q4 share** | Tom's reports AMD **5%** Q4 2025 — **≠** Q3 2025 (7%) |

---

## داده عمومی موجود نیست

- Mercury Research discrete GPU percentages (direct)  
- IDC laptop dGPU vendor % (units/revenue)  
- IDC workstation dGPU vendor %  
- IDC global AI accelerator unit share (GPU vs ASIC) — public aggregate  
- Mobile **GPU IP** market share (جدا از SoC)  
- Automotive GPU global unit share  
- Moore Threads / Cambricon global merchant share  
- Retail **current** GPU prices (unified index)  
- MLPerf unified cross-vendor score in this report (requires per-submission pick)

---

## تخمینی / partial در catalog JSON

- AMD RX 9070 XT — `data_status: partial`  
- Several mobile SKUs — peak TFLOPS not in public ARK  
- `current_price_usd: null` for all models — MSRP only where cited

---

## منابع پولی (عدم دسترسی)

- JPR Market Watch full pivot  
- IDC US53919025, US53381925, US54009725, US54445526

---

## پیشنهاد به‌روزرسانی

1. Replace Visual Capitalist revenue table with IDC subscription data if available.  
2. Add Mercury quote when published via Tom's Hardware with explicit attribution.  
3. Refresh AIB after JPR Q4 2025 press (expected ~Dec 2026).
