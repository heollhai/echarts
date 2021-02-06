<template>
  <svg :id="config.id" width="100%" height="100%" />
</template>

<script>

import * as d3 from "d3";
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          id: "svg3",
          width: 500,
          height: 500,
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
          // { nama: "2号", num: "60" },
          // { nama: "2号", num: "60" },
          // { nama: "2号", num: "60" },
        ];
      },
    },
    color: {
      type: Array,
      default: () => {
        return ["#6F00D2", "red", "#FF77FF", "#ffaad5", "	#00E3E3", "#2828FF"];
      },
    },
  },
  data() {
    return {
      svg: null,
    };
  },
  mounted() {
    this.initD3();
  },
  destroyed() {
    this.svg = null;
  },
  methods: {
    initD3() {
      this.svg = d3.select("#" + this.config.id + "");
      let start_x = this.config.width;
      let start_y = this.config.height;
      let inclineX = 15; //倾斜
      let inclineLeftX = 5; //倾斜
      let inclineLeftY = 18; //倾斜
      let inclineY = 30; //倾斜
      let height = 40; //高度
      let interval = 80; //每个svg的间隙

      let height1 = 20;

      console.log(interval, inclineLeftY, start_x, "margin_left");

      this.drawLine(
        //1
        this.svg,
        start_x / 4,
        start_y * 0.9,
        start_x / 4,
        start_y * 0.9 - height1
      );
      this.drawLine(
        //2
        this.svg,
        start_x / 4,
        start_y * 0.9 - height1,
        start_x * 0.4,
        start_y * 0.8
      );
      this.drawLine(
        //3
        this.svg,
        start_x * 0.8,
        start_y * 0.7,
        start_x * 0.8 + inclineX,
        start_y * 0.7 + inclineY
      );
      this.drawLine(
        //4
        this.svg,
        start_x / 2,
        start_y * 0.9,
        start_x * 0.8 + inclineX,
        start_y * 0.7 + inclineY
      );
      this.drawLine(
        //5
        this.svg,
        start_x / 2,
        start_y * 0.9,
        start_x * 0.2 - inclineLeftX,
        start_y * 0.8
      );
      this.drawLine(
        //6
        this.svg,
        start_x * 0.2 - inclineLeftX,
        start_y * 0.8,
        start_x * 0.2 + inclineX,
        start_y * 0.8 - inclineY
      );
      this.drawLine(
        //7
        this.svg,
        start_x * 0.2 + inclineX,
        start_y * 0.8 - inclineY,
        start_x / 2,
        start_y * 0.9 - height
      );
      this.drawLine(
        //8
        this.svg,
        start_x / 2,
        start_y * 0.9 - height,
        start_x * 0.8,
        start_y * 0.7
      );
      this.drawLine(
        //9
        this.svg,
        start_x * 0.8,
        start_y * 0.7,
        start_x / 2,
        start_y * 0.65
      );
      this.drawLine(
        //10
        this.svg,
        start_x / 2,
        start_y * 0.65,
        start_x * 0.2 + inclineX,
        start_y * 0.8 - inclineY
      );

      // start_x * 0.4,
      //   start_y * 0.8
      this.dataList.forEach((item, index) => {
        this.drawTable(
          this.svg,
          start_x * 0.8 + 10,
          start_y * 0.7 +
            inclineY +
            (start_y * 0.7 + inclineY - start_y * 0.8) -
            index * 40,
          item.nama + " " + item.num
        );
        if (index < 4) {
          this.drawLine(
            this.svg,
            start_x * 0.8 + inclineX - 30 * (1 + index) - 30,
            start_y * 0.7 +
              inclineY +
              (start_y * 0.7 + inclineY - start_y * 0.8) -
              index * 40,
            start_x * 0.8,
            start_y * 0.7 +
              inclineY +
              (start_y * 0.7 + inclineY - start_y * 0.8) -
              index * 40
          );
        }
        this.drawTop(
          this.svg,
          start_x - index * 80,
          start_y - index * interval * 0.7,
          height,
          inclineX,
          inclineY,
          this.color[index],
          40 * index - 80,
          0
        );
        // //侧面
        this.drawDide(
          this.svg,
          start_x - index * 80,
          start_y - index * interval * 0.7,
          height,
          inclineX,
          inclineY,
          inclineLeftX,
          this.color[index],
          40 * index - 80,
          0
        );
      });
    },

    //顶部的封装
    drawTop(
      svg,
      start_x,
      start_y,
      height,
      inclineX,
      inclineY,
      color,
      translationX,
      translationY
    ) {
      if (start_x > 200) {
        svg
          .append("path")
          .attr(
            "d",
            `M${start_x / 2}  ${start_y * 0.9 - height + 0.5}
            L ${start_x * 0.8} ${start_y * 0.7}
            L ${start_x / 2} ${start_y * 0.65}
            L ${start_x * 0.2 + inclineX} ${start_y * 0.8 - inclineY}
          z`
          )
          .attr(
            "transform",
            "translate(" + translationX + " " + translationY + ")"
          )
          .on("mouseover", function() {
            d3.select(this).style("opacity", 1);
          })
          .on("mouseout", function() {
            d3.select(this).style("opacity", 0.7);
          })
          .style("opacity", 0.7)
          .attr("fill", color)
          .attr({
            "stroke-width": 1,
            "shape-rendering": "crispedges",
          });
      }
    },
    //线条的封装
    drawLine(svg, x1, y1, x2, y2) {
      // if (x1 > 100) {
      svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "#000")
        .attr("stroke-width", "1px");
      // }
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
    //侧面的封装
    drawDide(
      svg,
      start_x,
      start_y,
      height,
      inclineX,
      inclineY,
      inclineLeftX,
      color,
      translationX,
      translationY
    ) {
      if (start_x > 200) {
        svg
          .append("path")
          .attr(
            "d",
            `M${start_x / 2}  ${start_y * 0.9}
        L ${start_x / 2} ${start_y * 0.9 - height}
        L ${start_x * 0.8} ${start_y * 0.7}
        L ${start_x * 0.8 + inclineX} ${start_y * 0.7 + inclineY}
        L ${start_x / 2} ${start_y * 0.9}
        L ${start_x * 0.2 - inclineLeftX} ${start_y * 0.8}
        L ${start_x * 0.2 + inclineX} ${start_y * 0.8 - inclineY}
        L ${start_x / 2} ${start_y * 0.9 - height}
        z`
          )
          .attr("fill", color)
          .style("opacity", 0.7)
          .attr(
            "transform",
            "translate(" + translationX + " " + translationY + ")"
          )
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
  },
};
</script>

<style></style>
