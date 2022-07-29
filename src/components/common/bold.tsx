import { type PropsWithChildren } from "react";

export const Bold = ({ children }: PropsWithChildren) => (
  <strong className="text-sky-800 dark:text-sky-200 transition-colors">
    {children}
  </strong>
);
