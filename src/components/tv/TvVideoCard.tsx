import football from '../../assets/bg-5.mp4';

const TvVideoCard = () => {
  return (
    <div className="w-[250px] h-[280px] border rounded-lg  bg-black relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full rounded-md shadow-lg object-cover"
      >
        <source src={football} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 right-0 mx-4 flex flex-col gap-2 mt-2 pb-5">
        <div>
        <button className="border px-8 py-2 bg-white/10 rounded mt-1 text-white">
          Watch Now
        </button>
        </div>
        <h1 className="text-sm text-white">2025 . U/A 2025 . 1 Season</h1>
        <p className="text-sm text-white">Spider-free milestones are a mission to protect...</p>
      </div>
    </div>
  );
};

export default TvVideoCard;