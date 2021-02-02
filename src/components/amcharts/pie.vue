<!-- 
  propertyFields.fill  属性可以设置值，，跟随数据的值
 -->
<template>
  <div style="height:100%;width:100%;" :id="id" class="hello"></div>
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

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
    var chart = am4core.create(this.id, am4charts.PieChart3D);

    chart.data = this.chart;
    chart.radius = this.config.radius ? this.config.radius : 40;
    // 角度
    chart.angle = this.config.angle ? this.config.angle : 60;
    //中间空心大小
    chart.innerRadius = this.config.innerRadius;

    var series1 = chart.series.push(new am4charts.PieSeries3D());
    series1.dataFields.value = "value";
    series1.dataFields.category = "name";
    series1.depth = this.config.depth ? this.config.depth : 5;
    series1.labels.template.disabled = true;
    series1.ticks.template.disabled = true;
    series1.hiddenState.properties.endAngle = -90;
    series1.scale = 1.1;
    series1.slices.template.tooltipText = "";
     series1.dy = 8
    //  series1.dx = 0
    series1.slices.template.propertyFields.fill = "color1";
    series1.slices.template.configField = "config";

    console.log(chart, "chartchartchartchart");
    var series = chart.series.push(new am4charts.PieSeries3D());

    //设置鼠标放上效果
    //设置最大宽度
    series.tooltip.label.maxWidth = 150;
    //设置背景颜色
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.propertyFields.fill = "color";
    //允许换行
    series.tooltip.label.wrap = true;
    //设置color
    // series.tooltip.label.fill = am4core.color("#fff");
    //设置字体大小
    series.tooltip.label.fontSize = this.config.TopfontSize
      ? this.config.TopfontSize
      : 12;
    //文字居中
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.propertyFields.fill = "#fff";
    series.tooltip.background.propertyFields.stroke = "color";
    //背景阴影效果
    // let shadow = series.tooltip.background.filters.getIndex(0);
    // shadow.dx = 10;
    // shadow.dy = 10;
    // shadow.blur = 5;
    // shadow.color = am4core.color("red");
    // Add and configure Series
    series.labels.template.text = "{value.percent.formatNumber('#.0')}%";

    // 设置饼图深度
    series.depth = 1;
    //设置字体大小
    series.fontSize = this.config.fontSize ? this.config.fontSize : 14;
    //文字颜色
    series.labels.template.fill = am4core.color("red");
    series.ticks.template.disabled = false;
    //暂时感觉可以设置圈外线的距离
    series.labels.template.radius = 10;
    //字体加粗
    // series.fontWeight = "bold";

    // 饼图外面文字
    // series.labels.template.disabled = false;
    // 饼图外面曲线

    // 设置外面标签的内容
    // series.labels.template.text = "{category}: {value.value}";

    //禁用鼠标放上显示信息效果
    // series.slices.template.tooltipText = "{category}: {value.value}";
    //动画效果
    series.hiddenState.properties.endAngle = -90;
    //设置环形中间的间隙
    series.slices.template.configField = "config";
    //环形颜色
    series.slices.template.propertyFields.fill = "color";
    // 设置参数，值
    series.dataFields.value = "value";
    series.dataFields.category = "name";

    // 去掉版本号
    let eles = document.querySelectorAll("[aria-labelledby]");
    eles.forEach((ele) => {
      ele.style.visibility = "hidden";
    });
  },
};
</script>

<style scoped lang="scss">
.hello {
  width: 100%;
  height: 500px;
}
</style>
