import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaLaptop, FaVolleyballBall } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { LucidePopcorn } from "lucide-react";
import logoBlack from "../../assets/jio-logo.png";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: <FaHome size={22} /> },
  { name: "Search", href: "/search", icon: <FaSearch size={22} /> },
  { name: "Web-Series", href: "/web-series", icon: <FaLaptop size={22} /> },
  { name: "Movies", href: "/movies", icon: <LucidePopcorn size={22} /> },
  { name: "Sports", href: "/sports", icon: <FaVolleyballBall size={22} /> },
  { name: "Categories", href: "/categories", icon: <BiSolidCategory size={22} /> },
  { name: "Profile", href: "/profile", icon: <FaUser size={22} /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  // Optional: small delay to avoid flicker when crossing boundaries
  const safelySetExpanded = (val: boolean, delay = 0) => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    if (delay > 0) {
      hoverTimeout.current = window.setTimeout(() => setExpanded(val), delay);
    } else {
      setExpanded(val);
    }
  };

  return (
    <>
      {/* Fixed Icons Sidebar (hover target) */}
      <div
        className="fixed top-0 left-0 h-full w-16 bg-black flex flex-col items-center py-6 gap-10 z-50 group"
        onMouseEnter={() => safelySetExpanded(true)}
      >
        <a href="/" className="shrink-0">
          <img src={logoBlack} alt="Logo" className="w-10 h-10 rounded-full" />
        </a>

        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={`text-gray-400  hover:text-white transition ${
              location.pathname === link.href ? "text-white drop-shadow" : ""
            }`}
            onMouseEnter={() => safelySetExpanded(true)}
          >
            {link.icon}
          </NavLink>
        ))}
      </div>

      {/* Overlay + Expanded Sidebar (shown while hovered) */}
      {expanded && (
        <div
          className="fixed inset-0 z-40"
          onMouseLeave={() => safelySetExpanded(false, 60)}
        >
          {/* Dim overlay area (clicking it also closes) */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"
            onClick={() => setExpanded(false)}
          />

          {/* Expanded panel */}
          <div
            className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-black via-black/20 to-transparent p-6"
            onMouseEnter={() => safelySetExpanded(true)}
            onMouseLeave={() => safelySetExpanded(false, 60)}
          >
            <ul className="flex flex-col gap-10 text-lg mt-20.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={`flex items-center gap-6 font-bold transition ${
                      location.pathname === link.href ? "text-white drop-shadow " : "text-gray-300 "
                    } hover:text-white `}
                    onClick={() => setExpanded(false)}
                  >
                    <span className="shrink-0 ">{link.icon}</span>
                    <span className="leading-none ">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
