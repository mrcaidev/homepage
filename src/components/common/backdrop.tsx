import { AnimatePresence, m, type Variants } from "framer-motion";

const fadeInOut: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 0.6,
  },
  exit: {
    opacity: 0,
  },
};

interface IProps {
  show?: boolean;
}

export const Backdrop = ({ show = true }: IProps) => (
  <AnimatePresence>
    {show && (
      <m.div
        variants={fadeInOut}
        initial="hide"
        animate="show"
        exit="exit"
        className="fixed top-0 left-0 w-screen h-screen bg-slate-800 z-20"
      />
    )}
  </AnimatePresence>
);
