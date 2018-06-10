<template>
  <div>
    <h1 v-for="(item, index) in mainData" :key="index" class="yellowgreen">four页面</h1>
  </div>
</template>

<script>
  export default {
    name: "four",
    data(){
      return {
        mainData: [1, 2, 3, 4]
      }
    }
  }
</script>

<style scoped lang="less">
  .yellowgreen{
    color: yellowgreen
  }
</style>
