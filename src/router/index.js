import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "@/views/User.vue"
import Goods from "@/views/goods.vue"
import Index from "@/views/Index.vue"
import Shoppingcart from "@/views/Shoppingcart.vue"
Vue.use(VueRouter)

const routes = [

  {
    path: "/goods",
    name: "Goods",
    component: Goods
  },
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'shoppingcart',
        name: 'Shoppingcart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: Shoppingcart
      }, {
        path: "user",
        name: "User",
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
