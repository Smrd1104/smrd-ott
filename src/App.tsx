import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/components/sidebar";
import Home from "../src/pages/home";
import LoadingSpinner from "./components/loader/Loader"; // Import your loader
import Movie from "./pages/movie"
import Demo from "./pages/demo"
function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("appLoaded") ? false : true;
  });

  useEffect(() => {
    if (!sessionStorage.getItem("appLoaded")) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className=" flex items-center justify-center min-h-screen bg-gradient-to-r from-[#000] to-[#000] text-white">
        <LoadingSpinner />
      </div>
    );
  }

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
            <Route path="/movie" element={<Movie />} />
            <Route path="/demo" element={<Demo />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
