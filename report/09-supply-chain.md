# بخش نهم: زنجیره تأمین

**تاریخ به‌روزرسانی:** ۶ نوامبر ۲۰۲۶ (UTC+3:30)

---

## ۱. لایه‌های زنجیره

```mermaid
flowchart TB
  design [Design_fabless_NVIDIA_AMD_Qualcomm_Apple]
  foundry [Foundry_TSMC_Samsung_Intel]
  mem [HBM_SK_hynix_Micron_Samsung]
  osat [Advanced_packaging_CoWoS_AMCOR]
  oem [OEM_Server_AIB_OEM]
  design --> foundry
  foundry --> osat
  mem --> osat
  osat --> oem
```

---

## ۲. طراحان تراشه GPU (merchant + IP)

| نوع | شرکت‌ها |
|-----|---------|
| Merchant dGPU/DC | NVIDIA, AMD, Intel |
| SoC integrated | Apple, Qualcomm, MediaTek, Samsung, HiSilicon |
| GPU IP | ARM (Mali/Immortalis), Imagination |

---

## ۳. Foundry و وابستگی

| Foundry | نقش در GPU |
|---------|------------|
| **TSMC** | NVIDIA (اصلی), AMD CPU/GPU, Apple, Qualcomm, MediaTek |
| **Samsung** | برخی Qualcomm; HBM و memory |
| **Intel Foundry** | Intel CPU/GPU internal; external customers در حال رشد IDM 2.0 |

**JPR Q4'24:** محدودیت عرضه NVIDIA بر رشد بازار GPU PC تأثیر گذاشت — [JPR Q4'24](https://www.jonpeddie.com/news/q424-pc-gpu-shipments-increased-by-4-4-from-last-quarter/).

---

## ۴. HBM و GDDR

| فناوری | کاربرد | تأمین‌کنندگان اصلی (صنعت) |
|--------|--------|---------------------------|
| **HBM3/HBM3e** | DC AI GPU | SK hynix, Micron, Samsung (public industry reports) |
| **GDDR6/X** | Gaming dGPU | Samsung, Micron, SK hynix |

**روند:** HBM capacity binding برای AI GPUs — افزایش die stacking, CoWoS-L — TrendForce/JPR commentary.

---

## ۵. CoWoS، Chiplet، بسته‌بندی ۳D

- **CoWoS (TSMC):** interposer برای HBM+GPU logic — bottleneck cited in industry press 2024–2025
- **Chiplet:** AMD MI300 (multiple XCD+IOD), Intel tile-based, NVIDIA multi-die Blackwell
- **OAM/UBB:** standard AMD Instinct platforms

---

## ۶. ریسک‌های زنجیره تأمین

| ریسک | توضیح factual |
|------|----------------|
| Single-foundry concentration | TSMC برای leading-edge NVIDIA/AMD/Apple |
| HBM oligopoly | محدود تعداد supplier qualified per GPU gen |
| Packaging capacity | CoWoS lead times |
| Export controls | US restrictions on advanced GPU exports to China — محصولات «China-specific» (e.g. historical RTX 4090D class) بدون تحلیل سیاسی |

---

## ۷. محدودیت‌های صادراتی (فقط factual)

- قوانین US BIS بر **compute performance thresholds** (TPP/TPP density) برای export به برخی مقصدها — OEM باید SKU regional تولید کند.
- Huawei/HiSilicon: محدودیت دسترسی به EUV leading foundry — **سهم جهانی GPU merchant تحت تأثیر minimal** ولی SoC domestic جداست.

---

## داده‌های ناموجود

- سهم دقیق **CoWoS capacity by customer**: **داده عمومی معتبر در دسترس نیست**
- قراردادهای long-term HBM $ by vendor: mostly **undisclosed**
