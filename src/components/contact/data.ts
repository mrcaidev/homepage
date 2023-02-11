import Github from "icons/github.astro";
import Mail from "icons/mail.astro";
import Tv from "icons/tv.astro";
import Twitter from "icons/twitter.astro";
import type { Icon } from "icons/utils";

export type Platform = {
  title: string;
  description: string;
  icon: Icon;
  href: string;
};

export const platforms: Platform[] = [
  {
    title: "GitHub",
    description: "mrcaidev",
    icon: Github,
    href: "https://github.com/mrcaidev",
  },
  {
    title: "Twitter",
    description: "@mrcaidev",
    icon: Twitter,
    href: "https://twitter.com/mrcaidev",
  },
  {
    title: "Bilibili",
    description: "mrcaidev",
    icon: Tv,
    href: "https://space.bilibili.com/35364718",
  },
  {
    title: "Mail",
    description: "mrcaidev@gmail.com",
    icon: Mail,
    href: "mailto:mrcaidev@gmail.com",
  },
];
