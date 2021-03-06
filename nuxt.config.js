export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  watch: ['./**/*.vue'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dig-conf',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
   
    script: [
      { src: 'https://unpkg.com/animate-css-grid@latest' }
    ],
  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    ['@nuxtjs/google-fonts', {
      families: {
        'Titillium Web':[400,700]
      },
      display: 'swap'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
        '~/assets/scss/variables.scss',
        '~/assets/scss/mixins.scss',
    ]
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
