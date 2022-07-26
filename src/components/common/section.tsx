import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import navLinks from "src/data/nav-links.json";
import { useLocaleValue } from "src/hooks/locale.hook";

const rightSlide = {
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
  id: keyof typeof navLinks;
}

export const Section = ({ id, children }: IProps) => {
  const { en, zh } = navLinks[id];
  const text = useLocaleValue(en, zh);

  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center gap-y-12 min-h-screen px-10 py-20"
    >
      <motion.div
        variants={rightSlide}
        initial="hide"
        whileInView="show"
        className="w-fit mx-auto text-center"
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
      </motion.div>
      {children}
    </section>
  );
};
