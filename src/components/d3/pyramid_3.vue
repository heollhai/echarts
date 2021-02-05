<template>
  <div class="svgClass" ref="svgBox">
    <svg :id="config.id" width="100%" height="100%" />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  methods: {
    init() {
      this.svg = d3.select("#" + this.config.id + "");
      // let start_x = this.width;
      // let start_y = this.height;
      let svgX = 80; //  模块之间的宽度
      let svgY = 55; //每个多边形之间的大距离
      let offsetX = 10; //模块偏移量X
      let offsetY = 0; //模块偏移量Y

      // this.drawLine(
      //   //1
      //   this.svg,
      //   start_x * 0.03,
      //   start_y * 0.826,
      //   start_x * 0.3,
      //   start_y * 0.894
      // );
      // this.drawLine(
      //   //2
      //   this.svg,
      //   start_x * 0.3,
      //   start_y * 0.894,
      //   start_x * 0.56,
      //   start_y * 0.824
      // );
      // this.drawLine(
      //   //3
      //   this.svg,
      //   start_x * 0.56,
      //   start_y * 0.824,
      //   start_x * 0.51,
      //   start_y * 0.74
      // );
      // this.drawLine(
      //   //3
      //   this.svg,
      //   start_x * 0.51,
      //   start_y * 0.74,
      //   start_x * 0.298,
      //   start_y * 0.685
      // );
      // this.drawLine(
      //   //4
      //   this.svg,
      //   start_x * 0.298,
      //   start_y * 0.685,
      //   start_x * 0.085,
      //   start_y * 0.736
      // );
      // this.drawLine(
      //   //5
      //   this.svg,
      //   start_x * 0.085,
      //   start_y * 0.736,
      //   start_x * 0.03,
      //   start_y * 0.826
      // );

      //循环渲染  所有内容
      this.dataList.forEach((item, index) => {
        // if (index === 0) {
        // }
        //多边形
        this.drawHexagon(
          this.svg,
          this.config.width - index * svgX,
          this.config.height - index * svgY,
          offsetX + index * 25,
          offsetY,
          this.color[index],
          index
        );
        console.log(item, index);
        //右边线段
        this.drawLine(
          this.svg,
          this.config.width - index * 25,
          this.config.height - svgY * index,
          this.config.width,
          this.config.height - svgY * index
        );
        this.drawTriangle(
          this.svg,
          this.config.width - (this.dataList.length - 1) * svgX,
          this.config.height - (this.dataList.length - 1) * svgY,
          offsetX + (this.dataList.length - 1) * 25,
          offsetY,
          this.color[+6]
        );
        this.drawTable(
          this.svg,
          this.config.width * 0.8,
          (this.config.height - svgY * index) * 0.78 + 5,
          item.nama + "  " + item.num
        );
      });
    },
    //绘制顶部三角形
    drawTriangle(svg, x, y, offsetX, offsetY, color) {
      console.log(x, y, offsetX, offsetY, "x, y, offsetX, offsetY");
      svg
        .append("path")
        .attr(
          "d",
          `M${x * -0.08}  ${y * 0.89}
          L ${x * 0.28} ${y * 0.94}
          L ${x * 0.67} ${y * 0.89}
          L ${x * 0.29} ${y * 0.59}
        z`
        )
        .attr("fill", color)
        .style("opacity", 0.2)
        .attr("transform", "translate(" + offsetX + " " + offsetY + ")")
        .on("mouseover", function() {
          d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
          d3.select(this).style("opacity", 0.7);
        })
        .attr({
          "stroke-width": 1,
          "shape-rendering": "crispedges",
        });
      // svg
      //   .append("line")
      //   .attr("x1", x * 0.55)
      //   .attr("y1", y * 0.89)
      //   .attr("x2", x * 0.82)
      //   .attr("y2", y * 0.94)
      //   .attr("stroke", "red")
      //   .attr("stroke-width", "1px");
      // svg
      //   .append("line")
      //   .attr("x1", x * 0.82)
      //   .attr("y1", y * 0.94)
      //   .attr("x2", x * 1.105)
      //   .attr("y2", y * 0.89)
      //   .attr("stroke", "red")
      //   .attr("stroke-width", "1px");
      // svg
      //   .append("line")
      //   .attr("x1", x * 1.105)
      //   .attr("y1", y * 0.89)
      //   .attr("x2", x * 0.82)
      //   .attr("y2", y * 0.56)
      //   .attr("stroke", "red")
      //   .attr("stroke-width", "1px");
    },
    //标签的封装
    drawTable(svg, x, y, text) {
      svg
        .append("text")
        .text(text)
        .attr("x", x)
        .attr("y", y)
        .style("fill", "red")
        .style("font-size", "80%");
    },

    //六边形的封装
    drawHexagon(svg, x, y, offsetX, offsetY, color, index) {
      if (this.dataList.length - 1 > index) {
        svg
          .append("path")
          .attr(
            "d",
            `M${x * 0.03}  ${y * 0.826}
          L ${x * 0.3} ${y * 0.894}
          L ${x * 0.56} ${y * 0.824}
          L ${x * 0.51} ${y * 0.74}
          L ${x * 0.298} ${y * 0.685}
          L ${x * 0.085} ${y * 0.736}
          L ${x * 0.03} ${y * 0.826}
        z`
          )
          .attr("fill", color)
          .style("opacity", 0.4)
          .attr("transform", "translate(" + offsetX + " " + offsetY + ")")
          .on("mouseover", function() {
            d3.select(this).style("opacity", 1);
          })
          .on("mouseout", function() {
            d3.select(this).style("opacity", 0.7);
          })
          .attr({
            "stroke-width": 1,
            "shape-rendering": "crispedges",
          });
      }
    },
    //线条的封装
    drawLine(svg, x1, y1, x2, y2) {
      svg
        .append("line")
        .attr("x1", x1 * 0.58)
        .attr("y1", y1 * 0.78)
        .attr("x2", x2 * 0.77)
        .attr("y2", y2 * 0.78)
        .attr("stroke", "red")
        .attr("stroke-width", "1px");
    },
  },
  mounted() {
    console.log(this.$refs.svgBox.offsetHight, "this.$refs.svgBox.offsetHight");
    this.init();
  },
  destroyed() {
    this.svg = null;
  },
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          id: "svg4",
          width: 400,
          height: 400,
        };
      },
    },
    dataList: {
      type: Array,
      default: () => {
        return [
          { nama: "1号", num: "40" },
          { nama: "2号", num: "60" },
          { nama: "3号", num: "10" },
          { nama: "4号", num: "30" },
          { nama: "2号", num: "60" },
          // { nama: "2号", num: "60" },
          // { nama: "2号", num: "60" },
        ];
      },
    },
    color: {
      type: Array,
      default: () => {
        return [
          "#6F00D2",
          "red",
          "#FF77FF",
          "#ffaad5",
          "#00E3E3",
          "#2828FF",
          "#6F00D2",
          "red",
        ];
      },
    },
  },
  data() {
    return {
      svg: null,
    };
  },
};
</script>

<style>
.svgClass {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
}
</style>
