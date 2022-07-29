import contacts from "src/data/contacts.json";
import { useLocaleValue } from "src/hooks/locale.hook";
import footerI18n from "src/i18n/footer.json";
import { Link } from "../common/link";
import { Column } from "./column";

export const Contacts = () => {
  const titleText = useLocaleValue(
    footerI18n.en.contactTitle,
    footerI18n.zh.contactTitle
  );
  const contactsText = useLocaleValue(
    footerI18n.en.contacts,
    footerI18n.zh.contacts
  );

  return (
    <Column title={titleText}>
      {Object.entries(contactsText).map(([id, text]) => (
        <li key={id}>
          <Link
            href={contacts[id as keyof typeof contacts]}
            className="p-1 hover:text-slate-600 hover:dark:text-slate-400 font-medium transition-colors"
          >
            {text}
          </Link>
        </li>
      ))}
    </Column>
  );
};
