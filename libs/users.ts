import { LoginDTO, RegisterDTO, UserDAO } from "@/interfaces/User"

import { apiFetch } from "./singletonFetch"

export const loginUser = async (body: LoginDTO) => {
  return await apiFetch('/auth/login', 'POST', body)
}

export const registerUser = async (body: RegisterDTO) => {
  await apiFetch('/users/register', 'POST', body)
}

export const userList = async (): Promise<UserDAO[]> => {
  return await apiFetch('/users/', 'GET')
}
