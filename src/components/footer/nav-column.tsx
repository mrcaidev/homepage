import { type PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  title: string;
}

export const NavColumn = ({ title, children }: IProps) => (
  <div>
    <p className="pb-3 font-semibold text-lg text-dim text-center">{title}</p>
    <nav className="flex flex-col items-center gap-y-1">{children}</nav>
  </div>
);
