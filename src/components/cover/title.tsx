import { m, type Variants } from "framer-motion";
import { useLocaleValue } from "src/hooks/locale.hook";
import coverI18n from "src/i18n/cover.json";

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

export const Title = () => {
  const text = useLocaleValue(coverI18n.en.title, coverI18n.zh.title);

  return (
    <m.h1
      variants={slide}
      initial="hide"
      whileInView="show"
      className="text-3xl sm:text-5xl md:text-6xl font-bold transition-colors"
    >
      {text}
    </m.h1>
  );
};
