import { LoginDTO, RegisterDTO } from "@/interfaces/User"

import { apiFetch } from "./singletonFetch"

export const loginUser = async (body: LoginDTO) => {
  return await apiFetch('/user/login', 'POST', body)
}

export const registerUser = async (body: RegisterDTO) => {
  await apiFetch('/user/register', 'POST', body)
}
