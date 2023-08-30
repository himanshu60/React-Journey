import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const double = () => {
    setCount(count * 2);
  };

  return (
    <>
      <div>
        <h2 data-testid="counter-header">Counter</h2>
        <h3 data-testid="count">{count}</h3>
        <button onClick={increment} data-testid="add-btn">
          +
        </button>
        <button
          onClick={decrement}
          disabled={count <= 0}
          data-testid="subtract-btn"
        >
          -
        </button>
        <button onClick={double} data-testid="double-btn">
          Double
        </button>
      </div>
    </>
  );
}
