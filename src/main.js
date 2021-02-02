import Vue from "vue";
import App from "./App.vue";
import router from "./router";


import highcharts from 'highcharts'

// import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");