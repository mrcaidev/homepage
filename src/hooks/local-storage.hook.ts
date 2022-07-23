import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const currentValue = getStorage(key, defaultValue);
    setValue(currentValue);
  }, [key, defaultValue]);

  const setValueWrapper: Dispatch<SetStateAction<T>> = (action) => {
    const newValue = action instanceof Function ? action(value) : action;
    setValue(newValue);
    setStorage(key, newValue);
  };

  return { value, set: setValueWrapper };
}

function getStorage<T>(key: string, defaultValue: T) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : (JSON.parse(value) as T);
  } catch (err) {
    console.error(err);
    return defaultValue;
  }
}

function setStorage(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
}
