import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Thumbs,Autoplay, Pagination} from "swiper/modules";
import video1 from "../../assets/Vidaamuyarchi.mp4";
import video2 from "../../assets/goat.mp4";
import video3 from "../../assets/Vettaiyan.mp4";
import video4 from "../../assets/raayan.mp4";
import video5 from "../../assets/meiyazhagan.mp4";
import video6 from "../../assets/vikram.mp4";
import video7 from "../../assets/amaran.mp4";
import video8 from "../../assets/rrr.mp4";
import video9 from "../../assets/Pushpa2.mp4";
import video10 from "../../assets/dragon.mp4";

import logo from "../../assets/vidaamuyarchi-new.png";
import logo2 from "../../assets/goat-new.png";
import logo3 from "../../assets/vettaiyan-new.png";
import logo4 from "../../assets/raayan-new.png";
import logo5 from "../../assets/mei-new.png";
import logo6 from "../../assets/vikram-new.png";
import logo7 from "../../assets/amaran-new.png";
import logo8 from "../../assets/rrr-new.png";
import logo9 from "../../assets/pushpa-new.png";
import logo10 from "../../assets/dragon-new.png";

import logo11 from "../../assets/vidaamuyarchi.webp";
import logo12 from "../../assets/goat.jpg";
import logo13 from "../../assets/vettaiyan.jpg";
import logo14 from "../../assets/maari.jpg";
import logo15 from "../../assets/mei.jpg";
import logo16 from "../../assets/vikram.jpg";
import logo17 from "../../assets/amaran.jpg";
import logo18 from "../../assets/rrr.jpg";
import logo19 from "../../assets/pushpa.jpg";
import logo20 from "../../assets/dragon.jpg";

import logoBlack from "../../assets/logo-new.png";
import bgImage from "../../assets/bgImg-vidaamuyarchi.jpg";
import bgImage2 from "../../assets/bgimg-goat.jpg";
import bgImage3 from "../../assets/vettaiyan-bg.jpg";
import bgImage4 from "../../assets/raayan-bg.jpg";
import bgImage5 from "../../assets/mei-bg.jpg";
import bgImage6 from "../../assets/vikram-bg.jpg";
import bgImage7 from "../../assets/amaran-bg.jpg";
import bgImage8 from "../../assets/rrr-bg.jpg";
import bgImage9 from "../../assets/pushpa-bg.jpg";
import bgImage10 from "../../assets/dragon-bg.jpg";

import { FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";

const HeroSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const mainSwiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState<boolean[]>(Array(10).fill(true));
  const [videoTimes, setVideoTimes] = useState<number[]>(Array(10).fill(0));
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

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

    if (videoRefs.current[previousIndex]) {
      videoRefs.current[previousIndex]!.pause();
      const newVideoTimes = [...videoTimes];
      newVideoTimes[previousIndex] = videoRefs.current[previousIndex]!.currentTime;
      setVideoTimes(newVideoTimes);
    }

    if (videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex]!.currentTime = videoTimes[activeIndex];
      videoRefs.current[activeIndex]!.play();
    }
  };

  interface Slide {
    id: number;
    bgImage: string;
    logo: string;
    thumb: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    description: string;
    video: string;
  }

  const slides:Slide[] = [
    { id:1,
      logo:logo,
      thumb:logo11,
      bgImage:bgImage,
      title: "Vidaamuyarchi",
      subtitle: "2025 . U/A . 5 Languages ",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video1,
    },
    { id:2,
      logo:logo2,
      thumb:logo12,
      bgImage:bgImage2,
      title: "GOAT",
      subtitle: "2024 . U/A  . 5 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video2,
    },
    {id:3,
      logo:logo3,
      thumb:logo13,
      bgImage:bgImage3,
      title: "OST IN SPACE",
      subtitle: "2025 . U/A . 5 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video3,
    },
    {id:4,bgImage:bgImage4,
      logo:logo4,
      title: "OST IN SPACE",
      thumb:logo14,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video4,
    },
    {id:5,bgImage:bgImage5,
      logo:logo5,
      title: "OST IN SPACE",
      thumb:logo15,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video5,
    },
    {id:6,bgImage:bgImage6,
      logo:logo6,
      title: "OST IN SPACE",
      thumb:logo16,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video6,
    },
    {id:7,bgImage:bgImage7,
      logo:logo7,
      title: "OST IN SPACE",
      thumb:logo17,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video7,
    },
     {id:8,bgImage:bgImage8,
      logo:logo8,
      title: "OST IN SPACE",
      thumb:logo18,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video8,
    },
     {id:9,bgImage:bgImage9,
      logo:logo9,
      title: "OST IN SPACE",
      thumb:logo19,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video9,
    },
     {id:10,bgImage:bgImage10,
      logo:logo10,
      title: "OST IN SPACE",
      thumb:logo20,
      subtitle: "2024 . U/A . 1 Season . 7 Languages",
      subtitle2: "Comedy | Drama | Action | Romance",
      description:
        "Spider-free milestones are a mission to protect his loved ones when Occorp, sensed by its childhood friend Kerry Dobson, unleashing a slow of Hits.",
      video: video10,
    },
  ];
  
  useEffect(() => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.on("slideChange", handleSlideChange);
    }
  }, []);

  return (
    <div className="w-full h-auto relative md:py-0">
      <a href="/">
        <div className="lg:hidden absolute md:top-0 top-2 z-10 flex justify-start md:drop-shadow">
          <img src={logoBlack} alt="Logo" className="w-14 translate-x-3 h-auto rounded-full" loading="lazy" />
        </div>
      </a>
      <Swiper
        ref={mainSwiperRef}
        // pagination={{ clickable: false }}
        modules={[Navigation, Thumbs, Autoplay,Pagination]}
        // autoplay={{ delay: 3000, disableOnInteraction: false }} // Proper autoplay config
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        breakpoints={{
          320: { // Extra small screens
            autoplay: { delay: 3000, disableOnInteraction: false }, pagination: { clickable: true }
          ,navigation:true},
          640: { // Small screens
            autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { clickable: true },navigation:true}
          ,
          1024: { // Large screens
            // autoplay: { delay: 7000, disableOnInteraction: false }
          }
        }}
        className="w-full h-screen"
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col text-white relative z-10 ">
              <div className="lg:block hidden absolute top-0 left-0 w-full h-full opacity-80 z-10">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                loop
                muted={isMuted[index]}
                playsInline
                preload="none"
                
             
              
                className="lg:block hidden absolute top-0 left-0 md:w-full md:h-full h-[480px] object-cover z-10"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
              <div className="lg:hidden absolute bg-black/10 opacity-70">
                <img  src={slide.bgImage} alt="image" className="w-[410px] h-[460px]" loading="lazy" />
              </div>

              <div className="lg:block hidden absolute z-90  -right-45  rounded-full py-1 px-2 md:bottom-15 w-1/4 h-1/4 flex items-center gap-2">
                <button onClick={() => toggleMute(index)} className="text-white cursor-pointer mt-4 p-2 bg-white/10 hover:scale-105 bg-opacity-50 rounded-full hover:bg-white/30">
                  {isMuted[index] ? <FaVolumeMute size={20} className="" /> : <FaVolumeUp size={20} />}
                </button>
              </div>

             <div className="relative  md:text-left text-center md:top-48 top-58 md:left-5 z-10 container mx-auto flex flex-col lg:items-start items-center">
  {/* Logo */}
  <img
    src={slide.logo}
    alt="Logo"
    className="md:w-[250px] w-[300px] md:h-40 h-[150px] transition-all duration-300 md:mt-0 mt-2"
    loading="lazy"
  />

  {/* Subtitles */}
  <div className=" md:w-1/3  md:-mt-8 -mt-10">
    <h2 className="lg:block hidden md:text-[1rem] text-[0.8rem] font-bold leading-8 md:mt-2">
      {slide.subtitle}
    </h2>
    <h2 className="font-bold md:text-[1rem] text-[1.2rem] md:mt-5 ">
      {slide.subtitle2}
    </h2>
    <p className="lg:block hidden font-bold md:text-[1rem] text-[0.8rem] md:mt-5 ">
      {slide.description}
    </p>
  </div>

  {/* Buttons */}
  <div className="flex flex-row md:gap-5 gap-3  container mx-auto  md:mt-5  mt-3 items-center md:justify-start justify-center ">
    {/* Watch Now Button */}
    <button className=" hover:scale-105  duration-300 cursor-pointer  flex flex-row items-center gap-2 md:px-32 px-10 py-2 bg-gradient-to-r from-blue-500/90 to-blue-700/90 rounded-lg mt-1 text-white text-[1.2rem]">
      <span>
        <FaPlay />
      </span>
      Watch Now
    </button>

    {/* Add Button */}
    
      <IoMdAdd className="  cursor-pointer  hover:bg-white/40 hover:scale-105 duration-300 py-2 text-[2.7rem] mt-1 rounded-lg bg-white/30" />
    
  </div>
</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lg:block hidden relative container mx-auto">
        <IoIosArrowBack
          className={`absolute top-1/2 -translate-y-40 text-[3rem] md:right-91 right-32 z-10 p-3 rounded-full transition cursor-pointer ${
            isPrevActive ? "text-white" : "text-gray-500 hidden"
          }`}
          id="prevSlide"
        />

        <IoIosArrowForward
          className={`absolute top-1/2 -translate-y-40 text-[3rem] md:right-10 -right-2 z-10 p-3 rounded-full transition cursor-pointer ${
            isNextActive ? "text-white" : "text-gray-500 hidden"
          }`}
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
          onSlideChange={(swiper) => {
            setIsPrevActive(swiper.activeIndex > 0);
            setIsNextActive(swiper.activeIndex < swiper.slides.length - 4);
          }}
          className="absolute left-1/2 bottom-34 transform -translate-x-3/4 w-1/4 z-10"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              onClick={() => mainSwiperRef.current.swiper.slideTo(index)}
            >
              <img
                src={slide.thumb}
                alt="Logo"
                className="hover:scale-105 cursor-pointer duration-300 md:w-[100px] md:h-[70px] rounded transition-all"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;




