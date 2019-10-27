// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import './assets/update.scss'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  methods: {

  },
  components: { App },
  template: '<App/>'
})
