import { useLocaleValue } from "src/hooks/locale.hook";
import sectionsI18n from "src/i18n/sections.json";
import { Link } from "../common/link";

export const NavigationLinks = () => {
  const sectionsText = useLocaleValue(sectionsI18n.en, sectionsI18n.zh);

  return (
    <>
      {Object.entries(sectionsText).map(([id, text]) => (
        <Link
          key={id}
          href={"#" + id}
          className="px-4 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-sky-800 hover:dark:text-sky-200 active:text-sky-700 active:dark:text-sky-300 text-lg text-center font-semibold transition-colors"
        >
          {text}
        </Link>
      ))}
    </>
  );
};
