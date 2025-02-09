import FlipCard from '../../components/FlipCard';
import img1 from "../../assets/wednesday.jpg";
import img2 from "../../assets/you.jpg";
import img3 from "../../assets/money-heist.jpg";
import img4 from "../../assets/dexter.jpg";
import img5 from "../../assets/elite.jpg";
import img6 from "../../assets/the-boys.jpeg";
import img7 from "../../assets/super-natural.jpg";
import img8 from "../../assets/elite.jpg";
const movies = [
  { id: 1, image: img1, title: "img", description: "A forensic expert moonlights as a vigilante serial killer." },
  { id: 2, image: img2, title: "Breaking Bad", description: "A high school teacher turns into a ruthless drug kingpin." },
  { id: 3, image: img3, title: "Stranger Things", description: "A group of kids uncover government secrets and supernatural forces." },
  { id: 4, image: img4, title: "Peaky Blinders", description: "A gangster family in post-war Birmingham." },
  { id: 5, image: img5, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 6, image: img6, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 7, image: img7, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 8, image: img8, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 9, image: img1, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 10, image: img2, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 11, image: img3, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 12, image: img4, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 13, image: img5, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 14, image: img6, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 15, image: img7, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 16, image: img8, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 17, image: img2, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 18, image: img3, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 19, image: img7, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },
  { id: 20, image: img5, title: "Game of Thrones", description: "Noble families fight for control of the Iron Throne." },

];

const Index = () => {
  return (
    <div className='container mx-auto overflow-hidden'>
      <h1 className='text-center text-[3rem] drop-shadow-header py-10'>Movies</h1>
      <div className='grid grid-cols-5 space-y-3 justify-center py-10 px-10'>
        {movies.map((movie) => (
          <FlipCard key={movie.id} image={movie.image} title={movie.title} description={movie.description} />
        ))}
      </div>
      
    </div>
  );
};

export default Index;
