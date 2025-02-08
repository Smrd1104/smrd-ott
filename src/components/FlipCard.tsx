import React from 'react';
import './FlipCard.css'; // Import the CSS file
import img from "../assets/dexter.jpg"
const FlipCard: React.FC = () => {
  return (
    <div className="card overflow-x-hidden">
      <div className="card-content">
        <div className="card-front">
          <img src={img} alt="Latest Releases" className='' />
         
        </div>
      
      </div>
    </div>
  );
};

export default FlipCard;
