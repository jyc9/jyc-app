import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import RegisterPage from '@/pages/argreement/RegisterPage'
import NotFoundComponent from '@/pages/NotFoundComponent'
Vue.use(Router)


export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title:"HomePage",
    }
  },
  {
    path: '/agreement/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      title:"注册服务协议",
    }
  },
  { path: '*',
    component: NotFoundComponent,
    // meta: {
    //   // title:"404页面",
    // }
  }
]

export default new Router({
  mode:'history',
  routes: routes,
})
