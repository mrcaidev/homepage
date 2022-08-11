import { useBoolean, useFocusTrap, useKeydown } from "@mrcaidev/hooks";
import { m } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
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

  const openRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(closeRef, closeRef);
  useKeydown("Escape", hideModal);
  useEffect(() => {
    if (shouldShow) {
      closeRef.current?.focus();
    } else {
      openRef.current?.focus();
    }
  }, [shouldShow]);

  return (
    <>
      <m.div variants={rise}>
        {shouldShow ? (
          <div className="min-h-[228px]" />
        ) : (
          <m.button
            ref={openRef}
            aria-label="Click to show details"
            onClick={showModal}
            layoutId={title}
            className="p-12 rounded-3xl bg-dim shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardFace img={img} title={title} />
          </m.button>
        )}
      </m.div>
      {shouldShow && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-slate-800 opacity-60 z-20" />
          <div className="flex fixed top-0 left-0 right-0 bottom-0 p-10 z-30">
            <m.div
              role="dialog"
              aria-label={title}
              layoutId={title}
              className="flex flex-col md:flex-row justify-center items-center gap-x-12 gap-y-4 relative p-12 rounded-3xl m-auto bg-dim shadow-lg"
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
                    <strong className="text-highlight">{topic}</strong>
                    &nbsp;-&nbsp;{description}
                  </m.li>
                ))}
              </m.ul>
              <div className="absolute top-6 right-6">
                <button
                  ref={closeRef}
                  aria-label="Hide details"
                  onClick={hideModal}
                  className="p-2 rounded-md hover:bg-dim hover:text-highlight"
                >
                  <FiX size="24px" />
                </button>
              </div>
            </m.div>
          </div>
        </>
      )}
    </>
  );
};
