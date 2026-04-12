import type { HTMLAttributes, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

function Input({ className, ...rest }: HTMLAttributes<HTMLInputElement>): ReactElement {
  return (
    <input
      data-testid="form-field"
      className={twMerge(
        'bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body',
        className
      )}
      {...rest}
    />
  );
}

export { Input };
