import { AnimatePresence, m } from "framer-motion";
import { PropsWithChildren } from "react";
import { Backdrop } from "../common/backdrop";

interface IProps extends PropsWithChildren {
  show: boolean;
}

export const SideMenuContainer = ({ show, children }: IProps) => (
  <>
    <Backdrop show={show} />
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "tween", duration: 0.2 }}
          className="flex flex-col items-center fixed top-0 right-0 bottom-0 h-screen px-8 py-4 rounded-l-2xl bg-slate-100 dark:bg-slate-900 shadow-2xl transition-bg z-30"
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  </>
);
