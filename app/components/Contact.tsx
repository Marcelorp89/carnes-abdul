
import { FaMapPin, FaPhoneAlt, FaRegEnvelope, FaClock, FaCircle, FaWhatsapp, FaFacebook} from "react-icons/fa";

export default function Contact(){
    return(
        <section id="contact" className="px-6 py-20 bg-amber-50">
            <h2 className="text-center mb-12 text-4xl font-bold text-gray-800">Contacto</h2>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/*Primera columna - Mapa*/}
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=14PO__FMAKJWa1RE002p77PAzzi9UxRE&ehbc=2E312F&noprof=1" 
                    width="100%" 
                    height="500"
                    style={{border: "none"}}
                    loading="lazy">
                </iframe>

                {/*Segunda columna - informacion*/}
                <div>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaMapPin className="text-red-700"/>
                        San Martín 388, Nueva Toltén, La Araucanía</li>
                        <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-700"/>
                        9 9001 6116</li>
                        <li className="flex items-center gap-2"><FaRegEnvelope className="text-red-700"/>
                        carnesabdul@gmail.com</li>
                    </ul>

                    <h3 className="flex items-center gap-2 font-bold text-gray-800 mt-6 mb-2">
                    <FaClock className="text-red-700" />
                    Horarios de atención
                    </h3>
                    
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaCircle className="text-red-700" size={9} />
                        Lunes a Viernes, 9:00 - 19:00</li>
                        <li className="flex items-center gap-2"><FaCircle className="text-red-700" size={9} />
                        Sábado, 9:00 - 13:00</li>
                        <li className="flex items-center gap-2"><FaCircle className="text-red-700" size={9} />
                        Domingo, cerrado</li>
                    </ul>

                    {/*Botones Redes sociales*/}
                    <div className="flex flex-col gap-3 mt-6">
                        <a href="https://wa.me/56990016116" 
                            target="_blank"
                            className="grid grid-cols-[24px_1fr] items-center gap-2 w-64 px-6 py-3 rounded-full bg-green-500 hover:scale-[1.02] hover:shadow-lg text-white text-sm font-bold rounded-full transition-all duration-300">
                            <FaWhatsapp size={20} />
                            Escríbenos por WhatsApp
                        </a>

                        <a href="https://www.facebook.com/p/Carnes-Abdul-100063640777999/?locale=es_LA" 
                            target="_blank"
                            className="grid grid-cols-[24px_1fr] items-center gap-2 w-64 px-6 py-3 rounded-full bg-blue-600 hover:scale-[1.02] hover:shadow-lg text-white text-sm font-bold rounded-full transition-all duration-300">
                            <FaFacebook size={20} />
                            Síguenos en Facebook
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}
