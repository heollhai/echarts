<template>
  <svg id="svg2" width="100%" height="100%" @click="getXY" />
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {};
  },
  mounted() {
    const width = 110;
    const height = 20; // 柱体高度
    console.log(width, height);
    const lineColor = "#1ea0d8"; // 线条颜色
    const fillColor = "#2f71b5";
    let radius = 0.7;
    let x = 90;
    let y = 0.8;
    console.log(radius, x, y);
    let opacity = 1;
    let svg = d3.select("#svg2");
    //M x y   从哪里开始画     L x y (or l dx dy)  下一个点的   x y 轴距离
    //下面图形顶部
    svg
      .append("path")
      .attr(
        "d",
        `M150 ${
          331 - height //
        } l${width - 20} ${-height - 22}
          l${-width + 20} ${-height + 0.5}
          l${-width + 20} ${height}
          l${width - 20} ${height + 22}
           z`
      )
      // .style("opacity", opacity * 0.4)
      .attr("fill", "#00B5CD")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });
    //下面图形侧面
    svg
      .append("path")
      .attr(
        // width = 50;
        // height = 20;
        "d", //         1          2               3       4                   5            6            7
        `M150 340
        l -20 ${-height}
        l ${width} ${-width + 60}
        l 20 ${height}
        l ${-width} ${width - 50}
        l ${-width} ${-width + 50}
        l 20 ${-height}
        l ${width} ${width - 60}
        z`
      )
      .style("opacity", opacity * 0.7)
      .attr("fill", "#00B5CD")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });
    console.log(opacity, "opacity");
    // //上面图形顶部
    svg
      .append("path")

      .on("mouseover", function() {
        opacity = 0.4;
        d3.select(this).style("opacity", opacity);
      })
      .attr(
        "d",
        `M215 ${
          412 - height //
        } l${width - 20} ${-height - 22}
          l${-width + 20} ${-height + 0.5}
          l${-width + 20} ${height}
          l${width - 20} ${height + 22}
           z`
      )
      .attr("transform", "scale( " + radius + ")")
      .style("opacity", 0.6)
      .on("mouseover", function() {
        opacity = 0.4;
        // d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        opacity = 1;
        // d3.select(this);
        // d3.select(this).style("opacity", opacity);
      })
      .attr("fill", "#E1D67D")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    //上面图形侧面
    svg
      .append("path")
      // .attr(
      //   "d",
      //   `M190 330 l 0 ${-height} l ${width} ${-width} l 0 ${height} l ${-width} ${width} l ${-width} ${-width} l 0 ${-height} l ${width} ${width} z`
      // )
      .attr(
        // width = 50;
        // height = 20;
        "d", //         1          2               3       4                   5            6            7
        `M215 420
        l -20 ${-height}
        l ${width} ${-width + 60}
        l 20 ${height}
        l ${-width} ${width - 50}
        l ${-width} ${-width + 50}
        l 20 ${-height}
        l ${width} ${width - 60}
        z`
      )
      .style("opacity", opacity * 0.8)
      .attr("fill", "#E1D67D")
      .attr("transform", "scale( " + radius + ")")
      // .style("opacity", opacity * 0.4)
      .on("mouseover", function() {
        opacity = 0.4;
        d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        d3.select(this);
        opacity = 1;
        d3.select(this).style("opacity", opacity);
      })
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    //第三个顶部
    svg
      .append("path")
      // .attr(
      //   "d",
      //   `M190 ${330 -
      //     height} l${width} ${-width} l ${-width} ${-width} l ${-width} ${width} z`
      // )
      .attr(
        "d",
        `M305 ${
          502 - height //
        } l${width - 20} ${-height - 22}
          l${-width + 20} ${-height + 0.5}
          l${-width + 20} ${height}
          l${width - 20} ${height + 22}
           z`
      )
      .attr("transform", "scale( 0.5)")
      .style("opacity", 0.8)
      .on("mouseover", function() {
        opacity = 0.4;
        // d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        opacity = 1;
        // d3.select(this);
        // d3.select(this).style("opacity", opacity);
      })
      .attr("fill", "#EE8A7A")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    //第三个图形侧面
    svg
      .append("path")
      // .attr(
      //   "d",
      //   `M190 330 l 0 ${-height} l ${width} ${-width} l 0 ${height} l ${-width} ${width} l ${-width} ${-width} l 0 ${-height} l ${width} ${width} z`
      // )
      .attr(
        "d", //         1          2               3       4                   5            6            7
        `M305 510
        l -20 ${-height}
        l ${width} ${-width + 60}
        l 20 ${height}
        l ${-width} ${width - 50}
        l ${-width} ${-width + 50}
        l 20 ${-height}
        l ${width} ${width - 60}
        z`
      )
      .style("opacity", opacity * 0.7)
      .attr("fill", "#EE8A7A")
      .attr("transform", "scale( " + 0.5 + ")")
      // .style("opacity", opacity * 0.4)
      .on("mouseover", function() {
        opacity = 0.4;
        d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        d3.select(this);
        opacity = 1;
        d3.select(this).style("opacity", opacity);
      })
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    //第三个顶部
    svg
      .append("path")
      // .attr(
      //   "d",
      //   `M190 ${330 -
      //     height} l${width} ${-width} l ${-width} ${-width} l ${-width} ${width} z`
      // )
      .attr(
        "d",
        `M505 ${
          742 - height //
        } l${width - 20} ${-height - 22}
          l${-width + 20} ${-height + 0.5}
          l${-width + 20} ${height}
          l${width - 20} ${height + 22}
           z`
      )
      .attr("transform", "scale(0.3)")
      .style("opacity", opacity)
      .on("mouseover", function() {
        opacity = 0.4;
        d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        // d3.select(this);
        d3.select(this).style("opacity", opacity);
      })
      .attr("fill", "#B1727D")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    //第四个图形侧面
    svg
      .append("path")
      .attr(
        "d", //         1          2               3       4                   5            6            7
        `M505 750
        l -20 ${-height}
        l ${width} ${-width + 60}
        l 20 ${height}
        l ${-width} ${width - 50}
        l ${-width} ${-width + 50}
        l 20 ${-height}
        l ${width} ${width - 60}
        z`
      )
      .style("opacity", opacity * 0.7)
      .attr("fill", "#B1727D")
      .attr("transform", "scale( " + 0.3 + ")")
      .style("opacity", opacity)
      .on("mouseover", function() {
        d3.select(this).style("opacity", opacity);
      })
      .on("mouseout", function() {
        d3.select(this);
        opacity = 1;
        d3.select(this).style("opacity", opacity);
      })
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });

    svg
      .append("path")
      .attr("d", `M130 195 L 152 206 L175 195 L152 170 z`)
      .style("opacity", opacity * 0.7)
      .attr("fill", "red")
      .attr({
        fill: fillColor,
        stroke: lineColor,
        "stroke-width": 1,
        "shape-rendering": "crispedges",
      });
    //绘制直线
    svg
      .append("line")
      .attr("x1", 220)
      .attr("y1", 100)
      .attr("x2", 300)
      .attr("y2", 100)
      .attr("stroke", "#ccc")
      .attr("stroke-width", "1px");

    svg
      .append("line")
      .attr("x1", 220)
      .attr("y1", 130)
      .attr("x2", 300)
      .attr("y2", 130)
      .attr("stroke", "#ccc")
      .attr("stroke-width", "1px");
    let num = 11;
    let zifu = "标签 ";
    let text = zifu + num;
    svg
      .append("text")
      .text(text)
      .attr("x", 320)
      .attr("y", 105)
      .style("fill", "red")
      .style("font-size", "80%");
    svg
      .append("text")
      .text(text)
      .attr("x", 320)
      .attr("y", 135)
      .style("fill", "red")
      .style("font-size", "80%");
  },
  methods: {
    getXY: function(event) {
      console.log(event.offsetX, event.offsetY);
      // this.X = event.offsetX;
      // this.Y = event.offsetY;
    },
    lineFun() {},
  },
};
</script>

<style></style>
