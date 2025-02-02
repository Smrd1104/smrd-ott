import Card from "./Card";
import img1 from "../../assets/football.jpg";
import img2 from "../../assets/archery.jpg";
import img3 from "../../assets/tennis.jpg";
import img4 from "../../assets/cricket.jpg";
import img5 from "../../assets/baseball.jpg";

const sportsData = [
  { id: 1, title: "Foot Ball", image: img1 },
  { id: 2, title: "Cricket", image: img4 },
  { id: 3, title: "Tennis", image: img3 },
  { id: 4, title: "Archery", image: img2 },
  { id: 5, title: "Baseball", image: img5 },
  { id: 6, title: "Hockey", image: img2 },
  { id: 7, title: "Golf", image: img3 },
  { id: 8, title: "Volleyball", image: img4 },
];

const Sports = () => {
  return (
    <div id="sports" className="my-10 mx-10 flex flex-col gap-10">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-white">Sports Collection</h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {sportsData.map((sport) => (
          <Card key={sport.id} title={sport.title} image={sport.image} />
        ))}
       
      </div>
      
    </div>
  );
};

export default Sports;
