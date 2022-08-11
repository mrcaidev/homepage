import { useRouter } from "next/router";
import navLinks from "src/data/nav-links.json";
import { Link } from "../common/link";

export const NavLinks = () => {
  const { asPath } = useRouter();

  return (
    <>
      {navLinks.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          className={`px-4 py-2 rounded-md hover:bg-dim font-semibold text-lg ${
            asPath.endsWith(href) ? "text-highlight" : "text-dim"
          } hover:text-highlight text-center `}
        >
          {name}
        </Link>
      ))}
    </>
  );
};
