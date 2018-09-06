// import router from './pages/route'

// let router = require('./pages/route')
// console.log(process.env.NODE_ENV)
const path = require('path')
const vuxLoader = require('vux-loader')
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
    ],
    // script: [
    //   { src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx', type: 'text/javascript', charset: 'utf-8'},
    //   // { innerHTML: 'console.log("hello")', type: 'text/javascript', charset: 'utf-8'}
    // ]
  },
  // 类似vue-resource
  modules: ['@nuxtjs/axios'],
  plugins: [
    // '~/plugins/axios',
    {src:'~plugins/axios', ssr: true},
    // '~/plugins/element-ui',
    {src:'~plugins/element-ui', ssr: true},
    // {src:'~plugins/v-meta', ssr: true},
    // { src: '~/plugins/nuxt-swiper-plugin', ssr: false },
    // { src: '~/plugins/mint-ui', ssr: true },
    // { src: '~/plugins/vux', ssr: true },
    // '~/plugins/v-distpicker'
    {
      src: '~/plugins/vux-plugins',
      ssr: false
    },
    {
      src: '~/plugins/vux-components',
      ssr: true
    }
  ],
  axios: {
    prefix: '/api/',
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
    {src: '~assets/css/main.css'},
    {src: 'element-ui/lib/theme-chalk/index.css'},
    // 'swiper/dist/css/swiper.css'
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
  // dev: process.env.NODE_ENV,
  /**
   * 环境变量
   */
  env: {
    NODE_ENV: process.env.NODE_ENV,
    TEST_ENV: 'nuxt-test'
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
      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', {
          name: 'less-theme',
          path: path.join(__dirname, './styles/theme.less')
        }]
      })
      return configs
    }
  },
  // 路由
  router: {
    middleware: ['auth']
  }
}
