import FlipCard from '../../components/tv/TvHoverCard';
import img1 from "../../assets/wednesday.jpg";
import img2 from "../../assets/you.jpg";
import img3 from "../../assets/money-heist.jpg";
import img4 from "../../assets/dexter.jpg";
import img5 from "../../assets/elite.jpg";
import img6 from "../../assets/the-boys.jpeg";
import img7 from "../../assets/super-natural.jpg";
import img8 from "../../assets/elite.jpg";

import bgVideo1 from "../../assets/wednesday.mp4";
import bgVideo2 from "../../assets/Vettaiyan.mp4"
import bgVideo3 from "../../assets/bg-video-movie.mp4"
import bgVideo4 from "../../assets/goat.mp4"
import bgVideo5 from "../../assets/raayan.mp4"
import bgVideo6 from "../../assets/meiyazhagan.mp4"
import bgVideo7 from "../../assets/Pushpa2.mp4"
import bgVideo8 from "../../assets/rrr.mp4"

import logo from "../../assets/wednesday.png";
import logo2 from "../../assets/goat.png";
import logo3 from "../../assets/vettaiyan.png";
// import { useState } from 'react';
// import SearchBar from '../../components/search/SearchBar';
import TvSlider from "../../components/tvslider"

const movies = [
  { id: 1,logo:logo, image: img1,videoSrc:bgVideo1, title: "Wednesday", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2,logo:logo2, image: img2, videoSrc:bgVideo2,title: "You", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3,logo:logo3, image: img3, videoSrc:bgVideo3,title: "Money Heist", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4,logo:logo, image: img4, videoSrc:bgVideo4,title: "Dexter", description: "A gangster family in post-war Birmingham." },
  { id: 5,logo:logo, image: img5, videoSrc:bgVideo5,title: "Elite", description: "Noble families fight for control of the Iron Throne." },
  { id: 6,logo:logo, image: img6, videoSrc:bgVideo6,title: "The Boys", description: "Noble families fight for control of the Iron Throne." },
  { id: 7,logo:logo, image: img7, videoSrc:bgVideo7,title: "Super Natural", description: "Noble families fight for control of the Iron Throne." },
  { id: 8,logo:logo, image: img8, videoSrc:bgVideo8,title: "Elite", description: "Noble families fight for control of the Iron Throne." },
  { id: 9,logo:logo, image: img1, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 10,logo:logo, image: img2,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 11,logo:logo, image: img3,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 12,logo:logo, image: img4,videoSrc:bgVideo4, title: "GOAT", description: "Noble families fight for control of the Iron Throne." },
  { id: 13,logo:logo, image: img5,videoSrc:bgVideo3, title: "Vidaamuyarchi", description: "Noble families fight for control of the Iron Throne." },
  { id: 14,logo:logo, image: img6,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },
  { id: 15,logo:logo, image: img7,videoSrc:bgVideo1, title: "Vikram", description: "Noble families fight for control of the Iron Throne." },
  { id: 16,logo:logo, image: img8,videoSrc:bgVideo8, title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  { id: 17,logo:logo, image: img2,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 18,logo:logo, image: img3,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 19,logo:logo, image: img7,videoSrc:bgVideo7, title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 20,logo:logo, image: img5,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },

];

const Index = () => {
  // const [filteredMovies, setFilteredMovies] = useState(movies);

  // const handleSearch = (query: string) => {
  //   if (!query.trim()) {
  //     setFilteredMovies(movies);
  //     return;
  //   }
  //   const results = movies.filter((movie) =>
  //     movie.title.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredMovies(results);
  // };
  return (
    <div id="web-series" className='container mx-auto overflow-hidden'>
     {/* <div className="w-full flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div> */}
      <TvSlider/>
      <h1 className="text-center text-[3rem] drop-shadow-header md:mt-0  -mt-96 ">Web-Series</h1>
     <div className="grid md:grid-cols-5 grid-cols-3 space-y-3 justify-center md:px-4 px-2 py-10">
        {movies.length > 0 ? (
          movies.map((movie) => (
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
