import { EventDAO, EventDTO } from "@/interfaces/Event"

import { apiFetch } from "./singletonFetch"

export const eventsList = async (): Promise<EventDAO[]> => {
  return await apiFetch('/events/', 'GET') as EventDAO[]
}

export const createEvent = async (body: EventDTO) => {
  await apiFetch('/events/create', 'POST', body)
}

export const deleteEvent = async (id: EventDAO['id_event']) => {
  await apiFetch(`/events/${id}`, 'DELETE')
}
