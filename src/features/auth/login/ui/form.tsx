import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/controls/input";
import { FormItem, Form } from "@/shared/ui/flat-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { validateSchema } from "../model/schema";
import { useAuth } from "../model/use-auth";
import type { LoginDTO } from "../model/login-dto";

function LoginForm() {
  const { mutate } = useAuth();
  const { t } = useTranslation();

  return (
    <Form<LoginDTO>
      onSubmit={(data) => mutate(data)}
      resolver={yupResolver(validateSchema)}
    >
      <FormItem label={t('auth.email')} name="email">
        <Input />
      </FormItem>
      <FormItem label={t('auth.password')} name="password">
        <Input type="password" />
      </FormItem>
      <Button type="submit">{t('common.submit')}</Button>
    </Form>
  );
}

export { LoginForm };
