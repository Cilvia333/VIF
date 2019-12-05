import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  srcDir: './src',
  loading: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Virtual Idol Festival -公式サイト-',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '今を煌めく新しいアイドルの形、それがVアイドル！今ここに界隈を盛り上げるVアイドルたちが一堂に会し、宴がはじまる。'
      },
      { hid: 'keywords',name: 'keywords', content: 'Vtuber, バーチャルアイドル'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'Virtual Idol Festival' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://vdolfes.com' },
      { hid: 'og:title', property: 'og:title', content: 'Virtual Idol Festival' },
      { hid: 'og:description', property: 'og:description', content: 'バーチャルアイドルたちの祭典、それがバーチャルアイドルフェスティバル！' },
      { hid: 'og:image', property: 'og:image', content: "/ogp.png"},
      { hid: "twitter:card", property: "twitter:card", content: "summary" }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  
  css: ['ress/ress.css'],

  plugins: ['@/plugins/composition-api'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],

  modules: [
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    ['vue-scrollto/nuxt', { 
      duration: 300 
    }],
  ],

  axios: {},
  styleResources: {
    // your settings here
    sass: ['./src/assets/sass/main.sass']
  },

  build: {
    cache: true,
		postcss: {
			plugins: {
				'postcss-short': {}
			}
		},
    extend(config, ctx) {
      if (!config.output) return
      if (!config.module) return

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }

      if(!ctx.isDev) {
        config.output.publicPath = '_nuxt/'
     }
    }
  },
  generate: {
    fallback: true,
  }
}

export default config
