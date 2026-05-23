
export default function Hero(){
    return(
        <section id="hero" className="relative min-h-[85vh] overflow-hidden">

            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">

                <source src="/hero-beef.mp4" type="video/mp4"></source>

            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-start justify-center min-h-[85vh] text-white">
                <h1 className="text-5xl md:text-6xl font-display font-bold">Carnes Abdul</h1>
                <p className="mt-4 text-lg md:text-xl fon-semibold italic text-zinc-200"><em>Calidad y Confianza a su Servicio</em></p>

                <a href="#catalogo" className="mt-8 bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">Ver Catálogo</a>

            </div>

        </section>
    );
}