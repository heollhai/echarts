<template>
 <div>
    <div style="width:600px;height:600px;margin-left:100px; background:#00ffff;">
    <amCharts id="id" :chartData="chartData" :config="config"></amCharts>
  </div>
  <div style="width:400px;height:300px;margin-left:100px; ">
    <amCharts id="id2" :chartData="chartData" :config="config"></amCharts>
  </div>
 </div>
</template>

<script>
import amCharts from "../components/amcharts/pie";
export default {
  components: {
    amCharts,
  },
  data() {
    return {
      config: {
        innerRadius: 80,//
        radius:100,//
        angle:70,//角度
         depth:5,//厚度
        TopfontSize:12,
        fontSize:14
      },
      chartData: [
        {
          name: "uania",
          value: 501.9,
          color: "red",
          color1: "#ccc",
        },
        {
          name: "99999",
          value: 301.9,
          color: "#00cccc",
          color1: "#ccc",

        },

        {
          name: "Ireland",
          value: 201.1,
          color: "red",
          color1: "#ccc",

        },
        {
          name: "Germany",
          value: 165.8,
          color: "#000",
          color1: "#ccc",

        },
      ],
    };
  },
};
</script>

<style></style>
