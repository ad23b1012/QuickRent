import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

  // Attach the manual scrollToTop function globally to the window object
  useEffect(() => {
    window.scrollToTop = scrollToTop;
  }, []);

  return null; // The component does not render anything visually
};

export default ScrollToTop;
