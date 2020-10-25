import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
  };

  function handleChange(e) {
    setCount(parseInt(e.target.value));
  }
  return (
    <div>
      <p>Initialiser la valeur :</p>
      <input id="countInit" value={count} onChange={handleChange}></input>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;