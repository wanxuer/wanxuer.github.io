# 薛美静 · Selected Works

个人作品集：[wanxuer.github.io](https://wanxuer.github.io/)

本仓库保存 GitHub Pages 的静态发布文件。

- `portfolio/book/`：翻页书模型、封面与材质。
- `portfolio/profile/`：个人介绍素材与文案。
- `portfolio/layers/`：作品页的高清视差图层。
- `portfolio/previews/`：轻量书页预览与菜单缩略图。
- `assets/`：当前构建生成的脚本和样式。

主书页使用原始分辨率的无损 WebP，翻页前等待目标高清图层就绪，加载期间保留当前清晰书页。默认滑动参数采用作者保存的七页配置。页面配置和首屏图片与脚本并行请求。原始设计稿、未使用资源和旧构建文件保留在本地备份。
