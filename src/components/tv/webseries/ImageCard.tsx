import React, { useState } from 'react';
import './ImageCard.css'; 
import FlipVideoCard from "./VideoCard"// Import the CSS file
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
    onMouseLeave={() => setIsHovered(false)} className="card overflow-hidden">
      <div className="card-content">
        <div className="card-front relative">
          <img src={image} alt={title} className='md:w-[220px] w-[200px] h-[150px] md:h-[170px] object-fit  rounded-lg' />
          {/* <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
            <h3 className="text-lg font-bold">{title}</h3>
          </div> */}
        </div>
       
      </div>
      
      {isHovered && (
        <div className="lg:block hidden absolute inset-0 border  z-50 transition-all duration-300 transform md:scale-105 md:group-hover:scale-105">
          <FlipVideoCard videoSrc={videoSrc} logo={logo} title={title}  description={description} />
        </div>
      )}
    </div>
  );
};

export default FlipCard;
