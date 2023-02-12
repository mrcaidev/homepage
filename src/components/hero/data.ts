import Github from "icons/github.astro";
import Mail from "icons/mail.astro";
import Tv from "icons/tv.astro";
import type { Icon } from "icons/utils";

export type Platform = {
  name: string;
  icon: Icon;
  url: string;
};

export const platforms: Platform[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/mrcaidev",
  },
  {
    name: "Bilibili",
    icon: Tv,
    url: "https://space.bilibili.com/35364718",
  },
  {
    name: "Mail",
    icon: Mail,
    url: "mailto:mrcaidev@gmail.com",
  },
];
