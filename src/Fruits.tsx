import { useLocalStorage } from "./useLocalStorage";

const fruits = [
  "apple",
  "orange",
  "strawberry",
  "banana",
  "blueberry",
  "pomello",
] as const;
type Fruit = (typeof fruits)[number];

const fruitsList: Array<IFruitData> = [
  {
    name: "apple",
    description: "Medium and round",
  },
  {
    name: "orange",
    description: "Orange and juicy",
  },
  {
    name: "strawberry",
    description: "Red and full of tiny seeds",
  },
  {
    name: "banana",
    description: "Yellow and rich in potassium",
  },
  {
    name: "blueberry",
    description: "Beagles love blueberries",
  },
  {
    name: "pomello",
    description: "Rind makes a good hat",
  },
];

interface IFruitData {
  name: Fruit;
  description: string;
}

export const Fruits = () => {
  const { data: fruit, persist } = useLocalStorage<IFruitData>(
    "fruits",
    fruitsList[0],
    "1.0.1"
  );

  return (
    <div className="Fruits">
      <div>Current Fruit:</div>
      <div>
        {fruit.name}: {fruit.description}
      </div>
      <div>
        <button
          onClick={() =>
            persist(
              fruitsList[
                (fruitsList.findIndex((f) => f.name === fruit.name) + 1) %
                  fruitsList.length
              ]
            )
          }
        >
          Next Fruit
        </button>
      </div>
    </div>
  );
};
