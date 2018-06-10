// import router from './pages/route'

// let router = require('./pages/route')
// console.log(process.env.NODE_ENV)
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vue',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // 类似vue-resource
  modules: ['@nuxtjs/axios'],
  plugins: [
    '~/plugins/axios'
  ],
  axios: {
    prefix: '/api/',
    proxyHeaders: {
      token: 'debug111'
    },
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'http://0.0.0.0',
      pathRewrite: {
        '^/api/': ''
      },
      secure: false
    }
  },
  // 样式
  css: [
    {src: '~assets/css/main.css'}
  ],
  transition: {
    name: 'page',
    // mode: 'in-out'
  },
  cache: false,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070', height: '3px' },
  /**
   * 开发环境
   */
  dev: process.env.NODE_ENV,
  /**
   * 环境变量
   */
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // router
}
