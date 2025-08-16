import { NavLink } from "react-router";

const NavbarLinks = ({ isToggleOpen }) => {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`
        flex flex-col lg:flex-row lg:items-center font-medium
        transition-all duration-300 ease-in-out
        bg-emerald-600 dark:bg-emerald-900 lg:bg-transparent lg:dark:bg-transparent
        px-6 lg:px-0 py-4 lg:py-0 rounded-lg lg:rounded-none
        absolute lg:static top-0 left-0 w-full lg:w-auto
        shadow-md lg:shadow-none
        ${isToggleOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}
      `}
    >
      {[
        { to: "/", label: "Home" },
        { to: "/dashboard", label: "Dashboard" },
        { to: "/contactUs", label: "Contact Us" },
        { to: "/blog", label: "Blog" },
        { to: "/aboutUs", label: "About Us" },
      ].map(({ to, label }) => (
        <li key={to} role="none" className="flex items-stretch">
          <NavLink
            to={to}
            onClick={() => scrollTo(0)}
            className={({ isActive }) =>
              `liquid-link flex items-center gap-2 py-2 px-4 rounded-full
              ${
                isActive
                  ? "dark:text-emerald-300 active-fill"
                  : "text-white dark:text-gray-100"
              }`
            }
          >
            <span>{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
