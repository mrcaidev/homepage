import { m, type Variants } from "framer-motion";
import { useLocaleValue } from "src/hooks/locale.hook";
import coverI18n from "src/i18n/cover.json";

const slide: Variants = {
  hide: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const Subtitle = () => {
  const text = useLocaleValue(coverI18n.en.subtitle, coverI18n.zh.subtitle);

  return (
    <m.p
      variants={slide}
      initial="hide"
      whileInView="show"
      className="py-5 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium transition-colors"
    >
      {text}
    </m.p>
  );
};
