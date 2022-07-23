import NextLink from "next/link";
import { HTMLProps } from "react";

interface IProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
}

export const Link = ({ href, children, ...rest }: IProps) => {
  const isInternalLink = href.startsWith("/");

  return isInternalLink ? (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" hrefLang="en" {...rest}>
      {children}
    </a>
  );
};
