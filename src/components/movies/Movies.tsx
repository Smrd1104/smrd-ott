import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Card from "./Card"; // Import your Card component
import img1 from "../../assets/maari.jpg";
import img2 from "../../assets/vettaiyan.jpg";
import img3 from "../../assets/mangatha.jpg";
import img4 from "../../assets/master.jpg";
import img5 from "../../assets/goat.jpg";
import img6 from "../../assets/mei.jpg";
import img7 from "../../assets/rrr.jpg";
import img8 from "../../assets/spider.png";

const cards = [
  { id: 1, title: "Maari", image: img1 },
  { id: 2, title: "Vettaiyan", image: img2 },
  { id: 3, title: "Mangatha", image: img3 },
  { id: 4, title: "Master", image: img4 },
  { id: 5, title: "Leo", image: img5 },
  { id: 6, title: "Mei Azhlagan", image: img6 },
  { id: 7, title: "RRR", image: img7 },
  { id: 8, title: "Spider", image: img8 },
];

const movieSlider = () => {
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
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="hover:scale-105 duration-300 transition-all">
              <Card title={card.title} image={card.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default movieSlider;
