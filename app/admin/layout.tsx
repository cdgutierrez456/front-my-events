import type { Metadata } from "next";

import HeaderComponent from "@/components/organisms/HeaderComponent";

export const metadata: Metadata = {
  title: "Bienvenido administrador",
  description: "Modulo adminstrativo de TUS EVENTOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <HeaderComponent />
      {children}
    </main>
  );
}
