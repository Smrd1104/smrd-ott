import { useState } from "react";
import VideoCard from "./TvVideoCard";

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
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="md:w-[250px] w-[350px] h-[280px] rounded-md border shadow-lg object-fit transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Card Title */}
      <div className="absolute bottom-3 left-3 bg-black/50 text-white p-2 drop-shadow rounded-md text-sm">
        {title}
      </div>

      {/* VideoCard on Hover */}
      {isHovered && (
        <div className="absolute inset-0 z-10 transition-all duration-300 transform scale-105 group-hover:scale-105">
          <VideoCard videoSrc={videoSrc} title={title} year={year} description={description} />
        </div>
      )}
    </div>
  );
};

export default Card;
