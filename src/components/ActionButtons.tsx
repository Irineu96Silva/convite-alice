
const ActionButtons = () => {
  return (
    <div className="space-y-4">
      <a 
        href="https://maps.app.goo.gl/SEU_LOCAL_DA_FESTA_AQUI" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full group"
      >
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-6 rounded-full transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:scale-105 relative overflow-hidden">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-lg">📍</div>
            </div>
            <div className="wonderland-font font-medium">Local da festa</div>
          </div>
          <div className="absolute top-0 right-0 text-xs text-blue-300 p-2 opacity-60">local da festa</div>
        </div>
      </a>
      
      <a 
        href="https://www.sua-lista-de-presentes.com.br/AQUI" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full group"
      >
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 px-6 rounded-full transition-all duration-300 hover:from-pink-500 hover:to-pink-600 hover:shadow-lg hover:scale-105 relative overflow-hidden">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-lg">📋</div>
            </div>
            <div className="wonderland-font font-medium">Sugestão de presentes</div>
          </div>
          <div className="absolute top-0 right-0 text-xs text-pink-300 p-2 opacity-60">de presentes</div>
        </div>
      </a>
      
      <a 
        href="https://wa.me/55SEUNUMERO?text=Ol%C3%A1%21%20Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20anivers%C3%A1rio%20da%20Alice." 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full group"
      >
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white py-4 px-6 rounded-full transition-all duration-300 hover:from-purple-500 hover:to-purple-600 hover:shadow-lg hover:scale-105 relative overflow-hidden">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-lg">💬</div>
            </div>
            <div className="wonderland-font font-medium">Confirmar presença</div>
          </div>
          <div className="absolute top-0 right-0 text-xs text-purple-300 p-2 opacity-60">ar presença</div>
        </div>
      </a>
    </div>
  );
};

export default ActionButtons;
