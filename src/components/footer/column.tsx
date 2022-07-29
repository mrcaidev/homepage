import { type PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  title: string;
}

export const Column = ({ title, children }: IProps) => (
  <div className="grow text-center">
    <p className="pb-4 text-lg text-slate-600 dark:text-slate-400 font-semibold">
      {title}
    </p>
    <ul className="flex flex-col items-center gap-y-3">{children}</ul>
  </div>
);
