import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
