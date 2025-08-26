# 🗓️ MyEvents Frontend

Plataforma web para la gestión de eventos, desarrollada con **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS** y validaciones con **Zod + React Hook Form**.

Este repositorio corresponde al **frontend** del sistema.

---

## 🚀 Características

- 🔐 Login con validación de credenciales.
- 🧾 Listado y creación de eventos.
- 👥 Gestión de usuarios.
- ⚙️ Componentización basada en **Atomic Design**.
- 🎨 UI con TailwindCSS.
- ✅ Validaciones robustas con **Zod**.
- 🔄 Conexión a APIs externas.
- 🗃️ Gestión global de estado con **Zustand** (planificado).

---

## 📁 Estructura del proyecto
- /app
- /admin/eventos/crear       → Página para crear eventos
- /admin/eventos/listado     → Página para listar eventos
- /admin/usuarios/crear      → Página para crear usuarios
- /admin/usuarios/listado    → Página para listar usuarios

- /components
- /molecules                 → Formularios y componentes compuestos
- /organisms                 → Listados, encabezados y filtros

- /interfaces                 → Tipado con TypeScript
- /libs                       → Lógica de consumo API (fetch)
- /schemes                    → Validaciones con Zod

---

## 🧑‍💻 Requisitos

- Node.js v18 o superior
- npm o yarn
- `.env` configurado (ver sección siguiente)

---

## ⚙️ Configuración `.env`

Crea un archivo `.env` en la raíz con el siguiente contenido:

```env
NEXT_PUBLIC_API_URL=https://api.myeventtest.lat

## 🛠️ Instalación y ejecución local
# Clona el repositorio
git clone https://github.com/cdgutierrez456/front-my-events.git
cd front-my-events

# Instala dependencias
npm install

# Inicia en modo desarrollo
npm run dev

Accede a http://localhost:3000 en tu navegador.

## 🧪 Tests (en desarrollo)

Se planea implementar:
	•	Pruebas unitarias con Jest y React Testing Library
	•	Reportes de cobertura


## 🐳 Despliegue

Aunque no se completó la dockerización, el frontend está desplegado y accesible en:

🔗 https://myeventtest.lat

## 📂 Repositorio backend

Este frontend se conecta con el backend disponible aquí:

🔗 https://github.com/cdgutierrez456/back-my-events

## ✨ Autor

Cristian David Gutiérrez
Desarrollador Fullstack