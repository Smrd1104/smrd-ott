import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/components/sidebar";
import Home from "../src/pages/home";
import Movie from "../src/pages/movie";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <div className={`${isExpanded ? "md:w-40" : "md:w-14"} transition-all duration-300`}>
          <Sidebar setIsExpanded={setIsExpanded} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-black relative transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/movie" element={<Movie />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
