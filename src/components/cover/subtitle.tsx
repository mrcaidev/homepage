import { motion } from "framer-motion";
import { useLocaleValue } from "src/hooks/locale.hook";

export const Subtitle = () => {
  const text = useLocaleValue(
    "Living, learning, developing",
    "生命不息，代码不止"
  );

  return (
    <motion.p
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="py-5 text-lg sm:text-xl lg:text-2xl text-slate-500 font-semibold transition-colors"
    >
      {text}
    </motion.p>
  );
};
