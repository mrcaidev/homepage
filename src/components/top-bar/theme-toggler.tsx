import { FiMoon, FiSun } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import { useTheme, useThemeValue } from "src/hooks/theme.hook";

export const ThemeToggler = () => {
  const { toggle } = useTheme();
  const icon = useThemeValue(<FiMoon size="24px" />, <FiSun size="24px" />);
  const label = useLocaleValue("Toggle theme", "切换主题");

  return (
    <button
      onClick={toggle}
      aria-label={label}
      className="h-fit p-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 transition-colors"
    >
      {icon}
    </button>
  );
};
