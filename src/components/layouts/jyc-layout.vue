<template>
  <div class="container">
    <header>
      <slot name="header">
        <h5 v-if="title">{{title}}</h5>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "jyc-layout",
//数据
    props: {
      title: String,
    },
    data() {
      return {}
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
