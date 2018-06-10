/**
 @author zengwei
 @time 2018/6/9
 **/

module.exports = {
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'second',
      path: '/second1',
      component: 'pages/second.vue'
    },
    {
      name: 'third',
      path: '/third1',
      component: 'pages/third.vue'
    }
  ]
}
