import Card from "./Card";
import img1 from "../../assets/the-boys.jpeg";
import img2 from "../../assets/maari.jpg";
import img3 from "../../assets/the-boys.jpeg";
import img4 from "../../assets/cricket.jpg";

const sportsData = [
  { id: 1, title: "The Boys", image: img1 },
  { id: 2, title: "Maari", image: img2 },
  { id: 3, title: "Tennis", image: img3 },
  { id: 4, title: "Cricket", image: img4 },
  { id: 5, title: "Baseball", image: img1 },
  { id: 6, title: "Hockey", image: img2 },
  { id: 7, title: "Golf", image: img3 },
  { id: 8, title: "Volleyball", image: img4 },
];

const Sports = () => {
  return (
    <div className="my-10 mx-10 flex flex-col gap-10">
      {/* Section Title */}
      <h2 id="sports" className="text-2xl font-bold text-white">Sports Collection</h2>

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
