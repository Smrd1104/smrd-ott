import { useEffect, useRef, useState } from "react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaPhone, FaUserLock, FaUser, FaSearch, FaLaptop, FaMobile, FaFootballBall, FaFile, FaBowlingBall, FaVolleyballBall } from "react-icons/fa";
import logoBlack from "../../assets/spider.png";
import { BiCameraMovie, BiSolidCategory } from "react-icons/bi";

const NAV_LINKS = [
  { name: "Profile", href: "/#profile", icon: <FaUser size={20} /> },
  { name: "Search", href: "/#search", icon: <FaSearch size={20} /> },
  { name: "Home", href: "/", icon: <FaHome size={20} /> },
  { name: "Tv", href: "/#tv", icon: <FaLaptop size={20} /> },
  { name: "Movies", href: "/#movies", icon: <BiCameraMovie  size={20} /> },
  { name: "Sports", href: "/#sports", icon: <FaVolleyballBall size={20} /> },
  { name: "Categories", href: "/#categories", icon: <BiSolidCategory  size={20} /> },
];

const Sidebar = ({ setIsExpanded }) => {
  const [activeLink, setActiveLink] = useState("/"); // Default active link
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsExpanded]);

  const handleLinkClick = (href) => {
    setActiveLink(href); // Set the clicked link as active
  };

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setIsExpanded(true)}  // Expand on hover
      onMouseLeave={() => setIsExpanded(false)} // Collapse on hover out
      className={`fixed top-0 left-0 h-full bg-black/10 text-white p-6 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex justify-start my-4">
        <img src={logoBlack} alt="Logo" className="w-7 h-auto rounded-full shadow-lg" />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-10 text-lg mt-10">
        {NAV_LINKS.map((link) => (
          <li key={link.name} className="flex items-center">
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleLinkClick(link.href);
              }}
              className={`flex items-center font-bold gap-5 w-full 
                ${activeLink === link.href ? 'text-white' : 'text-gray-300'} 
                hover:text-white`}
            >
              {link.icon}
              <span className={`${activeLink === link.href ? 'text-white' : 'text-gray-300'} font-bold hover:text-white`}>
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
