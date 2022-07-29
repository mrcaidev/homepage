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
          className="px-4 py-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 text-lg text-center font-semibold transition-colors"
        >
          {text}
        </Link>
      ))}
    </>
  );
};
