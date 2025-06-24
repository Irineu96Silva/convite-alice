
import DateTimeSection from './DateTimeSection';
import ActionButtons from './ActionButtons';

const BottomSection = () => {
  return (
    <div className="px-8 py-6 bg-white relative">
      <DateTimeSection />
      <ActionButtons />
      
      <div className="mt-8 flex justify-center space-x-4 text-2xl opacity-40">
        <span>🌹</span>
        <span>🎂</span>
        <span>🎈</span>
        <span>🎉</span>
      </div>
    </div>
  );
};

export default BottomSection;
