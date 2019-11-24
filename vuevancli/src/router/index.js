import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/mine/About.vue')
  },{
    path: '/policy',
    name: 'policy',
    component: () => import(/* webpackChunkName: "policy" */ '@/views/mine/Policy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
