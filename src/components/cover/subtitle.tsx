import { motion } from "framer-motion";
import { useLocaleValue } from "src/hooks/locale.hook";

const leftSlide = {
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
  const text = useLocaleValue(
    "Living, learning, developing",
    "永远热情，永远谦卑"
  );

  return (
    <motion.p
      variants={leftSlide}
      initial="hide"
      whileInView="show"
      className="py-5 text-lg sm:text-xl md:text-2xl text-slate-500 font-medium transition-colors"
    >
      {text}
    </motion.p>
  );
};
