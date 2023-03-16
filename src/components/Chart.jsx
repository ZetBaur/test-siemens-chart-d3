import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './chart.css';

const Chart = ({ data }) => {
  const svgRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    let maxTick = data.reduce((acc, cur) => (cur > acc ? cur : acc), 0);

    const w = windowWidth.current - 350;
    const h = maxTick;

    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h * 2)
      .style('overflow', 'visible');

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveLinear);

    svg.append('g').attr('transform', `translate(0, ${h})`);
    svg.append('g');

    svg
      .selectAll()
      .data([data])
      .join('path')
      .attr('d', (d) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');

    var texts = svg.selectAll().data(data).enter().append('text');

    texts
      .attr('x', (d, i) => xScale(i))
      .attr('y', yScale)
      .text((d) => d);

    //---------------------
  }, [data]);

  return (
    <div className='chart'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Chart;
