import React, { useState } from 'react';

const interactive = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Compteur de clics</h2>
      <p>Nombre de clics : {count}</p>
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
};

export default interactive;


