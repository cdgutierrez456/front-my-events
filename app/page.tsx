import LoginComponent from "@/components/molecules/LoginComponent";

export default function Home() {
  return (
    <section className="font-sans min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-primary-500 flex flex-col text-center mb-3">
        Bienvenid@ a tu sistema de 
        <span className="text-secondary-500">GESTION DE EVENTOS</span>
      </h1>
      <section className="w-full flex justify-center">
        <LoginComponent />
      </section>
    </section>
  );
}
