import type { ReactElement, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';

interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends UseFormProps<TFieldValues> {
  className?: string;
  children: ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
}

function Form<TFieldValues extends FieldValues>({
  className,
  children,
  onSubmit,
  ...options
}: FormProps<TFieldValues>): ReactElement {
  const methods = useForm(options);

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

export { Form };
