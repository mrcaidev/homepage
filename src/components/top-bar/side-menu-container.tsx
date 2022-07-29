import { m, type Variants } from "framer-motion";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import { Backdrop } from "../common/backdrop";

const slide: Variants = {
  hide: {
    x: 200,
  },
  show: {
    x: 0,
    transition: { type: "tween", duration: 0.1 },
  },
};

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  show: boolean;
}

export const SideMenuContainer = ({ show, children, ...rest }: IProps) => (
  <>
    <Backdrop show={show} />
    <m.div
      variants={slide}
      initial="hide"
      whileInView="show"
      className="flex-col items-center fixed top-0 right-0 bottom-0 h-screen px-8 py-4 rounded-l-2xl bg-slate-100 dark:bg-slate-900 shadow-2xl transition z-30"
      style={{ display: show ? "flex" : "none" }}
      {...(rest as any)}
    >
      {children}
    </m.div>
  </>
);
