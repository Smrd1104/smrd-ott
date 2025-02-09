import React from 'react';
import './FlipCard.css'; // Import the CSS file
import FlipVideoCard from "../components/FlipVideoCard"
interface FlipCardProps {
  image: string;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, title, description }) => {
  return (
    <div className="card w-[250px] h-[350px] overflow-hidden border rounded-lg ">
      <div className="card-content">
        <div className="card-front relative">
          <img src={image} alt={title} className='w-full h-full object-cover' />
          {/* <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
            <h3 className="text-lg font-bold">{title}</h3>
          </div> */}
        </div>
       
      </div>
      
      
    </div>
  );
};

export default FlipCard;
