import { z } from "zod"

export const eventSchema = z.object({
  event_name: z.string().min(1, 'El nombre es obligatorio'),
  initial_date: z.string().min(1, 'La fecha de inicio es obligatoria'),
  end_date: z.string().min(1, 'La fecha de fin es obligatoria'),
  speaker_name: z.string().min(1, 'El ponente es obligatorio'),
})