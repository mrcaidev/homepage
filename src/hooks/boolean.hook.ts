import { useState } from "react";

export const useBoolean = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue((value) => !value);
  const on = () => setValue(true);
  const off = () => setValue(false);

  return { value, toggle, on, off };
};
