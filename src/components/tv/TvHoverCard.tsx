import React, { useState } from 'react';
import './TvHoverCard.css'; 
import FlipVideoCard from "./TvVideoHover"// Import the CSS file
interface FlipCardProps {
  image: string;
  title: string;
  description: string;
  videoSrc:string;
  logo:string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, title,description,videoSrc,logo }) => {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} className="card md:w-[250px]  md:h-[350px] overflow-hidden rounded-lg ">
      <div className="card-content">
        <div className="card-front relative">
          <img src={image} alt={title} className='w-full h-full object-cover' />
          {/* <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
            <h3 className="text-lg font-bold">{title}</h3>
          </div> */}
        </div>
       
      </div>
      
      {isHovered && (
        <div className="lg:block hidden absolute inset-0  z-10 transition-all duration-500 transform scale-105 group-hover:scale-105">
          <FlipVideoCard videoSrc={videoSrc} logo={logo} title={title}  description={description} />
        </div>
      )}
    </div>
  );
};

export default FlipCard;
