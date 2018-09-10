<template>
  <div>
    <h1>超级隐私的页面</h1>
    <router-link to="/">返回主页</router-link>
    <div>
      <button @click="logout">退出登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    // 这里只用 fetch() 方法，因为我们不需要在这个组件中设置 data
    fetch ({store, redirect}) {
      // console.log(store.state.authUser)
      if (!store.state.authUser) {
        return redirect('/')
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout', {self: this})
      }
    }
  }
</script>
