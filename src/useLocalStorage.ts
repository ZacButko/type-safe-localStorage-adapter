import { useState } from "react";

export const useLocalStorage = <T>(storageName: string, defaultValue: T) => {
  let initialData = defaultValue;
  try {
    const localStorageData = JSON.parse(
      window.localStorage.getItem(storageName) as string
    ) as T;
    if (localStorageData) {
      initialData = localStorageData;
    }
  } catch (e) {
    console.error(`Failed to parse localStorage of storage ${storageName}`);
  }

  const [data, setData] = useState<T>(initialData);

  const persist = (newData: T) => {
    setData(newData);
    window.localStorage.setItem(storageName, JSON.stringify(newData));
  };

  return { data, persist };
};
