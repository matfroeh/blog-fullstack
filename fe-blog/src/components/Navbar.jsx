import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 px-[2%] md:px-[5%] flex justify-between items-center border-b border-slate-600">
      <NavLink to="/" className="text-white text-2xl font-bold flex items-center gap-2">
      <img src="/logoWhite.svg" className="w-7" alt="" />
        My Blog
      </NavLink>
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-white 
            ${isActive ? "text-white" : "text-slate-400"}
            `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-post"
            className={({ isActive }) =>
              `hover:text-white 
            ${isActive ? "text-white" : "text-slate-400"}
            `
            }
          >
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
