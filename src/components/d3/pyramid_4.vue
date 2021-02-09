<!-- 
                                                            是否必须
 config: {
        id: "svg8",                                             是
        // width: 400,                                          否
        // height: 400,                                         否
        // TriangleWidth: 30, //暂时代表所有的宽度                否 
        // polygonGap: 35, //每个多边形的间隙                     否   
        // polygonHeight: 35, //多边形高度                       否       
      },
      color: [                                                  否
        "#6F00D2",
        "red",
      ],
dataList: [                                                 //  右侧标签  是  name 和 num   随便一个也行                
        { name: "火灾事件1231aw", num: "40" }, 
        // { name: "消防事件", num: "60" },
        // { name: "刑事案件", num: "10" },
        // { name: "一般事件", num: "30" },
        // { name: "测试事件", num: "30" },
        // { name: "A事件", num: "44" },
      ],
-->
<template>
  <svg :id="config.id" ref="svgRef" width="100%" height="100%" />
</template>

<script>
import * as d3 from "d3";
export default {
  methods: {
    init() {
      let width = this.config.width ? this.config.width : 400; //svg  宽
      let height = this.config.height ? this.config.height : 400; //  svg  高
      this.svg = d3.select("#" + this.config.id);
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
      //鼠标放上弹框
      this.tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "svg_pyramid_tooltip"); //用于css设置类样式
      this.tooltip_span = d3
        .select("body")
        .append("span")
        .attr("class", "svg_pyramid_tooltip_span"); //用 于css设置类样式
      //三角形
      //如果是最后一个那么画三角形
      this.rounded(
        width,
        TriangleCentreY +
          slant +
          (TriangleCentreY - TriangleCentreY - TriangleWidth),
        this.color[0]
      );
      //三角形
      this.drawTriangle(
        this.svg,
        CentreX,
        TriangleCentreY,
        TriangleWidth + 5,
        slant,
        this.color[0],
        this.dataList[0]
      );
      //用来体现立体感的中间线条
      this.drawHexagonLine(
        this.svg,
        CentreX,
        TriangleCentreY,
        CentreX,
        TriangleCentreY - TriangleWidth * 1.4 - 8
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
        this.dataLength(this.dataList[0].name ? this.dataList[0].name : "") +
          " " +
          (this.dataList[0].num ? this.dataList[0].num : "")
      );
      this.dataList.forEach((item, index) => {
        if (index > 0) {
          //如果不是最后一个绘制多边形
          //多边形
          //标签右侧的圆
          this.rounded(
            width,
            TriangleCentreY +
              (index - 1) * polygonGap +
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
              2,
            this.color[index + 1]
          );
          //右侧标签
          this.drawTable(
            this.svg,
            width * 0.7 + textX,
            TriangleCentreY +
              (index - 1) * polygonGap +
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
            this.dataLength(item.name ? item.name : "") +
              " " +
              (item.num ? item.num : "")
          );
          //多边形右侧线条
          this.drawLine(
            this.svg,
            CentreX + polygonWidth + (index - 1) * 10 + size + size,
            TriangleCentreY +
              (index - 1) * polygonGap +
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
              (index - 1) * polygonGap +
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
            polygonWidth + (index - 1) * 10,
            TriangleCentreY + (index - 1) * polygonGap,
            slant,
            size,
            polygonHeight,
            gap,
            this.color[index + 1],
            item
          );
          //多边形中间用来体现立体感的线条
          //中间线条
          this.drawHexagonLine(
            this.svg,
            CentreX,
            TriangleCentreY + (index - 1) * polygonGap + gap + polygonHeight,
            CentreX,
            TriangleCentreY + (index - 1) * polygonGap + (slant + gap) * nums
          );
          //右侧线条
          this.drawHexagonLine(
            this.svg,
            CentreX,
            TriangleCentreY + (index - 1) * polygonGap + (slant + gap) * nums,
            CentreX + polygonWidth + size + (index - 1) * 10,
            TriangleCentreY + slant + gap - 1 + (index - 1) * polygonGap
          );
          //左侧线条
          this.drawHexagonLine(
            this.svg,
            CentreX,
            TriangleCentreY + (index - 1) * polygonGap + (slant + gap) * nums,
            CentreX - polygonWidth - size - (index - 1) * 10,
            TriangleCentreY + slant + gap - 1 + (index - 1) * polygonGap
          );
        }
      });
    },

    //标签的封装
    drawTable(svg, x, y, text) {
      svg
        .append("text")
        .text(text ? text : "")
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
      value
    ) {
      let that = this;
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
        .style("opacity", 0.4)
        .on("mouseover", function(d) {
          //标签
          that.tooltipTbale(value, d, that.tooltip, that.tooltip_span, color);
          d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
          that.tooltip.style("opacity", 0);
          that.tooltip_span.style("opacity", 0);
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
        .attr("stroke", "#333")
        .style("opacity", 0.1);
    },
    //线条的封装  右侧虚线
    drawLine(svg, x1, y1, x2, y2) {
      svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "#f8f8f8")
        .attr("stroke-width", "1px")
        .style("stroke-dasharray", "5,3");
    },
    //顶部三角形封装
    drawTriangle(
      svg,
      CentreX,
      TriangleCentreY,
      TriangleWidth,
      slant,
      color,
      value
    ) {
      let that = this;
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
          that.tooltipTbale(value, d, that.tooltip, that.tooltip_span, color);
          d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
          that.tooltip.style("opacity", 0);
          that.tooltip_span.style("opacity", 0);
          d3.select(this).style("opacity", 0.4);
        })
        .attr({
          "stroke-width": 1,
          "shape-rendering": "crispedges",
        });
    },
    //右侧小圆
    rounded(width, Y, color) {
      //右侧小圆
      this.svg
        .append("circle")
        .attr("cx", width * 0.7 + 10)
        .attr("cy", Y)
        .attr("fill", color)
        .attr("r", 3);
    },
    //鼠标放上标签
    tooltipTbale(value, d, tooltip, tooltip_span, color) {
      tooltip
        .html(value.name ? value.name : value.num)
        .style("left", d.clientX + 30 + "px")
        .style("top", d.clientY - 20 + "px")
        .style("background", color)
        .style("opacity", 1);
      tooltip_span
        .style("left", d.clientX + 24 + "px")
        .style("top", d.clientY - 15 + "px")
        .style("border-right", "8px solid " + color + "")
        .style("opacity", 1);
    },
    //排序，数量多的放在下面
    againsTsortKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? 1 : x < y ? -1 : 0;
      });
    },
    //对超出文字进行处理
    dataLength(item) {
      if (item.length > 4) {
        item = item.substring(0, 4).concat("...");
      }
      return item;
    },
  },
  mounted() {
    this.init();
  },
  created() {
    //排序
    this.againsTsortKey(this.dataList, "num");
  },
  props: {
    config: {
      type: Object,
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
      tooltip: null, //鼠标放上标签
      tooltip_span: null, //鼠标放上标签
      svg: null,
      TriangleData: [], //三角形数据
    };
  },
};
</script>

<style lang="scss">
//标签是在最外层
.svg_pyramid_tooltip {
  min-width: 30px;
  height: 20px;
  position: absolute;
  top: 0;
  opacity: 0;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  padding: 4px 8px;
  font-size: 12px;
  color: #fff;
}
.svg_pyramid_tooltip_span {
  display: inline-block;
  width: 0;
  height: 0;
  border-right: 8px solid cyan;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  position: absolute;
  opacity: 0;
}
</style>
