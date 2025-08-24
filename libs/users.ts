import { LoginDTO, RegisterDTO } from "@/interfaces/User"

const API_URL = process.env.NEXT_PUBLIC_API_URL

type methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

const apiFetch = async (endpoint: string, method: methods, body?: any) => {
  const headerOptions: any = {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    }
  }
  if (method === 'POST' || method === 'PUT') headerOptions.body = JSON.stringify(body)
  console.log('url', API_URL);
  
  return fetch(`${API_URL}${endpoint}`)
  .then(data => data.json)
}

export const loginUser = async (body: LoginDTO) => {
  return await apiFetch('/user/login', 'POST', body)
}

export const registerUser = async (body: RegisterDTO) => {
  await apiFetch('/user/register', 'POST', body)
}
