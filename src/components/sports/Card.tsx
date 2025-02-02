import { useState } from 'react';
import video from '../../assets/bg-3.mp4';
import VideoCard from './VideoCard';

interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group" // Add `group` class for parent hover state
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="w-[300px] h-[280px] rounded-md border shadow-lg object-cover transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
      />

      {/* Card Title */}
      <div className="absolute bottom-3 left-3 bg-black/50 text-white p-2 rounded-md text-sm">
        {title}
      </div>

      {/* VideoCard on Hover */}
      {isHovered && (
        <div className="absolute  drop-shadow-header inset-0 z-10 md:-translate-x-4.5 -translate-x-4 transition-all duration-300 transform scale-100 group-hover:scale-105">
          <VideoCard />
        </div>
      )}
    </div>
  );
};

export default Card;