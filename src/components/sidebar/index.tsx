import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaLaptop, FaVolleyballBall } from "react-icons/fa";
import { BiCameraMovie, BiSolidCategory } from "react-icons/bi";
import logoBlack from "../../assets/logo-new.png";

type SidebarProps = {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const NAV_LINKS = [
  { name: "Profile", href: "/profile", icon: <FaUser size={20} /> },
  { name: "Search", href: "/search", icon: <FaSearch size={20} /> },
  { name: "Home", href: "/", icon: <FaHome size={20} /> },
  { name: "Web-Series", href: "/web-series", icon: <FaLaptop size={20} /> },
  { name: "Movies", href: "/movies", icon: <BiCameraMovie size={20} /> },
  { name: "Sports", href: "/sports", icon: <FaVolleyballBall size={20} /> },
  { name: "Categories", href: "/categories", icon: <BiSolidCategory size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ setIsExpanded }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation(); // Get the current route

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setIsExpanded]);

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="hidden lg:block fixed top-0 left-0 h-full bg-black/10 text-white p-6 transition-all duration-300"
    >
      {/* Logo */}
      <a href="/">
        <div className="flex justify-start  drop-shadow">
          <img src={logoBlack} alt="Logo" className="w-10 -translate-x-3 h-auto rounded-full" />
        </div>
      </a>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-10 text-lg mt-20">
        {NAV_LINKS.map((link) => (
          <li key={link.name} className="flex items-center">
            <NavLink
              to={link.href}
              className={`flex items-center font-bold gap-5 w-full transition-all ${
                location.pathname === link.href ? "text-white drop-shadow" : "text-gray-300"
              } hover:text-white  `}
            >
              {link.icon}
              <span className="font-bold">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
