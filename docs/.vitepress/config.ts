import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// ============================================================
//  网站配置
//  - 改标题、导航、侧边栏都在这一个文件里完成
//  - 加新笔记后，记得在下方 sidebar 里补一行链接
// ============================================================
export default defineConfig({
  lang: 'zh-CN',
  title: '我的学习笔记',
  description: '个人学习资料与心得整理',

  // 让代码块显示行号，方便以后引用
  markdown: {
    lineNumbers: true,
    // 接入数学公式插件：支持 LaTeX（$...$ 行内，$$...$$ 独立）
    config: (md) => {
      md.use(mathjax3)
    },
  },

  themeConfig: {
    // ---------- 顶部导航栏 ----------
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/待分类/如何写一篇笔记' },
      { text: '关于', link: '/about' },
    ],

    // ---------- 侧边栏（按学科分组） ----------
    // 以后加新笔记：在对应分组的 items 里补一行 { text: '标题', link: '/notes/学科/文件名' }
    sidebar: {
      '/notes/': [
        {
          text: '待分类',
          collapsed: false,
          items: [
            { text: '如何写一篇笔记', link: '/notes/待分类/如何写一篇笔记' },
          ],
        },
        // 示例：加一个新学科时，复制下面这段并改名字
        // {
        //   text: '机器学习',
        //   collapsed: false,
        //   items: [
        //     { text: '线性回归', link: '/notes/机器学习/线性回归' },
        //   ],
        // },
      ],
    },

    // ---------- 站内搜索（本地，无需服务器） ----------
    search: {
      provider: 'local',
    },

    // ---------- 右侧本页目录 ----------
    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    // ---------- 显示最后更新时间（需要 git） ----------
    lastUpdated: {
      text: '最后更新',
    },

    // ---------- 上一页 / 下一页 中文文案 ----------
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // ---------- 页脚 ----------
    footer: {
      message: '用 VitePress 搭建',
      copyright: 'Copyright © 2026',
    },
  },
})
