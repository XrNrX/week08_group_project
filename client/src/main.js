import Vue from 'vue'
import App from './App.vue'

import VueGoogleCharts from 'vue-google-charts'
Vue.use(VueGoogleCharts)


export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
