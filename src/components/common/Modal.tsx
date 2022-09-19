import { useFocusTrap, useKeydown, useUpdate } from "@mrcaidev/hooks";
import type { PropsWithChildren, RefObject } from "react";
import { createPortal } from "react-dom";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  openRef: RefObject<HTMLElement>;
  firstRef: RefObject<HTMLElement>;
  lastRef: RefObject<HTMLElement>;
}

export default function Modal({
  isOpen,
  onClose,
  openRef,
  firstRef,
  lastRef,
  children,
}: Props) {
  useFocusTrap(firstRef, lastRef);
  useKeydown("Escape", onClose);
  useUpdate(() => {
    if (isOpen) {
      firstRef.current?.focus();
    } else {
      openRef.current?.focus();
    }
  }, [isOpen, openRef, firstRef]);

  if (typeof window === "undefined" || !isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-dim bg-opacity-80 dark:bg-opacity-80">
      <div role="dialog" aria-modal="true">
        {children}
      </div>
    </div>,
    document.body
  );
}
