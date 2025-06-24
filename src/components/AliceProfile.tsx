
const AliceProfile = () => {
  return (
    <div className="relative z-10 text-center">
      <div className="flex justify-center mb-8">
        <div className="w-40 h-40 bg-gradient-to-br from-blue-300 to-pink-200 rounded-full flex items-center justify-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop" 
              alt="Alice Background"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-5xl relative z-10">👧🏼</div>
        </div>
      </div>
      
      <h1 className="text-6xl font-bold text-blue-500 mb-2 alice-font tracking-wide">
        Alice
      </h1>
      
      <div className="text-2xl text-blue-400 font-medium mb-8 alice-font">
        1 ano
      </div>
      
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-8"></div>
      
      <div className="mb-8 space-y-4">
        <p className="text-blue-600 leading-relaxed text-base wonderland-font font-medium px-2">
          O País das Maravilhas abrirá suas portas para receber você, como convidado de honra, na comemoração do meu
        </p>
        
        <div className="text-4xl font-bold text-blue-600 alice-font">
          1º aninho
        </div>
      </div>
    </div>
  );
};

export default AliceProfile;
