import { motion } from "framer-motion";

export const Divider = () => (
  <motion.hr
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ type: "tween", duration: 1 }}
    className="border-slate-300 dark:border-slate-700 my-5 transition-colors"
  />
);
