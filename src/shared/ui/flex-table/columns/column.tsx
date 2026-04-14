import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ColumnProps extends PropsWithChildren {
  className?: string;
}

function Column({ className, children }: ColumnProps) {
  return (
    <th scope="col" className={twMerge("px-6 py-3 font-medium", className)}>
      {children}
    </th>
  );
}

export { Column };
