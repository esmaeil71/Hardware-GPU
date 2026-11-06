# بخش یازدهم: پیشنهاد بر اساس کاربرد

**تاریخ:** ۶ نوامبر ۲۰۲۶

---

## بازی اقتصادی

| | |
|--|--|
| **گزینه ۱** | Intel Arc B580 ($249 MSRP) |
| **گزینه ۲** | AMD RX 7600 / NVIDIA RTX 4060 (generation prior) |
| **دلیل** | Arc B580 specs/price from Intel ARK; strong 1440p value claim |
| **محدودیت** | Driver maturity edge cases; 12GB VRAM |
| **جایگزین بهتر** | اگر CUDA/NVENC خاص لازم است → RTX 4060 |

---

## بازی حرفه‌ای (4K RT)

| | |
|--|--|
| **۱** | NVIDIA RTX 5090 |
| **۲** | RTX 5080 / RX 9070 XT |
| **دلیل** | 5090: 32GB GDDR7, DLSS 4, top RT `[NVIDIA official]` |
| **محدودیت** | 575W, $1999, availability |
| **جایگزین** | بودجه محدود → 5080 class |

---

## لپ‌تاپ

| | |
|--|--|
| **۱** | NVIDIA RTX 50 Laptop (OEM with adequate TGP) |
| **۲** | AMD Ryzen AI + Radeon mobile |
| **دلیل** | OEM ecosystem, CUDA, DLSS |
| **محدودیت** | TGP undisclosed unified |
| **جایگزین** | MacBook M4 Max for battery + Metal |

---

## تولید ویدئو

| | |
|--|--|
| **۱** | NVIDIA GeForce/Studio (NVENC AV1) |
| **۲** | Intel Arc (AV1 encode) |
| **دلیل** | NVENC ecosystem in NLE |
| **محدودیت** | AMD encode improving but app-dependent |
| **جایگزین** | Apple Silicon برای Final Cut |

---

## رندر ۳D

| | |
|--|--|
| **۱** | NVIDIA RTX / RTX Ada Workstation (OptiX) |
| **۲** | AMD Radeon Pro (HIP/Blender) |
| **دلیل** | OptiX maturity |
| **محدودیت** | Pro driver cost |
| **جایگزین** | CPU+cloud render |

---

## آموزش مدل AI

| | |
|--|--|
| **۱** | NVIDIA HGX B200 / H100 cluster |
| **۲** | AMD MI350X / MI325X |
| **دلیل** | CUDA/NCCL default; IDC >90% server GPU units NVIDIA |
| **محدودیت** | Cost, power |
| **جایگزین** | Cloud TPU/Trainium if locked workload + hyperscaler |

---

## LLM محلی بزرگ

| | |
|--|--|
| **۱** | DC GPU 256GB+ (MI325X/MI350X) or multi-GPU NVIDIA |
| **۲** | RTX 5090 32GB (quantized smaller models) |
| **دلیل** | VRAM capacity binding |
| **محدودیت** | 32GB insufficient for 70B fp16 |
| **جایگزین** | Cloud API |

---

## سرور inference

| | |
|--|--|
| **۱** | NVIDIA L40S/H200/B200 (workload dependent) |
| **۲** | AMD MI350X |
| **دلیل** | TensorRT, Triton maturity |
| **محدودیت** | ASIC may win fixed models |
| **جایگزین** | AWS Inferentia at scale on AWS |

---

## محاسبات علمی (FP64)

| | |
|--|--|
| **۱** | AMD MI350X (72 TF FP64) / NVIDIA data center |
| **۲** | CPU clusters |
| **دلیل** | FP64 on gaming GPU crippled |
| **محدودیت** | Budget |
| **جایگزین** | HPC center allocation |

---

## سیستم کم‌مصرف

| | |
|--|--|
| **۱** | Apple M4 / Qualcomm X Elite laptop |
| **۲** | Intel Core Ultra iGPU-only laptop |
| **دلیل** | Perf/W mobile silicon |
| **محدودیت** | Gaming library (Mac/ARM) |
| **جایگزین** | Arc B580 190W desktop |

---

## خودرو و Edge AI

| | |
|--|--|
| **۱** | NVIDIA DRIVE Orin/Thor |
| **۲** | Qualcomm Ride / Ambarella / TI + Imagination IP |
| **دلیل** | Drive software stack |
| **محدودیت** | Automotive qualification cycles |
| **جایگزین** | FPGA for prototyping |

---

## Linux

| | |
|--|--|
| **۱** | NVIDIA (datacenter) — proprietary driver mature |
| **۲** | AMD ROCm |
| **دلیل** | ML stack default CUDA |
| **محدودیت** | Nouveau not for ML |
| **جایگزین** | Intel Arc + oneAPI |

---

## بدون وابستگی شدید CUDA

| | |
|--|--|
| **۱** | AMD GPU + ROCm / Vulkan gaming |
| **۲** | Intel Arc + oneAPI |
| **دلیل** | Open API paths |
| **محدودیت** | AI training friction |
| **جایگزین** | Apple Metal if macOS OK |
