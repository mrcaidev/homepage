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
      className="w-fit h-fit p-2 rounded-md hover:text-sky-800 hover:dark:text-sky-200 active:text-sky-700 active:dark:text-sky-300 transition-colors"
      {...rest}
    >
      {children}
    </button>
  )
);

IconButton.displayName = "IconButton";
