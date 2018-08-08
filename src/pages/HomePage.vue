<template>
  <app-layout>
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
  </app-layout>

</template>

<script>
  import { routes }  from '../router'
  import api from '../api'
  export default {
    name: "HomePage",
    data () {
      return {
        items: routes
      }
    },
    created() {
      api.helpCenter().then(data=>{
        console.log(data)
      });
      api.useraccOrderList({
        pageNum:1,
        pageSize:15,
      }).then(data=>{
        console.log(data)
      });
    }
  }
</script>

<style scoped>
.page{
  text-align: center;
}
</style>
