import { useTheme } from "@mrcaidev/hooks";
import { forwardRef, useEffect } from "react";
import { Moon, Sun } from "react-feather";

const ThemeToggler = forwardRef<HTMLButtonElement>((_, ref) => {
  const { theme, toggle } = useTheme();
  const ThemeIcon = theme === "light" ? Moon : Sun;

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="button-vivid"
    >
      <ThemeIcon size="24" />
    </button>
  );
});

ThemeToggler.displayName = "ThemeToggler";

export default ThemeToggler;
