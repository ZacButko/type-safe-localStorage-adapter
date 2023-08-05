import { useLocalStorage } from "./useLocalStorage";

const fruits = [
  "apple",
  "orange",
  "strawbery",
  "banana",
  "blueberry",
  "pomello",
] as const;
type Fruit = (typeof fruits)[number];

export const Fruits = () => {
  const { data: fruit, persist } = useLocalStorage<Fruit>("fruits", fruits[0]);

  return (
    <div className="Fruits">
      <div>Current Fruit: {fruit}</div>
      <div>
        <button
          onClick={() =>
            persist(fruits[(fruits.indexOf(fruit) + 1) % fruits.length])
          }
        >
          Next Fruit
        </button>
      </div>
    </div>
  );
};
