import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { useLocale } from "src/hooks/locale.hook";
import { useStats } from "src/hooks/stats.hook";

const rise = {
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
  const {
    profile: { count, stars, forks },
  } = useStats();

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
      className="flex justify-around"
    >
      <Statistic
        top={locale === "en-US" ? "Built" : "开源了"}
        bottom={locale === "en-US" ? "projects" : "个项目"}
      >
        {count}
      </Statistic>
      <Statistic
        top={locale === "en-US" ? "Received" : "收到了"}
        bottom={locale === "en-US" ? "stars" : "个 star"}
      >
        {stars}
      </Statistic>
      <Statistic
        top={locale === "en-US" ? "Got" : "至今被"}
        bottom={locale === "en-US" ? "forks" : "次 fork"}
      >
        {forks}
      </Statistic>
    </motion.div>
  );
};
