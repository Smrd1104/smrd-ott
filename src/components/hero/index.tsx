import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Thumbs } from "swiper/modules";
import video1 from "../../assets/Vidaamuyarchi.mp4";
import video2 from "../../assets/goat.mp4";
import video3 from "../../assets/Vettaiyan.mp4";
import video4 from "../../assets/4bg.mp4";
import video5 from "../../assets/bg-5.mp4";
import video6 from "../../assets/bg-3.mp4";

import logo from "../../assets/viddamuyarchi.png";
import logo2 from "../../assets/goat.png";
import logo3 from "../../assets/vettaiyan.png";

import logo11 from "../../assets/viddamuyarchi.jpg";
import logo12 from "../../assets/goat.jpg";
import logo13 from "../../assets/vettaiyan.jpg";
import logo14 from "../../assets/goat.jpg";
import logo15 from "../../assets/viddamuyarchi.jpg";
import logo16 from "../../assets/vettaiyan.jpg";




import { FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";

const HeroSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const mainSwiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState<boolean[]>(Array(6).fill(true));
  const [videoTimes, setVideoTimes] = useState<number[]>(Array(6).fill(0));

  const toggleMute = (index: number) => {
    const newMutedState = [...isMuted];
    newMutedState[index] = !newMutedState[index];
    setIsMuted(newMutedState);

    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = newMutedState[index];
    }
  };

  const handleSlideChange = () => {
    const activeIndex = mainSwiperRef.current.swiper.activeIndex;
    const previousIndex = mainSwiperRef.current.swiper.previousIndex;

    // Pause the previous video and save its current time
    if (videoRefs.current[previousIndex]) {
      videoRefs.current[previousIndex]!.pause();
      const newVideoTimes = [...videoTimes];
      newVideoTimes[previousIndex] = videoRefs.current[previousIndex]!.currentTime;
      setVideoTimes(newVideoTimes);
    }

    // Play the new video from the saved time
    if (videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex]!.currentTime = videoTimes[activeIndex];
      videoRefs.current[activeIndex]!.play();
    }
  };

  const slides = [
    { logo:logo,
      thumb:logo11,
      title: "Vidaamuyarchi",
      subtitle: "2025 . U/A . 5 Languages ",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video1,
    },
    { logo:logo2,
      thumb:logo12,
      title: "GOAT",
      subtitle: "2024 . U/A  . 5 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video2,
    },
    {logo:logo3,
      thumb:logo13,
      title: "OST IN SPACE",
      subtitle: "2025 . U/A . 5 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video3,
    },
    {logo:logo,
      title: "OST IN SPACE",
      thumb:logo14,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video4,
    },
    {logo:logo,
      title: "OST IN SPACE",
      thumb:logo15,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video5,
    },
    {logo:logo,
      title: "OST IN SPACE",
      thumb:logo16,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video6,
    },
  ];

  useEffect(() => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.on("slideChange", handleSlideChange);
    }
  }, []);

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
                ref={(el) => (videoRefs.current[index] = el)}
                autoPlay
                loop
                muted={isMuted[index]}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom volume control */}
              <div className="absolute right-16  rounded-full py-1 px-2 bottom-40  flex items-center gap-2">
                <button onClick={() => toggleMute(index)} className="text-white cursor-pointer">
                  {isMuted[index] ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>
              </div>

              {/* Content Overlay */}
              <div className="relative text-left top-78 left-5 z-10 container mx-auto ">
                <img src={slide.logo} alt="Logo" className="w-[150px]  h-auto transition-all duration-300" />
                {/* <h1 className="text-2xl font-bold leading-8 uppercase ">{slide.title}</h1> */}
                <h2 className="text-[1rem] font-bold leading-8 mt-2">{slide.subtitle}</h2>
                {/* <p className="text-[1rem] max-w-2xl text-gray-300 font-bold leading-8 mt-5">{slide.description}</p> */}
                <h2 className="text-md font-bold text-[1rem] mt-5">{slide.subtitle2}</h2>
                <div className="absolute flex flex-row gap-5 container mx-auto top-0 mt-5">
                <button className=" hover:scale-105 hover:border duration-300 absolute cursor-pointer top-40 flex flex-row items-center gap-2 px-32 py-2 bg-white/10 rounded-lg mt-1 text-white text-[1.2rem]">
                  <span>
                    <FaPlay />
                  </span>
                  Watch Now
                </button>
                <div>
                  <IoMdAdd className=" absolute  hover:border  hover:scale-105 duration-300 py-2 text-[2.8rem]  top-41 left-96 translate-x-3 rounded-lg bg-white/10" />
                </div>
              </div>
              </div>


             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <div className="relative container mx-auto fixed">
        {/* Custom Navigation Buttons */}
        <IoIosArrowBack
          className="absolute top-1/2 -translate-y-44 text-[3rem] md:right-91 z-10 text-white p-3 rounded-full transition cursor-pointer"
          id="prevSlide"
        />

        <IoIosArrowForward
          className="absolute top-1/2 -translate-y-44 text-[3rem] md:right-10 z-10 text-white p-3 rounded-full transition cursor-pointer"
          id="nextSlide"
        />

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs, Navigation]}
          navigation={{
            nextEl: "#nextSlide",
            prevEl: "#prevSlide",
          }}
          className="absolute  left-1/2 -translate-y-38 transform -translate-x-3/4 w-1/4 z-10"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} onClick={() => mainSwiperRef.current.swiper.slideTo(index)}>
              <img src={slide.thumb} alt="Logo" className="hover:scale-105  duration-300  w-[100px] h-[70px] rounded  transition-all duration-300" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;