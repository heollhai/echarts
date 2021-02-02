import * as d3 from 'd3';

export const draw = (
  id,
  data,
  x /* center x */ ,
  y /* center y */ ,
  rx /* radius x */ ,
  ry /* radius y */ ,
  h /* height */ ,
  ir /* inner radius */
) => {

  const dataset = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    })(data);



  const slices = d3
    .select(`#${id}`)
    .append('g')
    .attr('transform', `translate(${x},${y})`)
    .attr('class', 'slices');

  // 环形内曲面
  slices
    .selectAll('.innerSlice')
    .data(dataset)
    .enter()
    .append('path')
    .attr('class', 'innerSlice')
    .style('fill', function (d) {
      return d3.hsl(d.data.color1).darker(0.7);
    })
    .attr('d', function (d) {
      return pieInner(d, rx + 0.5, ry + 0.5, h, ir);
    })
    .each(function (d) {
      this._current = d;
    });

  let radius = 45;
  console.log(radius, 'radius;;;;;;')

  //饼图与文字相连的曲线起点
  let pointStart = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius);
  //饼图与文字相连的曲线终点
  let pointEnd1 = d3
    .arc()
    .innerRadius(radius * 1.2)
    .outerRadius(radius * 1.2);
  //饼图与文字相连的曲线终点
  // let pointEnd = d3
  //   .arc()
  //   .innerRadius(radius + 80)
  //   .outerRadius(radius + 100);


  let arc = d3
    .arc()
    .innerRadius(rx * 0.8)
    .outerRadius(rx)
    .cornerRadius(ry);
  let arc1 = d3
    .arc()
    .innerRadius(rx * 0.8)
    .outerRadius(rx * 1.2)
    .cornerRadius(ry * 1.2);
  let arc2 = d3
    .arc()
    .innerRadius(1)
    .cornerRadius(10);
  console.log(arc, arc1, arc2, pointStart, pointEnd1, '[[[[[[')
  // 上层2d平面
  // slices
  //   .select(`#${id}`)
  //   // .data(dataset)
  //   .enter()
  //   .append("svg")
  //   .attr("width", 10)
  //   .attr("height", 10)
  // slices.append("ellipse")
  //   .attr("transform", "translate( " + -radius * 4 + ", " + -radius * 2.6 + " )")
  //   .attr("cx", x)
  //   .attr("cy", y)
  //   .attr("rx", rx)
  //   .attr("ry", ry)
  //   .attr("fill", "green")
  slices
    .selectAll('.topSlice')
    .data(dataset)
    .enter()
    .append('path')
    // .attr("transform", "rotate(150)")
    .attr('class', 'topSlice')
    .style('fill', function (d) {
      return d.data.color;
    })
    .style('stroke', function (d) {
      return d.data.color;
    })
    // .attr("d", function (d) {
    //   return arc(d);
    // })
    .attr('d', function (d) {
      console.log(pieTop(d, rx, ry, 0.8), ' pieTop(d, rx, ry, 0.8)')
      return pieTop(d, rx, ry, 0.8);
    })
    .each(function (d) {
      this._current = d;
    });
  // 侧面曲面
  slices
    .selectAll('.outerSlice')
    .data(dataset)
    .enter()
    .append('path')
    .attr('class', 'outerSlice')
    .style('fill', function (d) {
      return d3.hsl(d.data.color1).darker(0.7);
    })
    .attr('d', function (d) {
      return pieOuter(d, rx - 0.5, ry - 0.5, h);
    })
    .each(function (d) {
      this._current = d;
    });

  //文字
  slices
    .selectAll('.percent')
    .data(dataset)
    .enter()
    .append('text')
    .attr('class', 'percent')
    //文字居中左右
    .attr('text-anchor', 'middle')
    //文字垂直居中
    .attr('dominant-baseline', 'central')
    .attr('font-size', '12px')
    .attr('x', function (d) {
      return 2 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle));
    })
    .attr('y', function (d) {
      return 2.3 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle));
    })
    .text(getPercent)
    .each(function (d) {
      this._current = d;
    });


  //曲线
  slices.append("g")
    .selectAll("path")
    .data(dataset)
    .enter()
    .append("path")
    .attr(
      "d",
      d3
      .linkHorizontal()
      .source(function (d) {
        console.log(pointStart.centroid(d), '--d')
        return arc.centroid(d);
      })
      .target(function (d) {
        console.log(pointEnd1.centroid(d), ';;;')
        return pointEnd1.centroid(d);
      })
    )
    .style("stroke", "#999")
    .style("stroke-width", 1)
    .attr("fill", "none");

};




// 内曲面
function pieInner(d, rx, ry, h, ir) {
  const startAngle = d.startAngle < Math.PI ? Math.PI : d.startAngle;
  const endAngle = d.endAngle < Math.PI ? Math.PI : d.endAngle;

  const sx = ir * rx * Math.cos(startAngle);
  const sy = ir * ry * Math.sin(startAngle);
  const ex = ir * rx * Math.cos(endAngle);
  const ey = ir * ry * Math.sin(endAngle);

  const ret = [];
  ret.push(
    'M',
    sx,
    sy,
    'A',
    ir * rx,
    ir * ry,
    '0 0 1',
    ex,
    ey,
    'L',
    ex,
    h + ey,
    'A',
    ir * rx,
    ir * ry,
    '0 0 0',
    sx,
    h + sy,
    'z'
  );
  return ret.join(' ');
}

function pieTop(d, rx, ry, ir) {
  if (d.endAngle - d.startAngle === 0) return 'M 0 0';
  const sx = rx * Math.cos(d.startAngle);
  const sy = ry * Math.sin(d.startAngle);
  const ex = rx * Math.cos(d.endAngle);
  const ey = ry * Math.sin(d.endAngle);

  const ret = [];
  ret.push(
    'M',
    sx,
    sy,
    'A',
    rx,
    ry,
    '0',
    d.endAngle - d.startAngle > Math.PI ? 1 : 0,
    '1',
    ex,
    ey,
    'L',
    ir * ex,
    ir * ey
  );
  ret.push(
    'A',
    ir * rx,
    ir * ry,
    '0',
    d.endAngle - d.startAngle > Math.PI ? 1 : 0,
    '0',
    ir * sx,
    ir * sy,
    'z'
  );
  return ret.join(' ');
}
// 外曲面算法
function pieOuter(d, rx, ry, h) {
  const startAngle = d.startAngle > Math.PI ? Math.PI : d.startAngle;
  const endAngle = d.endAngle > Math.PI ? Math.PI : d.endAngle;
  const sx = rx * Math.cos(startAngle);
  const sy = ry * Math.sin(startAngle);
  const ex = rx * Math.cos(endAngle);
  const ey = ry * Math.sin(endAngle);
  const ret = [];
  ret.push(
    'M',
    sx,
    h + sy,
    'A',
    rx,
    ry,
    '0 0 1',
    ex,
    h + ey,
    'L',
    ex,
    ey,
    'A',
    rx,
    ry,
    '0 0 0',
    sx,
    sy,
    'z'
  );
  return ret.join(' ');
}

function getPercent(d) {
  return d.endAngle - d.startAngle > 0.2 ?
    `${Math.round((1000 * (d.endAngle - d.startAngle)) / (Math.PI * 2)) / 10}%` :
    '';
}
export const transition = (id, data, rx, ry, h, ir) => {
  class arcTweenInner {
    constructor(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return pieInner(i(t), rx + 0.5, ry + 0.5, h, ir);
      };
    }
  }
  class arcTweenTop {
    constructor(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return pieTop(i(t), rx, ry, ir);
      };
    }
  }
  class arcTweenOuter {
    constructor(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return pieOuter(i(t), rx - 0.5, ry - 0.5, h);
      };
    }
  }
  class textTweenX {
    constructor(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return 0.6 * rx * Math.cos(0.5 * (i(t).startAngle + i(t).endAngle));
      };
    }
  }
  class textTweenY {
    constructor(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function (t) {
        return 0.6 * rx * Math.sin(0.5 * (i(t).startAngle + i(t).endAngle));
      };
    }
  }

  const _data = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    })(data);

  d3.select(`#${id}`)
    .selectAll('.innerSlice')
    .data(_data)
    .transition()
    .duration(750)
    .attrTween('d', arcTweenInner);

  d3.select(`#${id}`)
    .selectAll('.topSlice')
    .data(_data)
    .transition()
    .duration(750)
    .attrTween('d', arcTweenTop);

  d3.select(`#${id}`)
    .selectAll('.outerSlice')
    .data(_data)
    .transition()
    .duration(750)
    .attrTween('d', arcTweenOuter);

  d3.select(`#${id}`)
    .selectAll('.percent')
    .data(_data)
    .transition()
    .duration(750)
    .attrTween('x', textTweenX)
    .attrTween('y', textTweenY)
    .text(getPercent);
};