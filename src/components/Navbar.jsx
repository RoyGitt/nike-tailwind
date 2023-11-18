import React, { useContext } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { SiAzuredataexplorer } from "react-icons/si";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

import { ThemeContext } from "../store/themeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header>
      <nav className="flex justify-between items-center padding font-montserrat ">
        <img src={headerLogo} alt="logo" />
        <ul className="flex gap-9 text-xl text-slate-600 dark:text-slate-50">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-20">
          <button className="flex gap-4 items-center text-slate-950 text-xl dark:text-slate-50">
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
