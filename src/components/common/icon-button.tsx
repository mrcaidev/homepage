import {
  forwardRef,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ariaLabel: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IProps>(
  ({ ariaLabel, children, ...rest }, ref) => (
    <button
      ref={ref}
      aria-label={ariaLabel}
      className="w-fit h-fit p-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 transition-colors"
      {...rest}
    >
      {children}
    </button>
  )
);

IconButton.displayName = "IconButton";
