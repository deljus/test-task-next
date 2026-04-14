import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { InboxIcon } from "@heroicons/react/24/solid";

const LoadingPlaceholder = (
  <div className="absolute w-full h-full top-0 left-0" />
);
const EmptyPlaceholder = (
  <div className="absolute w-full h-full top-0 left-0">
    <InboxIcon className="w-10 h-10" />
  </div>
);

interface BodyProps<DataType> {
  className?: string;
  data: DataType[];
  children: (data: DataType, index: number) => ReactNode;
  isLoading?: boolean;
}

function Body<DataType>({
  className,
  children,
  data,
  isLoading,
}: BodyProps<DataType>) {
  const isEmpty = data.length === 0;

  if (isLoading) return LoadingPlaceholder;
  if (isEmpty) return EmptyPlaceholder;

  return (
    <tbody
      className={twMerge(
        "bg-neutral-primary border-b border-default",
        className,
      )}
    >
      {data.map((value, index) => (
        <tr>{children(value, index)}</tr>
      ))}
    </tbody>
  );
}

export { Body };
