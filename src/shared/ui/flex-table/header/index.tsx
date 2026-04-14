import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

function Header({ className, children }: HeaderProps) {
  return (
    <thead
      className={twMerge(
        "text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default",
        className,
      )}
    >
      <tr>{children}</tr>
    </thead>
  );
}

export { Header };
