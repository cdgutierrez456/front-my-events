import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tus EVENTOS",
  description: "Administra eventos, perfiles, usuarios, etc, de forma facil y rapida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
