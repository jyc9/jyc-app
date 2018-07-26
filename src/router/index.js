import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPage from '@/pages/argreement/RegisterPage'
import NotFoundComponent from '@/pages/NotFoundComponent'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title:"HelloWorld",
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
    { path: '*', component: NotFoundComponent }
  ]
})
