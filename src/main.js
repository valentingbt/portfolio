import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {FaRating} from 'vue-rate-it';
import i18n from './i18n'

Vue.config.productionTip = false

Vue.component('fa-rating', FaRating);

new Vue({
  FaRating,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
