import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Navigation,Autoplay } from 'swiper/modules'; // Import Autoplay module

import Card from './Card'; // Import your Card component
import img1 from "../../assets/football.jpg";
import img2 from "../../assets/archery.jpg";
import img3 from "../../assets/tennis.jpg";
import img4 from "../../assets/cricket.jpg";
import img5 from "../../assets/baseball.jpg";
import img6 from "../../assets/hockey.jpg";
import img7 from "../../assets/golf.jpg";
import img8 from "../../assets/volly.jpg";

const CardSlider = () => {
  // Sample data for cards
  const cards = [
    { id: 1, title: "Football", image: img1 },
    { id: 2, title: "Cricket", image: img4 },
    { id: 3, title: "Tennis", image: img3 },
    { id: 4, title: "Archery", image: img2 },
    { id: 5, title: "Baseball", image: img5 },
    { id: 6, title: "Hockey", image: img6 },
    { id: 7, title: "Golf", image: img7 },
    { id: 8, title: "Volleyball", image: img8 },
  ];

  return (
    <div id='sports' className="container mx-auto py-10 px-5">
      <h1 className='md:text-[2.5rem] my-5  drop-shadow-header font-bold'>Sports</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10} // Reduce gap between slides (default is usually 20)        slidesPerView={4} // Default slides per view
        navigation // Enable navigation arrows
        pagination={{ clickable: false }} // Enable pagination dots
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },  // Mobile
          640: { slidesPerView: 2 },  // Small tablets
          1024: { slidesPerView: 3 }, // Medium screens
          1280: { slidesPerView: 4 }, // Large screens
          
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className='hover:scale-105 '>
            <Card title={card.title} image={card.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
