# 我的学习笔记站

基于 [VitePress](https://vitepress.dev/) 的个人学习笔记网站。

## 目录结构

```
study-notes/
├── docs/                        # 网站内容（笔记都在这里）
│   ├── .vitepress/
│   │   ├── config.ts            # 网站配置（标题、导航、侧边栏、数学公式）
│   │   └── theme/
│   │       ├── index.ts         # 主题入口
│   │       └── custom.css       # 自定义样式（配色、字体）
│   ├── index.md                 # 首页
│   ├── about.md                 # 关于页
│   └── notes/                   # 笔记归档区
│       └── 待分类/              # 每个学科一个文件夹
│           └── 如何写一篇笔记.md
├── .github/workflows/deploy.yml # 自动部署脚本（push 后自动上线）
└── package.json
```

## 常用命令

```bash
npm install          # 首次安装依赖（只需一次）
npm run dev          # 本地预览（浏览器打开 http://localhost:5173）
npm run build        # 打包生成静态网站
npm run preview      # 预览打包后的结果
```

## 如何添加一篇新笔记

1. 在 `docs/notes/` 下找到（或新建）对应学科的文件夹。
2. 把写好的 `.md` 文件放进去。
3. （可选）在 `docs/.vitepress/config.ts` 的 `sidebar` 里补一行链接，让它出现在侧边栏；不补也能通过搜索找到。
4. `npm run dev` 预览，确认无误后 `git push` 发布。

## 如何添加一个新学科

1. 在 `docs/notes/` 下新建一个文件夹，例如 `docs/notes/机器学习/`。
2. 在 `config.ts` 的 `sidebar` 里复制「待分类」那段，改成新学科名和链接。
3. 往里放笔记即可。

## 数学公式

支持 LaTeX：行内用 `$...$`，独立成行用 `$$...$$`。

## 发布上线（GitHub Pages）

1. 在 GitHub 上新建一个空仓库（不要勾选初始化 README）。
2. 本地执行：

```bash
git init
git add .
git commit -m "init: 个人学习笔记站"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

3. 在 GitHub 仓库的 `Settings → Pages` 里，把 Source 设为 **GitHub Actions**。
4. 之后每次 `git push`，网站就会自动重新构建并上线，地址为 `https://你的用户名.github.io/仓库名/`。
