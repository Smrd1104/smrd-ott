import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import TvCard from "./TvCard"; // Import your Card component
import img1 from "../../assets/wednesday.jpg";
import img2 from "../../assets/you.jpg";
import img3 from "../../assets/money-heist.jpg";
import img4 from "../../assets/dexter.jpg";
import img5 from "../../assets/elite.jpg";
import img6 from "../../assets/the-boys.jpeg";
import img7 from "../../assets/super-natural.jpg";
import img8 from "../../assets/elite.jpg";

const cards = [
  { id: 1, title: "Wednesday", image: img1 },
  { id: 2, title: "Dexter", image: img4 },
  { id: 3, title: "Money Heist", image: img3 },
  { id: 4, title: "you", image: img2 },
  { id: 5, title: "Elite", image: img5 },
  { id: 6, title: "The Boys", image: img6 },
  { id: 7, title: "Super Natural", image: img7 },
  { id: 8, title: "Elite", image: img8 },
];

const tvSlider = () => {
  return (
    <div id="tv" className="container mx-auto py-5 px-10 relative">
      <h1 className="md:text-[2.5rem] my-5 drop-shadow-header font-bold">
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
            <div className="hover:scale-105 duration-300 ">
              <TvCard title={card.title} image={card.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default tvSlider;
