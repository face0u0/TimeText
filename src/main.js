// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import './assets/update.scss'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase/app'
import "firebase/auth"
Vue.use(BootstrapVue)
Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyBdvVF7_lciYklaUXWjjBJ3Q18jszJLX3E",
  authDomain: "timetext-8a337.firebaseapp.com",
  databaseURL: "https://timetext-8a337.firebaseio.com",
  projectId: "timetext-8a337",
  storageBucket: "timetext-8a337.appspot.com",
  messagingSenderId: "1056224902579",
  appId: "1:1056224902579:web:7fc8a44a7241159f89dfc6",
  measurementId: "G-NDWRHR5DB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  methods: {

  },
  components: { App },
  template: '<App/>'
})
