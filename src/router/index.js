import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPage from '@/pages/argreement/RegisterPage'
Vue.use(Router)

export default new Router({
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
    }
  ]
})
