import { MdTranslate } from "react-icons/md";
import { useLocale, useLocaleValue } from "src/hooks/locale.hook";
import { IconButton } from "../common/icon-button";

export const LocaleToggler = () => {
  const { toggle } = useLocale();
  const label = useLocaleValue("切换到中文", "Translate to English");

  return (
    <IconButton onClick={toggle} ariaLabel={label}>
      <MdTranslate size="24px" />
    </IconButton>
  );
};
