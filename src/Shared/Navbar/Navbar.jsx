import React, { useEffect, useState } from "react";
import NavbarLinks from "../../Components/NavbarLinks/NavbarLinks";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, signOutUser, loading } = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    signOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  if (loading) return <Loader />;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block border-b border-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm text-white">
          <a
            href="tel:+306750009800"
            className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 
                  1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97
                  c-.135.101-.164.249-.126.352a11.285 11.285 0 
                  006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875
                  1.875 0 011.955-.694l4.423 1.105c.834.209 
                  1.42.959 1.42 1.82V19.5a3 3 0 
                  01-3 3h-2.25C8.552 22.5 1.5 
                  15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            +30 675 000 9800
          </a>

          <div className="flex items-center gap-4">
            {/* Socials placeholder */}
            <span className="text-xs text-emerald-200">
              Follow us on socials
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky py-3 top-0 left-0 z-20 w-full border-b bg-emerald-500 dark:bg-gray-900 border-slate-200 dark:border-gray-700 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-emerald-700 dark:after:bg-gray-700 lg:emerald-slate-700 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            {/* Mobile Toggle */}
            <button
              className={`relative block h-10 w-10 rounded-md lg:hidden focus:outline-none`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-label="Toggle navigation"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`block h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-all ${
                    isToggleOpen
                      ? "rotate-45 translate-y-1.5"
                      : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-all ${
                    isToggleOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition-all ${
                    isToggleOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                className="hidden sm:block w-40"
                src="https://i.ibb.co/ycgk60M4/Screenshot-2025-07-11-200146-removebg-preview.png"
                alt="logo"
              />
              <img
                className="block sm:hidden w-12"
                src="https://i.ibb.co/RTg7XXGb/Screenshot-2025-07-11-200146-removebg-preview.png"
                alt="logo"
              />
            </Link>

            {/* Links (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavbarLinks isToggleOpen={isToggleOpen} />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full hover:bg-emerald-100 dark:hover:bg-gray-700 transition"
              >
                {theme === "dark" ? (
                  <span className="text-yellow-300 text-xl">🌞</span>
                ) : (
                  <span className="text-gray-700 text-xl">🌙</span>
                )}
              </button>

              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full border-2 border-emerald-500">
                      <img src={user?.photoURL} alt="User avatar" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 p-2"
                  >
                    <li className="text-center py-2 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                        {user?.displayName}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </p>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full rounded-md bg-emerald-500 text-white py-2 hover:bg-emerald-600 transition"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-100 rounded-md hover:bg-emerald-200 transition"
                  >
                    SignUp
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition"
                  >
                    SignIn
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu */}
          {isToggleOpen && (
            <div className="lg:hidden mt-3 rounded-lg bg-white dark:bg-gray-900 shadow-md p-4">
              <NavbarLinks isToggleOpen={isToggleOpen} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
