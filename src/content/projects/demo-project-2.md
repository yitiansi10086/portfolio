---
title: "风格化草原场景"
cover: "/images/NewLevelSequence.0000.png"
tools: ["Blender", "C4D", "ZBrush", "RizomUV", "Substance Painter", "Marvelous Designer", "Unreal Engine 5"]
description: "风格化草原场景，包含自定义材质、布料模拟动画和飞艇动画。"
order: 2
---

<video controls width="100%" style="border-radius:12px;border:1px solid rgba(255,255,255,0.06);margin-bottom:2rem;">
  <source src="/images/视频.mp4" type="video/mp4">
</video>

## 制作过程

**地形** — 在 PS 中绘制灰度高度图，导入 C4D 生成地形模型，添加细节后导入 UE5 作为场景地基

![地形1](/images/地形1.png)
![地形2](/images/地形2.png)
![地形3](/images/地形3.png)

**草地材质** — 在 UE5 中纯节点制作：顶点色控制上下渐变绿色，叠加手绘草地贴图增加斑驳感，云朵噪声图配合 Panner 节点模拟云影投射

<img src="/images/草地1.png" style="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 0;">

![草地2](/images/草地2.png)
![草地3](/images/草地3.png)

<img src="/images/草地4.png" style="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 0;">

**树木** — C4D 曲线工具制作树干，布尔运算合并球形叶片；叶片材质使用 WPO 膨胀效果 + RemapValueRange 修正中心点，TransFormVector 保持叶片朝向摄像机，Fresnel 节点模拟阳光透射效果，并加入风力模拟

![树木1](/images/树木1.png)
![树木2](/images/树木2.png)
![树木5](/images/树木5.png)

<img src="/images/树木3.png" style="width:48%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 1% 0.5rem 0;">
<img src="/images/树木4.png" style="width:48%;border-radius:8px;border:1px solid rgba(255,255,255,0.06);margin:0.5rem 0;">

![树木6](/images/树木6.png)
![树木7](/images/树木7.png)
![树木8](/images/树木8.png)

![树木9](/images/树木9.png)
![树木10](/images/树木10.png)
![树木11](/images/树木11.png)

![树木12](/images/树木12.png)
![树木13](/images/树木13.png)
![树木14](/images/树木14.png)

**石头** — ZBrush 高模雕刻 → Blender 减面拓扑 → RizomUV 展 UV → SP 高低模烘焙，叠加边缘遮罩和污垢遮罩，加模糊处理使其偏向风格化

![石头1](/images/石头1.png)
![石头2](/images/石头2.png)
![石头3](/images/石头3.png)

![石头4](/images/石头4.png)
![石头5](/images/石头5.png)
![石头6](/images/石头6.png)

![石头7](/images/石头7.png)
![石头8](/images/石头8.png)

**布料动画** — C4D 制作行人低模，Mixamo 绑定行走动画，导入 Marvelous Designer 模拟红色斗篷随风飘动，风力值调整为 250

![布料1](/images/布料1.png)
![布料2](/images/布料2.png)
![布料3](/images/布料3.png)

**飞艇动画** — 在 UE5 Animation Sequence 中直接 K 帧，首尾各设一个位置关键帧

**场景合成** — 侧光源保留细节，叠加天空光和聚光灯；自制天空板模拟天空和云层；体积雾增加环境层次感；后期处理加灰色调使画面更梦幻

![最终1](/images/最终1.png)
![最终2](/images/最终2.png)
![最终3](/images/最终3.png)

