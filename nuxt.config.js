
export default {
  loading: '~/components/PreLoading.vue',

  router: {
    middleware: 'delay'
  },

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: 'Petar Arandjic - Full Stack Web Developer'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Petar Arandjic - Full Stack Web Developer located in Bosnia, Banja Luka'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Petar-Arandjic.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I\'m the full stack web developer working mostly with PHP, Symfony, Pimcore, Javascript and Vue'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/images/laptop-1478822_1280.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_package_v0.16/favicon.ico' },

      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicon_package_v0.16/apple-touch-icon.png'}

    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LfybtcZAAAAABUEBG_kIlveKxDttpJvKksJ_3ya', // Site key for requests
    version: 2, // Version
    size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
  },

  fontawesome:{
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    },
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
