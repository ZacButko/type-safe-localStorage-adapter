import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const initialCount =
    (JSON.parse(window.localStorage.getItem("count") as string) as number) ?? 0;
  const [count, setCount] = useState<number>(initialCount);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    window.localStorage.setItem("count", JSON.stringify(newCount));
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
  const resetApp = () => {
    window.localStorage.removeItem("count");
    location.reload();
  };
  return (
    <div className="App">
      <h1>localStorage Adapter</h1>
      <h2>App Data</h2>
      <Counter />
      <h2>Tools</h2>
      <button className="AppReset" onClick={resetApp}>
        Reset all app data
      </button>
    </div>
  );
}
