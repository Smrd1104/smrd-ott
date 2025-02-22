import { useState } from "react";
import VideoCard from "./VideoCard";
import "swiper/swiper-bundle.css";



interface CardProps {
  title: string;
  image: string;
  videoSrc: string;
  year: string;
  description: string;
}


const Card = ({ title, image, videoSrc, year, description }: CardProps) => {
 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group md:mt-0 mt-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="md:w-[250px] w-[120px] md:h-[280px] h-[160px] rounded-md  shadow-lg object-fit transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* <div className="absolute bottom-3 left-3 bg-black/50 text-white p-2 drop-shadow rounded-md text-sm">
        {title}
      </div> */}
      {isHovered && (
        <div className="absolute -inset-6 -translate-x-10 z-50 transition-all duration-300 transform scale-105 group-hover:scale-105">
          <VideoCard videoSrc={videoSrc} title={title} year={year} description={description} />
        </div>
      )}
    </div>
  );
};

export default Card;
