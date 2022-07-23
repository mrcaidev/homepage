import { HTMLProps } from "react";
import { createPortal } from "react-dom";

interface IProps extends HTMLProps<HTMLDivElement> {
  show: boolean;
}

export const Modal = ({ show, children, ...rest }: IProps) =>
  show
    ? createPortal(
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-700 opacity-40" />
          <div {...rest}>{children}</div>
        </>,
        document.body
      )
    : null;
