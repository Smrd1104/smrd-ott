interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-[300px] h-[250px] rounded-md border  shadow-lg"
      />
      <div className="absolute bottom-3 drop-shadow  left-3 bg-black/50 text-white p-2 rounded-md text-sm">
        {title}
        <div>
     
      </div>
     
      </div>
    
    </div>
  );
};

export default Card;
