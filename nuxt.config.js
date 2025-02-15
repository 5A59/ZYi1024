export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'zh',
    langDir: 'locales/',
    strategy: 'prefix_except_default'
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
      ]
    }
  },

  compatibilityDate: '2025-02-15'
})