import { Menu, Bell, Search, Home, Mail, PlusCircle, CreditCard } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const auctionItems = [
    {
      id: 1,
      title: "Cuadro de rosas",
      currency: "AR$",
      image: "https://images.unsplash.com/photo-1751957631658-eed7cf51b230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcm9zZSUyMHBhaW50aW5nJTIwZnJhbWV8ZW58MXx8fHwxNzc4NTIwMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Silla de oficina",
      currency: "AR$",
      image: "https://images.unsplash.com/photo-1590945213328-ab2d0bbd1e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBvZmZpY2UlMjBjaGFpcnxlbnwxfHx8fDE3Nzg1MjAyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Lampara de pared",
      currency: "AR$",
      image: "https://images.unsplash.com/photo-1654950538473-0d5b0735cc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB3YWxsJTIwbGFtcHxlbnwxfHx8fDE3Nzg1MjAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Auto antiguo",
      currency: "US$",
      status: "Próximamente Lunes 2, 19:00",
      image: "https://images.unsplash.com/photo-1524457006207-092fa5d972bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xhc3NpYyUyMGNhcnxlbnwxfHx8fDE3Nzg1MjAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">SubastUp</h1>
        <button className="p-2 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></span>
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-3 bg-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-4 py-3 flex gap-3">
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg font-medium">
          Oro
        </button>
        <button className="px-6 py-2 bg-red-800 text-white rounded-lg font-medium">
          Platino
        </button>
      </div>

      {/* Auction Items Grid */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {auctionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative aspect-square bg-gray-200">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-bold">
                  {item.currency}
                </span>
                {item.status && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white px-3 py-2 rounded text-xs text-center">
                      <div className="flex items-center gap-1 mb-1">
                        <Bell className="w-3 h-3" />
                        <span className="font-medium">Próximamente</span>
                      </div>
                      <div className="text-gray-600">Lunes 2, 19:00</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-red-800 text-white p-3 text-center font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t px-4 py-2 flex items-center justify-around">
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