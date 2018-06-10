<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-vue
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a 
          target="_blank" 
          href="https://nuxtjs.org/"
          class="button--green"
        >
          Documentation
        </a>
        <a 
          target="_blank" 
          href="https://github.com/nuxt/nuxt.js"
          class="button--grey"
        >
          GitHub
        </a>

        <nuxt-link v-for="(item, index) in mainData" :key="index" :class="item.className" :to="item.href">
          {{item.name}}
        </nuxt-link>

      </div>
      <div style="margin-top: 10px;">
        <button class="button--grey" @click="remove">消除上面最后一个按钮</button>
        <button class="button--grey" @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      </div>
      <div style="margin-top: 10px;">
        <h3>{{msg}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  // import axios from 'axios'
  export default {
    components: {
      AppLogo
    },
    data() {
      return {
        mainData: [
          {href: '/', target: '_self', className: 'button--grey', name: 'index'},
          {href: '/second', target: '_self', className: 'button--grey', name: 'second'},
          {href: '/third', target: '_self', className: 'button--grey', name: 'third'},
          {href: '/four', target: '_self', className: 'button--grey', name: 'four'},
        ],
        msg: ''
      }
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
      // console.log('重新进入生命周期created钩子。')
    },
    methods: {
      remove() {
        this.mainData.pop()
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
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

  .links {
    padding-top: 15px;
  }
</style>
