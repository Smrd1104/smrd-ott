import img from "../../assets/jio-logo.png";

const Index = () => {
  return (
    <div className="h-screen w-full relative ">
      {/* Background Image */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <img src={bg} alt="bgImage" className="w-full h-full object-cover " />
      </div> */}

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#003bfe]/50 to-[#bf0732]/50  backdrop-blur-md"></div>

      {/* Content Over Background */}
      <div className="flex flex-col items-center absolute top-0 left-0 w-full h-full justify-center z-10  ">
        <div className="flex flex-col gap-2 items-center text-center">
          <img src={img} alt="login img" className="w-[200px] h-[200px]" />
          <h1 className="text-[2.5rem] font-semibold text-white drop-shadow-header">
            Login to SMRD OTT
          </h1>
          <p className="text-[1.2rem] text-gray-300">
            Login to watch entire entertainments
          </p>
        </div>
        <div className="mt-5">
          <button className="px-32 py-2 text-[1.5rem] text-white rounded-lg bg-gradient-to-r from-[#003bfe] to-[#bf0732] hover:scale-105 transition-transform">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
