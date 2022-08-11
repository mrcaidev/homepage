import { m } from "framer-motion";
import Image from "next/image";

interface IProps {
  img: string;
  title: string;
}

export const CardFace = ({ img, title }: IProps) => (
  <div className="flex flex-col justify-center items-center gap-y-3">
    <m.div layoutId={title + "-icon"} className="w-36 h-36 md:w-44 md:h-44">
      <Image src={img} alt={title} draggable={false} />
    </m.div>
    <m.h3
      layoutId={title + "-title"}
      className="font-bold text-3xl md:text-4xl"
    >
      {title}
    </m.h3>
  </div>
);
