import { useEffect } from "react";
import './About.css';

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".About_title, .About_p, .footer_about");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
}

export default useScrollAnimation;
