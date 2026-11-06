# گزارش جامع بازار GPU و شتاب‌دهنده‌های محاسباتی

**تاریخ به‌روزرسانی گزارش:** ۶ آبان ۱۴۰۵ (۶ نوامبر ۲۰۲۶، UTC+3:30)  
**مخزن:** `/home/esah/Project/Hardware`

---

## فهرست بخش‌ها

| # | فایل | موضوع |
|---|------|--------|
| 0 | [data-availability.md](data-availability.md) | نقشه دسترس‌پذیری داده |
| 0b | [research-notes.md](research-notes.md) | یادداشت تحقیق (داخلی) |
| 1 | [01-executive-summary.md](01-executive-summary.md) | خلاصه اجرایی |
| 2 | [02-companies.md](02-companies.md) | معرفی شرکت‌ها |
| 3 | [03-market-share.md](03-market-share.md) | جداول A–G سهم بازار |
| 4 | [04-gpu-catalog.md](04-gpu-catalog.md) | فهرست مدل‌های کلیدی |
| 5 | [05-architectures.md](05-architectures.md) | مقایسه معماری |
| 6 | [06-performance.md](06-performance.md) | مقایسه عملکرد |
| 7 | [07-software-ecosystem.md](07-software-ecosystem.md) | اکوسیستم نرم‌افزار |
| 8 | [08-datacenter-ai.md](08-datacenter-ai.md) | AI و دیتاسنتر |
| 9 | [09-supply-chain.md](09-supply-chain.md) | زنجیره تأمین |
| 10 | [10-summary-table.md](10-summary-table.md) | جدول جمع‌بندی |
| 11 | [11-recommendations-by-use-case.md](11-recommendations-by-use-case.md) | پیشنهاد کاربرد |
| 12 | [12-future-trends.md](12-future-trends.md) | روند آینده |
| 13 | [13-infographic.md](13-infographic.md) | متن اینفوگرافیک + پرامپت تصویر |
| — | [sources.md](sources.md) | منابع با لینک |
| — | [uncertain-data.md](uncertain-data.md) | داده ناقص/متناقض |
| — | [limitations.md](limitations.md) | محدودیت‌های گزارش |

---

## داده ساخت‌یافته

- [../data/gpu-models.json](../data/gpu-models.json) — شامل بازیگران اصلی دیتاسنتر/AI (`segment: "datacenter_ai"`) به‌اضافهٔ دسکتاپ، لپ‌تاپ و …؛ فهرست «هر SKU جهانی» عملاً نامحدود است — نگاه کنید به `catalog_note` در انتهای JSON  
- [../data/gpu-models.csv](../data/gpu-models.csv)

## داشبورد تعاملی

- **[dashboard/README.md](../dashboard/README.md)** — `npm install && npm run dev` در پوشه `dashboard`
- فیلتر، سهم بازار، مقایسه ۳تایی، CSV، ذخیره فیلتر در localStorage
- **دریافت آنلاین:** `/data/gpu-models.json` و `/data/market-share.json`؛ کش آخرین نسخه در `localStorage` برای کار آفلاین

---

## قواعد اعتبارسنجی (خلاصه)

- هر آمار مهم: **منبع + تاریخ + روش اندازه‌گیری**  
- عدم ترکیب AIB با کل GPU PC یا gaming با DC  
- نبود داده: **«داده عمومی معتبر در دسترس نیست»**
