import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import './chart.css';

function LineChart() {
  //   const data = [55, 77, 98, 63, 35, 27, 54];

  const svgRef = useRef(null);

  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  const width = windowWidth.current - 350;
  const height = 400;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', 500)
      .attr('y1', 0)
      .attr('y2', 50)
      .attr('stroke', 'black');
  }, []);

  return (
    <div className='chart'>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
}

export default LineChart;
