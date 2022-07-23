import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme.context";

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeValue<T>(light: T, dark: T) {
  const { theme } = useTheme();

  return theme === "light" ? light : dark;
}
