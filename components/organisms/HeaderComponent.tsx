import Image from "next/image"
import Link from "next/link"

export default function HeaderComponent() {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 bg-primary-500">
      <div className="flex flex-1">
        <a href="#">
          <span className="sr-only">Your Company</span>
          <Image 
            src="/personlogin.svg" 
            alt="Icono empresarial" 
            height="40"
            width="40"
          />
        </a>
      </div>
      <div className="flex gap-x-12">
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer">Eventos</div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer">Usuarios</div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
        <div className="relative group inline-block">
          <div className="text-sm/6 font-semibold text-white cursor-pointer">Perfiles</div>
          <div className="absolute left-0 hidden w-40 bg-white shadow-lg rounded-md group-hover:block overflow-hidden">
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Listar</Link>
            <Link href="#" className="block px-4 py-2 text-sm/6 text-gray-700 hover:bg-gray-100">Crear</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <a href="#" className="text-sm/6 font-semibold text-white">Log Out <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  )
}
