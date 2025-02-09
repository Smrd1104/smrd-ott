import React from 'react';
import './FlipCard.css'; // Import the CSS file
import { FaPlay } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

interface FlipCardProps {
  videoSrc: string;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ videoSrc, title, description }) => {
  return (
    <div className="card w-[250px] h-[350px] overflow-hidden border rounded-lg">
      <div className="card-content">
        <div className="card-front relative">
          <video 
            src={videoSrc} 
            className="w-full  -translate-y-20 object-fit" 
            autoPlay 
            loop 
            muted 
            controls={false} 
          />
        </div>
      </div>
       <div className="absolute py-10 -mt-42 left-0 right-0 flex flex-col gap-1 bg-black/10 backdrop-blur-sm">
              <div className="mx-4 flex flex-row items-center gap-4 -mt-5 ">
                                       <button className=" flex flex-row items-center gap-2 cursor-pointer border px-5 py-2 bg-gray-100  rounded mt-1 text-black text-sm hover:scale-105 duration-300">
                                       <span><FaPlay/></span>  Watch Now
                                       </button>
                                       <IoMdAdd className=" border py-2 text-[2.25rem] rounded mt-1 cursor-pointer  bg-white/10 hover:scale-105 duration-300"/>
                               </div>
              <h1 className="text-lg text-white mx-4 mt-2">{title}</h1>
              {/* <h1 className="text-xs text-white mx-4">{year}</h1> */}
              <p className="text-xs text-white mx-4">{description}</p>
            </div>
    </div>
  );
};

export default FlipCard;
