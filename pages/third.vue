<template>
  <div>
    <h1 v-for="(item, index) in mainData" :key="index" class="skyblue">third页面</h1>
  </div>
</template>

<script>
  export default {
    name: "third",
    data(){
      return {
        mainData: [1, 2, 3, 4]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .skyblue
    color skyblue
    box-sizing border-box
</style>
