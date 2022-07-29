import { forwardRef, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "src/contexts/theme.context";
import { useLocaleValue } from "src/hooks/locale.hook";
import { IconButton } from "../common/icon-button";

export const ThemeToggler = forwardRef<HTMLButtonElement, {}>((_, ref) => {
  const { theme, toggle } = useContext(ThemeContext);
  const Icon = theme === "light" ? FiMoon : FiSun;
  const label = useLocaleValue("Toggle theme", "切换主题");

  return (
    <IconButton ref={ref} onClick={toggle} ariaLabel={label}>
      <Icon size="24px" />
    </IconButton>
  );
});

ThemeToggler.displayName = "ThemeToggler";
