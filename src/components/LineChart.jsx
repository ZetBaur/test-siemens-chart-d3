import React, { useRef } from 'react';
import * as d3 from 'd3';

import './chart.css';

function LineChart() {
  //   const data = [55, 77, 98, 63, 35, 27, 54];

  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  const width = windowWidth.current - 350;
  const height = 400;

  const data = [
    [0, 10],
    [5, 50],
    [15, 75],
    [55, 110],
    [75, 10],
    [100, 10],
  ];

  let x = d3.scaleLinear().domain([0, 140]).range([0, width]);

  let line = d3
    .line()
    .x((d) => x(d[0]))
    .y((d) => height - d[1]);

  let d = line(data);

  return (
    <div className='chart'>
      <svg width={width} height={height}>
        <path d={d} fill='none' stroke='gray'></path>
      </svg>
    </div>
  );
}

export default LineChart;
