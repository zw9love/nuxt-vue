<template>
    <div>
      <h3>{{name}}</h3>
    </div>
</template>

<script>
    export default {
      name: "_id",
      asyncData({ params, env, error }) {
        console.log(params)
        return {name: params.id}
      }
    }
</script>

<style scoped lang="stylus">

</style>
