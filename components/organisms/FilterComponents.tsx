"use client"

import { useState } from "react"

export default function FilterComponents() {

  const [filters, setFilters] = useState({
    nombre: "",
    fecha: "",
    usuario: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleClear = () => {
    const cleared = { nombre: "", fecha: "", usuario: "" }
    setFilters(cleared)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="nombre"
          value={filters.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="fecha"
          value={filters.fecha}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="usuario"
          value={filters.usuario}
          onChange={handleChange}
          placeholder="Usuario"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100"
        >
          Limpiar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
