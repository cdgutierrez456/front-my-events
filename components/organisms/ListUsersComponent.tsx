'use client'
import { useState, useEffect } from "react"
import Link from "next/link";

import { userList } from "@/libs/users";

import { UserDAO } from "@/interfaces/User";

export default function ListUsersComponent() {

  const states: { [key: number]: string } = {
    1: 'Activo',
    2: 'Inactivo'
  }
  const [listUsers, setListUsers] = useState<UserDAO[]>([])

  useEffect(() => {
    userList()
    .then((data: UserDAO[]) => {
      setListUsers(data)
    })
  }, [])

  const onDeleteUser = (iduser: UserDAO['id_user']) => {
    // deleteEvent(idevent)
    // .then(() => {
    //   setListEvents(listEvents.filter(event => event.id_event != idevent))
    //   alert('Informacion eliminada con exito')
    // })
    // .catch(() => {
    //   alert('Error al eliminar el evento')
    // })
  }

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl">Listado de usuarios</h1>
        <Link
          href={'/admin/usuarios/crear'}
          className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
        >
          Crear
        </Link>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Nombre</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Estado</th>
              <th className="text-left p-3 px-5">Perfil</th>
              <th></th>
            </tr>
            {
              listUsers.map(user => (
                <tr key={user.id_user} className="border-b hover:bg-grey-ligth">
                  <td className="p-3 px-5">
                    <p>{ user.name }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ user.email }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ states[user.state_id] }</p>
                  </td>
                  <td className="p-3 px-5 flex justify-end gap-1.5">
                    <button type="button" className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">Detalle</button>
                    <button 
                      onClick={() => onDeleteUser(user.id_user)}
                      type="button" 
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline font-semibold"
                    >Eliminar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
