# 图标素材来源与复现

本次最终采用用户指定的 api-image / gpt-image-2 图片编辑接口，根据用户提供的两张原版参考图进行提取和高清修复。未采用先前的简化矢量替代图。

- 技能页参考：用户提供的 `截屏2026-10-18 03.01.19.png`，归档为 `design/canva-portfolio/hd-icons/user-original-skills-reference.png`。
- 联系页参考：用户提供的 `截屏2026-10-18 02.48.55.png`，归档为 `design/canva-portfolio/api-icon-extraction/contact-reference.png`。
- API 编辑输出、最终提示词、每个素材实际分辨率记录：`design/canva-portfolio/api-icon-extraction/`。
- 输入参考图由用户提供；图标品牌身份属于相应品牌。AI 修复后的细节与原素材可能存在轻微差异。
- 输出中的品红背景经确定性抠图去除，只处理卡片轮廓边缘，保留图标内部颜色与透明度。
- 单图 PNG：本目录下的 `*-api.png`。媒体 ID 对应的 `.svg` 是内嵌 PNG 的布局容器，并非重新绘制的品牌路径。
- 保留原坐标与动效图层名称，兼容已保存的逐页动效配置。

复现（从产品目录运行）：

1. `python3 htwkr-clone/design/canva-portfolio/install-api-icons.py`
2. `node htwkr-clone/design/canva-portfolio/render-hd-icons.cjs`

第六/七页图层纹理为 4200×2400；API 实际返回尺寸和单图原生尺寸另见 `asset-records.json`，不宣称 AI 输出是原始 4K 文件。

Canva 补充链接已核对：同一设计 DAHXmUUqNR4；共享数据未包含这批图标原图的媒体记录，因此本次使用用户提供的高清参考图。
