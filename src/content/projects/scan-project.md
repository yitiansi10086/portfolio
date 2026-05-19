---
title: "3D 扫描 - 铜像士兵"
cover: "/images/扫描封面.png"
tools: ["RealityCapture", "ZBrush", "Blender", "Substance Painter", "3D Sampler", "PixPlant", "Unreal Engine 5"]
description: "使用摄影测量技术扫描铜像士兵，结合 ZBrush 清理、SP 材质制作，以及地面材质扫描与 UE5 Nanite 置换。"
order: 3
---

## Part 1 — 资产扫描

**拍摄准备** — 使用灯箱 + 电动转台拍摄铜像士兵，共拍摄 173 张照片。灯箱解决了自然光下阴影不一致的问题，通过手机专业模式降低快门速度避免过曝。

<img src="/images/扫描1.png" style="width:23%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 1% 0.5rem 0;">
<img src="/images/扫描2.png" style="width:23%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 1% 0.5rem 0;">
<img src="/images/扫描3.png" style="width:23%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 1% 0.5rem 0;">
<img src="/images/扫描4.png" style="width:23%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 0;">

**扫描软件** — 使用 RealityCapture 进行摄影测量。先用低精度模型对比四组照片集的质量，选出噪点最少的灯箱照片集，再生成高精度模型。

<div style="display:flex;gap:1%;justify-content:center;">
<img src="/images/扫描5.png" style="width:48%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">
<img src="/images/扫描6.png" style="width:48%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">
</div>

**模型清理** — 导入 ZBrush 进行清理：自动分组 + 删除隐藏面去除浮动面片，Smooth 笔刷消除表面噪点，Clay 笔刷修复变形区域，XTractor 笔刷补全因拍摄角度限制缺失的细节。

<div style="display:flex;gap:1%;align-items:flex-end;">
<img src="/images/扫描7.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描8.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描9.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描10.png" style="width:23%;height:auto;border-radius:8px;">
</div>

**材质制作** — 在 Substance Painter 中完成高低模烘焙和法线贴图。材质以铜像原色为基础，叠加污垢和磨损层，模拟长期风化后的历史感。

<div style="display:flex;gap:1%;align-items:flex-end;">
<img src="/images/扫描11.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描12.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描13.png" style="width:23%;height:auto;border-radius:8px;">
<img src="/images/扫描14.png" style="width:23%;height:auto;border-radius:8px;">
</div>

## Part 2 — 地面材质扫描

**工作流程** — 扫描周边地面材质，结合 3D Sampler（材质生成）和 PixPlant（无缝平铺优化）的混合流程：先用 3D Sampler 生成基础材质，再导入 PixPlant 优化无缝平铺效果。

<div style="display:flex;gap:1%;align-items:flex-end;margin:0.5rem 0;">
<img src="/images/扫描15.png" style="width:35%;height:auto;border-radius:8px;">
<img src="/images/扫描16.png" style="width:64%;height:auto;border-radius:8px;">
</div>

<div style="display:flex;gap:1%;align-items:flex-end;margin:0.5rem 0;">
<img src="/images/扫描17.png" style="width:35%;height:auto;border-radius:8px;">
<img src="/images/扫描18.png" style="width:64%;height:auto;border-radius:8px;">
</div>

**引擎实现** — 将材质导入 UE5，使用 Nanite 实现置换效果。

<div style="display:flex;gap:1%;align-items:flex-end;margin:0.5rem 0;">
<img src="/images/扫描19.png" style="width:49.5%;height:auto;border-radius:8px;">
<img src="/images/扫描20.png" style="width:49.5%;height:auto;border-radius:8px;">
</div>
