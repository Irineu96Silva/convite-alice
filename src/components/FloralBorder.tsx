
const FloralBorder = () => {
  return (
    <div className="relative h-16 bg-gradient-to-r from-pink-100 via-blue-50 to-pink-100 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center space-x-6">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=60&h=60&fit=crop" 
          alt="Flor decorativa"
          className="w-8 h-8 rounded-full opacity-60"
        />
        <img 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=60&h=60&fit=crop" 
          alt="Flor decorativa"
          className="w-6 h-6 rounded-full opacity-50"
        />
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=60&h=60&fit=crop" 
          alt="Flor decorativa"
          className="w-8 h-8 rounded-full opacity-60"
        />
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=60&h=60&fit=crop" 
          alt="Flor decorativa"
          className="w-6 h-6 rounded-full opacity-50"
        />
      </div>
    </div>
  );
};

export default FloralBorder;
