import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import AboutUs from '@/pages/aboutUs/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    }
  ]
})
