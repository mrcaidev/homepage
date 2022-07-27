import { AnimatePresence, m } from "framer-motion";

interface IProps {
  show?: boolean;
}

export const Backdrop = ({ show = true }: IProps) => {
  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-slate-800 z-20"
        />
      )}
    </AnimatePresence>
  );
};
