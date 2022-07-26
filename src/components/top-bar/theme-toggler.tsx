import { FiMoon, FiSun } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import { useTheme, useThemeValue } from "src/hooks/theme.hook";
import { IconButton } from "../common/icon-button";

export const ThemeToggler = () => {
  const { toggle } = useTheme();
  const Icon = useThemeValue(FiMoon, FiSun);
  const label = useLocaleValue("Toggle theme", "切换主题");

  return (
    <IconButton onClick={toggle} ariaLabel={label}>
      <Icon size="24px" />
    </IconButton>
  );
};
