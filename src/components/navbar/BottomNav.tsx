import { Home, Search, List, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Search", icon: Search, path: "/search" },
    { name: "Categories", icon: List, path: "/categories" },
    { name: "Profile", icon: User, path: "/" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0  shadow-md  flex justify-around py-2 z-50 bg-black">
      {navItems.map(({ name, icon: Icon, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-white" : "text-gray-400"
            }`
          }
        >
          <Icon className="w-6 h-6" />
          <span>{name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
