export interface LoginDTO {
  user: string
  password: string 
}

export interface RegisterDTO extends LoginDTO {
  name: string
  profile_id: string
}

export interface UserDTO {
  name: string,
  email: string,
  profile_id: '1' | '2' | '3'
}

export interface UserDAO extends UserDTO {
  id_user: number
  state_id: number
}
