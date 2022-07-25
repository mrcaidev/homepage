import { motion } from "framer-motion";

const rise = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const Divider = () => (
  <motion.hr
    variants={rise}
    initial="hide"
    whileInView="show"
    className="border-slate-300 dark:border-slate-700 my-5 transition-colors"
  />
);
