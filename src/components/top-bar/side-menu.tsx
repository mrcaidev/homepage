import { FiMenu, FiX } from "react-icons/fi";
import { useBoolean } from "src/hooks/boolean.hook";
import { useLocaleValue } from "src/hooks/locale.hook";
import { Modal } from "../common/modal";
import { GithubLink } from "./github-link";
import { LocaleToggler } from "./locale-toggler";
import { NavigationLinks } from "./navigation-links";
import { ThemeToggler } from "./theme-toggler";

export const SideMenu = () => {
  const {
    value: shouldShow,
    on: showModal,
    off: hideModal,
  } = useBoolean(false);
  const openLabel = useLocaleValue("Open sidebar menu", "打开侧边菜单栏");
  const closeLabel = useLocaleValue("Close sidebar menu", "关闭侧边菜单栏");

  return (
    <>
      <button
        onClick={showModal}
        aria-label={openLabel}
        className="h-fit p-2 rounded-md transition-bg hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700"
      >
        <FiMenu size="24px" />
      </button>
      <Modal
        show={shouldShow}
        className="flex flex-col items-center fixed top-0 right-0 bottom-0 h-full p-8 rounded-l-2xl bg-slate-100 dark:bg-slate-900 origin-right shadow-2xl transition-bg z-50"
      >
        <button
          onClick={hideModal}
          aria-label={closeLabel}
          className="h-fit p-2 rounded-md transition-bg hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700"
        >
          <FiX size="28px" />
        </button>
        <div className="flex flex-col justify-center gap-y-2 flex-grow px-4">
          <NavigationLinks />
        </div>
        <div className="flex gap-x-4 px-4">
          <LocaleToggler />
          <GithubLink />
          <ThemeToggler />
        </div>
      </Modal>
    </>
  );
};
