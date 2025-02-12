import React from 'react';
import './Category.css'; 
// import FlipVideoCard from "./CategoryVideo"// Import the CSS file
interface FlipCardProps {
  image: string;
  
}

const FlipCard: React.FC<FlipCardProps> = ({ image }) => {
    
  return (
    <div  className="hover:scale-110 duration-300  overflow-hidden rounded-lg mt-2 ">
      
        
          <img src={image} alt='logos'  className=' md:w-full md:h-[120px] w-[200px] h-[80px] object-fit ' />
       
     
      
      
    </div>
  );
};

export default FlipCard;
