import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton(){
    return(
        <a href="https://wa.me/56942208570?text=Hola%20Carnes%20Abdul%2C%20me%20gustar%C3%ADa%20conocer%20sus%20ofertas%20y%20promociones"
        target="_blank"
        rel="noopener nooreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300">
            <FaWhatsapp size={28}/>
        </a>
    );
}