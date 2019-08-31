import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clothing from './views/Clothing.vue'
import Shoes from './views/Shoes.vue'
import Bags from './views/Bags.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clothing',
      name: 'clothing',
      component: Clothing
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: Shoes
    },
    {
      path: '/bags',
      name: 'bags',
      component: Bags
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
