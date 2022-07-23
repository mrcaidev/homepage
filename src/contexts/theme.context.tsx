import { createContext, useEffect, type PropsWithChildren } from "react";
import { useLocalStorage } from "src/hooks/local-storage.hook";
import { useMediaQuery } from "src/hooks/media-query.hook";

const PREFER_DARK_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_THEME_KEY = "theme";

export type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  // OS preferrence.
  const isDarkPreferred = useMediaQuery(PREFER_DARK_QUERY);
  const osTheme: Theme = isDarkPreferred ? "dark" : "light";

  // User specification.
  const { value: userTheme, set: setUserTheme } = useLocalStorage<Theme>(
    LOCAL_STORAGE_THEME_KEY,
    osTheme
  );

  // User > OS.
  const theme = userTheme ?? osTheme;

  // Tailwind dark mode class.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => {
    setUserTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
