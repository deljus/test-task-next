import { ErrorMessage } from "@hookform/error-message";
import type { ReactElement, ReactNode } from "react";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

interface FieldProps {
  /** Input name props */
  name: string;
  /** Field label name */
  label: string;
  /** childs */
  children: ReactNode;
}

function FormItem({ children, name, label }: FieldProps): ReactElement {
  const methods = useFormContext();
  const uid = useId();

  const { errors } = methods.formState;
  return (
    <div>
      <label
        htmlFor={uid}
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        {label}
      </label>
      {children}
      <div className="h-4 text-danger">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <>{message}</>}
        />
      </div>
    </div>
  );
}

export { FormItem };
