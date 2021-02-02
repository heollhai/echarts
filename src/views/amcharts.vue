<template>
  <div style="width:400px;heigght:300px;margin-left:100px; ">
    <amCharts id="id" :chartData="chartData" :config="config"></amCharts>
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
        innerRadius: 50,
      },
      chartData: [
        {
          name: "uania",
          value: 501.9,
          // color: "red",
        },
        {
          name: "99999",
          value: 301.9,
          // color: "#00cccc",
        },

        {
          name: "Ireland",
          value: 201.1,
          // color: "red",
        },
        {
          name: "Germany",
          value: 165.8,
          // color: "#000",
        },
      ],
    };
  },
};
</script>

<style></style>
