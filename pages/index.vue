<template>
  <section class="container">
    <div>
      <img src="../assets/img/demo.jpg" style="width: 100px" alt="">
      <nuxt-child/>
      <nuxt-link to="/child">去child子组件</nuxt-link>
      <nuxt-link to="/100100100">去_id子组件</nuxt-link>
    </div>
    <div>
      <!--<app-logo/>-->
      <!--<h1 class="title">-->
        <!--nuxt-vue-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--target="_blank"-->
          <!--href="https://nuxtjs.org/"-->
          <!--class="button&#45;&#45;green"-->
        <!--&gt;-->
          <!--Documentation-->
        <!--</a>-->
        <!--<a-->
          <!--target="_blank"-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--class="button&#45;&#45;grey"-->
        <!--&gt;-->
          <!--GitHub-->
        <!--</a>-->

        <!--<nuxt-link v-for="(item, index) in mainData" :key="index" :class="item.className" :to="item.href">-->
          <!--{{item.name}}-->
        <!--</nuxt-link>-->

      <!--</div>-->
      <!--<div style="margin-top: 10px;">-->
        <!--&lt;!&ndash;<mip>111222333</mip>&ndash;&gt;-->
        <!--<button class="button&#45;&#45;grey" @click="remove">消除上面最后一个按钮</button>-->
        <!--<button class="button&#45;&#45;grey" @click="$store.commit('increment')">{{ $store.state.counter }}</button>-->
      <!--</div>-->
      <div style="margin-top: 10px;">
        <h3>{{msg}}</h3>
      </div>
    </div>
  </section>
</template>
<script>
  import AppLogo from '~/components/AppLogo.vue'
  export default {
    head: {
      script: [
        // { src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    },
    components: {
      AppLogo,
    },
    data() {
      return {
        mainData: [
          {href: '/', target: '_self', className: 'button--grey', name: 'index'},
          {href: '/second', target: '_self', className: 'button--grey', name: 'second'},
          {href: '/third', target: '_self', className: 'button--grey', name: 'third'},
          {href: '/four', target: '_self', className: 'button--grey', name: 'four'},
        ],
        // msg: '',
      }
    },
    // 检验router的方法
    validate(router) {
      // console.log(router)
      return true // 如果参数有效
      // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
    },
    // 新型ajax
    async asyncData({app}) {
      let url = `/test.php`
      let option = {
        method: 'post',
        url: url,
        // headers: {'content-type': 'application/json', token: 'debug' }
      }
      let {data} = await app.$axios(option)
      console.log(app.$axios)
      return {msg: JSON.stringify(data)}
      // let {data} = await app.$axios.get(url)
      // return {msg: JSON.stringify(data)}
    //   await app.$axios({
    //     withCredentials: true,
    //     method: 'post',
    //     url: url,
    //   }).then((data) => {
    //     console.log(data)
    //     return {msg: JSON.stringify(data)}
    //   })
    },
    created() {
      console.log('created')
      // console.log(window)
      // console.log(process)
      // console.log('重新进入生命周期created钩子。')
    },
    mounted(){

    },
    methods: {
      remove() {
        this.mainData.pop()
      },
      alert() {
        this.$vux.alert.show('This is a Alert example.')
      }
    }
  }
</script>

<style>
  body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }

</style>
