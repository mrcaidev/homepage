import { m } from "framer-motion";

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

interface IProps {
  name: string;
  percentage: number;
  color: string;
}

export const LanguageCard = ({ name, percentage, color }: IProps) => (
  <m.li
    variants={rise}
    className="w-full px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-800 shadow-md transition-bg"
  >
    <div className="flex gap-x-4 justify-between pb-1">
      <p className="text-lg font-semibold transition-colors">{name}</p>
      <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold">
        {percentage}%
      </p>
    </div>
    <div className="w-full rounded-full bg-slate-300 dark:bg-slate-700 transition-bg">
      <m.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="h-1 rounded-full origin-left"
        style={{ width: percentage + "%", backgroundColor: color }}
      />
    </div>
  </m.li>
);
