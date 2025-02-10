import React, { useRef, useState } from 'react';
import './SportsVideoHover.css'; // Import the CSS file
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

interface FlipCardProps {
  videoSrc: string;
  title: string;
  description: string;
  logo:string;
}

const FlipCard: React.FC<FlipCardProps> = ({ videoSrc, title, description,logo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
  
    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };
  return (
    <div className="video-card-hover md:w-[250px] md:h-[350px] overflow-hidden  rounded-lg">
      <div className="video-card-hover-content">
        <div className="video-card-hover-front relative">
          <video 
            src={videoSrc} 
            className="w-full  -translate-y-20 object-fit" 
            autoPlay 
            ref={videoRef}
            muted={isMuted}
            loop 
             
            controls={false} 
          />
           <div className="absolute top-27 right-3 flex items-center gap-2">
                <button onClick={toggleMute} className="text-white cursor-pointer">
                  {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
                </button>
              </div>
              <img src={logo} alt="Logo" className="z-10 md:w-[120px] w-[50px] absolute top-20 left-3  h-auto transition-all duration-300" />
        </div>
        
        
      </div>

       <div className="absolute py-10 -mt-42 left-0 right-0 flex flex-col gap-1 bg-black/10 backdrop-blur-md">
              <div className="mx-4 flex flex-row items-center gap-4 -mt-5 ">
                 <button className=" flex flex-row items-center gap-2 cursor-pointer border px-6 py-1 bg-gray-100  rounded mt-1 text-black text-sm hover:scale-105 duration-300">
                      <span><FaPlay/></span>  Watch Now
                 </button>
                     <IoMdAdd className=" border py-1 text-[1.7rem] rounded mt-1 cursor-pointer  bg-white/10 hover:scale-105 duration-300"/>
               </div>
              <h1 className="text-lg text-white mx-4 mt-2">{title}</h1>
              {/* <h1 className="text-xs text-white mx-4">{year}</h1> */}
              <p className="text-xs text-white mx-4">{description}</p>
            </div>
    </div>
  );
};

export default FlipCard;
