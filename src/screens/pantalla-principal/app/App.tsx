import { Menu, Bell, Home, Mail, PlusCircle, CreditCard } from "lucide-react";

function PantallaPrincipalApp() {
  return (
    <div className="size-full flex flex-col bg-white relative">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between">
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <div className="h-10 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Espacio para logo SubastUp */}
        </div>
        <button className="p-2 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-4 pt-4 pb-24 flex flex-col overflow-y-auto">
        {/* Subastas Especiales */}
        <div className="mb-4">
          <h2 className="text-lg mb-2 text-gray-800 font-medium">Subastas Especiales</h2>
          <div className="relative h-48 bg-gray-200 rounded-2xl overflow-hidden">
            {/* Espacio para imagen de fondo */}
            <button className="absolute bottom-4 right-4 bg-red-800 text-white px-5 py-2 rounded-lg text-base font-medium">
              Ver mas
            </button>
          </div>
        </div>

        {/* Subastas Comunes */}
        <div className="mb-6">
          <h2 className="text-lg mb-2 text-gray-800 font-medium">Subastas Comunes</h2>
          <div className="relative h-48 bg-gray-200 rounded-2xl overflow-hidden">
            {/* Espacio para imagen de fondo */}
            <button className="absolute bottom-4 right-4 bg-red-800 text-white px-5 py-2 rounded-lg text-base font-medium">
              Ver mas
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-3 gap-6 w-full">
            <button className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
                {/* Espacio para imagen */}
              </div>
              <span className="text-sm text-center text-gray-800 leading-tight">Metodo de Pago</span>
            </button>
            <button className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
                {/* Espacio para imagen */}
              </div>
              <span className="text-sm text-center text-gray-800 leading-tight">Información</span>
            </button>
            <button className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
                {/* Espacio para imagen */}
              </div>
              <span className="text-sm text-center text-gray-800 leading-tight">Calendario</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Floating */}
      <nav className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center justify-around">
        <button className="flex flex-col items-center gap-1 text-amber-600">
          <Home className="w-6 h-6" />
          <span className="text-xs">Inicio</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <Mail className="w-6 h-6" />
          <span className="text-xs">Mensajes</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <PlusCircle className="w-6 h-6" />
          <span className="text-xs">Publicar</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <CreditCard className="w-6 h-6" />
          <span className="text-xs">Pagar</span>
        </button>
      </nav>
    </div>
  );
}

export default PantallaPrincipalApp;