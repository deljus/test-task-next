import { LoginForm } from "@/features/auth/login";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {t("auth.signIn")}
      </h1>
      <LoginForm />
    </div>
  );
}

export { LoginPage };
