<template>
  <div id="chartdiv" class="hello"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default {
  props: {
    id: {
      type: String,
    },
    chartData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    config: {
      type: Object,
    },
  },
  data() {
    return {
      chart: [],
    };
  },
  created() {
    this.chart = this.chartData;
  },
  mounted() {
    //设置每个饼图中间隔离一定间隙
    if (!this.config.interval) {
      this.chart.map((item) => {
        this.$set(item, "config", { isActive: true });
        return item;
      });
    }

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);

    chart.data = this.chart;

    // chart.startDuration = 2; //饼图的渲染时间，时间越长，动画越长，展示的准备时间越久
    // chart.labelRadius = 10; //饼图上标签，值越大，饼图越小，说明的标签指示线越长

    chart.radius = 40;
    // 角度
    chart.angle = 60;
    //中间空心大小
    chart.innerRadius = this.config.innerRadius;

    console.log(chart, "chartchartchartchart");
    var series = chart.series.push(new am4charts.PieSeries3D());
    // series.stroke = am4core.color("#ccc"); // red
    // series.strokeWidth = 3; // 3px
    // 饼图外面文字
    // series.labels.template.disabled = true;
    // 饼图外面曲线
    // series.ticks.template.disabled = true;
    series.slices.template.propertyFields.fill = "color";
    series.slices.template.lineColor = "#fff";

    // 设置饼图深度
    series.depth = 5;
    //设置字体大小
    series.fontSize = 14;
    //字体加粗
    // series.fontWeight = "bold";
    console.log(series.tooltip, "series.tooltip;;;;");
    // series.tooltip.background.fill = am4core.color("red");
    // let shadow = series.tooltip.background.filters.getIndex(0);
    // shadow.dx = 10;
    // shadow.dy = 10;
    // shadow.blur = 5;
    // shadow.color = am4core.color("red");

    // 渐变色
    // let rgm = new am4core.RadialGradientModifier();
    // rgm.brightnesses.push(-0, -0, -0, 0, -0.2);
    // series.slices.template.fillModifier = rgm;
    // series.slices.template.strokeModifier = rgm;
    //禁用鼠标放上显示信息效果
    // series.slices.template.tooltipText = "";

    //设置环形中间的间隙
    series.slices.template.configField = "config";
    // 设置参数，值
    series.dataFields.value = "value";
    series.dataFields.category = "name";

    //暂时感觉可以设置圈外线的距离
    series.labels.template.radius = 10;

    // var sliceTemplate1 = series.slices.template;
    // sliceTemplate1.cornerRadius = 5;
    // sliceTemplate1.draggable = true;
    // sliceTemplate1.inert = true;
    // sliceTemplate1.propertyFields.fill = "color";
    // sliceTemplate1.propertyFields.fillOpacity = "opacity";
    // sliceTemplate1.propertyFields.stroke = "color";
    // sliceTemplate1.propertyFields.strokeDasharray = "strokeDasharray";
    // sliceTemplate1.strokeWidth = 1;
    // sliceTemplate1.strokeOpacity = 1;

    // chart.legend = new am4charts.Legend();

    // series.darkColor = "dark"

    // 去掉版本号
    let eles = document.querySelectorAll("[aria-labelledby]");

    eles.forEach((ele) => {
      ele.style.visibility = "hidden";
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  height: 500px;
}
/deep/polyline {
  color: red;
}
/deep/ .polyline {
  color: red;
}
</style>
