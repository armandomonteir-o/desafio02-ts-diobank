import { api } from "../api";

export const login = async (
  email: string,
  password: string
): Promise<"incorrectEmail" | "incorrectPassword" | "success"> => {
  const data: any = await api;

  if (email !== data.email) {
    return "incorrectEmail";
  }

  if (password !== data.password) {
    return "incorrectPassword";
  }

  return "success";
};
