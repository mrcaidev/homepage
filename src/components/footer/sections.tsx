import { useLocaleValue } from "src/hooks/locale.hook";
import footerI18n from "src/i18n/footer.json";
import sectionsI18n from "src/i18n/sections.json";
import { Link } from "../common/link";
import { Column } from "./column";

export const Sections = () => {
  const titleText = useLocaleValue(
    footerI18n.en.sectionTitle,
    footerI18n.zh.sectionTitle
  );
  const sectionsText = useLocaleValue(sectionsI18n.en, sectionsI18n.zh);

  return (
    <Column title={titleText}>
      {Object.entries(sectionsText).map(([id, text]) => (
        <li key={id}>
          <Link
            href={"#" + id}
            className="p-1 hover:text-slate-600 hover:dark:text-slate-400 font-medium transition-colors"
          >
            {text}
          </Link>
        </li>
      ))}
    </Column>
  );
};
