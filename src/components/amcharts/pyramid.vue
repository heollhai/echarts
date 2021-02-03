<template>
  <div :id="id">金子塔</div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
// <title/><path d="M415.81,285.52h-8.32a5.36,5.36,0,1,0,0,10.71h8.32a5.36,5.36,0,0,0,0-10.71Z"/>
// <path d="M468.26,285.52H437.61a5.36,5.36,0,0,0,0,10.71h30.65a5.36,5.36,0,1,0,0-10.71Z"/>
// <path d="M372.86,164.05a5.36,5.36,0,0,0,0,10.71h38.78a5.36,5.36,0,0,0,0-10.71Z"/>
// <path d="M437.61,164.05h-5.27a5.36,5.36,0,0,0,0,10.71h5.27a5.36,5.36,0,0,0,0-10.71Z"/>
// <path d="M358.18,329.93a24.61,24.61,0,0,0,8.34-30.07,5.29,5.29,0,0,0,1.27-1.31l25.14-37.3h75.33a5.35,5.35,0,1,0,0-10.7H390.09a5.31,5.31,0,0,0-4.43,2.35l-25.72,38.15a24.61,24.61,0,0,0-26.3-3.62L305.8,239.21a24.62,24.62,0,0,0,9-30.53,5.29,5.29,0,0,0,1.36-1.46l42.26-67.42h79.18a5.36,5.36,0,0,0,0-10.71H355.46a5.35,5.35,0,0,0-4.53,2.51l-42.75,68.22a24.58,24.58,0,0,0-27-3.22L225.4,99.93a5.58,5.58,0,0,0-9.29,0l-177,306.6a5.36,5.36,0,0,0,4.64,8h354a5.36,5.36,0,0,0,4.64-8ZM344,295.86A14,14,0,1,1,330,309.8,14,14,0,0,1,344,295.86Zm-51.7-91.19a13.95,13.95,0,1,1-13.95,14A14,14,0,0,1,292.26,204.67Zm-71.51-91.36,52.07,90.18a24.58,24.58,0,0,0-5.22,15.13c0,.56,0,1.11.07,1.66H159ZM152.81,231H271a24.65,24.65,0,0,0,21.31,12.28,25,25,0,0,0,3.38-.24l29.43,51a24.5,24.5,0,0,0-5.75,15.8,24.92,24.92,0,0,0,.54,5.15H104.34ZM53,403.85l36.14-62.59,36,62.59Zm84.48,0L95.33,330.54l2.83-4.89h47.38l45,78.2Zm65.37,0-45-78.2h53l45,78.2Zm65.36,0-45-78.2h53l45,78.2Zm65.36,0-45-78.2h36.5a24.57,24.57,0,0,0,23.1,8.44l40.28,69.76Z"/></svg>
export default {
  props: {
    id: String,
  },
  mounted() {
    var chart = am4core.create(this.id, am4charts.SlicedChart);
    chart.data = [
      // {
      //   name: "Stage #1",
      //   value: 60,
      // },
      // {
      //   name: "Stage #2",
      //   value: 80,
      // },
      // {
      //   name: "Stage #3",
      //   value: 120,
      // },
      // {
      //   name: "Stage #4",
      //   value: 150,
      // },
      // {
      //   name: "Stage #5",
      //   value: 180,
      // },
      // {
      //   name: "Stage #6",
      //   value: 200,
      // },
      {
        name: "Stage #7",
        value: 10,
      },
    ];

    var man = "M493.1 116.7L928 673.9 316.5 796.2z";
    var man2 = "M493.1 116.7L71.9 592.3l244.6 203.9z";
    console.log(man, man2);
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.maskSprite.path = man;
    series.dx = 146;

    var series1 = chart.series.push(new am4charts.PictorialStackedSeries());
    series1.dataFields.value = "value";
    series1.dataFields.category = "name";
    series1.labels.template.disabled = true;
    series1.ticks.template.disabled = true;
    series1.dx = -100;
    series1.maskSprite.path = man2;

    // var series2 = chart.series.push(new am4charts.PictorialStackedSeries());
    // series2.dataFields.value = "value";
    // series2.dataFields.category = "name";
    // series2.labels.template.disabled = true;
    // series2.ticks.template.disabled = true;
    // series2.dx = -80;
    // series2.maskSprite.path = man2;

    let eles = document.querySelectorAll("[aria-labelledby]");
    eles.forEach((ele) => {
      ele.style.visibility = "hidden";
    });
  },
};
</script>

<style></style>
