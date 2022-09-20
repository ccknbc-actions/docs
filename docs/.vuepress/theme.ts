import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "CC康纳百川",
    url: "https://docs.ccknbc.cc",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "ccknbc-actions/docs",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  blog: {
    description: "他们都叫我菜狗",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "blog@ccknbc.cc",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/CCKNBC",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://www.instagram.com/ccknbc",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      Rss: "https://example.com",
      // Steam: "https://example.com",
      Twitter: "https://twitter.com/ccknbc",
      // Wechat: "https://example.com",
      Weibo: "https://weibo.com/CommonCulture",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.cc",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline.ccknbc.cc",
      pageview: false,
      pageSize: 10,
      requiredMeta: ["nick", "mail"],
      login: 'enable',
      copyright: true,
      imageUploader: false,
      locale:
        {
          admin: "博主兼管理员",
          sofa: "这里冷冷清清的，快来留下脚印吧！",
          placeholder: "感谢各位的批评指正，期待与您交流！",
        },
      emoji:
        [
          "https://npm.elemecdn.com/sticker-heo/Sticker-100/",
          "https://npm.elemecdn.com/telegram-gif/Telegram-Gif/",
          "https://npm.elemecdn.com/@waline/emojis/tw-emoji/",
        ]
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
