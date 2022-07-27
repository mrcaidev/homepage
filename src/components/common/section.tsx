import { m } from "framer-motion";
import { PropsWithChildren } from "react";
import sections from "src/data/sections.json";
import { useLocaleValue } from "src/hooks/locale.hook";

interface IProps extends PropsWithChildren {
  id: keyof typeof sections;
}

export const Section = ({ id, children }: IProps) => {
  const { en, zh } = sections[id];
  const text = useLocaleValue(en, zh);

  return (
    <section
      id={id}
      className="flex flex-col items-center min-h-screen px-10 py-20"
    >
      <m.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="py-10 mx-auto text-center"
      >
        <p
          aria-hidden
          className="text-7xl text-slate-200 dark:text-slate-800 font-bold select-none transition-colors"
        >
          {text}
        </p>
        <h2 className="text-5xl font-bold transition-colors -translate-y-6">
          {text}
        </h2>
        <hr className="border-sky-700 dark:border-sky-300 bg-sky-700 dark:bg-sky-300 border-2 transition-colors -translate-y-4 scale-x-50" />
      </m.div>
      {children}
    </section>
  );
};
