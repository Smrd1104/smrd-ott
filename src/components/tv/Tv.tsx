import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Card from "./TvCard"; // Import your Card component
// images
import img1 from "../../assets/wednesday.jpg";
import img2 from "../../assets/you.jpg";
import img3 from "../../assets/money-heist.jpg";
import img4 from "../../assets/dexter.jpg";
import img5 from "../../assets/elite.jpg";
import img6 from "../../assets/the-boys.jpeg";
import img7 from "../../assets/super-natural.jpg";
import img8 from "../../assets/elite.jpg";

// videos
import bgVideo1 from "../../assets/bg-video-movie.mp4";
import bgVideo2 from "../../assets/bg-1.mp4"
import bgVideo3 from "../../assets/bg-2.mp4"
import bgVideo4 from "../../assets/bg-3.mp4"
import bgVideo5 from "../../assets/bg-4.mp4"
import bgVideo6 from "../../assets/bg-5.mp4"
import bgVideo7 from "../../assets/2bg.mp4"
import bgVideo8 from "../../assets/4bg.mp4"




const cardData = [
  {
    id: 1,
    title: "wednesday",
    image: img1,
    videoSrc: bgVideo1,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission",
  },
  {
    id: 2,
    title: "You",
    image: img2,
    videoSrc: bgVideo2,
    year: "2024 . U/A 2024 . 1 Season",
    description: "The hunt for justice in a crime-ridden",
  },
  {
    id: 3,
    title: "Money Heist",
    image: img3,
    videoSrc: bgVideo3,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 4,
    title: "Dexter",
    image: img4,
    videoSrc: bgVideo4,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 5,
    title: "Elite",
    image: img5,
    videoSrc: bgVideo5,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 6,
    title: "The Boys",
    image: img6,
    videoSrc: bgVideo6,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 7,
    title: "Super Natural ",
    image: img7,
    videoSrc: bgVideo7,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 8,
    title: "Elite",
    image: img8,
    videoSrc: bgVideo8,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },
];

const MovieSlider = () => {
  return (
    <div id="movies" className="container mx-auto py-5 px-10 relative">
      <h1 className="md:text-[2.5rem] text-[2rem] my-5 drop-shadow-header font-bold">
        Web-Series
      </h1>

      {/* Custom Navigation Buttons */}
      <IoIosArrowBack
        className="absolute top-1/2 translate-y-6 text-[3rem] left-6 z-10 text-white p-3 bg-black/20 rounded-full transition cursor-pointer"
        id="tv-prevSlide"
      />

      <IoIosArrowForward
        className="absolute top-1/2 translate-y-6 text-[3rem] right-6 z-10 text-white p-3 bg-black/20 rounded-full transition cursor-pointer"
        id="tv-nextSlide"
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        navigation={{
          nextEl: "#tv-nextSlide",
          prevEl: "#tv-prevSlide",
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="hover:scale-105 duration-300 transition-all">
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




