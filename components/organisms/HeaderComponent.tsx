import Link from "next/link"
import Image from "next/image"

import BtnLogOut from "../atoms/BtnLogOut";

export default function HeaderComponent() {

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 bg-primary-500">
      <div className="flex flex-1">
        <Link href="/admin">
          <span className="sr-only">Home</span>
          <Image 
            src="/personlogin.svg" 
            alt="Icono empresarial" 
            height="40"
            width="40"
          />
        </Link>
      </div >
      <div className="flex gap-x-12">
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer flex gap-1.5 h-full items-center">
            Eventos
            <Image
              src='/chevron-down.svg'
              alt="Flecha hacia abajo"
              height={20}
              width={20}
            />
          </div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="/admin/eventos/listado" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="/admin/eventos/crear" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer flex gap-1.5 h-full items-center">
            Usuarios
            <Image
              src='/chevron-down.svg'
              alt="Flecha hacia abajo"
              height={20}
              width={20}
            />
          </div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="/admin/usuarios/listado" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="/admin/usuarios/crear" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer flex gap-1.5 h-full items-center">
            Perfiles
            <Image
              src='/chevron-down.svg'
              alt="Flecha hacia abajo"
              height={20}
              width={20}
            />
          </div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <BtnLogOut />
      </div>
    </nav>
  )
}
