<template>
  <div class="basic-layout">
    <header></header>

    <slot/>

    <footer>

    </footer>
  </div>
</template>

<script>
  export default {
    name: "basic",
//数据
    props: {},
    data() {
      return {

      }
    },
    computed: {},
    watch: {},
//方法
    methods: {},
    created() {
    },
    mounted() {
    },
    destroyed() {
    },
    components: {},
    mixins: [],
  }
</script>

<style scoped>

</style>
