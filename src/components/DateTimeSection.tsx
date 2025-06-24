
const DateTimeSection = () => {
  return (
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
  );
};

export default DateTimeSection;
