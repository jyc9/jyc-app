// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import store from './store'
import LayoutBasic from '@/components/layouts/jyc-layout'
import Api from './api'
Vue.use(Vant)
Vue.use(VueAxios, axios)
Vue.use(Api)
Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.component('app-layout', LayoutBasic)
new Vue({
  el: '#app',
  router,
  store,
  components: { App,LayoutBasic },
  template: '<App/>'
})
