import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay,EffectCoverflow } from "swiper/modules";
import Card from "./Card"; // Import your Card component
// images
import img1 from "../../assets/football.jpg";
import img2 from "../../assets/archery.jpg";
import img3 from "../../assets/tennis.jpg";
import img4 from "../../assets/cricket.jpg";
import img5 from "../../assets/baseball.jpg";
import img6 from "../../assets/hockey.jpg";
import img7 from "../../assets/golf.jpg";
import img8 from "../../assets/volly.jpg";
// videos
import bgVideo1 from "../../assets/bg-video-movie.mp4";
import bgVideo2 from "../../assets/bg-1.mp4"
import bgVideo3 from "../../assets/bg-2.mp4"
import bgVideo4 from "../../assets/bg-3.mp4"
import bgVideo5 from "../../assets/bg-4.mp4"
import bgVideo6 from "../../assets/bg-5.mp4"
import bgVideo7 from "../../assets/2bg.mp4"
import bgVideo8 from "../../assets/4bg.mp4"
import { useState } from "react";




const cardData = [
  {
    id: 1,
    title: "Football",
    image: img1,
    videoSrc: bgVideo1,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission",
  },
  {
    id: 2,
    title: "Archery",
    image: img2,
    videoSrc: bgVideo2,
    year: "2024 . U/A 2024 . 1 Season",
    description: "The hunt for justice in a crime-ridden",
  },
  {
    id: 3,
    title: "Tennis",
    image: img3,
    videoSrc: bgVideo3,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 4,
    title: "Cricket",
    image: img4,
    videoSrc: bgVideo4,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 5,
    title: "Baseball",
    image: img5,
    videoSrc: bgVideo5,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 6,
    title: "Hockey",
    image: img6,
    videoSrc: bgVideo6,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 7,
    title: "Golf ",
    image: img7,
    videoSrc: bgVideo7,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 8,
    title: "Volley Ball",
    image: img8,
    videoSrc: bgVideo8,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },
];

const MovieSlider = () => {
   const [isPrevActive, setIsPrevActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active
  return (
    <div id="sports" className="container mx-auto  p-2  relative z-50">
      <div className="flex flex-row justify-between items-center">
        <a href="/sports">
        <h1 className="md:text-[2.5rem] text-[1.3rem]  drop-shadow-header font-bold">
          Sports
        </h1>
        </a>
        <div className="flex flex-row gap-2 text-gray-200 cursor-pointer hover:scale-105 duration-300 hover:text-white items-center">
        <a href="/sports">
          <h3 className="md:text-[1rem] text-[1rem]  font-md">View All</h3>
          </a>
          <span className="text-[1rem]">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <IoIosArrowBack
        className={`lg:block hidden bg-black/20 absolute top-1/2 md:translate-y-6 translate-y-4.5  text-[3rem] md:left-6 left-1 z-10  p-3 rounded-full transition cursor-pointer  ${
          isPrevActive ? "text-white" : "text-gray-500 hidden"
        }`}
        id="sport-prevSlide"
      />
      <IoIosArrowForward
        className={`lg:block hidden bg-black/20 absolute top-1/2 md:translate-y-6 translate-y-4.5  text-[3rem] md:right-6 right-1 z-10  p-3  rounded-full transition cursor-pointer  ${
          isNextActive ? "text-white" : "text-gray-500 hidden"
        }`}
        id="sport-nextSlide"
      />
     <Swiper
  modules={[Navigation, Autoplay, EffectCoverflow]}
  effect="coverflow"
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
    nextEl: "#sport-nextSlide",
    prevEl: "#sport-prevSlide",
  }}
  onSlideChange={(swiper) => {
    setIsPrevActive(swiper.activeIndex > 0); 
    setIsNextActive(swiper.activeIndex < swiper.slides.length -2); 
  }}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 2.2, spaceBetween: 5 ,  loop: false,  effect: "slide",centeredSlides:false},  // Extra small screens
    640: { slidesPerView: 2.2, spaceBetween: 5 , loop: false,  effect: "slide",centeredSlides:false}, // Small screens
    1024: { slidesPerView: 5, spaceBetween: 10, }, // Large screens
  }}
>


        {cardData.map((item) => (
          <SwiperSlide key={item.id} className="w-[250px]">
            <div className="md:hover:scale-105 duration-300 transition-all md:py-10">
              <Card
                title={item.title}
                image={item.image}
                videoSrc={item.videoSrc}
                year={item.year}
                description={item.description}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;



