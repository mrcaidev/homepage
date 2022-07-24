import { useLocale } from "src/hooks/locale.hook";
import { Link } from "../common/link";
import navLinks from "./nav-links.json";

export const NavigationLinks = () => {
  const { locale } = useLocale();

  return (
    <>
      {navLinks.map(({ en, zh, href }) => (
        <Link
          key={href}
          href={href}
          className="px-4 py-2 rounded-md text-lg font-semibold text-center transition-bg hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700"
        >
          {locale === "en-US" ? en : zh}
        </Link>
      ))}
    </>
  );
};
