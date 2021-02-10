<template>
  <div>
    <div class="foo">
      <amCharts id="id" :chartData="chartData" :config="config"></amCharts>
      <amCharts id="id2" :chartData="chartData" :config="config2"></amCharts>
    </div>
  </div>
</template>

<script>
import amCharts from "../components/amcharts/pie.vue";
export default {
  components: {
    amCharts,
  },
  created() {
    this.config2 = JSON.parse(JSON.stringify(this.config));
    // this.$set(this.config2, "innerRadius", 70);
  },
  mounted() {
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
  methods: {
    //定义了半径后无法根据窗口大小改变而改变，，暂时用这个方法替代
    resizeChart() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth < 1500) {
        this.$set(this.config, "innerRadius", 40);
        this.$set(this.config, "radius", 60);
        return;
      } else {
        this.$set(this.config, "innerRadius", 70);
        this.$set(this.config, "radius", 90);
      }
    },
  },
  data() {
    return {
      windowWidth: "",
      config2: {},
      config: {
        innerRadius: 70, //里面空心半径
        radius: 100, //半径
        angle: 70, //角度
        // depth: 5, //厚度
        // TopfontSize: 12, //鼠标放上字体
        // fontSize: 12, //环外的字体
        // alignLabels: false, //环形外面的展示方法
        // shadow: "#fff", //
        color: ["#0056e3", "#00cccc", "#007638", "#006785", "red"],
      },
      chartData: [
        {
          name: "uania",
          value: 401.9,
        },
        {
          name: "队伍121撒大多数",
          value: 201.9,
        },
        {
          name: "99999",
          value: 301.9,
        },
        {
          name: "Ireland",
          value: 201.1,
        },
        {
          name: "Germany",
          value: 165.8,
        },
      ],
    };
  },
};
</script>

<style>
.foo {
  width: 800px;
  height: 400px;
  background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg")
    no-repeat;
  background-size: 100% 100%;
  display: flex;
}
</style>
