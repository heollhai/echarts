<template>
  <svg id="svg6" width="500" height="400" />
</template>

<script>
import * as d3 from "d3";
export default {
  mounted() {
    console.log(11111111111222);
    const oriData = [
      { x: "A计划", y: 20 },
      // { x: "B计划", y: 40 },
      // { x: "C计划", y: 90 },
      { x: "D计划", y: 80 },
      { x: "E计划", y: 120 },
      { x: "F计划", y: 100 },
      { x: "G计划", y: 60 },
    ];
    const [width, height] = [750, 350];

    let svg = d3
      .select("#svg6")
      .attr("width", width)
      .attr("height", height);

    let g = svg.append("g").attr("transform", "translate( 140, 40 )");

    //设置饼图的半径
    let radius = (Math.min(width, height) * 0.8) / 2;
    let arc = d3
      .arc()
      .innerRadius(70)
      .outerRadius(radius)
      .cornerRadius(10);
    console.log(g,svg,'pppppppp')
    //饼图与文字相连的曲线起点
    let pointStart = d3
      .arc()
      .innerRadius(radius)
      .outerRadius(radius);
    //饼图与文字相连的曲线终点
    let pointEnd = d3
      .arc()
      .innerRadius(radius + 30)
      .outerRadius(radius + 30);

    let drawData = d3
      .pie()
      .value(function(d) {
        return d.y;
      })
      // .sort(null)
      // .sortValues(null)
      // .startAngle(0)
      // .endAngle(Math.PI * 2)
      .padAngle(0.05)(oriData);

    let colorScale = d3.scaleOrdinal();
    console.log(drawData, colorScale);
    // .domain(d3.range(0, oriData.length))
    // .range(d3.schemeSet1);
    //
    console.log(radius,arc)
    g.append("g")
      .attr("transform", "translate( " + radius + ", " + radius + " )")
      // .attr("stroke", "steelblue")
      // .attr("stroke-width", 1)
      .selectAll("path")
      .data(drawData)
      .enter()
      .append("path")
      .attr("fill", function(d) {
        return colorScale(d.index);
      })
      .attr("d", function(d) {
        d.outerRadius = radius;
        return arc(d);
      });

    // .on("mouseover", arcTween(radius + 20, 0))
    // .on("mouseout", arcTween(radius, 150))
    // .transition()
    // .duration(2000)
    // .attrTween("d", function(d) {
    //   //初始加载时的过渡效果
    //   let fn = d3.interpolate(
    //     {
    //       endAngle: d.startAngle,
    //     },
    //     d
    //   );
    //   return function(t) {
    //     return arc(fn(t));
    //   };
    // });

    // function arcTween(outerRadius, delay) {
    //   // 设置缓动函数,为鼠标事件使用
    //   return function() {
    //     d3.select(this)
    //       .transition()
    //       .delay(delay)
    //       .attrTween("d", function(d) {
    //         let i = d3.interpolate(d.outerRadius, outerRadius);
    //         return function(t) {
    //           d.outerRadius = i(t);
    //           return arc(d);
    //         };
    //       });
    //   };
    // }

    // //文字层
    // let sum = d3.sum(oriData, (d) => d.y);
    // svg
    //   .append("g")
    //   .attr("transform", "translate( " + radius + ", " + radius + " )")
    //   .selectAll("text")
    //   .data(drawData)
    //   .enter()
    //   .append("text")
    //   .attr("transform", function(d) {
    //     // arc.centroid(d)将文字平移到弧的中心
    //     return (
    //       "translate(" +
    //       arc.centroid(d) +
    //       ") " +
    //       //rotate 使文字旋转扇形夹角一半的位置(也可不旋转)
    //       "rotate(" +
    //       (-90 +
    //         ((d.startAngle + (d.endAngle - d.startAngle) / 2) * 180) /
    //           Math.PI) +
    //       ")"
    //     );
    //   })
    //   //文字开始点在文字中间
    //   .attr("text-anchor", "middle")
    //   //文字垂直居中
    //   .attr("dominant-baseline", "central")
    //   .attr("font-size", "10px")
    //   //格式化文字显示格式
    //   .text(function(d) {
    //     return ((d.data.y / sum) * 100).toFixed(2) + "%";
    //   });
    // // .attr('rotate', '30') //此设置为设置每个文字中字符的旋转，上面的旋转是以文字为一个整体的旋转

    //图例legend
    // let legend = g
    //   .append("g")
    //   .attr("transform", "translate( " + radius * 2.5 + ", 0 )")
    //   .selectAll("g")
    //   .data(drawData)
    //   .enter()
    //   .append("g")
    //   .attr("transform", function(d, i) {
    //     return "translate(0," + i * 20 + ")";
    //   });

    // legend
    //   .append("rect")
    //   .attr("width", 27)
    //   .attr("height", 18)
    //   .attr("fill", function(d) {
    //     return colorScale(d.index);
    //   });
    // legend
    //   .append("text")
    //   .text(function(d) {
    //     return d.data.x;
    //   })
    //   .style("font-size", 10)
    //   .attr("y", "1em")
    //   .attr("x", "3em")
    //   .attr("dy", 3);
    console.log(radius, pointStart, pointEnd);
    //曲线层
    g.append("g")
      .attr("transform", "translate( " + radius + ", " + radius + " )")
      .selectAll("path")
      .data(drawData)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .linkHorizontal()
          .source(function(d) {
            return pointStart.centroid(d);
          })
          .target(function(d) {
            return pointEnd.centroid(d);
          })
      )
      .style("stroke", "#999")
      .style("stroke-width", 1)
      .attr("fill", "none");

    //饼图外面的文字
    g.append("g")
      .attr("transform", "translate( " + radius + ", " + radius + " )")
      .selectAll("path")
      .data(drawData)
      .enter()
      .append("text")
      .text(function(d) {
        return d.data.x;
      })
      .attr("x", function(d) {
        return pointEnd.centroid(d)[0];
      })
      .attr("y", function(d) {
        return pointEnd.centroid(d)[1];
      })
      .style("font-size", 10)
      .attr("text-anchor", function(d) {
        if (d.startAngle > Math.PI) {
          return "end";
        }
      })
      .attr("dominant-baseline", function(d) {
        if (d.index === 4) {
          return "hanging";
        }
      });
  },
};
</script>

<style></style>
