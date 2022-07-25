import { motion } from "framer-motion";
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
    transition: { ease: "easeOut", duration: 1 },
  },
};

interface IProps {
  id: keyof typeof navLinks;
}

const Title = ({ id }: IProps) => {
  const { en, zh } = navLinks[id];
  const text = useLocaleValue(en, zh);

  return (
    <motion.div
      variants={rightSlide}
      initial="hide"
      whileInView="show"
      id={id}
      className="w-fit m-auto py-10 text-center"
    >
      <p
        aria-hidden
        className="text-7xl text-slate-200 dark:text-slate-800 text-transparent font-bold select-none transition-colors"
      >
        {text}
      </p>
      <h2 className="text-5xl font-bold transition-colors -translate-y-6">
        {text}
      </h2>
      <hr className="border-sky-700 dark:border-sky-300 bg-sky-700 dark:bg-sky-300 border-2 transition-colors -translate-y-4 scale-x-50" />
    </motion.div>
  );
};

export default Title;
