<template>

  <h1>帮助页面</h1>
</template>

<script>
  export default {
    name: "Index"
    ,
    mounted: function () {
      // this.axios.get("/api/product/recommendProduct").then(response => {
      //   console.log("获取信息成功");
      //   console.log(response);
      // });
      this.axios.get('/api/home/helpAssort')
        .then(function (response) {
          console.log(1)
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
</script>

<style scoped>

</style>
