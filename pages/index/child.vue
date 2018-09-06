<template>
  <div>
    <h3>我是child的index子组件。</h3>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
    export default {
      name: "child",
      async asyncData({app}) {
        let url = `/test.php`
        let option = {
          method: 'post',
          url: url,
          // headers: {'content-type': 'application/json', token: 'debug' }
        }
        let {data} = await app.$axios(option)
        // console.log(app)
        return {msg: JSON.stringify(data)}
      },
    }
</script>

<style scoped lang="stylus">

</style>
