import { useTheme } from "hooks/useTheme";
import { Moon, Sun } from "preact-feather";

const ThemeToggler = () => {
  const { theme, toggle } = useTheme();
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 click-vivid"
    >
      <Icon size={24} />
    </button>
  );
};

export default ThemeToggler;
