import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Card from "./Card"; // Import your Card component
// images
import img1 from "../../assets/maari.jpg";
import img2 from "../../assets/vettaiyan.jpg";
import img3 from "../../assets/mangatha.jpg";
import img4 from "../../assets/goat.jpg";
import img5 from "../../assets/master.jpg";
import img6 from "../../assets/mei.jpg";
import img7 from "../../assets/pushpa.jpg";
import img8 from "../../assets/rrr.jpg";
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
    title: "Maari",
    image: img1,
    videoSrc: bgVideo1,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission",
  },
  {
    id: 2,
    title: "Vettaiyan",
    image: img2,
    videoSrc: bgVideo2,
    year: "2024 . U/A 2024 . 1 Season",
    description: "The hunt for justice in a crime-ridden",
  },
  {
    id: 3,
    title: "Mangatha",
    image: img3,
    videoSrc: bgVideo3,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 4,
    title: "Leo",
    image: img4,
    videoSrc: bgVideo4,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 5,
    title: "Master",
    image: img5,
    videoSrc: bgVideo5,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 6,
    title: "Mei Azhlagan",
    image: img6,
    videoSrc: bgVideo6,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 7,
    title: "Pushpa 2 ",
    image: img7,
    videoSrc: bgVideo7,
    year: "2025 . U/A 2025 . 1 Season",
    description: "Spider-free milestones are a mission  ",
  },{
    id: 8,
    title: "RRR",
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
        Movies
      </h1>

      {/* Custom Navigation Buttons */}
      <IoIosArrowBack
        className="absolute top-1/2 translate-y-6 text-[3rem] left-6 z-10 text-white p-3 bg-black/20 rounded-full transition cursor-pointer"
        id="movie-prevSlide"
      />

      <IoIosArrowForward
        className="absolute top-1/2 translate-y-6 text-[3rem] right-6 z-10 text-white p-3 bg-black/20 rounded-full transition cursor-pointer"
        id="movie-nextSlide"
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        navigation={{
          nextEl: "#movie-nextSlide",
          prevEl: "#movie-prevSlide",
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
