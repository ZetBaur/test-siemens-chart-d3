import React, { useRef, useState } from 'react';
import './generateData.css';

function GenerateData({ data, handleSubmit }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const submit = (event) => {
    event.preventDefault();

    const item = {
      name: new Date().getMilliseconds(),
      value: value * 10,
    };

    handleSubmit(item);
    setValue('');
    inputRef.current.focus();
  };

  return (
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
        {data.map((el, idx) => {
          return (
            <li key={idx}>
              <span>{el.name}</span>
              <span>{el.value}</span>

              <button>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GenerateData;
