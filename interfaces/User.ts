export interface LoginDTO {
  user: string
  password: string 
}

export interface RegisterDTO extends LoginDTO {
  name: string
  profile_id: string
}

