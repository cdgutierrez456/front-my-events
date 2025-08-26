
export default function ListEventsComponent() {
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
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th></th>
            </tr>
            <tr className="border-b hover:bg-grey-ligth">
              <td className="p-3 px-5">
                <p>Nombre Usuario</p>
              </td>
              <td className="p-3 px-5">
                <p>email@mail.com</p>
              </td>
              <td className="p-3 px-5">
                <p>Admin</p>
              </td>
              <td className="p-3 px-5 flex justify-end gap-1.5">
                <button type="button" className="rounded-md border border-primary-500 bg-grey-ligth font-semibold px-3 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">Detalle</button>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline font-semibold">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
