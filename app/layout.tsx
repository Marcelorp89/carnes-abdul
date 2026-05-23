import type { Metadata } from "next"
import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import WhatsappButton from "./components/WhatsappButton"
import Footer from "./components/Footer"
import BottomNav from "./components/BottomNav"





const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carnes Abdul | Carniceria en Toltén",
  description: "Carnes Abdul, tu carnicería de confianza en Toltén, La Araucanía. Vacuno, cerdo, pollo y cecinas frescas. Calidad y confianza a su servicio",
  openGraph: {
    title: "Carnes Abdul | Carnicería en Toltén",
    description: "Tu carnicería de confianza en Toltén, La Araucanía.",
    url: "https://carnesabdul.cl",
    siteName: "Carnes Abdul",
    locale: "es_CL",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <WhatsappButton />        
        <Footer />
        <BottomNav />
        </body>
    </html>
  )
}


