
const VideoSection = () => {
  return (
    <div className="relative h-64 overflow-hidden">
      <video 
        className="w-full h-full object-cover"
        controls
        autoPlay
        muted
        loop
        poster="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop"
      >
        <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default VideoSection;
