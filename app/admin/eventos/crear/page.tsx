import EventCreateForm from "@/components/molecules/EventCreateForm"

export default function CreateEventPage() {
  return (
    <section className="flex flex-col w-full max-w-3xl mx-auto mt-7">
      <h1 className="text-4xl text-secondary-500 font-semibold text-center">Crea tu evento</h1>
      <EventCreateForm />
    </section>
  )
}
