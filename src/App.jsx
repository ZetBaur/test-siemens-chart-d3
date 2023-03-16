import Chart from './components/Chart';
import LineChart from './components/LineChart';
import GenerateData from './components/GenerateData';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      {/* <LineChart /> */}
      <Chart />
      <GenerateData />
    </div>
  );
};

export default App;
