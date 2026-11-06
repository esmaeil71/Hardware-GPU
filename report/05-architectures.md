# بخش پنجم: مقایسه معماری‌ها

**تاریخ:** ۶ نوامبر ۲۰۲۶

---

## NVIDIA: CUDA، Tensor، RT، NVLink

| جنبه | توضیح |
|------|--------|
| **هدف** | General-purpose GPU + AI + RT graphics؛ DC scale-up |
| **بار کاری** | DL training/inference، HPC، RT gaming |
| **عملکرد خام** | Blackwell B200 تا 8TB/s HBM؛ GeForce RTX 5090 1792 GB/s GDDR7 |
| **بهروری انرژی** | GDDR7 PAM3 (whitepaper Blackwell GeForce) |
| **AI** | Tensor Cores gen 5؛ FP8/FP4؛ DLSS Multi Frame Gen |
| **RT** | RT Cores gen 4؛ path tracing |
| **درایور** | Game Ready / Studio / Data Center unified stack |
| **فریم‌ورک** | **CUDA** (leader)، cuDNN، TensorRT؛ PyTorch/TF via CUDA |
| **محدودیت** | CUDA lock-in؛ DC power density |

**نسخ GeForce/Data Center:** Ampere → Ada → Blackwell (consumer GB202); Hopper → Blackwell B200 (DC).

---

## AMD: RDNA، CDNA، ROCm، Infinity Cache

| جنبه | RDNA 4 (gaming) | CDNA 4 (MI350) |
|------|-----------------|----------------|
| **هدف** | Gaming، media | AI/HPC |
| **AI** | limited vs CDNA | Matrix Cores، MXFP8/6/4 |
| **RT** | Ray accelerators | N/A |
| **Interconnect** | PCIe | Infinity Fabric 38.4Gbps |
| **نرم‌افزار** | Vulkan/DX12 | **ROCm** — PyTorch improving |
| **محدودیت** | Market share retail | ROCm maturity vs CUDA |

**Infinity Cache:** LLC 256MB on MI300/MI350 series.

---

## Intel: Xe، oneAPI

| variant | هدف |
|---------|-----|
| **Xe2 HPG** | Arc Battlemage gaming |
| **Xe HPC / Falcon Shores (roadmap)** | DC |
| **Xe-LPG** | Core Ultra iGPU |

- **oneAPI / OpenVINO** — cross-architecture intent
- **محدودیت:** Arc dGPU volume؛ Gaudi ecosystem smaller

---

## Apple GPU + Metal

- Unified memory؛ **Metal** primary API
- GenAI on-device (Core ML)
- **محدودیت:** no CUDA; Mac-only silicon

---

## Qualcomm Adreno + Hexagon

- Mobile gaming + **AI Orchestrator**
- Vulkan/OpenCL ES
- PC: Snapdragon X Elite (Adreno class GPU)

---

## ARM Mali / Immortalis

- **Immortalis** — hardware RT tier
- Licensed to MediaTek, Samsung, others
- **محدودیت:** driver quality varies by OEM

---

## جدول سازگاری API (خلاصه)

| API / FW | NVIDIA | AMD | Intel | Apple | Qualcomm |
|----------|--------|-----|-------|-------|----------|
| CUDA | Native | No | No | No | No |
| ROCm | No | Native | No | No | No |
| oneAPI | Partial | Partial | Native | No | No |
| PyTorch | Excellent | Good | Good (IPEX/Gaudi) | MLX/CoreML | Mobile ports |
| Vulkan | Yes | Yes | Yes | MoltenVK | Yes |
| DirectX | Yes | Yes | Yes | No | ARM Windows |

---

## منابع

- [NVIDIA Blackwell GeForce WP](https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf)
- [AMD ROCm MI350 workload doc](https://rocm.docs.amd.com/projects/ai-ecosystem/en/latest/optimization/workload-optimization.html)
- Intel Arc B580 ARK
