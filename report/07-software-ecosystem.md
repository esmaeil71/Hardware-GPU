# بخش هفتم: اکوسیستم نرم‌افزار

**تاریخ:** ۶ نوامبر ۲۰۲۶

---

## NVIDIA

| لایه | وضعیت |
|------|--------|
| **درایور** | Game Ready, Studio, Data Center/NVIDIA AI Enterprise |
| **SDK** | CUDA Toolkit, cuDNN, NCCL, TensorRT, NIM |
| **PyTorch/TF** | Primary target; native CUDA |
| **ONNX** | TensorRT export strong |
| **Vulkan/DX/OpenCL** | Full on GeForce |
| **Linux** | Strong datacenter; consumer supported |
| **مستندات** | Extensive developer.nvidia.com |
| **Lock-in** | **High** — CUDA legacy |
| **مهاجرت از NVIDIA** | Hard for CUDA code; ONNX/torch.compile partial |

---

## AMD

| لایه | وضعیت |
|------|--------|
| **درایور** | Adrenalin (gaming), ROCm (Linux DC) |
| **SDK** | ROCm, HIP, MIOpen |
| **PyTorch** | ROCm wheels; improving LLM support |
| **Vulkan/DX** | Competitive gaming |
| **Linux** | ROCm focus; gaming Pro drivers |
| **Lock-in** | Medium — closer to open stacks |
| **مهاجرت** | HIPify from CUDA possible (effort) |

---

## Intel

| لایه | وضعیت |
|------|--------|
| **درایور** | Arc GPU drivers; oneAPI runtime |
| **SDK** | oneAPI, OpenVINO, IPEX (PyTorch) |
| **Gaudi** | Habana stack for AI |
| **Vulkan/DX** | Arc Battlemage mature for DX12 Ultimate |
| **Linux** | oneAPI + Arc support expanding |
| **Lock-in** | Medium-low for oneAPI vision |
| **مهاجرت** | SYCL portability promise |

---

## Apple

| لایه | وضعیت |
|------|--------|
| **API** | Metal, Metal Performance Shaders |
| **ML** | Core ML, MLX (Apple Silicon) |
| **CUDA** | No |
| **Linux/Windows** | N/A on Apple GPU |

---

## Qualcomm / MediaTek (mobile)

- Vulkan, OpenCL ES; QNN/SNPE; NeuroPilot (MediaTek)
- PC Snapdragon: Windows on Arm + DirectX 12

---

## جدول مهاجرت پلتفرم

| From → To | سختی | مسیر |
|-----------|------|------|
| CUDA → ROCm | High | HIP, rebuild |
| CUDA → oneAPI | High | SYCL rewrite |
| PyTorch CUDA → ROCm | Medium | Prebuilt wheels |
| Gaming DX/Vulkan | Low | Cross-vendor APIs |
| Training stack | High | NCCL → RCCL |

---

## کیفیت کلی (تحلیل cualitative)

| شرکت | Gaming drivers | AI production | Docs |
|------|----------------|---------------|------|
| NVIDIA | Excellent | Excellent | Excellent |
| AMD | Good | Improving | Good |
| Intel | Good (Arc) | Emerging (Gaudi) | Good |
| Apple | Excellent (Mac) | Excellent (on-device) | Good |

---

## منابع

- developer.nvidia.com, rocm.docs.amd.com, oneapi.intel.com, developer.apple.com/metal
