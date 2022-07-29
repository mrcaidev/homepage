import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const currentValue = getStorage(key, defaultValue);
    setValue(currentValue);
  }, [key, defaultValue]);

  const setValueWrapper: typeof setValue = (action) => {
    const newValue = action instanceof Function ? action(value) : action;
    setValue(newValue);
    setStorage(key, newValue);
  };

  return { value, set: setValueWrapper };
};

const getStorage = <T>(key: string, defaultValue: T) => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : (JSON.parse(value) as T);
  } catch (err) {
    console.error(err);
    return defaultValue;
  }
};

const setStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};
