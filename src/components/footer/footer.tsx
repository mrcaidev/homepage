import Image from "next/future/image";
import logo from "public/logo.svg";
import contacts from "src/data/contacts.json";
import sections from "src/data/sections.json";
import { useLocale } from "src/hooks/locale.hook";
import { Link } from "../common/link";

export const Footer = () => {
  const { locale } = useLocale();

  return (
    <footer>
      <svg
        viewBox="0 -20 700 110"
        width="100%"
        height="110px"
        preserveAspectRatio="none"
      >
        <path
          transform="translate(0, 35)"
          d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
          className="fill-white dark:fill-black transition-[fill]"
        />
      </svg>
      <div className="px-10 py-10 bg-white dark:bg-black transition-bg">
        <div className="flex justify-center items-center gap-x-4 gap-y-12 flex-wrap-reverse max-w-5xl mx-auto">
          <div className="grow flex flex-col items-center gap-y-3">
            <Image src={logo} alt="logo" width="44" height="60" />
            <p className="text-xl font-bold transition-colors">mrcai.space</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 text-center transition-colors">
              Copyright © 2022 Yuwang Cai. All Rights Reserved.
            </p>
          </div>
          <div className="grow-[2] flex justify-evenly items-start gap-x-4">
            <div className="grow text-center">
              <p className="pb-4 text-lg text-slate-600 dark:text-slate-400 font-semibold">
                {locale === "en-US" ? "SECTION" : "章节"}
              </p>
              <ul className="flex flex-col items-center gap-y-3">
                {Object.entries(sections).map(([id, { en, zh }]) => (
                  <li
                    key={id}
                    className="w-fit hover:text-slate-600 hover:dark:text-slate-400 transition-colors"
                  >
                    <Link href={"#" + id} className="font-medium">
                      {locale === "en-US" ? en : zh}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grow text-center">
              <p className="pb-4 text-lg text-slate-600 dark:text-slate-400 font-semibold">
                {locale === "en-US" ? "CONTACT" : "联系我"}
              </p>
              <ul className="flex flex-col items-center gap-y-3">
                {contacts.map(({ name, href }) => (
                  <li
                    key={name}
                    className="w-fit hover:text-slate-600 hover:dark:text-slate-400 transition-colors"
                  >
                    <Link href={href} className="font-medium">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
