import React, { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import logoBlack from "../../assets/spider.png";
import logoWhite from"../../assets/spider.png";
import { BiMenuAltLeft } from "react-icons/bi"; 
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact Us", href: "/#contact-us" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Detect active link
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`w-full fixed z-50 top-0 left-0 h-auto ${isScrolled ? "md:backdrop-blur-md bg-white/70" : "md:bg-transparent"
        } transition-all duration-300 md:px-10`}
      role="navigation"
    >
      <div className="flex flex-row justify-between items-center py-4 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="/" className="flex flex-col justify-start items-start gap-0">
          <img
            src={isScrolled ? logoBlack : logoWhite}
            alt="Logo"
            className="object-cover w-[70px] h-auto transition-all duration-300"
          />
        </a>

        {/* Nav Links (for large screens) */}
        <ul className="hidden lg:flex flex-row md:-translate-x-12 items-center gap-8 text-[#3C1129]">
          {NAV_LINKS.map((link) => (
            <li
              key={link.name}
              className={`font-bold text-[1.2rem] cursor-pointer ${isScrolled ? "text-black" : "text-white"
                } ${currentPath === link.href ? "underline underline-offset-4" : ""
                } transition-all duration-300`}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (for mobile screens) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden"
        >
          {isMenuOpen ? (
            ''
          ) : (
            <BiMenuAltLeft size={50} color={isScrolled ? "black" : "white"} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <AnimatePresence>
          <motion.div
            ref={menuRef}
            className="lg:hidden fixed top-0 left-0 w-full h-1/2  bg-gray-400   z-50 p-6"
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: isMenuOpen ? 0 : "-100%" }} // Slide in when open
            exit={{ x: "-100%" }} // Slide out when closed
            transition={{ type: "tween", duration: 0.3 }} // Smooth transition
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-7 border-2 border-dotted border-white"
              aria-label="Close Menu"
            >
              <HiX size={30} color="white" />
            </button>
            <ul className="flex flex-col gap-6 text-white text-[1.5rem] text-center mt-24">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.name}
                  onClick={() => setIsMenuOpen(false)}
                  className={`cursor-pointer ${currentPath === link.href ? "underline" : ""
                    }`}
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
}

export default Header;
