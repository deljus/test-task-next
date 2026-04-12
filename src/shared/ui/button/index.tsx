import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const COLORS = {
  brand:
    "text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium",
  secondary:
    "text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary",
  success:
    "text-white bg-success hover:bg-success-strong focus:ring-success-medium",
  danger:
    "text-white bg-danger border-transparent hover:bg-danger-strong focus:ring-danger-medium",
  warning:
    "text-white bg-warning border-transparent hover:bg-warning-strong focus:ring-warning-medium",
  dark: "text-white bg-dark border-transparent hover:bg-dark-strong focus:ring-neutral-tertiary",
  ghost:
    "text-heading bg-transparent border-transparent hover:bg-neutral-secondary-medium focus:ring-neutral-tertiary",
} as const;

const SIZES = {
  large: "text-base px-5 py-3",
  medium: "text-sm px-4 py-2.5",
  small: "text-sm px-3 py-2",
} as const;

const DISPLAYS = {
  default:
    "rounded box-border border shadow-xs focus:ring-2 font-medium focus:outline-none cursor-pointer",
  rounded:
    "rounded-full box-border border shadow-xs focus:ring-2 font-medium focus:outline-none cursor-pointer",
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Custom style className */
  className?: string;
  /** What background color to use */
  color?: keyof typeof COLORS;
  /** Size button */
  size?: keyof typeof SIZES;
  /** Button type */
  display?: keyof typeof DISPLAYS;
  /** Button contents */
  children?: ReactNode | string;
  /** Optional click handler */
  onClick?: () => void;
}

function Button({
  children,
  className,
  color = "brand",
  size = "medium",
  display = "default",
  onClick,
  ...rest
}: ButtonProps): ReactElement {
  return (
    <button
      className={twMerge(
        COLORS[color],
        SIZES[size],
        DISPLAYS[display],
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
