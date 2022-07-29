import { m, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";
import { useLocaleValue } from "src/hooks/locale.hook";
import sectionsI18n from "src/i18n/sections.json";

const slide: Variants = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

interface IProps extends PropsWithChildren {
  id: keyof typeof sectionsI18n[keyof typeof sectionsI18n];
}

export const Section = ({ id, children }: IProps) => {
  const text = useLocaleValue(sectionsI18n.en, sectionsI18n.zh);

  return (
    <section
      id={id}
      className="flex flex-col items-center min-h-screen px-10 py-20"
    >
      <m.div
        variants={slide}
        initial="hide"
        whileInView="show"
        className="py-10 mx-auto text-center"
      >
        <p
          aria-hidden
          className="text-7xl text-slate-200 dark:text-slate-800 font-bold select-none transition-colors"
        >
          {text[id]}
        </p>
        <h2 className="text-5xl font-bold transition-colors -translate-y-6">
          {text[id]}
        </h2>
        <hr className="border-sky-700 dark:border-sky-300 bg-sky-700 dark:bg-sky-300 border-2 transition-colors -translate-y-4 scale-x-50" />
      </m.div>
      {children}
    </section>
  );
};
