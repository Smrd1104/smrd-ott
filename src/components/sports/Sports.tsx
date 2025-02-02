import Card from "./Card";
import img1 from "../../assets/football.jpg";
import img2 from "../../assets/archery.jpg";
import img3 from "../../assets/tennis.jpg";
import img4 from "../../assets/cricket.jpg";
import img5 from "../../assets/baseball.jpg";
import img6 from "../../assets/hockey.jpg";
import img7 from "../../assets/golf.jpg";
import img8 from "../../assets/volly.jpg";



const sportsData = [
  { id: 1, title: "Foot Ball", image: img1 },
  { id: 2, title: "Cricket", image: img4 },
  { id: 3, title: "Tennis", image: img3 },
  { id: 4, title: "Archery", image: img2 },
  { id: 5, title: "Baseball", image: img5 },
  { id: 6, title: "Hockey", image: img6 },
  { id: 7, title: "Golf", image: img7 },
  { id: 8, title: "Volleyball", image: img8 },
];

const Sports = () => {
  return (
    <div id="sports" className="my-10 px-10 flex flex-col gap-10 container mx-auto">
      {/* Section Title */}
      <h2 className="md:text-[2.5rem] text-[2rem] md:text-start text-center drop-shadow-header font-bold text-white">Sports Collection</h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {sportsData.map((sport) => (
          <Card key={sport.id} title={sport.title} image={sport.image} />
        ))}
       
      </div>
      
    </div>
  );
};

export default Sports;
