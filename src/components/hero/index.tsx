import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {Navigation, Thumbs } from "swiper/modules";
import video1 from "../../assets/bg-3.mp4";
import video2 from "../../assets/2bg.mp4";
import video3 from "../../assets/bg.mp4";
import video4 from "../../assets/4bg.mp4";
import video5 from "../../assets/bg-5.mp4";
import logo from "../../assets/logo-new.png";
import { FaPlay } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";

const HeroSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const mainSwiperRef = useRef<any>(null);

  const slides = [
    {
      title: "SPRINGER-MAIN R",
      subtitle: "2024 . U/A . 1 Season . 7 Languages ",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video1,
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video2,
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video3,
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video4,
    },
    {
      title: "OST IN SPACE",
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video5,
    },
  ];

  return (
    <div className="w-full h-screen relative">
      {/* Main Swiper */}
      <Swiper
        ref={mainSwiperRef}
        pagination={{ clickable: false }}
        modules={[Navigation, Thumbs]}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col text-white relative">
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
              <div className="relative text-left top-48 left-5 z-10 container mx-auto mt-5">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[90px] pb-2 h-auto transition-all duration-300"
                />
                <h1 className="text-2xl font-bold leading-8 ">{slide.title}</h1>
                <h2 className="text-[1rem] font-bold leading-8 mt-5">{slide.subtitle}</h2>
                <p className="text-[1rem] max-w-2xl text-gray-300 font-bold leading-8 mt-5">
                  {slide.description}
                </p>
                <h2 className="text-md font-bold text-[1rem] mt-5">{slide.subtitle2}</h2>
              </div>
            <div className=" relative flex flex-row gap-5 container -mt-10 mx-auto top-0  ">
              <button className="absolute cursor-pointer translate-y-66 left-5 flex flex-row items-center gap-2 border px-32 py-2  bg-white/10 rounded mt-1 text-white text-[1.2rem]">
                         <span><FaPlay/></span> Watch Now
              </button>
              <div className="">
              <IoMdAdd className=" absolute border py-2 text-[2.8rem]  translate-y-66 translate-x-96 left-8   mt-1 rounded   bg-white/10"/>
              </div>
             </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
        <div className="relative  container mx-auto fixed">
           {/* Custom Navigation Buttons */}
        <IoIosArrowBack
              className="absolute top-1/2 -translate-y-26 text-[3rem] md:right-91 z-10 text-white p-3   rounded-full transition cursor-pointer"
              id="prevSlide"
            />
      
            <IoIosArrowForward
              className="absolute top-1/2 -translate-y-26 text-[3rem] md:right-10 z-10 text-white p-3   rounded-full transition cursor-pointer"
              id="nextSlide"
            />
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs,Navigation]}
        navigation={{
          nextEl: "#nextSlide",
          prevEl: "#prevSlide",
        }}
        className="absolute bottom-5  left-1/2 -top-20 transform -translate-x-3/4 w-1/4 z-10  "
      >
       
        {slides.map((slide, index) => (
          <SwiperSlide key={index} onClick={() => mainSwiperRef.current.swiper.slideTo(index)}>
            <video className="w-full  h-16 object-cover rounded cursor-pointer duration-300 hover:scale-120" muted>
              <source src={slide.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
