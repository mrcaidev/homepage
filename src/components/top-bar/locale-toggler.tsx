import { MdTranslate } from "react-icons/md";
import { useLocale, useLocaleValue } from "src/hooks/locale.hook";

export const LocaleToggler = () => {
  const { toggle } = useLocale();
  const label = useLocaleValue("切换到中文", "Translate to English");

  return (
    <button
      onClick={toggle}
      aria-label={label}
      className="h-fit p-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 transition-colors"
    >
      <MdTranslate size="24px" />
    </button>
  );
};
