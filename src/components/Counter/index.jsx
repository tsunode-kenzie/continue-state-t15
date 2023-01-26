import { useState } from "react";

import "./styles.css";

export function Counter() {
  const [counter, setCounter] = useState(2);

  console.log("Passei aqui");

  function add() {
    setCounter(counter + 1);
  }

  // Object.is

  function sub() {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <p>{counter}</p>
      <div>
        <button type="button" onClick={sub}>
          -
        </button>
        <button type="button" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
