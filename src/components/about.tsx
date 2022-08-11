import { m, type Variants } from "framer-motion";
import Image from "next/image";
import about from "public/about.webp";
import { FiExternalLink } from "react-icons/fi";
import { type IProfile } from "src/models/profile.model";
import { Link } from "./common/link";
import { Section } from "./common/section";

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
    transition: { type: "tween", duration: 0.5 },
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
    transition: { type: "tween", duration: 0.5 },
  },
};

interface IProps {
  profile: IProfile;
}

const About = ({ profile: { count, forks, stars } }: IProps) => (
  <Section id="about">
    <div className="flex justify-center gap-x-20">
      <m.div
        variants={leftSlide}
        initial="hide"
        whileInView="show"
        className="hidden xl:block"
      >
        <Image
          src={about}
          alt=""
          placeholder="blur"
          width="400px"
          height="400px"
          className="rounded-3xl"
        />
      </m.div>
      <div className="flex flex-col justify-around max-w-lg">
        <m.article
          initial="hide"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
        >
          <m.h3 variants={rightSlide} className="py-2 font-semibold text-3xl">
            I&apos;m Yuwang Cai
          </m.h3>
          <m.p
            variants={rightSlide}
            className="py-2 font-semibold text-xl text-dim"
          >
            —— A college student in China
          </m.p>
          <m.p variants={rightSlide} className="py-2 text-lg">
            I&apos;m a double major of&nbsp;
            <strong className="text-highlight">
              Computer Science and Mathematics
            </strong>
            &nbsp;at&nbsp;
            <Link href="https://www.uestc.edu.cn/" hrefLang="zh">
              <strong className="text-highlight">
                UESTC
                <FiExternalLink size="16px" className="inline align-baseline" />
              </strong>
            </Link>
            . I have been teaching myself&nbsp;
            <strong className="text-highlight">web development</strong>
            &nbsp;since 2022, aiming to become a&nbsp;
            <strong className="text-highlight">full-stack</strong>
            &nbsp;developer.
          </m.p>
        </m.article>
        <m.hr
          variants={rightSlide}
          initial="hide"
          whileInView="show"
          className="border-slate-300 dark:border-slate-700 my-5"
        />
        <m.ul
          initial="hide"
          whileInView="show"
          transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
          className="flex justify-around"
        >
          {[
            { top: "Built", body: count, bottom: "projects" },
            { top: "Received", body: stars, bottom: "stars" },
            { top: "Got", body: forks, bottom: "forks" },
          ].map(({ top, body, bottom }) => (
            <m.li key={top} variants={rise} className="text-center">
              <p className="text-sm text-dim">{top}</p>
              <p className="py-1 font-bold text-2xl">{body}</p>
              <p className="text-sm text-dim">{bottom}</p>
            </m.li>
          ))}
        </m.ul>
      </div>
    </div>
  </Section>
);

export default About;
