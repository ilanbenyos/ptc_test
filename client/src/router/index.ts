import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/about_ilan',
    name: 'aboutIlan',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
  },{
    path: '/about_app',
    name: 'aboutApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutApp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
