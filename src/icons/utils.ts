import type { HTMLAttributes } from "astro/types";

export type IconProps = HTMLAttributes<"svg"> & {
  size?: number;
};

export type Icon = (props: IconProps) => unknown;
