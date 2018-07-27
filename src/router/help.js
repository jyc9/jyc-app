export default {
  path: '/help',
  component: {
    template: '<router-view></router-view>'
  },
  children: [
    {
      name: 'help',
      path: '',
      component: () => import ('@/pages/help/index'),
      meta: {
        title: '帮助中心'
      }
    },{
      name: 'help.search',
      path: 'search',
      component: () => import ('@/pages/help/index'),
      meta: {
        title: '帮助中心'
      }
    },
  ]
}
