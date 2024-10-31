import { api } from "@/libs/api";
import { UserJWTPayload } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export function useGetMe() {
    return useQuery<UserJWTPayload>({
      queryKey: ["auth"],
      queryFn: async () => {
        return (await api.get("/me")).data;
      },
    });
  }
  