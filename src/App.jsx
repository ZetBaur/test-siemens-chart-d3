import { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const App = () => {
  const initialData = [
    {
      date: new Date().getMilliseconds(),
      value: 0,
    },
  ];

  const [chartdata, setChartdata] = useState(initialData);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const svgRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);

  const submit = (event) => {
    event.preventDefault();
    const item = {
      date: new Date().getMilliseconds(),
      value: +value,
    };
    if (value) setChartdata([...chartdata, item]);
    setValue('');
    inputRef.current.focus();
  };

  const removeItem = (index) => {
    setChartdata(chartdata.filter((el, idx) => idx !== index));
  };

  useEffect(() => {
    inputRef.current.focus();

    const w = windowWidth.current - 350;
    const h = 150;

    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h * 2)
      .style('overflow', 'visible');

    const xScale = d3
      .scalePoint()
      .domain(chartdata.map((d) => d.date))
      .range([0, w]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartdata, (d) => d.value)])
      .range([h, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(d3.curveLinear);

    svg
      .selectAll()
      .data(chartdata)
      .join('path')
      .attr('d', (d) => line(d.value))
      .attr('fill', 'none')
      .attr('stroke', 'black');

    d3.select(svgRef.current)
      .select('path')
      .attr('d', (value) => line(chartdata))
      .attr('fill', 'none')
      .attr('stroke', 'black');

    d3.selectAll('text').remove();

    var texts = svg.selectAll().data(chartdata).enter().append('text');

    texts
      .attr('x', (d, i) => xScale(parseInt(d.date)))
      .attr('y', (d) => yScale(d.value))
      .text((d) => parseInt(d.value));
  }, [chartdata]);

  return (
    <div className='App'>
      <div className='chart'>
        <svg ref={svgRef}></svg>
      </div>
      <div className='generate-data'>
        <h1>Data</h1>
        <form onSubmit={submit}>
          <input
            ref={inputRef}
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <ul>
          {chartdata.map((el, idx) => {
            return (
              <li key={idx}>
                <span>{el.date}</span>
                <span>{el.value}</span>
                <button onClick={() => removeItem(idx)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
