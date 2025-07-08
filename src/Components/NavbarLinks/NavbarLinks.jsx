import React from "react";
import { NavLink } from "react-router";

const NavbarLinks = ({ isToggleOpen }) => {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm"
          : "invisible opacity-0"
      }`}
    >
      <li role="none" className="flex items-stretch">
        <NavLink to="/"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500  lg:px-8"
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink to="/dashboard"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 lg:px-8"
        >
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li role="none" className="flex items-stretch">
        <NavLink
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 lg:px-8"
        >
          <span>Wishlist</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
