import { useState } from "react";
import Sidebar from "../src/components/sidebar";
import Home from '../src/pages/home';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className={`${isExpanded ? "md:w-40" : "md:w-12"} transition-all duration-300`}>
        <Sidebar setIsExpanded={setIsExpanded} /> {/* Only pass setIsExpanded */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-black relative transition-all duration-300">
        <Home />
      </div>
    </div>
  );
}

export default App;