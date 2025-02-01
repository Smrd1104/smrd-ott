import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import video1 from '../../assets/bg-3.mp4'
import video2 from '../../assets/bg-2.mp4'
import video3 from '../../assets/bg-1.mp4'

const HeroSlider: React.FC = () => {
  const slides = [
    {
      title: "SPRINGER-MAIN R",
      subtitle: "2014. Action/Adventure: 20-22m +4.42 Risings",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video1, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "Trending Now",
      description: "Another exciting adventure in space.",
      video: video2, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "Trending Now",
      description: "Another exciting adventure in space.",
      video: video3, // Replace with your video URL
    },
  
    // Add more slides as needed
  ];

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
      className="w-full h-screen"
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
      loop={true} // Enable infinite loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex flex-col justify-center items-center text-white text-center relative">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Content Overlay */}
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <h2 className="text-2xl mb-4">{slide.subtitle}</h2>
              <p className="text-lg max-w-2xl">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;