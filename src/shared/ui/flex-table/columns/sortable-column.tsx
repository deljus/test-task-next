import { useState, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import {
  Bars3BottomLeftIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/solid";

type SortType = "asc" | "desc";

interface ColumnProps extends PropsWithChildren {
  className?: string;
  defaultSort?: SortType;
  onSort?: (sortType?: SortType) => void;
}

function SortableColumn({
  className,
  children,
  defaultSort,
  onSort,
}: ColumnProps) {
  const [sortType, setSortType] = useState<SortType | undefined>(defaultSort);

  const handleClick = () => {
    const nextSortType =
      sortType === "asc" ? "desc" : sortType === "desc" ? undefined : "asc";
    setSortType(nextSortType);
    if (onSort) onSort(nextSortType);
  };

  const Icon =
    sortType === "asc"
      ? BarsArrowUpIcon
      : sortType === "desc"
        ? BarsArrowDownIcon
        : Bars3BottomLeftIcon;

  return (
    <th scope="col" className={twMerge("px-6 py-3 font-medium", className)}>
      <div className="flex justify-between">
        <div>{children}</div>
        <button onClick={handleClick}>
          <Icon className="w-4 h-4" />
        </button>
      </div>
    </th>
  );
}

export { SortableColumn };
