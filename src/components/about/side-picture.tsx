import { motion } from "framer-motion";
import Image from "next/future/image";
import about from "public/about.webp";

export const SidePicture = () => (
  <motion.div
    initial={{ x: -30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "tween", duration: 1 }}
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
