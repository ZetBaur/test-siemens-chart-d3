import React, { useRef, useState } from 'react';
import './generateData.css';

function GenerateData({ data, setData }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, parseInt(value * 100)]);
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className='generate-data'>
      <h1>Data</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type='number'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <ul>
        {data.map((el, idx) => {
          return (
            <li key={idx}>
              <span>{el / 100}</span>
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GenerateData;
