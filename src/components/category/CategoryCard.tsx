import React from 'react';
import './Category.css'; 
// import FlipVideoCard from "./CategoryVideo"// Import the CSS file
interface FlipCardProps {
  image: string;
  
}

const FlipCard: React.FC<FlipCardProps> = ({ image }) => {
    
  return (
    <div  className="hover:scale-130 duration-300  overflow-hidden rounded-lg ">
      
        
          <img src={image} alt='logos'  className=' md:w-full md:h-[120px] w-[120px] h-[100px] object-fit ' />
       
     
      
      
    </div>
  );
};

export default FlipCard;
