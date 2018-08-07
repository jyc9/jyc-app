<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getHome')
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    width: 750px;
    margin: 0 auto;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;
  }
</style>
