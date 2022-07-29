import { m, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";
import { useLocaleValue } from "src/hooks/locale.hook";
import profileI18n from "src/i18n/profile.json";

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

interface IProps extends PropsWithChildren {
  topic: keyof typeof profileI18n[keyof typeof profileI18n];
}

export const ProfileCard = ({ topic, children }: IProps) => {
  const text = useLocaleValue(profileI18n.en, profileI18n.zh);
  const { top, bottom } = text[topic];

  return (
    <m.li variants={rise} className="text-center">
      <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
        {top}
      </p>
      <p className="py-1 text-2xl font-bold transition-colors">{children}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
        {bottom}
      </p>
    </m.li>
  );
};
