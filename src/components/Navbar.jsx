import React, { useContext, useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { SiAzuredataexplorer } from "react-icons/si";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

import { ThemeContext } from "../store/themeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [translucentNav, setTranslucentNav] = useState(false);

  const [navClosed, setNavClosed] = useState(false);

  const toggleNav = () => {
    setNavClosed((prev) => !prev);
  };

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
        className={`flex justify-between items-center  py-4 font-montserrat fixed top-0 left-0 right-0 max-w-[1440px] mx-auto transition-all duration-300 px-8 ${
          translucentNav &&
          "bg-slate-300 bg-opacity-80 py-2 dark:bg-slate-800 dark:bg-opacity-80"
        }`}
      >
        <img
          src={headerLogo}
          alt="logo"
          className="mobilelg:w-[20%] w-[40%] laptop:w-[15%] laptoplg:w-[10%]"
        />
        <div className="laptop:hidden">
          <HiMenuAlt3 className="text-3xl text-primary" onClick={toggleNav} />
        </div>

        <div
          className={`fixed laptop:hidden top-0 right-0 w-[70%] ${
            navClosed ? "translate-x-[100%]" : "translate-x-[0%]"
          } h-screen transition-all bg-slate-200 shadow-lg px-6 py-16 flex flex-col justify-center items-center dark:bg-slate-800`}
        >
          <ul className=" text-right flex flex-col gap-8 text-xl font-semibold align-center justify-start text-slate-600 ">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-slate-600 dark:text-slate-200 py-3 text-center"
              >
                <a href={link.href}> {link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            {" "}
            <button
              className={`button--transparent my-8  ${
                translucentNav && "font-semibold"
              }`}
            >
              Explore Now
              <SiAzuredataexplorer />
            </button>
            <div className="flex justify-around">
              <button
                className=" rounded-full w-[3rem] h-[3rem] flex justify-center items-center bg-primary"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <MdOutlineLightMode className="text-white text-3xl" />
                ) : (
                  <MdOutlineNightlight className="text-white text-3xl" />
                )}
              </button>
              <button
                className="rounded-full w-[3rem] h-[3rem] flex justify-center items-center bg-primary"
                onClick={toggleNav}
              >
                <IoMdCloseCircle className="w-[3rem] h-[3rem] text-white text-3xl" />
              </button>
            </div>
          </div>
        </div>

        <ul
          className={` gap-9 text-xl text-slate-600 dark:text-slate-50 hidden laptop:flex laptop:text-sm laptoplg:text-lg ${
            translucentNav && "font-semibold"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <div className=" gap-20 laptop:flex hidden">
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
              <MdOutlineLightMode className="text-slate-800 dark:text-slate-50 text-3xl" />
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
