import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage";
import { useMediaQuery } from "./use-media-query";

const MEDIA_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_THEME_KEY = "theme";

export type ColorMode = "light" | "dark";

/**
 * Use current color mode.
 * Priority level: User selected > OS preference > default dark.
 *
 * @returns Current color mode, and utility functions.
 */
export function useColorMode() {
  // User OS mode.
  const isDarkPreferred = useMediaQuery(MEDIA_QUERY);
  const osMode = isDarkPreferred ? "dark" : "light";
  // User selected mode.
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>(
    LOCAL_STORAGE_THEME_KEY,
    osMode
  );

  // When color mode is changed, update `<html>` attribute.
  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  // Utility functions.
  const toggle = () => {
    setColorMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return { colorMode, toggle };
}
