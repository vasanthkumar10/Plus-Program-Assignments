import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>

      <input
        type="number"
        value={input}
        name="count"
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <button onClick={() => setCount(input)}>set</button>
    </div>
  );
}
