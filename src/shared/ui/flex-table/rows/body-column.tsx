import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BodyColumnProps extends PropsWithChildren {
  className?: string;
}

function BodyColumn({ className, children }: BodyColumnProps) {
  return (
    <td scope="col" className={twMerge("px-6 py-4", className)}>
      {children}
    </td>
  );
}

export { BodyColumn };