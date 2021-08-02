import React, { useState } from 'react';
import SingleColor from './bdaydata';
import Values from 'values.js';
import './bday.css'
const Birthday = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#2980b9').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`${error ? 'error' : null}`}
            placeholder="#2980b9"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default Birthday;