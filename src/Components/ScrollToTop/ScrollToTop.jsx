import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 
                    text-white shadow-lg hover:scale-110 transition-all duration-500
                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
      >
        <FaArrowUp className="text-xl animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTop;
