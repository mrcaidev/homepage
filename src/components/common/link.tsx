import NextLink from "next/link";
import { type AnchorHTMLAttributes, type DetailedHTMLProps } from "react";

interface IProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

export const Link = ({ href, children, ...rest }: IProps) =>
  href.startsWith("/") || href.startsWith("#") ? (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" hrefLang="en" {...rest}>
      {children}
    </a>
  );
