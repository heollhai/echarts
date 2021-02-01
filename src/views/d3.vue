<template>
  <div>
    <D3></D3>
  </div>
</template>

<script>
import * as d3 from "d3";
import D3 from "../components/d3/d3";
import { draw, transition } from "../components/d3/renderUtils.js";
export default {
  components: {
    D3,
  },
  data() {
    return {
      salesData: [
        { label: "Basic", color: "#3366CC", color1: "#ccc", value: 100 },
        { label: "Plus", color: "#DC3912", color1: "#ccc", value: 120 },
        { label: "Lite", color: "#FF9900", color1: "#ccc", value: 140 },
        { label: "Elite", color: "#109618", color1: "#ccc", value: 110 },
        { label: "Delux", color: "#990099", color1: "#ccc", value: 150 },
      ],
    };
  },
  methods: {
    changeData() {
      transition("salesDonut", this.randomData(), 130, 100, 30, 0.4);
    },
    randomData() {
      return this.salesData.map(function(d) {
        return {
          label: d.label,
          value: d.value,
          color: d.color,
          color1: d.color1,
        };
      });
    },
  },
  mounted() {
    d3.select("body")
      .selectAll("svg")
      .remove();
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);
    svg.append("g").attr("id", "salesDonut");
    this.changeData(); //                 x      y   () 倾斜度  高  中心半径
    draw("salesDonut", this.randomData(), 180, 120, 45, 20, 5, 0.8);
  },
};
</script>

<style></style>
