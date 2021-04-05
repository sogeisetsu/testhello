import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from "@/views/user.vue"
import Two from "@/views/two.vue"
import Index from "@/views/index.vue"
import About from "@/views/shoppingcart.vue"
Vue.use(VueRouter)

const routes = [

  {
    path: "/two",
    name: "Two",
    component: Two
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
        component: About
      }, {
        path: "user",
        name: "User",
        component: First
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
