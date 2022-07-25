import { motion } from "framer-motion";
import Image from "next/future/image";
import about from "public/about.webp";

const rise = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const SidePicture = () => (
  <motion.div
    variants={rise}
    initial="hide"
    whileInView="show"
    className="hidden xl:block"
  >
    <Image
      src={about}
      alt=""
      placeholder="blur"
      width="400"
      height="400"
      className="rounded-3xl"
    />
  </motion.div>
);
