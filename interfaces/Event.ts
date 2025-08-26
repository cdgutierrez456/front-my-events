export interface EventDTO {
  event_name: string
  initial_date: string
  end_date: string
  speaker_name: string
}

export interface EventDAO extends EventDTO {
  id_event: number
  state_id: number
}
