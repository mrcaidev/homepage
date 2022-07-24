import { motion } from "framer-motion";
import Image from "next/future/image";
import miku from "public/miku.webp";

export const Avatar = () => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut", duration: 1 }}
    className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72"
  >
    <Image src={miku} alt="Miku" placeholder="blur" className="rounded-3xl" />
  </motion.div>
);
