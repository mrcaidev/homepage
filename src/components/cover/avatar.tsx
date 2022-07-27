import { m } from "framer-motion";
import Image from "next/future/image";
import miku from "public/miku.webp";

export const Avatar = () => (
  <m.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "tween", duration: 1 }}
    className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72"
  >
    <Image src={miku} alt="Miku" placeholder="blur" className="rounded-3xl" />
  </m.div>
);
