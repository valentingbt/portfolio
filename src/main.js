import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {FaRating} from 'vue-rate-it';

Vue.config.productionTip = false

Vue.component('fa-rating', FaRating);

new Vue({
  FaRating,
  router,
  render: h => h(App)
}).$mount('#app')
