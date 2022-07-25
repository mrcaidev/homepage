import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { useLocale } from "src/hooks/locale.hook";

const rise = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

interface IProps extends PropsWithChildren {
  top: string;
  bottom: string;
}

const Statistic = ({ top, bottom, children }: IProps) => (
  <motion.div variants={rise} className="text-center">
    <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
      {top}
    </p>
    <p className="py-1 text-2xl font-bold transition-colors">{children}</p>
    <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
      {bottom}
    </p>
  </motion.div>
);

export const Statistics = () => {
  const { locale } = useLocale();

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      transition={{ staggerChildren: 0.2 }}
      className="flex justify-around"
    >
      <Statistic
        top={locale === "en-US" ? "Built" : "开源了"}
        bottom={locale === "en-US" ? "projects" : "个项目"}
      >
        25
      </Statistic>
      <Statistic
        top={locale === "en-US" ? "Received" : "收到了"}
        bottom={locale === "en-US" ? "stars" : "个 star"}
      >
        101
      </Statistic>
      <Statistic
        top={locale === "en-US" ? "Got" : "至今被"}
        bottom={locale === "en-US" ? "forks" : "次 fork"}
      >
        214
      </Statistic>
    </motion.div>
  );
};
