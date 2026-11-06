# داشبورد تعاملی بازار GPU

داشبورد وب **RTL فارسی** برای گزارش Hardware: سهم بازار، کاتالوگ مدل‌ها، فیلتر، مقایسه و خروجی CSV.

## اجرا

```bash
cd /home/esah/Project/Hardware/dashboard
npm install
npm run dev
```

مرورگر: **http://localhost:5173** (پورت پیش‌فرض Vite)

## build برای استقرار

```bash
npm run build
npm run preview
```

خروجی در `dashboard/dist/`.

## قابلیت‌ها

| بخش | توضیح |
|-----|--------|
| **نمای کلی** | KPIها؛ نمودار AIB؛ پرش به بخش‌ها با کلیک |
| **سهم بازار** | انتخاب dataset (جدول A–G)؛ نمودار میله‌ای؛ کلیک شرکت → فیلتر کاتالوگ |
| **کاتالوگ** | جستجو، فیلتر شرکت/بازار/سال، RT/AI/official، مرتب‌سازی، جزئیات ردیف |
| **مقایسه** | تا ۳ مدل در جدول مشخصات |
| **منابع** | لینک JPR/IDC/NVIDIA و مسیر گزارش Markdown |

فیلترها و تب فعال در **localStorage** ذخیره می‌شوند.

## دریافت آنلاین و نمایش آفلاین (کش محلی)

در بار اول، اپ این فایل‌ها را با `fetch` می‌گیرد:

| فایل | مسیر HTTP |
|------|-----------|
| کاتالوگ GPU | `/data/gpu-models.json` |
| سهم بازار و KPI | `/data/market-share.json` |

- آخرین نسخهٔ موفق در **localStorage** ذخیره می‌شود (`gpu-dashboard-cache-*`).
- اگر شبکه نبود یا سرور خطا داد، از **کش** و در نهایت از **دادهٔ داخل بسته** (import در build) استفاده می‌شود.
- دکمه **«بروزرسانی»** در نوار بالا دریافت مجدد را انجام می‌دهد.
- در نوار کنار، منبع نمایش داده می‌شود: **آنلاین** / **کش محلی** / **پیش‌فرض بسته**.

برای میزبانی JSON روی دامنهٔ دیگر، در `.env` (از روی [`.env.example`](.env.example)):

```bash
VITE_DATA_BASE_URL=https://example.com/path/to/public
```

## داده

- مدل‌ها: [`src/data/gpu-models.json`](src/data/gpu-models.json) و کپی استاتیک برای fetch: [`public/data/gpu-models.json`](public/data/gpu-models.json)
- بازار: [`src/data/market-share.json`](src/data/market-share.json) و [`public/data/market-share.json`](public/data/market-share.json)
- TypeScript re-export: [`src/data/marketShare.ts`](src/data/marketShare.ts)

پس از به‌روزرسانی از گزارش اصلی:

```bash
cp ../data/gpu-models.json src/data/gpu-models.json
cp src/data/gpu-models.json public/data/gpu-models.json
# ویرایش market-share.json در src و public (یا یک فایل منبع و دو کپی)
```

### کاتالوگ شتاب‌دهندهٔ AI (دیتاسنتر)

فایل `gpu-models.json` شامل **خانواده‌های اصلی** کارت/شتاب‌دهندهٔ مورد استفاده برای آموزش و inference است (NVIDIA Tensor Core، AMD Instinct، Intel Gaudi و Max و …). بخش‌های با `segment: "datacenter_ai"` را در داشبورد فیلتر کنید.

**واقع‌گرایی:** فهرست «هر SKU و هر ناحیهٔ جغرافیایی و هر OEM از ابتدای تاریخ» عملاً بی‌پایان است؛ ردیف‌های بدون datasheet واحد با `data_status: "partial"` و فیلدهای `null` علامت‌گذاری شده‌اند. برای تکمیل، فیلد `catalog_note` در همان JSON را ببینید.

## Canvas (Cursor)

نسخه کنار چت در Cursor: [`gpu-market-dashboard.canvas.tsx`](/home/esah/.cursor/projects/home-esah-Project-Hardware/canvases/gpu-market-dashboard.canvas.tsx)
