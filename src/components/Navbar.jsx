import React, { useContext, useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { SiAzuredataexplorer } from "react-icons/si";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

import { ThemeContext } from "../store/themeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [translucentNav, setTranslucentNav] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 144) {
      setTranslucentNav(true);
    } else {
      setTranslucentNav(false);
    }
  }, [scrollPosition]);

  console.log(scrollPosition);
  console.log(translucentNav);

  return (
    <header>
      <nav
        className={`flex justify-between items-center px-8 py-4 font-montserrat fixed top-0 left-0 right-0 max-w-[1440px] mx-auto transition-all duration-300  ${
          translucentNav &&
          "bg-slate-300 bg-opacity-80 py-2 dark:bg-slate-800 dark:bg-opacity-80"
        }`}
      >
        <img src={headerLogo} alt="logo" />
        <ul
          className={`flex gap-9 text-xl text-slate-600 dark:text-slate-50 ${
            translucentNav && "font-semibold"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-20">
          <button
            className={`flex gap-4 items-center text-slate-950 text-xl dark:text-slate-50  ${
              translucentNav && "font-semibold"
            }`}
          >
            Explore Now
            <SiAzuredataexplorer />
          </button>
          <button
            className=" rounded-full w-[3rem] h-[3rem] flex justify-center items-center dark:border-slate-50"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <MdLightbulbOutline className="text-slate-800 dark:text-slate-50 text-3xl" />
            ) : (
              <MdOutlineNightlight className="text-slate-800 dark:text-slate-50 text-3xl" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
