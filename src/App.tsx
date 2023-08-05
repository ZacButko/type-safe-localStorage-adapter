import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="Counter">
      <div className="Counter-text">Count: {count}</div>
      <div className="Counter-button">
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>localStorage Adapter</h1>
      <h2>App Data</h2>
      <Counter />
      <h2>Tools</h2>
      <button className="AppReset" onClick={() => location.reload()}>
        Reset all app data
      </button>
    </div>
  );
}
