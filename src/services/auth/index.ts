import { api } from "@/libs/api";
import { LoginForm } from "@/utils/schemas/auth/login";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation<{ token: string }, Error, LoginForm>({
    mutationKey: ["auth"],
    mutationFn: async (data) => {
      return (await api.post("/login", data)).data;
    },
  });
}
