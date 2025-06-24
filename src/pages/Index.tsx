
import FloralBorder from '../components/FloralBorder';
import VideoSection from '../components/VideoSection';
import InvitationSection from '../components/InvitationSection';
import BottomSection from '../components/BottomSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50 py-4 px-4">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        
        <FloralBorder />
        
        <VideoSection />

        <InvitationSection />

        <BottomSection />

        <FloralBorder />
        
        <div className="absolute bottom-4 right-4 text-3xl opacity-20 animate-bounce">
          🐰
        </div>
      </div>
    </div>
  );
};

export default Index;
