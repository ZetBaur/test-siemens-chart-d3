import React, { useRef } from 'react';
import './generateData.css';

function GenerateData({ data, setData }) {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <div className='generate-data'>
      <h1>Data</h1>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' />
      </form>

      <ul>
        {data.map((el) => {
          return (
            <li key={el}>
              <span>{el}</span>
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GenerateData;
