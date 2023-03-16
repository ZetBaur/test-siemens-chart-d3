import Chart from './components/Chart';
import LineChart from './components/LineChart';
import GenerateData from './components/GenerateData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className='App'>
      {/* <LineChart data={data} setData={setData} /> */}
      <Chart data={data} setData={setData} />
      <GenerateData data={data} setData={setData} />
    </div>
  );
};

export default App;
