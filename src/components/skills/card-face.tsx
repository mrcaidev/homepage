import { m } from "framer-motion";
import Image from "next/future/image";

interface IProps {
  img: string;
  title: string;
}

export const CardFace = ({ img, title }: IProps) => (
  <div className="flex flex-col justify-center items-center gap-y-3">
    <m.div
      layoutId={title + "-icon"}
      className="w-36 h-36 md:w-44 md:h-44 lg:w-36 lg:h-36 xl:w-44 xl:h-44"
    >
      <Image src={img} alt={title} draggable={false} />
    </m.div>
    <m.h3
      layoutId={title + "-title"}
      className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold transition-colors"
    >
      {title}
    </m.h3>
  </div>
);
