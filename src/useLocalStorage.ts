import { useState } from "react";
import { APP_NAME } from "./App";

interface IStorageItem<T> {
  version: string;
  data: T;
}

export const useLocalStorage = <T>(
  storageName: string,
  defaultValue: T,
  version = "1.0.0"
) => {
  const fullStorageName = `${APP_NAME}::${storageName}`;
  let initialData = defaultValue;
  try {
    const localStorageData = JSON.parse(
      window.localStorage.getItem(fullStorageName) as string
    ) as IStorageItem<T>;
    if (
      localStorageData &&
      localStorageData.version === version &&
      localStorageData.data
    ) {
      initialData = localStorageData.data;
    }
  } catch (e) {
    console.error(`Failed to parse localStorage of storage ${fullStorageName}`);
  }

  const [data, setData] = useState<T>(initialData);

  const persist = (newData: T) => {
    setData(newData);
    const newStorageData: IStorageItem<T> = { version: version, data: newData };
    window.localStorage.setItem(
      fullStorageName,
      JSON.stringify(newStorageData)
    );
  };

  return { data, persist };
};

export const resetAppData = () => {
  Object.keys(window.localStorage).forEach((key) => {
    if (key.startsWith(`${APP_NAME}::`)) {
      window.localStorage.removeItem(key);
    }
  });
};
