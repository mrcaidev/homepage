import { SetStateAction, useEffect, useState } from "react";

/**
 * Use local storage value.
 *
 * @param key Key of local storage item.
 * @param defaultValue Default value if the key does not exist.
 * @returns Value of key in local storage, and a function to update it.
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  // Once the code lands on client side,
  // fetch value from local storage, and update state.
  useEffect(() => {
    setValue(getStorage(key, defaultValue));
  }, []);

  // Trigger action to update both state and local storage.
  const setValueWrapper = (action: SetStateAction<T>) => {
    const newValue = action instanceof Function ? action(value) : action;
    setValue(newValue);
    setStorage(key, newValue);
  };

  return [value, setValueWrapper] as const;
}

/**
 * Get a value in local storage.
 *
 * @param key Key of local storage item.
 * @param defaultValue Default value if the key does not exist.
 * @returns Value of key in local storage.
 */
function getStorage<T>(key: string, defaultValue: T) {
  try {
    const value = localStorage.getItem(key);

    // If the key does not exist.
    if (!value) {
      return defaultValue;
    }

    // Deserialize value as type T.
    switch (typeof defaultValue) {
      case "bigint":
        return BigInt(value) as any as T;
      case "boolean":
      case "number":
      case "object":
        return JSON.parse(value) as T;
      case "string":
      case "undefined":
        return value as any as T;
      default:
        throw new Error("Unserializable type:" + typeof defaultValue);
    }
  } catch (err) {
    console.error(err);
    return defaultValue;
  }
}

/**
 * Set a new value in local storage.
 *
 * @param key Key of local storage item.
 * @param value New value to set.
 */
function setStorage(key: string, value: unknown) {
  try {
    switch (typeof value) {
      case "bigint":
        localStorage.setItem(key, value.toString());
        return;
      case "boolean":
      case "number":
      case "object":
        localStorage.setItem(key, JSON.stringify(value));
        return;
      case "string":
        localStorage.setItem(key, value);
        return;
      case "undefined":
        localStorage.removeItem(key);
        return;
      default:
        throw new Error("Unserializable type:" + typeof value);
    }
  } catch (err) {
    console.error(err);
  }
}
