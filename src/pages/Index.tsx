
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50 py-4 px-4">
      {/* Container Principal */}
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        
        {/* Seção da Imagem Principal - Alice */}
        <div className="relative h-80 bg-gradient-to-b from-blue-200 via-pink-100 to-white overflow-hidden">
          {/* Decorações de fundo */}
          <div className="absolute inset-0">
            {/* Flores decorativas */}
            <div className="absolute top-8 left-4 w-12 h-12 bg-pink-200 rounded-full opacity-60 blur-sm"></div>
            <div className="absolute top-16 right-8 w-8 h-8 bg-blue-200 rounded-full opacity-50 blur-sm"></div>
            <div className="absolute bottom-20 left-8 w-10 h-10 bg-purple-200 rounded-full opacity-40 blur-sm"></div>
            <div className="absolute bottom-32 right-12 w-6 h-6 bg-pink-300 rounded-full opacity-60 blur-sm"></div>
            
            {/* Elementos Alice no País das Maravilhas */}
            <div className="absolute top-12 right-4 text-2xl opacity-30">🌹</div>
            <div className="absolute bottom-40 left-6 text-xl opacity-40">🐰</div>
            <div className="absolute top-20 left-12 text-lg opacity-30">🎩</div>
            <div className="absolute bottom-28 right-6 text-xl opacity-35">⏰</div>
          </div>
          
          {/* Imagem Principal da Alice */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-300 to-pink-200 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-6xl">👧🏼</div>
            </div>
          </div>
          
          {/* Decorações flutuantes */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="px-8 py-6 text-center relative bg-white">
          
          {/* Nome Alice */}
          <h1 className="text-6xl font-bold text-blue-500 mb-2 alice-font tracking-wide">
            Alice
          </h1>
          
          {/* Idade */}
          <div className="text-2xl text-blue-400 font-medium mb-8 alice-font">
            1 ano
          </div>
          
          {/* Linha decorativa */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-8"></div>
          
          {/* Mensagem Principal */}
          <div className="mb-8 space-y-4">
            <p className="text-blue-600 leading-relaxed text-base wonderland-font font-medium px-2">
              O País das Maravilhas abrirá suas portas para receber você, como convidado de honra, na comemoração do meu
            </p>
            
            <div className="text-4xl font-bold text-blue-600 alice-font">
              1º aninho
            </div>
          </div>
          
          {/* Data e Hora */}
          <div className="bg-gradient-to-r from-pink-100 via-blue-50 to-pink-100 rounded-2xl p-6 mb-8 border border-pink-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30"></div>
            <div className="relative z-10 flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-blue-500 font-bold text-lg wonderland-font">NOV.</div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-2xl font-bold text-white">01</div>
              </div>
              <div className="text-center">
                <div className="text-blue-500 font-bold text-lg wonderland-font">15:00H</div>
              </div>
            </div>
          </div>
          
          {/* Botões de Ação */}
          <div className="space-y-4">
            
            {/* Botão Local da Festa */}
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
            
            {/* Botão Sugestão de Presentes */}
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
            
            {/* Botão Confirmar Presença */}
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
          
          {/* Decorações finais */}
          <div className="mt-8 flex justify-center space-x-4 text-2xl opacity-40">
            <span>🌹</span>
            <span>🎂</span>
            <span>🎈</span>
            <span>🎉</span>
          </div>
        </div>
        
        {/* Coelhinho decorativo no canto */}
        <div className="absolute bottom-4 right-4 text-3xl opacity-20 animate-bounce">
          🐰
        </div>
      </div>
    </div>
  );
};

export default Index;
