
import Image from "next/image";

export default function About(){
    return(
        <section id="about" className="px-6 py-20 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/*Primera columna - texto*/}
                <div className="py-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestra historia</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis voluptates vitae labore quae dignissimos explicabo exercitationem impedit nulla hic. Corrupti, iusto odit! Harum accusantium veritatis autem assumenda accusamus ducimus!</p>
                    <p className="text-gray-600 leading-relaxed mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis voluptates vitae labore quae dignissimos explicabo exercitationem impedit nulla hic. Corrupti, iusto odit! Harum accusantium veritatis autem assumenda accusamus ducimus!</p>
                    <p className="text-gray-600 leading-relaxed mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis voluptates vitae labore quae dignissimos explicabo exercitationem impedit nulla hic. Corrupti, iusto odit! Harum accusantium veritatis autem assumenda accusamus ducimus!</p>
                </div>

                {/*Segunda columna - imagen carniceria*/}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                    src="/images/carniceria.jpg"
                    alt="Carniceria Abdul, ubicada en Tolten, region de la Araucania"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

            </div>

        </section>
    );
}