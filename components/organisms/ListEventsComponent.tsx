'use client'
import { useState, useEffect } from "react"

import { eventsList } from "@/libs/events"

import { EventDAO } from "@/interfaces/Event"

export default function ListEventsComponent() {

  const states: { [key: number]: string } = {
    1: 'Activo',
    2: 'Inactivo'
  }
  const [listEvents, setListEvents] = useState<EventDAO[]>([])

  useEffect(() => {
    eventsList()
    .then((data: EventDAO[]) => {
      setListEvents(data)
    })
  }, [])

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl">Listado de eventos</h1>
        <button
          className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
        >
          Crear
        </button>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Inicio</th>
              <th className="text-left p-3 px-5">Fin</th>
              <th className="text-left p-3 px-5">Speaker</th>
              <th className="text-left p-3 px-5">State</th>
              <th></th>
            </tr>
            {
              listEvents.map(event => (
                <tr key={event.id_event} className="border-b hover:bg-grey-ligth">
                  <td className="p-3 px-5">
                    <p>{ event.event_name }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ event.initial_date }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ event.end_date }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ event.speaker_name }</p>
                  </td>
                  <td className="p-3 px-5">
                    <p>{ states[event.state_id] }</p>
                  </td>
                  <td className="p-3 px-5 flex justify-end gap-1.5">
                    <button type="button" className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">Detalle</button>
                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline font-semibold">Eliminar</button>
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
