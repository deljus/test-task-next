import { useMutation } from "@tanstack/react-query";
import { clientApi } from "@/shared/api/client";
import { useNavigate } from "react-router-dom";
import { TokenStorage } from "@/shared/lib/storages/token-storage";
import type { DefaultHTTPError } from "@/shared/model/http-errors";
import type { LoginDTO, LoginResponseDTO } from "./login-dto";

export function useAuth() {
  const navigate = useNavigate();

  return useMutation<LoginResponseDTO, DefaultHTTPError, LoginDTO>({
    mutationFn: ({ email, password }) =>
      clientApi.post<LoginDTO, LoginResponseDTO>("/login", { email, password }),
    onSuccess: ({ accessToken, refreshToken }) => {
      TokenStorage.set({ accessToken, refreshToken });
      navigate("/");
    },
  });
}
