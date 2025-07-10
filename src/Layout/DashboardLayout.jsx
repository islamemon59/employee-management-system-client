import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../Hooks/useAuth";
import DashboardNavLinks from "../Components/DashboardNavlinks/DashboardNavlinks";

const DashboardLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/*  <!-- Component: Side navigation menu with user profile and user contacts --> */}

      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-5"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-5"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
          <div className="shrink-0">
            <a
              href="#"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                title={user?.displayName}
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-teal-500 p-1 text-sm text-white">
                <span className="sr-only"> online </span>
              </span>
            </a>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-base text-slate-700">
              {user?.displayName}
            </h4>
            <p className="w-full truncate text-sm text-slate-500">
              {user?.email}
            </p>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <DashboardNavLinks />
          </div>
        </nav>

        <footer className="border-t border-slate-200 p-3">
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 rounded p-3 text-black transition-colors hover:text-emerald-600 "
          >
            <BiLogOut size={24} />
            <p className="flex w-full text-black hover:text-emerald-600 flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-lg font-medium">
              Logout
            </p>
          </button>
        </footer>
      </aside>

      <div className="lg:mr-47 p-4 max-w-7xl mx-auto">
        <Outlet />
      </div>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>

      {/*  <!-- End Side navigation menu with user profile and user contacts --> */}
    </>
  );
};

export default DashboardLayout;
