import { useMediaQuery } from "src/hooks/media-query.hook";
import { GithubLink } from "./github-link";
import { LocaleToggler } from "./locale-toggler";
import { Logo } from "./logo";
import { NavigationLinks } from "./navigation-links";
import { SideMenu } from "./side-menu";
import { ThemeToggler } from "./theme-toggler";

export const TopBar = () => {
  const aboveMd = useMediaQuery("(min-width: 768px)");

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 px-8 py-4 backdrop-blur-xl z-10">
      <Logo />
      {aboveMd ? (
        <>
          <nav className="flex gap-x-1 px-4">
            <NavigationLinks />
          </nav>
          <div className="grow" />
          <div className="flex gap-x-2">
            <LocaleToggler />
            <GithubLink />
            <ThemeToggler />
          </div>
        </>
      ) : (
        <SideMenu />
      )}
    </header>
  );
};
