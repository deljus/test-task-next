import type { ReactElement, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

/** 
  A wrapper around the React form hook for easy use.
  Example:
  <Form onSubmit={...} schema={...yup schema} >
      <FormItem label="user" name="user">
        <Input />
      </FormItem>
      <Button>Submit</Button>
    </Form>
 */
interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
> extends UseFormProps<TFieldValues> {
  /** Form style class props */
  className?: string;
  /** Childs */
  children: ReactNode;
  /** form onSubmit handler */
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
