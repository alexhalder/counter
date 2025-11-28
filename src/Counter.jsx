import React, { useState } from "react";
import "./Counter.css"; // <-- Add this

export default function CounterUI() {
  const [count, setCount] = useState(0);

  const handleReset = () => setCount(0);
  const handleIncrease = () => setCount(prev => (prev + 25 <= 200 ? prev + 25 : 200));
  const handleDecrease = () => setCount(prev => (prev - 15 >= 0 ? prev - 15 : 0));

  return (
    <div className="counter-wrapper">
      <div className="counter-box">
        <title>Ax-Counter</title>
        <h1 className="text-title">Ax-Counter</h1>

        <div className="counter-value">{count}</div>

        <div className="button-group">
          <button className="btn btn-red" onClick={handleDecrease}>Discrease -15</button>
          <button className="btn btn-gray" onClick={handleReset}>Reset</button>
          <button className="btn btn-green" onClick={handleIncrease}>Increase +25</button>
        </div>
      </div>
    </div>
  );
}
