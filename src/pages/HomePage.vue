<template>
  <div class="page">
    <h1>子页面列表</h1>

    <ul>
      <li v-for="item in items">
        <!--{{ item.name }}-->
        <router-link :to="{ path: item.path }">
          <p v-if="(item.meta && item.meta.title)">{{ item.meta.title }}</p>
          <p v-else>{{ item.name }}</p>
          <!--{{ item.name }}-->
        </router-link>

        <ul v-if="item.children">
          <li v-for="itm in item.children">
            <router-link :to="{ path: item.path + '/' +itm.path }">
              <p v-if="(itm.meta && itm.meta.title)">{{ itm.meta.title }}</p>
              <p v-else>{{ itm.name }}</p>
              <!--{{ item.name }}-->
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
  import { routes }  from '../router'
  export default {
    name: "HomePage",
    data () {
      return {
        items: routes
      }
    }
  }
</script>

<style scoped>
.page{
  text-align: center;
}
</style>
