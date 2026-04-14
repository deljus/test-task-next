import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface RowProps extends PropsWithChildren {
  className?: string;
}

function Row({ className, children }: RowProps) {
  return (
    <td scope="col" className={twMerge("px-6 py-4", className)}>
      {children}
    </td>
  );
}

export { Row };
