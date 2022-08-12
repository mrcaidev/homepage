import {
  useBoolean,
  useFocusTrap,
  useKeydown,
  useUpdate,
} from "@mrcaidev/hooks";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { GithubLink } from "./github-link";
import { NavLinks } from "./nav-links";
import { ThemeToggler } from "./theme-toggler";

export const SideMenu = () => {
  const { value: shouldShow, on: showModal, off: hideModal } = useBoolean();

  const openRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLButtonElement>(null);
  const lastRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(firstRef, lastRef);
  useKeydown("Escape", hideModal);
  useUpdate(() => {
    if (shouldShow) {
      firstRef.current?.focus();
    } else {
      openRef.current?.focus();
    }
  }, [shouldShow]);

  return (
    <>
      <button
        ref={openRef}
        onClick={showModal}
        aria-label="Open sidebar menu"
        className="p-2 rounded-md hover:bg-dim hover:text-highlight"
      >
        <FiMenu size="24px" />
      </button>
      {shouldShow &&
        createPortal(
          <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-slate-800 opacity-60 z-20" />
            <div
              role="dialog"
              aria-label="Sidebar menu"
              className="flex flex-col justify-between items-center fixed top-0 right-0 bottom-0 min-w-[240px] px-8 py-5 rounded-l-2xl bg-normal animate-[sidemenu_0.2s_ease-in-out] z-30"
            >
              <div className="self-end">
                <button
                  ref={firstRef}
                  onClick={hideModal}
                  aria-label="Close sidebar menu"
                  className="p-2 rounded-md hover:bg-dim hover:text-highlight"
                >
                  <FiX size="24px" />
                </button>
              </div>
              <nav className="grow flex flex-col justify-center gap-y-2">
                <NavLinks />
              </nav>
              <div className="flex justify-evenly w-full">
                <GithubLink />
                <ThemeToggler ref={lastRef} />
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};
