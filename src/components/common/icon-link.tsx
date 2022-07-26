import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { Link } from "./link";

interface IProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  ariaLabel: string;
}

export const IconLink = ({ href, ariaLabel, children, ...rest }: IProps) => (
  <Link
    href={href}
    className="w-fit h-fit p-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 transition-colors"
    aria-label={ariaLabel}
    {...rest}
  >
    {children}
  </Link>
);
