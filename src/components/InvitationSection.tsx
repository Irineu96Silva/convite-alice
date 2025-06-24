
import AliceProfile from './AliceProfile';

const InvitationSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-200 via-pink-100 to-white px-8 py-12">
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-8 left-4 w-12 h-12 rounded-full overflow-hidden opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop" 
            alt="Decoração"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-16 right-8 w-10 h-10 rounded-full overflow-hidden opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop" 
            alt="Decoração"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-12 right-4 text-2xl opacity-30">🌹</div>
        <div className="absolute bottom-40 left-6 text-xl opacity-40">🐰</div>
        <div className="absolute top-20 left-12 text-lg opacity-30">🎩</div>
        <div className="absolute bottom-28 right-6 text-xl opacity-35">⏰</div>
      </div>
      
      <AliceProfile />
      
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default InvitationSection;
