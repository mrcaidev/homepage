import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage";
import { useMediaQuery } from "./use-media-query";

const MEDIA_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_THEME_KEY = "theme";

export type Theme = "light" | "dark";

/**
 * Use current theme.
 * Priority level: User selected > OS > default dark.
 *
 * @returns Current theme, and utility functions.
 */
export function useTheme() {
  // OS theme.
  const isDarkPreferred = useMediaQuery(MEDIA_QUERY);
  const osTheme = isDarkPreferred ? "dark" : "light";
  // User selected theme, default to OS theme.
  const [theme, setTheme] = useLocalStorage<Theme>(
    LOCAL_STORAGE_THEME_KEY,
    osTheme
  );

  // When theme is changed, update `<html>` attribute.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Utility functions.
  const toggle = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return { theme, toggle };
}

/**
 * Use appropriate value for current theme.
 *
 * @param light Value for light theme.
 * @param dark Value for dark theme.
 * @returns Value for current theme.
 */
export function useThemeValue<T>(light: T, dark: T) {
  const { theme } = useTheme();
  return theme === "light" ? light : dark;
}
