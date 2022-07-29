import { m } from "framer-motion";
import { Fragment, type PropsWithChildren } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import selfIntroI18n from "src/i18n/self-intro.json";
import { Bold } from "../common/bold";
import { Link } from "../common/link";

const slide = {
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

const Uestc = ({ children }: PropsWithChildren) => (
  <Link
    href="https://www.uestc.edu.cn/"
    hrefLang="zh"
    className="decoration-sky-800 dark:decoration-sky-200 hover:underline"
  >
    <Bold>
      {children}
      <FiExternalLink size="16px" className="inline align-baseline" />
    </Bold>
  </Link>
);

export const SelfIntro = () => {
  const { title, subtitle, content } = useLocaleValue(
    selfIntroI18n.en,
    selfIntroI18n.zh
  );

  return (
    <m.article
      initial="hide"
      whileInView="show"
      transition={{ staggerChildren: 0.2 }}
    >
      <m.h3
        variants={slide}
        className="py-2 text-3xl font-semibold transition-colors"
      >
        {title}
      </m.h3>
      <m.p
        variants={slide}
        className="py-2 text-xl text-slate-600 dark:text-slate-400 font-medium transition-colors"
      >
        {subtitle}
      </m.p>
      <m.p variants={slide} className="py-2 text-lg transition-colors">
        {content.map(({ type, body }) =>
          type === "bold" ? (
            <Bold key={body}>{body}</Bold>
          ) : type === "uestc" ? (
            <Uestc key={body}>{body}</Uestc>
          ) : (
            <Fragment key={body}>{body}</Fragment>
          )
        )}
      </m.p>
    </m.article>
  );
};
