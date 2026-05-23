"use client";

import Image from "next/image";
import Link from "next/link";
import {useState, useEffect } from "react";
import { FaBars, FaWindowClose  } from "react-icons/fa";


export default function Navbar(){

    const[menuAbierto, setMenuAbierto] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(

        <header className={`
  sticky top-0 z-50
  text-white
  transition-all
  duration-500
  ${
    scrolled
      ? "bg-red-900/90 backdrop-blur-md shadow-md"
      : "bg-red-800/50 backdrop-blur-sm"
  }
`}>
            <nav className={`
  max-w-6xl mx-auto px-20
  flex items-center justify-between
  transition-all duration-300
  ${scrolled ? "py-3" : "py-6"}
`}>
                {/*Logo */}
                    <Link href="#hero">
                        <Image
                            src="/images/logo-carniceria.jpg"
                            alt="Club de pesca y caza chinook tolten"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </Link>
                
                {/*Menú escritorio */}
                <ul className="hidden md:flex gap-6">
                    <li className=" relative
                                    text-white
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-white
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full">
                        <a href="/#hero">Inicio</a></li>
                    <li className=" relative
                                    text-white
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-white
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full">
                        <a href="/#catalogo">Catálogo</a></li>
                    <li className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
                    Tutoriales
                        <span className="text-xs bg-red-700 text-white px-2 py-0.5 rounded-full">
                        Próximamente
                        </span>
                    </li>
                    <li className=" relative
                                    text-white
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-white
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full">
                        <a href="/#about">Historia</a></li>
                    <li className=" relative
                                    text-white
                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-white
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full">
                        <a href="/#contact">Contacto</a></li>
                </ul>
              
            </nav>

        </header>
    );}