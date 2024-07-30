export default function ImageCarousel() {
  return (
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="relative">
        {/* <!-- Contenedor del carrusel --> */}
        <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {/* <!-- Imágenes del carrusel --> */}
          <img src="" alt="Imagen 1" class="w-full flex-shrink-0 snap-center" />
          <img src="" alt="Imagen 2" class="w-full flex-shrink-0 snap-center" />
          <img src="" alt="Imagen 3" class="w-full flex-shrink-0 snap-center" />
        </div>
        {/* <!-- Indicadores de página --> */}
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
          <div class="w-2 h-2 rounded-full bg-white"></div>
          <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
        </div>
      </div>
      {/* <!-- Pie del carrusel --> */}
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-2">
            <img src="" alt="Avatar" class="w-8 h-8 rounded-full" />
            <span class="font-semibold text-sm">usuario123</span>
          </div>
          <button class="text-blue-500 font-semibold text-sm">Seguir</button>
        </div>
        <p class="text-sm">Descripción de la publicación...</p>
      </div>
    </div>
  );
}
