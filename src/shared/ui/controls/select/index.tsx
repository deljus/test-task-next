import type { HTMLProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

function Select({
  className,
  children,
  ...rest
}: HTMLProps<HTMLSelectElement>): ReactElement {
  return (
    <select
      data-testid="form-field"
      className={twMerge(
        "bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs appearance-none",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
}

export { Select };