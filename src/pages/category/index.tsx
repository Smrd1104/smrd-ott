import FlipCard from '../../components/category/CategoryCard';
import img1 from "../../assets/youtube.jpg";
import img2 from "../../assets/media.jpg";
import img3 from "../../assets/zone.jpg";
import img4 from "../../assets/cinema.jpg";
import img5 from "../../assets/zee.jpg";
import img6 from "../../assets/hotstar.jpg";
import img7 from "../../assets/hbo.jpg";
import img8 from "../../assets/discovery.jpg";
import img9 from "../../assets/JioStar.jpg";



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
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const movies = [
  { id: 1,logo:logo, image: img1,videoSrc:bgVideo1, title: "Vikram", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2,logo:logo2, image: img2, videoSrc:bgVideo2,title: "Vettaiyan", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3,logo:logo3, image: img3, videoSrc:bgVideo3,title: "Vidaamuyarchi", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4,logo:logo, image: img4, videoSrc:bgVideo4,title: "GOAT", description: "A gangster family in post-war Birmingham." },
  { id: 5,logo:logo, image: img5, videoSrc:bgVideo5,title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 6,logo:logo, image: img6, videoSrc:bgVideo6,title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 7,logo:logo, image: img7, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 8,logo:logo, image: img8, videoSrc:bgVideo8,title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  { id: 9,logo:logo, image: img9, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
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
   const [isPrevActive, setIsPrevActive] = useState(false);
      const [isNextActive, setIsNextActive] = useState(true); 
  return (
    <div id="" className="container mx-auto  p-2  relative z-50">
    <div className="flex flex-row justify-between items-center">
      <a href="/">
      <h1 className="md:text-[2.5rem] text-[1.3rem]  drop-shadow-header font-bold">
Categories   
   </h1>
      </a>
      <div className="flex flex-row gap-2 text-gray-200 cursor-pointer hover:scale-105 duration-300 hover:text-white items-center">
      <a href="/">
        <h3 className="md:text-[1rem] text-[1rem]  font-md">View All</h3>
        </a>
        <span className="text-[1rem]">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
    <IoIosArrowBack
      className={`lg:block hidden bg-black/20 absolute top-1/2 md:translate-y-2 translate-y-4.5 text-[2.4rem] md:left-6 left-1 z-10  p-3 rounded-full transition cursor-pointer  ${
        isPrevActive ? "text-white" : "text-gray-500 hidden"
      }`}
      id="tv-prevSlide"
    />
    <IoIosArrowForward
      className={`lg:block hidden bg-black/20  absolute top-1/2 md:translate-y-2 translate-y-4.5  text-[2.4rem] md:right-6 right-1 z-10  p-3  rounded-full transition cursor-pointer  ${
        isNextActive ? "text-white" : "text-gray-500 hidden"
      }`}
      id="tv-nextSlide"
    />
   <Swiper
modules={[Navigation, Autoplay, EffectCoverflow]}
effect="coverflow"
      autoplay={{
  delay: 3000, // Set autoplay delay in milliseconds (3 seconds)
  disableOnInteraction: false, // Keeps autoplay running even after user interaction
}}

grabCursor={false}
centeredSlides={true}
spaceBetween={10}  
coverflowEffect={{
  rotate: 20,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
}}
navigation={{
  nextEl: "#tv-nextSlide",
  prevEl: "#tv-prevSlide",
}}
onSlideChange={(swiper) => {
  setIsPrevActive(swiper.activeIndex > 0); 
  setIsNextActive(swiper.activeIndex < swiper.slides.length -2); 
}}
loop={true}
breakpoints={{
  320: { slidesPerView: 3.3, spaceBetween: 5 ,  loop: false,  effect: "slide",centeredSlides:false},  // Extra small screens
  640: { slidesPerView: 3.3, spaceBetween: 5 , loop: false,  effect: "slide",centeredSlides:false}, // Small screens
  1024: { slidesPerView: 5, spaceBetween: 10, }, // Large screens
}}
>
      <div className='md:grid md:grid-cols-5 flex flex-wrap md:py-10  md:gap-3 gap-4  justify-center  md:px-10 px-1'>
        {movies.map((movie) => (
         <SwiperSlide key={movie.id} className="w-[250px]">
            <div className="md:hover:scale-105 duration-300 transition-all md:py-10 pb-24">
          <FlipCard key={movie.id} image={movie.image} />
          </div>
          </SwiperSlide>
        ))}
      </div>
      
      </Swiper>
    </div>
  );
};

export default Index;
