import React from "react";
import loader from "../../assets/jio-logo.png";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-4 w-full items-center justify-center relative h-screen bg-gradient-to-r from-[#009dfe] via-[#5847fd] to-[#713afd]">
      {/* Logo Image */}
      <img 
        src={loader} // Ensure the correct path
        alt="Loading..."
        className="w-50 h-50 z-50 absolute"
        loading="lazy"
      />

      {/* Animated Loader Background */}
      <div className="loader absolute z-40"></div>
    </div>
  );
};

export default LoadingSpinner;
