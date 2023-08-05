import { useState } from "react";

export const useLocalStorage = <T>(storageName: string, defaultValue: T) => {
  const initialData =
    (JSON.parse(window.localStorage.getItem(storageName) as string) as T) ??
    defaultValue;
  const [data, setData] = useState<T>(initialData);

  const persist = (newData: T) => {
    setData(newData);
    window.localStorage.setItem(storageName, JSON.stringify(newData));
  };

  return { data, persist };
};
