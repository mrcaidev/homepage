import { useTheme, type Theme } from "@mrcaidev/hooks";
import { createContext, useEffect, type PropsWithChildren } from "react";

export const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
