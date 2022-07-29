import { m, type Variants } from "framer-motion";
import { type ILanguage } from "src/models/language.model";

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

const grow: Variants = {
  hide: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: { type: "tween", duration: 1 },
  },
};

interface IProps {
  lang: ILanguage;
}

export const LanguageCard = ({ lang: { name, percentage, color } }: IProps) => (
  <m.li
    variants={rise}
    className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-800 shadow-md transition-bg"
  >
    <div className="flex gap-x-4 justify-between pb-1">
      <p className="text-lg font-semibold transition-colors">{name}</p>
      <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold transition-colors">
        {percentage}%
      </p>
    </div>
    <div className="rounded-full bg-slate-300 dark:bg-slate-700 transition-bg">
      <m.div
        variants={grow}
        initial="hide"
        whileInView="show"
        className="h-1 rounded-full origin-left"
        style={{ width: percentage + "%", backgroundColor: color }}
      />
    </div>
  </m.li>
);
