import { useRef, useState } from 'react';
import football from '../../assets/bg-video-movie.mp4';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VideoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Explicitly define the type as HTMLVideoElement
  const [isMuted, setIsMuted] = useState(true); // State for mute/unmute

  // Function to handle mute/unmute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="md:w-[250px] w-[350px] h-[280px] bg-black relative">
      <video
        autoPlay
        ref={videoRef}
        className="w-full h-1/2 rounded-md shadow-lg object-cover"
        muted={isMuted}
      >
        <source src={football} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom volume control */}
      <div className="absolute -translate-y-9 right-1 flex items-center gap-2">
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 mt-2 pb-6 bg-white/10">
        <div className="mx-4">
          <button className="border px-5 py-2 bg-white/10 rounded mt-1 text-white text-sm">
            Watch Now
          </button>
        </div>
        <h1 className="text-sm text-white mx-4 mt-2">Maari</h1>
        <h1 className="text-xs text-white mx-4">2025 . U/A 2025 . 1 Season</h1>
        <p className="text-xs text-white mx-4">
          Spider-free milestones are a mission to protect...
        </p>
      </div>
    </div>
  );
};

export default VideoCard;