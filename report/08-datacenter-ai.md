# بخش هشتم: بازار هوش مصنوعی و دیتاسنتر

**تاریخ به‌روزرسانی:** ۶ نوامبر ۲۰۲۶ (UTC+3:30)

---

## ۱. وضعیت رقابت NVIDIA، AMD، Intel

| بعد | NVIDIA | AMD | Intel |
|-----|--------|-----|-------|
| **محصول DC GPU** | H100/H200/B200, GB200 Grace Blackwell | MI300X/MI325X/MI350X | Gaudi 3, Xe HPC (legacy Ponte Vecchio) |
| **سهم واحد GPU سرور** | **>90%** (Q4 2024, IDC) | داده عمومی % دقیق نیست | داده عمومی % دقیق نیست |
| **درآمد DC** | **$115.2B** FY2025 Data Center `[رسمی]` | Instinct در AMD earnings (جزئی) | Gaudi + Xeon (ترکیب در گزارش) |
| **نرم‌افزار** | CUDA, cuDNN, TensorRT, NIM | ROCm, MIOpen | oneAPI, OpenVINO, Gaudi software |
| **حافظه** | HBM3e تا 180–192GB per GPU (پیکربندی) | تا **288GB** MI350X | Gaudi 3 — 128GB HBM2e (spec Intel PR) |

**نقش GPU در training vs inference:**  
- **Training** مقیاس بزرگ: cluster GPU + NVLink/IB؛ NVIDIA Blackwell ramp ($11B Blackwell revenue Q4 FY25 alone — CFO commentary).  
- **Inference:** رشد پس از مدل‌های کارآمدتر (DeepSeek و مشابه — TrendForce note on inference demand)؛ batch size و KV cache → **حافظه و bandwidth** حیاتی.

---

## ۲. محصولات مهم (نسل جاری)

### NVIDIA
- **HGX B200 8-GPU:** 180GB HBM3e/GPU (جدول NVIDIA RA), تا 8TB/s bandwidth/GPU, NVLink 5 — [NVIDIA HGX RA](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html)
- **DGX B200:** 8× B200, 1.44TB aggregate GPU memory — [DGX datasheet](https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet)
- **GB200 NVL72:** rack-scale Grace+Blackwell (برای cloud CSP)

### AMD
- **MI325X:** 256GB HBM3e, 6TB/s, CDNA3 — [AMD](https://www.amd.com/en/products/accelerators/instinct/mi325x.html)
- **MI350X:** 288GB HBM3e, 8TB/s, CDNA4, 1000W TBP — [AMD](https://www.amd.com/en/products/accelerators/instinct/mi350/mi350x.html)

### Intel
- **Gaudi 3:** competitor training/inference — Intel PR 2024; سهم بازار عمومی واحد **در دسترس نیست**

---

## ۳. حافظه و پهنای باند

| پلتفرم | ظرفیت/GPU | Peak BW/GPU | نوع |
|--------|-----------|-------------|-----|
| H200 SXM | 141GB | 4.8TB/s | HBM3e |
| B200 SXM | 180GB (RA table) | تا 8TB/s | HBM3e |
| MI325X | 256GB | 6TB/s | HBM3e |
| MI350X | 288GB | 8TB/s | HBM3e |

---

## ۴. مقیاس‌پذیری و شبکه

- **NVIDIA:** NVLink 5 (1.8TB/s GPU-GPU در برخی configs), NVSwitch gen5, Spectrum-X Ethernet for AI, InfiniBand ConnectX — [HGX RA](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html)
- **AMD:** Infinity Fabric 38.4Gbps links (MI350), 8-link OAM — ROCm docs
- **Intel:** oneAPI + Ethernet/IB standard; بدون NVLink equivalent

---

## ۵. هزینه مالکیت (TCO)

**داده عمومی معتبر یکپارچه TCO $/token** در دسترس نیست. عوامل مستند:
- **CAPEX:** قیمت سرور GPU (OEM quotes عمومی نیست)
- **OPEX:** TBP 700W–1400W per accelerator class؛ liquid cooling در rack dense
- **نرم‌افزار:** NVIDIA AI Enterprise licensing vs open stack ROCm

---

## ۶. مصرف برق و خنک‌سازی

- MI350X TBP **1000W**; MI355X تا **1400W** (AMD specs)
- B200 configurable تا **~1kW/GPU** (HGX RA)
- روند: **DLC (Direct Liquid Cooling)** برای OCP racks

---

## ۷. دسترسی به تولید

- محدودیت **CoWoS** و **HBM** supply (TrendForce/JPR notes on supply constraints Q4'24)
- NVIDIA CFO: supply constrained gaming Q4 FY25 — [CFO PDF](https://s201.q4cdn.com/141608511/files/doc_financials/2025/Q425/Q4FY25-CFO-Commentary.pdf)

---

## ۸. مشتریان ابری

افشای رسمی NVIDIA Q4 FY25: **~50% Data Center revenue از large CSPs** — AWS, GCP, Azure, OCI, CoreWeave با GB200 deployments (PR NVIDIA).

---

## ۹. تهدید ASIC (TPU, Trainium, Inferentia, Maia)

| ارائه‌دهنده | محصول | وضعیت داده سهم |
|-------------|--------|----------------|
| Google | TPU v5/v6 | **سهم جهانی واحد عمومی نیست** — internal + cloud |
| AWS | Trainium2, Inferentia2 | AWS disclosure usage؛ نه % global AI silicon |
| Microsoft | Maia 100 | Azure internal |
| Broadcom/Marvell | Custom XPU (IDC coverage) | pivot پولی |

**تحلیل:** ASICها در **workload ثابت** (inference scale) TCO بهتر؛ GPU در **flexibility + ecosystem** پیشتاز. IDC track «GPU vs ASIC vs FPGA» — [IDC program](https://my.idc.com/getdoc.jsp?containerId=IDC_P47103).

---

## ۱۰. روند احتمالی (برچسب تحلیل — نه پیش‌بینی عددی)

| افق | روند |
|-----|------|
| **۱ سال** | ادامه ramp Blackwell/MI350؛ رقابت inference efficiency؛ HBM3e dominance |
| **۳ سال** | رشد ASIC سهم در hyperscaler؛ chiplet GPU؛ power per rack regulation |
| **۵ سال** | heterogeneous rack (CPU+GPU+NPU+ASIC); ممکن است «GPU share of AI spend» plateau — **بدون عدد** |

---

## منابع این بخش

- NVIDIA IR Q4 FY2025
- AMD Instinct product pages + ROCm docs
- IDC Server Tracker PR Mar 2025
- NVIDIA HGX Reference Architecture
