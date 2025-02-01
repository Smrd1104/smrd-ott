  import { useState } from "react";
  import Sidebar from "../src/components/sidebar";
  import Home from '../src/pages/home';

  function App() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <div className={`${isExpanded ? " bg-black/10 w-220" : "w-80"} transition-all duration-300 `}>
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>

        {/* Main Content */}
        <div className=" overflow-y-auto ">
          <Home />
        </div>
      </div>
    );
  }

  export default App;
