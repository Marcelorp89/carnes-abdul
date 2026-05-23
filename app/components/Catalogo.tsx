import Image from "next/image";
import productos from "../data/productos.json";

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-20 px-6 bg-gray-50">
      
      {/* Título de sección */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-800">Nuestro Catálogo</h2>
        <p className="text-gray-500 mt-2">Productos frescos y de calidad</p>
      </div>

      {/* Categorías */}
      {productos.categorias.map((categoria) => (
        <div key={categoria.id} className="max-w-7xl mx-auto px-6 mb-12">
          
          {/* Título categoría */}
          <h3 className="text-2xl font-bold text-red-700 mb-6 border-b-2 border-red-700 pb-2">
            {categoria.nombre}
          </h3>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoria.productos.map((producto) => (
              <div
                key={producto.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Imagen */}
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  {producto.imagen ? (
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className=" object-cover transition-transform duration-500group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      Sin imagen
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800">{producto.nombre}</h4>
                  <p className="text-gray-500 text-sm mt-1">{producto.descripcion}</p>
                  <p className="text-red-700 font-extrabold tracking-wide text-lg mt-3">
                    ${producto.precio.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}