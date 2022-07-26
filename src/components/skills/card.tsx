import { motion } from "framer-motion";
import Image from "next/future/image";
import { Children, PropsWithChildren } from "react";
import { FiX } from "react-icons/fi";
import { useBoolean } from "src/hooks/boolean.hook";
import { useLocaleValue } from "src/hooks/locale.hook";
import { IconButton } from "../common/icon-button";
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
  <div className="flex flex-col justify-center items-center gap-y-3">
    <motion.div
      layoutId={title + "-icon"}
      className="w-36 h-36 md:w-44 md:h-44 lg:w-36 lg:h-36 xl:w-44 xl:h-44"
    >
      <Image src={img} alt={title} draggable={false} />
    </motion.div>
    <motion.h3
      layoutId={title + "-title"}
      className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold transition-colors"
    >
      {title}
    </motion.h3>
  </div>
);

export const Card = ({ img, title, children }: PropsWithChildren<IProps>) => {
  const { value: shouldShow, on: showModal, off: hideModal } = useBoolean();
  const openLabel = useLocaleValue("Click to show details", "点击查看详情");
  const closeLabel = useLocaleValue("Hide details", "收起详情");

  return (
    <>
      {shouldShow ? (
        <div className="min-h-[228px]" />
      ) : (
        <motion.div
          aria-label={openLabel}
          onClick={showModal}
          layoutId={title}
          className="p-12 rounded-3xl bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-lg transition-bg"
        >
          <CardFace img={img} title={title} />
        </motion.div>
      )}
      <Modal show={shouldShow}>
        <motion.div
          layoutId={title}
          className="flex flex-col md:flex-row justify-center items-center gap-x-12 gap-y-4 relative p-12 rounded-3xl m-auto bg-slate-200 dark:bg-slate-800 shadow-lg transition-bg"
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
          <div className="absolute top-6 right-6">
            <IconButton ariaLabel={closeLabel} onClick={hideModal}>
              <FiX size="24px" />
            </IconButton>
          </div>
        </motion.div>
      </Modal>
    </>
  );
};
