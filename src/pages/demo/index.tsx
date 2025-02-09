import FlipVideoCard from '../../components/FlipVideoCard';
import bgVideo1 from "../../assets/bg-video-movie.mp4";
import bgVideo2 from "../../assets/bg-1.mp4";
import bgVideo3 from "../../assets/bg-2.mp4";
import bgVideo4 from "../../assets/bg-3.mp4";
import bgVideo5 from "../../assets/bg-4.mp4";
// import bgVideo6 from "../../assets/bg-5.mp4";
// import bgVideo7 from "../../assets/2bg.mp4";
// import bgVideo8 from "../../assets/4bg.mp4";
const movies = [
  { id: 1, videoSrc: bgVideo1, title: "Dexter", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2, videoSrc: bgVideo2, title: "Breaking Bad", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3, videoSrc: bgVideo3, title: "Stranger Things", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4, videoSrc: bgVideo4, title: "Peaky Blinders", description: "A gangster family in post-war Birmingham." },
  { id: 5, videoSrc:bgVideo5, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
];

const Index = () => {
  return (
    <div>
      <h1 className='text-center text-[3rem] drop-shadow-header  py-10'>Movies</h1>
      <div className='grid grid-cols-5 space-y-3 justify-center py-10 px-10'>
        {movies.map((movie) => (
          <FlipVideoCard key={movie.id} videoSrc={movie.videoSrc} title={movie.title} description={movie.description} />
        ))}
      </div>
    </div>
  );
};

export default Index;
