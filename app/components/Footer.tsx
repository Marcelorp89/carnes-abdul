import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Marca */}
          <div className="flex flex-col items-center md:items-start gap-3">

              <Link href="#hero" className="group">
                  <Image
                    src="/images/logo-carniceria.jpg"
                    alt="Carnes Abdul"
                    width={80}
                    height={80}
                    className="rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
              </Link>          

            <p className="text-sm text-zinc-400 italic">
              Calidad y confianza a su servicio
            </p>

          </div>

          {/* Redes */}
          <div className="flex flex-col items-center gap-3">

            <span className="text-sm uppercase tracking-wider text-zinc-500">
              Síguenos
            </span>

            <a
              href="https://www.facebook.com/p/Carnes-Abdul-100063640777999/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900
              hover:bg-blue-600
              hover:scale-105
              transition-all duration-300"
            >
              <FaFacebook size={22} />
            </a>

          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-zinc-400">

            <span className="hover:text-white transition cursor-pointer">
              Política de Privacidad
            </span>

            <p>
              © 2026 Carnes Abdul
            </p>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 mt-8 pt-4 text-center">

          <p className="text-xs text-zinc-500">
            Elaborado por ManoTech ©
          </p>

        </div>

      </div>

    </footer>
  );
}