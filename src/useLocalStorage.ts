import { useState } from "react";

interface IStorageItem<T> {
  version: string;
  data: T;
}

export const useLocalStorage = <T>(
  storageName: string,
  defaultValue: T,
  version = "1.0.0"
) => {
  let initialData = defaultValue;
  try {
    const localStorageData = JSON.parse(
      window.localStorage.getItem(storageName) as string
    ) as IStorageItem<T>;
    if (
      localStorageData &&
      localStorageData.version === version &&
      localStorageData.data
    ) {
      initialData = localStorageData.data;
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
