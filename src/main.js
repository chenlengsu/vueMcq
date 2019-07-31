// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import store from './store'

import 'lib-flexible/flexible'

// import "swiper/dist/css/swiper.min.css"

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */ )


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})