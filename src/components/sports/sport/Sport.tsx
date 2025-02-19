import FlipCard from '../../../components/sports/sport/SportImageCard';
import img1 from "../../../assets/football.jpg";
import img2 from "../../../assets/archery.jpg";
import img3 from "../../../assets/tennis.jpg";
import img4 from "../../../assets/cricket.jpg";
import img5 from "../../../assets/baseball.jpg";
import img6 from "../../../assets/hockey.jpg";
import img7 from "../../../assets/golf.jpg";
import img8 from "../../../assets/volly.jpg";
// videos
import bgVideo1 from "../../../assets/bg-video-movie.mp4";
import bgVideo2 from "../../../assets/bg-1.mp4"
import bgVideo3 from "../../../assets/bg-2.mp4"
import bgVideo4 from "../../../assets/bg-3.mp4"
import bgVideo5 from "../../../assets/bg-4.mp4"
import bgVideo6 from "../../../assets/bg-5.mp4"
import bgVideo7 from "../../../assets/2bg.mp4"
import bgVideo8 from "../../../assets/4bg.mp4"


import logo from "../../../assets/vidaamuyarchi-new.png";
import logo2 from "../../../assets/vettaiyan-new.png";
import logo3 from "../../../assets/goat-new.png";
import logo4 from "../../../assets/mei-new.png";
import logo5 from "../../../assets/amaran-new.png";
import logo6 from "../../../assets/dragon-new.png";
import logo7 from "../../../assets/pushpa-new.png";
import logo8 from "../../../assets/rrr-new.png";
import logo9 from "../../../assets/raayan-new.png";
import logo10 from "../../../assets/vikram-new.png";




import { useState } from 'react';
// import SearchBar from '../../../components/search/SearchBar';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide,  } from "swiper/react";

import { Navigation,  Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const movies = [
  { id: 1,logo:logo, image: img1,videoSrc:bgVideo1, title: "Wednesday", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2,logo:logo2, image: img2, videoSrc:bgVideo2,title: "You", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3,logo:logo3, image: img3, videoSrc:bgVideo3,title: "Money Heist", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4,logo:logo4, image: img4, videoSrc:bgVideo4,title: "Dexter", description: "A gangster family in post-war Birmingham." },
  { id: 5,logo:logo5, image: img5, videoSrc:bgVideo5,title: "Elite", description: "Noble families fight for control of the Iron Throne." },
  { id: 6,logo:logo6, image: img6, videoSrc:bgVideo6,title: "The Boys", description: "Noble families fight for control of the Iron Throne." },
  { id: 7,logo:logo7, image: img7, videoSrc:bgVideo7,title: "Super Natural", description: "Noble families fight for control of the Iron Throne." },
  { id: 8,logo:logo8, image: img8, videoSrc:bgVideo8,title: "Elite", description: "Noble families fight for control of the Iron Throne." },
  { id: 9,logo:logo9, image: img5, videoSrc:bgVideo5,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 10,logo:logo10, image: img8,videoSrc:bgVideo8, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
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
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="container mx-auto overflow-hidden ">
      <div className="flex flex-row justify-between items-center md:px-4 px-2 md:pb-0 pb-5">
        <a href="/sports">
          <h1 className="md:text-[2.5rem] text-[1.3rem] drop-shadow-header font-bold">
           Continue Sports
          </h1>
        </a>
       <div className="flex flex-row gap-2 text-gray-200 cursor-pointer hover:scale-105 duration-300 hover:text-white items-center z-10">
  <a href="/sports">
    <h3 className="md:text-[1rem] text-[1rem] font-md">View All</h3>
  </a>
  <span className="text-[1rem]">
    <IoIosArrowForward />
  </span>
</div>
      </div>

      <div
        className="relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Navigation */}
        <IoIosArrowBack
          className={` absolute left-1 md:left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 text-[3rem] cursor-pointer transition ${
            isHovered && isPrevActive ? "text-white" : "text-gray-500 hidden"
          }`}
          id="sport-prevSlide"
        />

        {/* Right Navigation */}
        <IoIosArrowForward
          className={` absolute right-1 md:right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 text-[3rem] cursor-pointer transition ${
            isHovered && isNextActive ? "text-white" : "text-gray-500 hidden"
          }`}
          id="sport-nextSlide"
        />

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          breakpoints={{  
            340: { slidesPerView: 3.2,slidesOffsetBefore:5, slidesOffsetAfter:20 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 5.2,slidesOffsetBefore:20, slidesOffsetAfter:20},
          }}
          
          navigation={{
            nextEl: "#sport-nextSlide",
            prevEl: "#sport-prevSlide",
          }}
          onInit={(swiper) => {
            setIsPrevActive(false);
            setIsNextActive(swiper.isEnd ? false : true);
          }}
          onSlideChange={(swiper) => {
            setIsPrevActive(!swiper.isBeginning);
            setIsNextActive(!swiper.isEnd);
          }}
          
          className=""
        >
          <div className="flex flex-wrap space-y-3 justify-center ">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <SwiperSlide key={movie.id} className=''>
                  <FlipCard
                    key={movie.id}
                    logo={movie.logo}
                    image={movie.image}
                    title={movie.title}
                    description={movie.description}
                    videoSrc={movie.videoSrc}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No movies found.
              </p>
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Index;

