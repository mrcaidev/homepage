import { m, type Variants } from "framer-motion";
import Image from "next/image";
import miku from "public/miku.webp";
import { FiDownload } from "react-icons/fi";

const leftSlide: Variants = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

const rightSlide: Variants = {
  hide: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

const rise: Variants = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const Cover = () => (
  <section className="flex justify-center items-center min-h-screen px-10 py-20">
    <div className="flex justify-center items-center gap-x-20 gap-y-16 flex-wrap-reverse">
      <div>
        <m.h1
          variants={leftSlide}
          initial="hide"
          whileInView="show"
          className="font-bold text-3xl sm:text-5xl md:text-6xl"
        >
          Hi, I am Yuwang Cai
        </m.h1>
        <m.p
          variants={rightSlide}
          initial="hide"
          whileInView="show"
          className="py-6 font-semibold text-lg sm:text-xl md:text-2xl text-dim"
        >
          Living, learning, developing
        </m.p>
        <m.a
          href="cv.txt"
          download
          variants={rise}
          initial="hide"
          whileInView="show"
          className="block w-fit px-5 py-3 rounded-md bg-sky-200 dark:bg-sky-800 hover:brightness-95 font-semibold shadow-md transition-[filter]"
        >
          Download CV
          <FiDownload size="16px" className="inline ml-2 align-baseline" />
        </m.a>
      </div>
      <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72">
        <Image
          src={miku}
          alt="Miku"
          priority
          placeholder="blur"
          className="rounded-3xl"
        />
      </div>
    </div>
  </section>
);
