import { useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute, FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  year: string;
  description: string;
}

const VideoCard = ({ videoSrc, title, year, description }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="md:w-[280px] translate-x-6 w-[350px] h-[320px] bg-black relative">
      <video
        autoPlay
        ref={videoRef}
        className="w-full h-1/2  object-cover"
        muted={isMuted}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom volume control */}
      <div className="absolute md:top-2 top-4 md:left-65 left-4 flex items-center gap-2">
        <button onClick={toggleMute} className="text-white cursor-pointer">
          {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
        </button>
      </div>

      <div className="absolute py-10 -mt-4 left-0 right-0 flex flex-col gap-1 bg-white/10 backdrop-blur-sm">
        <div className="mx-4 flex flex-row items-center gap-4 -mt-5 ">
                                 <button className=" flex flex-row items-center gap-2 cursor-pointer border px-13 py-2 bg-gray-100  rounded mt-1 text-black text-sm hover:scale-105 duration-300">
                                 <span><FaPlay/></span>  Watch Now
                                 </button>
                                 <IoMdAdd className=" border py-2 text-[2.25rem] rounded mt-1 cursor-pointer  bg-white/10 hover:scale-105 duration-300"/>
                         </div>
        <h1 className="text-lg text-white mx-4 mt-2">{title}</h1>
        <h1 className="text-xs text-white mx-4">{year}</h1>
        <p className="text-xs text-white mx-4">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
