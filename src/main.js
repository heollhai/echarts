import Vue from "vue";
import App from "./App.vue";
import router from "./router";


import highcharts from 'highcharts'


let echarts = require("echarts")
Vue.prototype.$echarts = echarts
// import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
import "./assets/icon/iconfont.css"


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");