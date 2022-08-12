import { useKeydown } from "@mrcaidev/hooks";
import { forwardRef, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "src/contexts/theme.context";

export const ThemeToggler = forwardRef<HTMLButtonElement, {}>((_, ref) => {
  const { theme, toggle } = useContext(ThemeContext);
  const ThemeIcon = theme === "light" ? FiMoon : FiSun;
  useKeydown("KeyT", toggle);

  return (
    <button
      ref={ref}
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-dim hover:text-highlight"
    >
      <ThemeIcon size="24px" />
    </button>
  );
});

ThemeToggler.displayName = "ThemeToggler";
