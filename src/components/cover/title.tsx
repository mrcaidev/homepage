import { motion } from "framer-motion";
import { useLocaleValue } from "src/hooks/locale.hook";

export const Title = () => {
  const text = useLocaleValue("Hi, I am Yuwang Cai", "你好，我是蔡与望");

  return (
    <motion.h1
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className="text-3xl sm:text-5xl md:text-6xl font-bold transition-colors"
    >
      {text}
    </motion.h1>
  );
};
