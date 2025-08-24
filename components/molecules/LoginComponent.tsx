'use client'
import { useState } from "react"
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

import { loginUser } from "@/libs/users"

import { loginScheme } from "@/schemes/LoginScheme"
import { LoginDTO } from "@/interfaces/User"

export default function LoginComponent() {
  const router = useRouter()
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })

  const onSubmitForm: SubmitHandler<LoginDTO> = (data) => {
    setIsSubmiting(true)
    router.replace('/admin')
    // loginUser(data)
    // .then(data => {
    //   console.log('data', data);
    // })
    // .catch(e => {
    //   alert(`Error en comunicación con endpoint. ${e}`)
    // })
  }

  const onError: SubmitErrorHandler<LoginDTO> = () => {
    alert('Datos invalidos, ingrese información con el formato correcto')
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm, onError)} className="flex flex-col w-1/2">
      <div className="border-b border-white/10">
        <h2 className="text-base/7 font-semibold text-black text-center">Ingresa tus credenciales</h2>
        <div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold" htmlFor="nameUser">Usuario (email)</label>
            <input 
              {...register("user")}
              id="nameUser" 
              type="text"
              placeholder="mail@mail.com" 
              className="border border-primary-500 rounded-md w-full p-2 text-base text-black" 
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold" htmlFor="passwordUser">Contraseña</label>
            <input
              {...register("password")} 
              id="passwordUser" 
              type="password"
              placeholder="******" 
              className="border border-primary-500 rounded-md w-full p-2 text-base text-black" 
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {
          isSubmiting 
            ? <p className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">Enviando...</p>
            : <button 
                type="submit"
                className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
              >Login</button>
        }
        
      </div>
    </form>
  )
}
