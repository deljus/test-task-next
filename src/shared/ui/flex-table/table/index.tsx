import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps extends PropsWithChildren {
  className?: string;
}

function Table({ className, children }: TableProps) {
  return (
    <div
      className={twMerge(
        "relative overflow-x-auto bg-neutral-primary-soft shadow-sm rounded border border-default",
        className,
      )}
    >
      <table className="w-full text-sm text-left rtl:text-right text-body">
        {children}
      </table>
    </div>
  );
}

export { Table };
