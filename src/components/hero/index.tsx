import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Pagination,Autoplay } from 'swiper/modules'; // Import Autoplay module
import video1 from '../../assets/bg-3.mp4'
import video2 from '../../assets/bg-2.mp4'
import video3 from '../../assets/bg-1.mp4'
import video4 from '../../assets/bg-4.mp4'
import video5 from '../../assets/bg-5.mp4'
import logo from '../../assets/logo-new.png'

const HeroSlider: React.FC = () => {
  const slides = [
    {
      title: "SPRINGER-MAIN R",
      subtitle: "2024 . U/A . 1 Season . 7 Languages ",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video1, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:"Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.", 
      video: video2, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description: "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video3, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description: "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video4, // Replace with your video URL
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description: "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video5, // Replace with your video URL
    },
  
    // Add more slides as needed
  ];

  return (
    <Swiper
      
      pagination={{ clickable: true }}
      modules={[Pagination,Autoplay]} // Add Autoplay module
      className="w-full h-screen"
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
      loop={true} // Enable infinite loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex flex-col justify-left  items-left  text-white text-center relative">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Content Overlay */}
            <div className="relative text-left -translate-x-48  translate-y-72 w-200     z-10 container mx-auto">
            <img
            src={logo}
            alt="Logo"
            className="object-cover w-[90px] h-auto transition-all  duration-300"
          />
              <h1 className="text-3xl  font-bold mb-4 font-bold mt-5">{slide.title}</h1>
              <h2 className="text-xl mb-4">{slide.subtitle}</h2>
              <p className="text-lg max-w-2xl mb-4 text-gray-200">{slide.description}</p>
              <h2 className="text-md  mb-4">{slide.subtitle2}</h2>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;