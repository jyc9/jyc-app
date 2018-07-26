<template>
  <div class="page">
    <h1>404 页面没有找到</h1>
    <router-link :to="{ path: '/'}">
      返回首页
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "NotFoundComponent"
  }
</script>

<style scoped>
  .page{
    text-align: center;
  }
</style>
