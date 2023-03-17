import { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import './chart.css';

function Dthree() {
  const initialData = [
    {
      name: new Date(),
      value: 10,
    },
    {
      name: new Date(),
      value: 3,
    },
    {
      name: new Date(),
      value: 9,
    },
  ];

  const svgRef = useRef();

  //  2] Setup random data generator and SVG canvas -//

  const newData = () =>
    chartdata.map(function (d) {
      // d.value = Math.floor(Math.random() * (maxValue + 1));

      d.value = new Date();
      return d;
    });

  const width = 500;
  const height = 150;
  const padding = 20;
  const maxValue = 20; // Maximum data value

  const [chartdata, setChartdata] = useState(initialData);

  useEffect(() => {
    //  3] Setup functions for Scales ------------------//
    //xscales
    const xScale = d3
      .scalePoint()
      .domain(chartdata.map((d) => d.name))
      .range([0 + padding, width - padding]);

    //Yscales
    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartdata, function (d) {
          return d.value;
        }),
      ])
      .range([height - padding, 0 + padding]);

    console.log('Start - End', yScale(0), yScale(10));

    //  4] Setup functions to draw Lines ---------------//

    const line = d3
      .line()
      .x((d) => xScale(d.name))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    console.log('chart draw commands', line(chartdata));
  }, [chartdata]);

  return (
    <div className='chart'>
      <svg id='chart' ref={svgRef} viewBox='0 0 500 150'>
        <path d='' fill='none' stroke='white' strokeWidth='5' />
      </svg>

      <p>
        <button type='button' onClick={() => setChartdata(newData())}>
          Click to refresh expenses data
        </button>
      </p>
    </div>
  );
}

export default Dthree;
