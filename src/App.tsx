import { Fruits } from "./Fruits";
import "./styles.css";
import { useLocalStorage } from "./useLocalStorage";

const Counter = () => {
  const { data: count, persist } = useLocalStorage<number>("count", 0);
  const increment = () => {
    persist(count + 1);
  };

  return (
    <div className="Counter">
      <div className="Counter-text">Count: {count}</div>
      <div className="Counter-button">
        <button onClick={increment}>+</button>
      </div>
      <div>{count % 2 ? "odd" : "even"}</div>
    </div>
  );
};

export default function App() {
  const resetApp = () => {
    window.localStorage.clear();
    location.reload();
  };
  return (
    <div className="App">
      <h1>localStorage Adapter</h1>
      <h2>App Data</h2>
      <div className="Widgets">
        <Counter />
        <Fruits />
      </div>
      <h2>Tools</h2>
      <button className="AppReset" onClick={resetApp}>
        Reset all app data
      </button>
    </div>
  );
}
