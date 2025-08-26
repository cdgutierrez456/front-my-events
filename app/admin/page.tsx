import Link from "next/link"

import HeaderComponent from "@/components/organisms/HeaderComponent"

export default function AdminPageComponent() {
  return (
    <section className="h-[85dvh] flex flex-col justify-center items-center">
      <p className="text-3xl text-secondary-500 font-semibold">Bienvenido al panel administrativo</p>
      <Link href='/admin/eventos/listado'>Inicia administrando Eventos <span aria-hidden="true">&rarr;</span></Link>
    </section>
  )
}
