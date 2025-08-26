'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { createEvent } from "@/libs/events"

import { eventSchema } from "@/schemes/EventScheme"
import { EventDTO } from "@/interfaces/Event"

export default function EventCreateForm() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventDTO>({
    resolver: zodResolver(eventSchema),
  })

  const onSubmit = (data: EventDTO) => {
    setIsCreating(true)
    createEvent(data)
    .then(() => {
      setIsCreating(false)
      router.push('/admin/eventos/listado')
      alert('Evento creado con exito.')
    })
    .catch(() => {
      setIsCreating(false)
      alert('Error al crear el evento, intenta de nuevo mas tarde')
    })
  }

  const onError = () => alert('Llena toda la información para crear')

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm text-gray-700">Nombre del evento</label>
        <input
          {...register('event_name')}
          className="border border-primary-500 rounded-md w-full p-2 text-base text-black"
        />
        {errors.event_name && <p className="text-red-500 text-sm">{errors.event_name.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-700">Fecha de inicio</label>
        <input
          type="datetime-local"
          {...register('initial_date')}
          className="border border-primary-500 rounded-md w-full p-2 text-base text-black"
        />
        {errors.initial_date && (
          <p className="text-red-500 text-sm">{errors.initial_date.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-700">Fecha de finalización</label>
        <input
          type="datetime-local"
          {...register('end_date')}
          className="border border-primary-500 rounded-md w-full p-2 text-base text-black"
        />
        {errors.end_date && <p className="text-red-500 text-sm">{errors.end_date.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-700">Nombre del ponente</label>
        <input
          {...register('speaker_name')}
          className="border border-primary-500 rounded-md w-full p-2 text-base text-black"
        />
        {errors.speaker_name && (
          <p className="text-red-500 text-sm">{errors.speaker_name.message}</p>
        )}
      </div>
      <div className="w-full flex justify-center">
        {
          isCreating 
            ? <p className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">Creando...</p>
            : (
              <button
                type="submit"
                className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
              >
                Crear evento
              </button>
            )
        }
      </div>
    </form>
  )
}
