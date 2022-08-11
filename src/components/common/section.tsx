import { m, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";
import navLinks from "src/data/nav-links.json";
import { Link } from "./link";

const slide: Variants = {
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

interface IProps extends PropsWithChildren {
  id: string;
}

export const Section = ({ id, children }: IProps) => {
  const { name, href } = navLinks.find((link) => link.id === id)!;

  return (
    <section
      id={id}
      className="flex flex-col items-center min-h-screen px-10 py-20"
    >
      <m.div
        variants={slide}
        initial="hide"
        whileInView="show"
        className="my-10 mx-auto text-center"
      >
        <p
          aria-hidden
          className="text-7xl text-slate-200 dark:text-slate-800 font-bold select-none"
        >
          {name}
        </p>
        <h2 className="peer text-5xl font-bold -translate-y-6">
          <Link href={href}>{name}</Link>
        </h2>
        <hr className="border-sky-700 dark:border-sky-300 bg-sky-700 dark:bg-sky-300 border-2 -translate-y-4 scale-x-50 peer-hover:scale-x-90 transition-transform" />
      </m.div>
      {children}
    </section>
  );
};
