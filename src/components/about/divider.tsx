import { m, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const Divider = () => (
  <m.hr
    variants={fadeIn}
    initial="hide"
    whileInView="show"
    className="border-slate-300 dark:border-slate-700 my-5 transition-colors"
  />
);
