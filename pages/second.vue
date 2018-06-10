<template>
  <div>
    <h1 v-for="(item,index) in mainData" :key="index" class="red">second页面</h1>
   
  </div>
</template>

<script>
    export default {
      name: "second",
      data(){
        return {
          mainData: [1,2,3,4]
        }
      }
    }
</script>

<style scoped lang="sass">
  .red
    color: red
    box-sizing: border-box
</style>
