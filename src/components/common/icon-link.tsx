import { type AnchorHTMLAttributes, type DetailedHTMLProps } from "react";
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
    aria-label={ariaLabel}
    className="w-fit h-fit p-2 rounded-md hover:text-sky-800 hover:dark:text-sky-200 active:text-sky-700 active:dark:text-sky-300 transition-colors"
    {...rest}
  >
    {children}
  </Link>
);
