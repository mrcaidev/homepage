import { motion } from "framer-motion";
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

export const Title = () => {
  const text = useLocaleValue("Hi, I am Yuwang Cai", "你好，我是蔡与望");

  return (
    <motion.h1
      variants={rightSlide}
      initial="hide"
      whileInView="show"
      className="text-3xl sm:text-5xl md:text-6xl font-bold transition-colors"
    >
      {text}
    </motion.h1>
  );
};
