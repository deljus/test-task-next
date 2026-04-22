import { Outlet } from "react-router-dom";
import { LanguageSwitcher } from "@/shared/ui/language-switcher";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <Outlet />
    </div>
  );
}
