import { useBoolean } from "@mrcaidev/hooks";
import Modal from "components/common/Modal";
import { useRef, type PropsWithChildren } from "react";
import { Menu, X } from "react-feather";
import ThemeToggler from "./ThemeToggler";

interface Props extends PropsWithChildren {
  nav?: string;
  github?: string;
}

export default function NavMenu({ nav, github }: Props) {
  const { value: isOpen, on: openModal, off: closeModal } = useBoolean();
  const openRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLButtonElement>(null);
  const lastRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={openRef}
        type="button"
        onClick={openModal}
        aria-label="Open navigation menu"
        className="button-vivid"
      >
        <Menu size="24" />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        openRef={openRef}
        firstRef={firstRef}
        lastRef={lastRef}
      >
        <div className="flex flex-col justify-between items-center gap-2 fixed top-0 bottom-0 right-0 w-full sm:w-72 px-8 py-4 bg-normal">
          <button
            ref={firstRef}
            type="button"
            onClick={closeModal}
            className="self-end button-vivid"
          >
            <X size="24" />
          </button>
          {nav}
          <div className="flex gap-3">
            {github}
            <ThemeToggler ref={lastRef} />
          </div>
        </div>
      </Modal>
    </>
  );
}
