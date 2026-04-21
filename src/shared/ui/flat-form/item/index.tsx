import { ErrorMessage } from "@hookform/error-message";
import { isValidElement, cloneElement, useId, Children } from "react";
import { useFormContext } from "react-hook-form";

import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

/**
 A field for registering a control in a React Hook Form in the style of an AntD form.
 https://ant.design/components/form

 Example:
  <FormItem label="user" name="user">
    <Input />
  </FormItem>
*/
interface FieldProps {
  /** Input name props */
  name: string;
  /** Field label name */
  label: string;
  /** childs */
  children: ReactNode;
}

interface SharedProps extends UseFormRegisterReturn {
  id: string;
}

function FormItem({ children, name, label }: FieldProps) {
  const methods = useFormContext();
  const uid = useId();

  return (
    <div>
      <label
        htmlFor={uid}
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        {label}
      </label>
      {Children.map(children, (child) =>
        isValidElement<SharedProps>(child)
          ? cloneElement(child, { id: uid, ...methods.register(name) })
          : child,
      )}
      <div className="h-4 text-danger">
        <ErrorMessage
          errors={methods.formState.errors}
          name={name}
          render={({ message, messages }) => (
            <>{JSON.stringify({ message, messages })}</>
          )}
        />
      </div>
    </div>
  );
}

export { FormItem };
