import { AnimatePresence, m, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";
import { Backdrop } from "../common/backdrop";

const slide: Variants = {
  hide: {
    x: 300,
  },
  show: {
    x: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  exit: {
    x: 300,
  },
};

interface IProps extends PropsWithChildren {
  show: boolean;
}

export const SideMenuContainer = ({ show, children }: IProps) => (
  <>
    <Backdrop show={show} />
    <AnimatePresence>
      {show && (
        <m.div
          variants={slide}
          initial="hide"
          animate="show"
          exit="exit"
          className="flex flex-col items-center fixed top-0 right-0 bottom-0 h-screen px-8 py-4 rounded-l-2xl bg-slate-100 dark:bg-slate-900 shadow-2xl transition-bg z-30"
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  </>
);
