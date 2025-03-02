import React, { useState, useEffect } from "react";
import profilePic from "../assets/Azhar-logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(true);
  let timeoutRef = null;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById("hero");

      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

        // Fix navbar only inside the Hero section
        if (currentScrollY < heroBottom) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }

      // Hide navbar on scroll down (after 2s), show on scroll up
      if (currentScrollY > lastScrollY) {
        if (!timeoutRef) {
          timeoutRef = setTimeout(() => {
            setIsVisible(false);
          }, 2000);
        }
      } else {
        clearTimeout(timeoutRef);
        timeoutRef = null;
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-900 text-white p-4 flex justify-between items-center w-full shadow-md z-50 transition-transform duration-500 ${
        isFixed ? "fixed top-0 left-0" : "absolute top-full"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        />
        <a href="#" className="text-2xl font-bold hover:text-blue-400">
          Azharudeen's Portfolio
        </a>
      </div>
      <ul className="flex space-x-6">
        <li><a href="#skill" className="hover:text-gray-400">Skill</a></li>
        <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
