import Chart from './components/Chart';
import LineChart from './components/LineChart';
import GenerateData from './components/GenerateData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([13, 21, 76, -33, 100, 55, 98, -13]);

  return (
    <div className='App'>
      {/* <LineChart /> */}
      <Chart data={data} setData={setData} />
      <GenerateData data={data} setData={setData} />
    </div>
  );
};

export default App;
