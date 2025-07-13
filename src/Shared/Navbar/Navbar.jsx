/* eslint-disable no-unused-vars */
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) return <Loader />;

  return (
    <>
      {/* Top bar */}
      <div className="border-b border-emerald-700 dark:border-gray-700 bg-emerald-600 dark:bg-gray-800">
        <div className="mx-auto grid w-full max-w-full grid-cols-4 gap-6 px-6 py-2 text-sm text-white dark:text-gray-100 md:grid-cols-8 lg:max-w-5xl lg:grid-cols-12 xl:max-w-7xl 2xl:max-w-[96rem]">
          <div className="col-span-2 items-center md:col-span-4 lg:col-span-6">
            <a
              href="javascript:void(0)"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-300"
            >
              {/* phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +306750009800
            </a>
          </div>
          <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
            <div className="flex items-center justify-end gap-4">
              {/* social icons kept as-is */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 left-0 z-20 w-full border-b bg-emerald-500 dark:bg-gray-900 border-slate-200 dark:border-gray-700 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-emerald-700 dark:after:bg-gray-700 lg:emerald-slate-700 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-semibold text-white dark:text-gray-100"
            role="navigation"
          >
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-2 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 dark:bg-gray-200 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 dark:bg-gray-200 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 dark:bg-gray-200 transition-all duration-300"
                ></span>
              </div>
            </button>

            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img
                className="w-46 sm:block hidden"
                src="https://i.ibb.co/ycgk60M4/Screenshot-2025-07-11-200146-removebg-preview.png"
                alt="logo"
              />
              <img
                className="w-12 sm:hidden block"
                src="https://i.ibb.co/RTg7XXGb/Screenshot-2025-07-11-200146-removebg-preview.png"
                alt="logo"
              />
            </a>

            <NavbarLinks isToggleOpen={isToggleOpen} />

            <div className="ml-auto flex items-center justify-end lg:ml-0 gap-2 lg:flex-1 lg:p-0">
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
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
                    <div className="w-10 border-2 border-white dark:border-gray-300 rounded-full">
                      <img
                        alt="User avatar"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <div className="text-black dark:text-gray-100 text-center space-y-1">
                      <h2 className="text-xl font-bold">{user?.displayName}</h2>
                      <p className="font-semibold">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="py-2 px-2 font-semibold bg-emerald-500 rounded-md text-white mt-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-50 dark:bg-gray-700 px-3 text-sm font-medium tracking-wide text-emerald-500 dark:text-gray-100 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700"
                  >
                    <span>SignUp</span>
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-8 gap-2 px-3 text-sm font-medium tracking-wide text-white dark:text-gray-100 transition duration-300 rounded whitespace-nowrap bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-700"
                  >
                    <span>SignIn</span>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
