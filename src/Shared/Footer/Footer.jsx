import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-600 dark:bg-gray-900 text-emerald-100 dark:text-gray-300 text-sm">
      {/* Top section */}
      <div className="container mx-auto px-6 py-12 border-b border-emerald-500 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-around gap-8">
          {/* Brand / Logo */}
          <div>
            <h2 className="text-xl font-semibold text-white dark:text-emerald-400 mb-2">
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
            </h2>
            <p className="max-w-xs text-gray-100 dark:text-gray-400">
              Empowering teams with seamless employee management and modern HR
              solutions.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <nav aria-labelledby="footer-product">
              <h3
                id="footer-product"
                className="mb-4 text-base font-medium text-white dark:text-emerald-400"
              >
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-emerald-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-emerald-300 transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-emerald-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-around gap-4">
        <p className="text-xs text-gray-100 dark:text-gray-400">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/n.bi.ta.554015"
            className="hover:text-white dark:hover:text-emerald-300 transition-colors text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/IstiakAhme13930"
            className="hover:text-white dark:hover:text-emerald-300 transition-colors text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/emonislam59"
            className="hover:text-white dark:hover:text-emerald-300 transition-colors text-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
