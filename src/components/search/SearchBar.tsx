import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
   
    onSearch: (query: string) => void;
  }
  

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    onSearch(input);
  };

  return (
    <div className="relative w-full max-w-full px-2 py-2 ">
      <div className="absolute z-10 top-1/2 left-5 transform -translate-y-1/2 ">
        <Search className="text-white text-4xl " />
      </div>
      <input
        type="text"
        placeholder="Search web-series, movies, sports..."
        value={query}
        onChange={handleInputChange}
        className="w-full pl-12 pr-4 py-3 font-semibold rounded-xl text-[1.5rem]  backdrop-blur-3xl bg-white/15  focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
