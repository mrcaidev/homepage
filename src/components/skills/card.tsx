import { useBoolean } from "@mrcaidev/hooks";
import { m } from "framer-motion";
import { useEffect, useRef, type KeyboardEventHandler } from "react";
import { FiX } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import { Bold } from "../common/bold";
import { IconButton } from "../common/icon-button";
import { Modal } from "../common/modal";
import { CardFace } from "./card-face";

const rise = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

const slide = {
  hide: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

interface IProps {
  img: string;
  title: string;
  content: {
    topic: string;
    description: string;
  }[];
}

export const Card = ({ img, title, content }: IProps) => {
  const { value: shouldShow, on: showModal, off: hideModal } = useBoolean();
  const openLabel = useLocaleValue("Click to show details", "点击查看详情");
  const closeLabel = useLocaleValue("Hide details", "收起详情");

  const onlyRef = useRef<HTMLButtonElement>(null);
  const handleEscape = (e: KeyboardEvent) => {
    if (e.code !== "Escape") return;
    e.preventDefault();
    hideModal();
  };
  const handleTab: KeyboardEventHandler = (e) => {
    if (e.code !== "Tab") return;
    e.preventDefault();
    onlyRef.current?.focus();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <m.div variants={rise}>
        {shouldShow ? (
          <div className="min-h-[228px]" />
        ) : (
          <m.button
            aria-label={openLabel}
            onClick={showModal}
            layoutId={title}
            className="p-12 rounded-3xl bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-lg transition-bg"
          >
            <CardFace img={img} title={title} />
          </m.button>
        )}
      </m.div>
      <Modal show={shouldShow}>
        <m.div
          onKeyDown={handleTab}
          layoutId={title}
          className="flex flex-col md:flex-row justify-center items-center gap-x-12 gap-y-4 relative p-12 rounded-3xl m-auto bg-slate-200 dark:bg-slate-800 shadow-lg transition-bg"
        >
          <CardFace img={img} title={title} />
          <m.ul
            initial="hide"
            whileInView="show"
            transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
            className="max-w-sm list-disc"
          >
            {content.map(({ topic, description }) => (
              <m.li key={topic} variants={slide} className="py-1">
                <Bold>{topic}</Bold> - {description}
              </m.li>
            ))}
          </m.ul>
          <div className="absolute top-6 right-6">
            <IconButton
              ref={onlyRef}
              ariaLabel={closeLabel}
              onClick={hideModal}
            >
              <FiX size="24px" />
            </IconButton>
          </div>
        </m.div>
      </Modal>
    </>
  );
};
