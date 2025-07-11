import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-emerald-100 text-sm">
      {/* Top section */}
      <div className="container mx-auto px-6 py-12 border-b border-emerald-500">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand / Logo */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              YourCompany
            </h2>
            <p className="max-w-xs">
              Empowering teams with seamless employee management and modern HR
              solutions.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <nav aria-labelledby="footer-product">
              <h3
                id="footer-product"
                className="mb-4 text-base font-medium text-white"
              >
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition-colors text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-colors text-lg">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
