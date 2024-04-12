import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google'
import { Taviraj } from 'next/font/google'
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-taviraj',
  weight: "100"
})
export const metadata: Metadata = {
  title: "Terapeutas Inc.",
  description: "Terapeutas Inc. es una plataforma de terapia en línea que conecta a terapeutas con pacientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={libre_franklin.variable + taviraj.variable}>{children}</body>
    </html>
  );
}
