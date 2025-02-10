import FlipCard from '../../components/category/CategoryCard';
import img1 from "../../assets/youtube.jpg";
import img2 from "../../assets/media.jpg";
import img3 from "../../assets/zone.jpg";
import img4 from "../../assets/cinema.jpg";
import img5 from "../../assets/zee.jpg";
import img6 from "../../assets/hotstar.jpg";
import img7 from "../../assets/hbo.jpg";
import img8 from "../../assets/discovery.jpg";

import bgVideo1 from "../../assets/vikram.mp4";
import bgVideo2 from "../../assets/Vettaiyan.mp4"
import bgVideo3 from "../../assets/bg-video-movie.mp4"
import bgVideo4 from "../../assets/goat.mp4"
import bgVideo5 from "../../assets/raayan.mp4"
import bgVideo6 from "../../assets/meiyazhagan.mp4"
import bgVideo7 from "../../assets/Pushpa2.mp4"
import bgVideo8 from "../../assets/rrr.mp4"

import logo from "../../assets/viddamuyarchi.png";
import logo2 from "../../assets/goat.png";
import logo3 from "../../assets/vettaiyan.png";
import { IoIosArrowForward } from 'react-icons/io';

const movies = [
  { id: 1,logo:logo, image: img1,videoSrc:bgVideo1, title: "Vikram", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2,logo:logo2, image: img2, videoSrc:bgVideo2,title: "Vettaiyan", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3,logo:logo3, image: img3, videoSrc:bgVideo3,title: "Vidaamuyarchi", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4,logo:logo, image: img4, videoSrc:bgVideo4,title: "GOAT", description: "A gangster family in post-war Birmingham." },
  { id: 5,logo:logo, image: img5, videoSrc:bgVideo5,title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 6,logo:logo, image: img6, videoSrc:bgVideo6,title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 7,logo:logo, image: img7, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 8,logo:logo, image: img8, videoSrc:bgVideo8,title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  { id: 9,logo:logo, image: img1, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 10,logo:logo, image: img2,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  // { id: 11,logo:logo, image: img3,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  // { id: 12,logo:logo, image: img4,videoSrc:bgVideo4, title: "GOAT", description: "Noble families fight for control of the Iron Throne." },
  // { id: 13,logo:logo, image: img5,videoSrc:bgVideo3, title: "Vidaamuyarchi", description: "Noble families fight for control of the Iron Throne." },
  // { id: 14,logo:logo, image: img6,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },
  // { id: 15,logo:logo, image: img7,videoSrc:bgVideo1, title: "Vikram", description: "Noble families fight for control of the Iron Throne." },
  // { id: 16,logo:logo, image: img8,videoSrc:bgVideo8, title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  // { id: 17,logo:logo, image: img2,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  // { id: 18,logo:logo, image: img3,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  // { id: 19,logo:logo, image: img7,videoSrc:bgVideo7, title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  // { id: 20,logo:logo, image: img5,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },

];

const Index = () => {
  return (
    <div  className='container mx-auto overflow-hidden px-2'>
      <div className="flex flex-row justify-between items-center">
              <a href="/categories">
              <h1 className="md:text-[2.5rem] text-[2rem] my-5 drop-shadow-header font-bold">
                Categories
              </h1>
              </a>
              <div className="flex flex-row gap-2  text-gray-200 cursor-pointer hover:scale-105 duration-300 hover:text-white items-center">
              <a href="/categories">
                <h3 className="md:text-[1rem] text-[1rem] my-5 font-md">View All</h3>
                </a>
                <span className="text-[1rem]">
                  <IoIosArrowForward />
                </span>
              </div>
     </div>
      <div className='md:grid md:grid-cols-5 flex flex-wrap py-10  gap-3  justify-center  md:px-10 px-2'>
        {movies.map((movie) => (
          <FlipCard key={movie.id} image={movie.image} />
        ))}
      </div>
      
    </div>
  );
};

export default Index;
