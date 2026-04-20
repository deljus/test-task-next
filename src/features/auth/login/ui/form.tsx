import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/controls/input";
import { FormItem, Form } from "@/shared/ui/flat-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "../model/schema";
import { useAuth } from "../model/use-auth";
import type { LoginDTO } from "../model/login-dto";

function LoginForm() {
  const { mutate } = useAuth();

  return (
    <Form<LoginDTO>
      onSubmit={(data) => mutate(data)}
      resolver={yupResolver(validateSchema)}
    >
      <FormItem label="email" name="email">
        <Input />
      </FormItem>
      <FormItem label="password" name="password">
        <Input type="password" />
      </FormItem>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export { LoginForm };
