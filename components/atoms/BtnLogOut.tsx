"use client"

import { useRouter } from "next/navigation";

export default function BtnLogOut() {
  const router = useRouter()
  const logOut = () => {
    if (typeof window !== "undefined") {
      localStorage.clear(); 
      router.replace('/')
    }
  }
  return (
    <button
      title="Cerrar cesión" 
      onClick={logOut} 
      className="text-sm/6 font-semibold text-white cursor-pointer"
    >
      Log Out <span aria-hidden="true">&rarr;</span>
    </button>
  )
}