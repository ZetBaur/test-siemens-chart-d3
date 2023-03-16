import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const App = () => {
  const [data, setData] = useState([55, 14, 76, 85, 100, 150, 700]);
  const svgRef = useRef(null);

  const date = new Date();

  console.log('date', date.getMilliseconds());

  useEffect(() => {
    const w = 700;
    const h = 400;

    const svg = d3.select(svgRef.current).attr('width', w).attr('height', h);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleTime().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', (d) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');
  }, [data]);

  return (
    <div className='App'>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default App;
