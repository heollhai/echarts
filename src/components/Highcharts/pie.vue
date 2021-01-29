<template>
  <div ref="Highcharts"></div>
</template>

<script>
export default {
  mounted() {
    this.chartsInit();
  },
  methods: {
    // 初始化
    chartsInit() {
      var chart = {
        // 3D 饼图
        type: "pie",
        options3d: {
          enabled: true, //显示图表是否设置为3D
          alpha: 45, //图表视图旋转角度
        },
      };
      var title = {
        text: "每周水果配送量",
      };
      var subtitle = {
        text: "Highcharts 3D圆环图",
      };

      var plotOptions = {
        pie: {
          innerSize: 100, //用于绘制饼状图时，饼状图的圆心预留多大的空白
          depth: 45, //3D饼图的厚度
        },
      };
      var series = [
        {
          name: "配送量",
          data: [
            ["Bananas", 8],
            ["Kiwi", 3],
            ["Mixed nuts", 1],
            ["Oranges", 6],
            ["Apples", 8],
            ["Pears", 4],
            ["Clementines", 4],
            ["Reddish (bag)", 1],
            ["Grapes (bunch)", 1],
          ],
        },
      ];

      var json = {};
      json.chart = chart;
      json.title = title;
      json.subtitle = subtitle;
      json.plotOptions = plotOptions;
      json.series = series;
      console.log(this.$refs.Highcharts, "this.$refs.Highcharts");
      // this.$refs.Highcharts.highcharts(json);
    },
  },
};
</script>

<style></style>
