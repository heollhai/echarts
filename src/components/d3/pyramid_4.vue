<template>
    <svg :id="config.id" width="100%" height="100%" />
</template>

<script>
import * as d3 from "d3";
export default {
  methods: {
    init() {
      this.svg = d3.select("#" + this.config.id);
      let width = this.config.width ? this.config.width : 400; //svg  宽
      let height = this.config.height ? this.config.height : 400; //  svg  高
      console.log(width,height,"oipoipoipo------------")
      let TriangleWidth = this.config.TriangleWidth
        ? this.config.TriangleWidth
        : 30; //三角形 多边形 宽度
      let polygonGap = this.config.polygonGap ? this.config.polygonGap : 35; //每个多边形的间隙
      let polygonHeight = this.config.polygonHeight
        ? this.config.polygonHeight
        : 35; //多边形高度
      let gap = 10; //三角形和下一个多边形的间隙
      let CentreX = width / 3; //模型中心点
      let slant = -4; //三角形左右两侧倾斜度

      let size = 8; //多边形两边的偏移度
      let polygonWidth = TriangleWidth; //想分离三角形和多边形的宽度(暂时没想到)

      // 三角形起始位置(是以这个位置为绘制点绘制下面的所有图形的Y轴)
      let TriangleCentreY =
        height / 2 - (polygonHeight * (this.dataList.length - 2) - gap) / 2;
      let textY = 3.5; //文字y偏移  （文字是以线条定位的，，没有计算到文字的大小，想要到线条的中间需要根据字体大小手动偏向y轴位置）
      let textX = 20; //文字x轴偏移   (同上)

      //多边形 中间用来体现立体感线条的高度比例
      let nums = 2.5;
      // let cententY = 10;
      // console.log(cententY);

      var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip") //用于css设置类样式
        .attr("opacity", 1);

      //三角形
      //如果是最后一个那么画三角形
      this.rounded(
        width,
        TriangleCentreY +
          slant +
          (TriangleCentreY - TriangleCentreY - TriangleWidth)
      );
      // this.rounded(TriangleCentreY,index-1,polygonGap,slant,gap,polygonHeight,width)
      //三角形
      this.drawTriangle(
        this.svg,
        CentreX,
        TriangleCentreY,
        TriangleWidth + 5,
        slant,
        this.color[0],
        this.TriangleData[0],
        tooltip
      );
      //用来体现立体感的中间线条
      this.drawHexagonLine(
        this.svg,
        CentreX,
        TriangleCentreY,
        CentreX,
        TriangleCentreY - TriangleWidth * 1.4 - 8,
      );
      //三角形右侧线条
      this.drawLine(
        this.svg,
        CentreX + TriangleWidth,
        TriangleCentreY +
          slant +
          (TriangleCentreY - TriangleCentreY - TriangleWidth),
        width * 0.7,
        TriangleCentreY +
          slant +
          (TriangleCentreY - TriangleCentreY - TriangleWidth)
      );
      //三角形标签
      this.drawTable(
        this.svg,
        width * 0.7 + textX,
        TriangleCentreY +
          slant +
          (TriangleCentreY - TriangleCentreY - TriangleWidth) +
          textY +
          1,
        this.TriangleData[0].nama + " " + this.TriangleData[0].num
      );
      this.dataList.forEach((item, index) => {
        //如果不是最后一个绘制多边形
        //多边形
        // if (this.dataList.length - 1 !== index) {

        this.rounded(
          width,
          TriangleCentreY +
            index * polygonGap +
            slant +
            gap +
            (TriangleCentreY +
              slant +
              polygonHeight +
              gap -
              TriangleCentreY +
              slant +
              gap) /
              3 -
            2
        );
        //右侧标签
        this.drawTable(
          this.svg,
          width * 0.7 + textX,
          TriangleCentreY +
            index * polygonGap +
            slant +
            gap +
            (TriangleCentreY +
              slant +
              polygonHeight +
              gap -
              TriangleCentreY +
              slant +
              gap) /
              3 +
            textY,
          item.nama + " " + item.num
        );
        //多边形右侧线条
        this.drawLine(
          this.svg,
          CentreX + polygonWidth + index * 10 + size + size,
          TriangleCentreY +
            index * polygonGap +
            slant +
            gap +
            -1 +
            (TriangleCentreY +
              slant +
              polygonHeight +
              gap -
              3 -
              TriangleCentreY +
              slant +
              gap -
              1) /
              3,
          width * 0.7,
          TriangleCentreY +
            index * polygonGap +
            slant +
            gap -
            1 +
            (TriangleCentreY +
              slant +
              polygonHeight +
              gap -
              3 -
              TriangleCentreY +
              slant +
              gap -
              1) /
              3
        );

        //多边形
        this.drawHexagon(
          this.svg,
          CentreX,
          polygonWidth + index * 10,
          TriangleCentreY + index * polygonGap,
          slant,
          size,
          polygonHeight,
          gap,
          this.color[index],
          index,
          item,
          tooltip
        );
        //多边形中间用来体现立体感的线条
        //中间线条
        this.drawHexagonLine(
          this.svg,
          CentreX,
          TriangleCentreY + index * polygonGap + gap + polygonHeight,
          CentreX,
          TriangleCentreY + index * polygonGap + (slant + gap) * nums,
        );
        //右侧线条
        this.drawHexagonLine(
          this.svg,
          CentreX,
          TriangleCentreY + index * polygonGap + (slant + gap) * nums,
          CentreX + polygonWidth + size + index * 10,
          TriangleCentreY + slant + gap - 1 + index * polygonGap,
          this.color[index]
        );
        //左侧线条
        this.drawHexagonLine(
          this.svg,
          CentreX,
          TriangleCentreY + index * polygonGap + (slant + gap) * nums,
          CentreX - polygonWidth - size - index * 10,
          TriangleCentreY + slant + gap - 1 + index * polygonGap,
        );
        // }

      });
    },
    //标签的封装
    drawTable(svg, x, y, text) {
      svg
        .append("text")
        .text(text)
        .attr("x", x)
        .attr("y", y)
        .style("fill", "#FFF")
        .style("font-size", "80%");
    },
    //多边形封装
    drawHexagon(
      svg,
      CentreX,
      polygonWidth,
      TriangleCentreY,
      slant,
      size,
      polygonHeight,
      gap,
      color,
      index,
      value,
      tooltip
    ) {
      svg
        .append("path")
        .attr(
          "d",
          `M${CentreX}  ${TriangleCentreY + gap + polygonHeight}
          L ${CentreX + polygonWidth + size + size} ${TriangleCentreY +
            slant +
            polygonHeight +
            gap -
            7}
          L ${CentreX + polygonWidth + size} ${TriangleCentreY +
            slant +
            gap -
            1}
          L ${CentreX} ${TriangleCentreY + gap - polygonHeight * 0.4}
          L ${CentreX - polygonWidth - size} ${TriangleCentreY +
            slant +
            gap -
            1}
          L ${CentreX - polygonWidth - size - size} ${TriangleCentreY +
            slant +
            polygonHeight +
            gap -
            7}
        z`
        )
        .attr("fill", color)
        .style("opacity", 0.3 + index * 0.1)
        .on("mouseover", function(d) {
          tooltip
            .html(value.nama)
            .style("left", d.clientX + 30 + "px")
            .style("top", d.clientY - 50 + "px")
            .style("opacity", 1);
          d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
          tooltip.style("opacity", 0);
          d3.select(this).style("opacity", 0.4);
        })
        .attr({
          "stroke-width": 1,
          "shape-rendering": "crispedges",
        });
    },
    //模型中间的线条
    drawHexagonLine(svg, x1, y1, x2, y2) {
      svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "#fff")
        .style("opacity", 0.1);
    },
    //线条的封装
    drawLine(svg, x1, y1, x2, y2) {
      svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "#f8f8f8")
        .attr("stroke-width", "1px");
    },
    //顶部三角形封装
    drawTriangle(
      svg,
      CentreX,
      TriangleCentreY,
      TriangleWidth,
      slant,
      color,
      value,
      tooltip
    ) {
      svg
        .append("path")
        .attr(
          "d",
          `M${CentreX}  ${TriangleCentreY + 4}
          L ${CentreX + TriangleWidth} ${TriangleCentreY + slant}
          L ${CentreX} ${TriangleCentreY - TriangleWidth * 1.4}
          L ${CentreX - TriangleWidth} ${TriangleCentreY + slant}
        z`
        )
        .attr("fill", color)
        .style("opacity", 0.4)
        .on("mouseover", function(d) {
          tooltip
            .html(value.nama)
            .style("left", d.clientX + 30 + "px")
            .style("top", d.clientY - 50 + "px")
            .style("opacity", 1);
          d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
          tooltip.style("opacity", 0);
          d3.select(this).style("opacity", 0.4);
        })
        .attr({
          "stroke-width": 1,
          "shape-rendering": "crispedges",
        });
    },
    //右侧小圆
    rounded(width, Y) {
      //右侧小圆
      this.svg
        .append("circle")
        .attr("cx", width * 0.7 + 10)
        .attr("cy", Y)
        .attr("fill", "#fff")
        .attr("r", 3);
    },
    //排序，数量多的放在下面
    againsTsortKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? 1 : x < y ? -1 : 0;
      });
    },
    //窗口大小改变
    resizeTo(){
      // console.log(this.config.width,"kkopopio")
      // console.log(this.config.width,'this.cong')
      // this.svg = null;
      // this.init();
      // console.log("大小改变")
    }
  },
  mounted() {
    window.addEventListener("resize",this.resizeTo)
    this.init();
  },
  created() {
    //排序
    this.againsTsortKey(this.dataList, "num");
    //三角形里面内容
    this.TriangleData.push(this.dataList[0]);
    //排序后把三角形里面内容删除
    this.dataList.splice(0, 1);
  },
  destroyed() {
    this.svg = null;
  },
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          id: "svg",
        };
      },
    },
    dataList: {
      type: Array,
    },
    color: {
      type: Array,
    },
  },
  data() {
    return {
      svg: null,
      TriangleData: [],
    };
  },
};
</script>

<style lang="scss">
.tooltip {
  min-width: 30px;
  height: 20px;
  position: absolute;
  top: 0;
  opacity: 0;
  border: 1px solid red;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  padding: 0 8px;
  color: #fff;
}
</style>
