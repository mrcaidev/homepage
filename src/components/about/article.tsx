import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useLocale } from "src/hooks/locale.hook";
import { Bold } from "../common/bold";
import { Link } from "../common/link";

const leftSlide = {
  hide: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const Uestc = ({ children }: PropsWithChildren) => (
  <Link
    href="https://www.uestc.edu.cn/"
    className="decoration-sky-800 dark:decoration-sky-200 hover:underline"
  >
    <Bold>
      {children}
      <FiExternalLink aria-hidden className="inline align-baseline" />
    </Bold>
  </Link>
);

export const Article = () => {
  const { locale } = useLocale();

  return (
    <motion.article
      initial="hide"
      whileInView="show"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h3
        variants={leftSlide}
        className="py-2 text-3xl font-semibold transition-colors"
      >
        {locale === "en-US" ? "I'm Yuwang Cai" : "我是蔡与望"}
      </motion.h3>
      <motion.p
        variants={leftSlide}
        className="py-2 text-xl text-slate-500 font-medium"
      >
        {locale === "en-US"
          ? "—— A college student in China"
          : "—— 中国的一位高校生"}
      </motion.p>
      <motion.p variants={leftSlide} className="py-2 text-lg transition-colors">
        {locale === "en-US" ? (
          <>
            I&apos;m a double major of&nbsp;
            <Bold>Computer Science and Mathematics</Bold>&nbsp;at&nbsp;
            <Uestc>UESTC</Uestc>. I have been teaching myself&nbsp;
            <Bold>web development</Bold>&nbsp;since 2022, aiming to become
            a&nbsp;<Bold>full-stack</Bold>&nbsp;developer.
          </>
        ) : (
          <>
            我目前在<Uestc>电子科技大学</Uestc>
            修读<Bold>计算机+数学</Bold>双学位。我从 2022 年起自学&nbsp;
            <Bold>Web 开发</Bold>，目标是成为一名<Bold>全栈</Bold>工程师。
          </>
        )}
      </motion.p>
    </motion.article>
  );
};
