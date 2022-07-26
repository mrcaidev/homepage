import { FiMenu, FiX } from "react-icons/fi";
import { useBoolean } from "src/hooks/boolean.hook";
import { useLocaleValue } from "src/hooks/locale.hook";
import { useMediaQuery } from "src/hooks/media-query.hook";
import { IconButton } from "../common/icon-button";
import { GithubLink } from "./github-link";
import { LocaleToggler } from "./locale-toggler";
import { NavigationLinks } from "./navigation-links";
import { SideMenuContainer } from "./side-menu-container";
import { ThemeToggler } from "./theme-toggler";

export const SideMenu = () => {
  const {
    value: shouldShow,
    on: showModal,
    off: hideModal,
  } = useBoolean(false);
  const openLabel = useLocaleValue("Open sidebar menu", "打开侧边菜单栏");
  const closeLabel = useLocaleValue("Close sidebar menu", "关闭侧边菜单栏");
  const belowMd = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <IconButton onClick={showModal} ariaLabel={openLabel}>
        <FiMenu size="24px" />
      </IconButton>
      <SideMenuContainer show={shouldShow && belowMd}>
        <div className="self-end">
          <IconButton onClick={hideModal} ariaLabel={closeLabel}>
            <FiX size="28px" />
          </IconButton>
        </div>
        <div className="flex flex-col justify-center gap-y-2 flex-grow px-4">
          <NavigationLinks />
        </div>
        <div className="flex gap-x-4 px-4">
          <LocaleToggler />
          <GithubLink />
          <ThemeToggler />
        </div>
      </SideMenuContainer>
    </>
  );
};
