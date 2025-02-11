import { useState } from "react";
import FlipCard from "../../components/FlipCard";
import SearchBar from "../../components/search/SearchBar";
import img1 from "../../assets/vikram.jpg";
import img2 from "../../assets/vettaiyan.jpg";
import img3 from "../../assets/vidaamuyarchi.webp";
import img4 from "../../assets/goat.jpg";
import img5 from "../../assets/maari.jpg";
import img6 from "../../assets/mei.jpg";
import img7 from "../../assets/pushpa.jpg";
import img8 from "../../assets/rrr.jpg";
import img9 from "../../assets/amaran.jpg";
import img10 from "../../assets/dragon.jpg";


import bgVideo1 from "../../assets/vikram.mp4";
import bgVideo2 from "../../assets/Vettaiyan.mp4";
import bgVideo3 from "../../assets/bg-video-movie.mp4";
import bgVideo4 from "../../assets/goat.mp4";
import bgVideo5 from "../../assets/raayan.mp4";
import bgVideo6 from "../../assets/meiyazhagan.mp4";
import bgVideo7 from "../../assets/Pushpa2.mp4";
import bgVideo8 from "../../assets/rrr.mp4";
import bgVideo9 from "../../assets/amaran.mp4";
import bgVideo10 from "../../assets/dragon.mp4";



import logo from "../../assets/viddamuyarchi.png";
import logo1 from "../../assets/goat.png";
import logo2 from "../../assets/vettaiyan.png";
import logo3 from "../../assets/raayan.png";
import logo4 from "../../assets/meiyazhagan.png";
import logo5 from "../../assets/pushpa22.png";
import logo6 from "../../assets/rrr-logo2.png"
import logo7 from "../../assets/vikram.png"
import logo8 from "../../assets/amaran.png"
import logo9 from "../../assets/dragon.png"









const movies = [
  { id: 1, logo: logo7, image: img1, videoSrc: bgVideo1, title: "Vikram", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2, logo: logo2, image: img2, videoSrc: bgVideo2, title: "Vettaiyan", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3, logo: logo, image: img3, videoSrc: bgVideo3, title: "Vidaamuyarchi", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4, logo: logo1, image: img4, videoSrc: bgVideo4, title: "GOAT", description: "A gangster family in post-war Birmingham." },
  { id: 5, logo: logo3, image: img5, videoSrc: bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 6, logo: logo4, image: img6, videoSrc: bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 7, logo: logo5, image: img7, videoSrc: bgVideo7, title: "Pushpa 2", description: "A powerful smuggler's rise to dominance." },
  { id: 8, logo: logo6, image: img8, videoSrc: bgVideo8, title: "RRR", description: "A fictional story based on two legendary revolutionaries." },
  { id: 9, logo: logo8, image: img9, videoSrc: bgVideo9, title: "Amaran", description: "A fictional story based on two legendary revolutionaries." },
  { id: 10, logo: logo9, image: img10, videoSrc: bgVideo10, title: "Dragon", description: "A fictional story based on two legendary revolutionaries." },
];

const Index: React.FC = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredMovies(movies);
      return;
    }
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  return (
    <div id="/movies" className="container mx-auto overflow-hidden">
       <div className="w-full flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>
      <h1 className="text-center text-[3rem] drop-shadow-header">Movies</h1>
     
      <div className="grid md:grid-cols-5 grid-cols-2 space-y-3 justify-center md:px-4 px-14 py-10">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <FlipCard
              key={movie.id}
              logo={movie.logo}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              videoSrc={movie.videoSrc}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
