export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },

  app: {
    head: {
      title: 'ZYi1024',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/avatar.png' }
      ],
      script: [
        {
          children: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7a62c30a1a3fd1c012009e308457c228";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
          type: 'text/javascript'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-1HQ0Z411FN',
          async: true
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1HQ0Z411FN');`,
          type: 'text/javascript'
        }
      ]
    }
  },

  compatibilityDate: '2025-02-15',

  nitro: {
    prerender: {
      routes: ['/', '/zh']
    }
  },

  generate: {
    routes: ['/', '/zh']
  }
})