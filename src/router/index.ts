import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Index.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('@/views/design/Design.vue')
    }
  ]
})
