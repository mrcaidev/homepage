import { HTMLProps } from "react";
import { Backdrop } from "./backdrop";

interface IProps extends HTMLProps<HTMLDivElement> {
  show: boolean;
}

export const Modal = ({ show, children, ...rest }: IProps) => (
  <>
    <Backdrop show={show} />
    {show && (
      <div
        className="flex fixed top-0 left-0 right-0 bottom-0 p-10 z-30"
        {...rest}
      >
        {children}
      </div>
    )}
  </>
);
