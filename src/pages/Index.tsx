
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-8 px-4">
      {/* Container Principal */}
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative card-float">
        
        {/* Decoração de Fundo - Naipes de Cartas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-4 left-4 text-2xl text-pink-400 suit-animation">♠</div>
          <div className="absolute top-12 right-6 text-xl text-purple-400 suit-animation" style={{animationDelay: '1s'}}>♥</div>
          <div className="absolute bottom-20 left-6 text-xl text-blue-400 suit-animation" style={{animationDelay: '2s'}}>♦</div>
          <div className="absolute bottom-32 right-4 text-2xl text-pink-400 suit-animation" style={{animationDelay: '3s'}}>♣</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-purple-200 opacity-50">🐰</div>
        </div>

        {/* Seção do Vídeo */}
        <div className="relative">
          <video 
            className="w-full h-48 object-cover rounded-t-3xl"
            autoPlay 
            muted 
            loop 
            controls
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fce7f3;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e0e7ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad1)'/%3E%3Ctext x='200' y='90' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18' font-weight='bold' fill='%23be185d'%3EVídeo da Alice%3C/text%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%237c3aed'%3EAlice no País das Maravilhas%3C/text%3E%3C/svg%3E"
          >
            {/* 
            IMPORTANTE: SUBSTITUA ESTE URL PELO SEU PRÓPRIO VÍDEO
            Exemplo: src="https://seu-servidor.com/video-alice.mp4"
            */}
            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-3xl pointer-events-none"></div>
          
          {/* Ícone de play decorativo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 text-4xl pointer-events-none">
            ▶️
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-8 text-center relative z-10">
          
          {/* Nome Alice */}
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-2 alice-font animate-fade-in text-shimmer">
            Alice
          </h1>
          
          {/* Idade */}
          <p className="text-lg text-purple-600 font-medium mb-6 wonderland-font">1 ano</p>
          
          {/* Mensagem Principal */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm px-2 wonderland-font">
              O País das Maravilhas abrirá suas portas para receber você, como convidado de honra, na comemoração do meu
            </p>
            
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text animate-pulse alice-font">
              1º aninho
            </div>
          </div>
          
          {/* Detalhes da Data */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-pink-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-purple-600 font-semibold text-sm mb-2 wonderland-font">NOV.</div>
              <div className="text-3xl font-bold text-gray-800 wonderland-font">01 <span className="text-purple-600">15:00H</span></div>
            </div>
          </div>
          
          {/* Botões de Ação */}
          <div className="space-y-4">
            
            {/* Botão Local da Festa */}
            <a 
              href="https://maps.app.goo.gl/SEU_LOCAL_DA_FESTA_AQUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 px-6 rounded-full font-medium text-sm transition-all duration-300 hover:from-pink-500 hover:to-pink-600 hover:shadow-xl hover:scale-105 active:scale-95 wonderland-font relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">📍 Local da festa</span>
            </a>
            
            {/* Botão Sugestão de Presentes */}
            <a 
              href="https://www.sua-lista-de-presentes.com.br/AQUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-purple-400 to-purple-500 text-white py-4 px-6 rounded-full font-medium text-sm transition-all duration-300 hover:from-purple-500 hover:to-purple-600 hover:shadow-xl hover:scale-105 active:scale-95 wonderland-font relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">🎁 Sugestão de presentes</span>
            </a>
            
            {/* Botão Confirmar Presença */}
            <a 
              href="https://wa.me/55SEUNUMERO?text=Ol%C3%A1%21%20Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20anivers%C3%A1rio%20da%20Alice." 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-6 rounded-full font-medium text-sm transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 wonderland-font relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">💬 Confirmar presença</span>
            </a>
          </div>
          
          {/* Mensagem Final */}
          <div className="mt-8 text-xs text-gray-500 italic alice-font">
            "Não precisamos de lógica no País das Maravilhas" ✨
          </div>
          
          {/* Decoração final */}
          <div className="mt-4 text-2xl opacity-60">
            🌹 🎩 ⏰ 🐇
          </div>
        </div>
      </div>
      
      {/* Script inline para funcionalidade do vídeo */}
      <script 
        dangerouslySetInnerHTML={{
          __html: `
            // Lidar com políticas de autoplay do navegador
            document.addEventListener('DOMContentLoaded', function() {
              const video = document.querySelector('video');
              if (video) {
                video.play().catch(function(error) {
                  console.log('Autoplay foi bloqueado pelo navegador:', error);
                });
              }
            });
          `
        }}
      />
    </div>
  );
};

export default Index;
