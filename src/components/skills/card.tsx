import { motion } from "framer-motion";
import Image from "next/future/image";
import { Children, PropsWithChildren } from "react";
import { FiX } from "react-icons/fi";
import { useBoolean } from "src/hooks/boolean.hook";
import { Modal } from "../common/modal";

const leftSlide = {
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
}

const CardFace = ({ img, title }: IProps) => (
  <div className="flex flex-col justify-center items-center gap-y-4">
    <motion.div
      layoutId={title + "-icon"}
      className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44"
    >
      <Image src={img} alt={title} draggable={false} />
    </motion.div>
    <motion.h3
      layoutId={title + "-title"}
      className="text-3xl lg:text-4xl font-bold transition-colors"
    >
      {title}
    </motion.h3>
  </div>
);

export const Card = ({ img, title, children }: PropsWithChildren<IProps>) => {
  const { value: shouldShow, on: showModal, off: hideModal } = useBoolean();

  return (
    <>
      {shouldShow ? (
        <div className="min-h-[228px]" />
      ) : (
        <motion.div
          aria-label="Click to show details"
          onClick={showModal}
          layoutId={title}
          className="p-8 rounded-3xl bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-lg transition-bg"
        >
          <CardFace img={img} title={title} />
        </motion.div>
      )}
      <Modal show={shouldShow}>
        <motion.div
          layoutId={title}
          className="flex flex-col md:flex-row justify-center items-center gap-8 relative p-12 rounded-3xl m-auto bg-slate-200 dark:bg-slate-800 shadow-lg"
        >
          <CardFace img={img} title={title} />
          <motion.ul
            initial="hide"
            whileInView="show"
            transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
            className="max-w-sm list-disc"
          >
            {Children.map(children, (child) => (
              <motion.li variants={leftSlide} className="py-1">
                {child}
              </motion.li>
            ))}
          </motion.ul>
          <button
            aria-label="Hide details"
            onClick={hideModal}
            className="absolute top-6 right-6 h-fit p-2 rounded-md hover:bg-slate-300 hover:dark:bg-slate-700 active:bg-slate-400 active:dark:bg-slate-600 transition-colors"
          >
            <FiX size="24px" />
          </button>
        </motion.div>
      </Modal>
    </>
  );
};
