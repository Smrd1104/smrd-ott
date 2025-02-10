import FlipCard from '../../components/FlipCard';
import img1 from "../../assets/vikram.jpg";
import img2 from "../../assets/vettaiyan.jpg";
import img3 from "../../assets/vidaamuyarchi.webp";
import img4 from "../../assets/goat.jpg";
import img5 from "../../assets/maari.jpg";
import img6 from "../../assets/mei.jpg";
import img7 from "../../assets/pushpa.jpg";
import img8 from "../../assets/rrr.jpg";

import bgVideo1 from "../../assets/vikram.mp4";
import bgVideo2 from "../../assets/Vettaiyan.mp4"
import bgVideo3 from "../../assets/bg-video-movie.mp4"
import bgVideo4 from "../../assets/goat.mp4"
import bgVideo5 from "../../assets/raayan.mp4"
import bgVideo6 from "../../assets/meiyazhagan.mp4"
import bgVideo7 from "../../assets/Pushpa2.mp4"
import bgVideo8 from "../../assets/rrr.mp4"

import logo from "../../assets/viddamuyarchi.png";
import logo2 from "../../assets/goat.png";
import logo3 from "../../assets/vettaiyan.png";

const movies = [
  { id: 1,logo:logo, image: img1,videoSrc:bgVideo1, title: "Vikram", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2,logo:logo2, image: img2, videoSrc:bgVideo2,title: "Vettaiyan", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3,logo:logo3, image: img3, videoSrc:bgVideo3,title: "Vidaamuyarchi", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4,logo:logo, image: img4, videoSrc:bgVideo4,title: "GOAT", description: "A gangster family in post-war Birmingham." },
  { id: 5,logo:logo, image: img5, videoSrc:bgVideo5,title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 6,logo:logo, image: img6, videoSrc:bgVideo6,title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 7,logo:logo, image: img7, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 8,logo:logo, image: img8, videoSrc:bgVideo8,title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  { id: 9,logo:logo, image: img1, videoSrc:bgVideo7,title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 10,logo:logo, image: img2,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 11,logo:logo, image: img3,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 12,logo:logo, image: img4,videoSrc:bgVideo4, title: "GOAT", description: "Noble families fight for control of the Iron Throne." },
  { id: 13,logo:logo, image: img5,videoSrc:bgVideo3, title: "Vidaamuyarchi", description: "Noble families fight for control of the Iron Throne." },
  { id: 14,logo:logo, image: img6,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },
  { id: 15,logo:logo, image: img7,videoSrc:bgVideo1, title: "Vikram", description: "Noble families fight for control of the Iron Throne." },
  { id: 16,logo:logo, image: img8,videoSrc:bgVideo8, title: "RRR", description: "Noble families fight for control of the Iron Throne." },
  { id: 17,logo:logo, image: img2,videoSrc:bgVideo5, title: "Raayan", description: "Noble families fight for control of the Iron Throne." },
  { id: 18,logo:logo, image: img3,videoSrc:bgVideo6, title: "Meiyazhagan", description: "Noble families fight for control of the Iron Throne." },
  { id: 19,logo:logo, image: img7,videoSrc:bgVideo7, title: "Pushpa 2", description: "Noble families fight for control of the Iron Throne." },
  { id: 20,logo:logo, image: img5,videoSrc:bgVideo2, title: "Vettaiyan", description: "Noble families fight for control of the Iron Throne." },

];

const Index = () => {
  return (
    <div id="/movies" className='container mx-auto overflow-hidden'>
      <h1 className='text-center text-[3rem] drop-shadow-header py-10'>Movies</h1>
      <div className='grid md:grid-cols-5 grid-cols-3  space-y-3  justify-center px-4 py-10'>
        {movies.map((movie) => (
          <FlipCard key={movie.id} logo={movie.logo} image={movie.image} title={movie.title} description={movie.description} videoSrc={movie.videoSrc} />
        ))}
      </div>
      
    </div>
  );
};

export default Index;
