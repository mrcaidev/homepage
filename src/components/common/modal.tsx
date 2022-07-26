import { AnimatePresence, motion } from "framer-motion";
import { HTMLProps } from "react";

const fadeIn = {
  hide: { opacity: 0 },
  show: { opacity: 0.4 },
  exit: { opacity: 0 },
};

interface IProps extends HTMLProps<HTMLDivElement> {
  show: boolean;
}

export const Modal = ({ show, children, ...rest }: IProps) => (
  <>
    <AnimatePresence>
      {show && (
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate="show"
          exit="exit"
          className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 z-20"
        />
      )}
    </AnimatePresence>
    {show && (
      <div
        className="flex fixed top-0 left-0 right-0 bottom-0 p-10 z-20"
        {...rest}
      >
        {children}
      </div>
    )}
  </>
);
