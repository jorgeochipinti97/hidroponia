
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curso de Hidroponía | Aprende Cultivo Hidropónico<",
  description:
    '"Aprende hidroponía de la mano de un ingeniero agroindustrial con más de 4 años de experiencia. Descubre técnicas avanzadas de cultivo, accede a recursos exclusivos y obtén tu certificado. ¡Empieza tu proyecto hidropónico hoy mismo!"',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
