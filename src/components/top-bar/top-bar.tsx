import { GithubLink } from "./github-link";
import { LocaleToggler } from "./locale-toggler";
import { Logo } from "./logo";
import { NavigationLinks } from "./navigation-links";
import { SideMenu } from "./side-menu";
import { ThemeToggler } from "./theme-toggler";

export const TopBar = () => (
  <header className="flex justify-between items-center fixed top-0 left-0 right-0 px-8 py-4 backdrop-blur-xl z-10">
    <Logo />
    <nav className="gap-x-1 px-4 hidden md:flex">
      <NavigationLinks />
    </nav>
    <div className="flex-grow" />
    <div className="gap-x-2 hidden md:flex">
      <LocaleToggler />
      <GithubLink />
      <ThemeToggler />
    </div>
    <div className="block md:hidden">
      <SideMenu />
    </div>
  </header>
);
