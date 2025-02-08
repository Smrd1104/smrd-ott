import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center relative">
      {/* Logo Image */}
      <img 
        src="src/assets/logo-new.png" // Ensure the correct path
        alt="Loading..."
        className="w-28 h-28  z-50 absolute"
      />

      {/* Animated Loader Background */}
      <div 
        className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(transparent_0deg,transparent_300deg,transparent_270deg,transparent_360deg)]"
      >
        {/* Inner Animated Layer 1 */}
        {/* <div className="absolute w-[60%] aspect-square rounded-full z-[80] animate-[spin_2s_linear_infinite] bg-[conic-gradient(orange_0deg,orange_270deg,transparent_180deg,transparent_360deg)]"></div> */}
        
        {/* Inner Animated Layer 2 */}
        {/* <div className="absolute w-3/4 aspect-square rounded-full z-[60] animate-[spin_3s_linear_infinite] bg-[conic-gradient(yellow_0deg,yellow_180deg,transparent_180deg,transparent_360deg)]"></div> */}

        {/* Central Spin Effect */}
        <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(blue_0deg,orange_180deg,transparent_180deg,transparent_360deg)]"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
