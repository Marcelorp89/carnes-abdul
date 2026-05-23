import { FaHome, FaList, FaBook, FaPhone } from "react-icons/fa"

const links = [
  { href: "#hero", icon: <FaHome size={20} />, label: "Inicio" },
  { href: "#catalogo", icon: <FaList size={20} />, label: "Catálogo" },
  { href: "#about", icon: <FaBook size={20} />, label: "Historia" },
  { href: "#contact", icon: <FaPhone size={20} />, label: "Contacto" },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-red-800 text-white flex md:hidden">
      {links.map((link) => (
       <a 
          key={link.href}
          href={link.href}
          className="flex flex-col items-center justify-center flex-1 py-3 gap-1 hover:bg-red-900 transition-colors duration-200"
            >
          {link.icon}
          <span className="text-xs">{link.label}</span>
        </a>
      ))}
    </nav>
  )
}
