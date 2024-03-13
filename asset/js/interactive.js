import React, { useState } from 'react';

const interactive = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Click counter</h2>
      <p>Number of clicks : {count}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default interactive;


