import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

  const [navClosed, setNavClosed] = useState(true);

  const toggleNav = () => {
    setNavClosed((prev) => !prev);
    console.log("clicked");
    console.log(navClosed);
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

  const listItemVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 5,
  });

  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 transition-all ${
        translucentNav &&
        "bg-slate-300 bg-opacity-80 py-1 dark:bg-slate-800 dark:bg-opacity-80"
      }`}
    >
      <nav
        ref={ref}
        className={`flex relative justify-between items-center py-5 px-4 font-montserrat  max-w-[1440px]  mx-auto transition-all duration-300 `}
      >
        {translucentNav && (
          <motion.div
            style={{ scaleX }}
            className="absolute bottom-0 left-0 w-full bg-primary z-40 h-1 shadow-2xl shadow-primary"
          ></motion.div>
        )}

        <motion.img
          src={headerLogo}
          alt="logo"
          className="mobilelg:w-[25%] w-[30%] laptop:w-[15%] laptoplg:w-[10%]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        />
        <div className="laptop:hidden">
          <HiMenuAlt3 className="text-3xl text-primary" onClick={toggleNav} />
        </div>
        <div
          className={`fixed laptop:hidden top-0 right-0 w-[70%] ${
            navClosed ? "translate-x-[100%]" : "translate-x-[0%]"
          } h-screen transition-all bg-slate-200 shadow-lg px-6 py-16 flex flex-col justify-center items-center dark:bg-slate-800 z-50`}
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
              <motion.button
                className=" rounded-full w-[3rem] h-[3rem] flex justify-center items-center bg-primary"
                onClick={toggleDarkMode}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <MdOutlineLightMode className="text-white text-3xl" />
                ) : (
                  <MdOutlineNightlight className="text-white text-3xl" />
                )}
              </motion.button>
              <button
                className="rounded-full w-[3rem] h-[3rem] flex justify-center items-center bg-primary"
                onClick={toggleNav}
              >
                <IoMdCloseCircle className="w-[3rem] h-[3rem] text-white text-3xl" />
              </button>
            </div>
          </div>
        </div>
        <motion.ul
          variants={listItemVariants}
          initial="hidden"
          animate="shown"
          className={` gap-9 text-xl text-slate-600 font-medium dark:text-slate-50 hidden laptop:flex laptop:text-sm laptoplg:text-lg ${
            translucentNav && "font-medium"
          }`}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={listItemVariants}
              whileHover={{
                textShadow: "5px 5px 7px #ff6454",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={link.href}> {link.label}</a>
            </motion.li>
          ))}
        </motion.ul>
        <div className=" gap-20 laptop:flex hidden">
          <motion.button
            className=" rounded-full  flex justify-center items-center dark:border-slate-50 "
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <motion.span>
                <MdOutlineLightMode className="text-slate-800 w-[2rem] h-[2rem] dark:text-slate-50 text-3xl" />
              </motion.span>
            ) : (
              <>
                <motion.span
                  initial={{ scale: 1.5, rotate: "0deg" }}
                  animate={{ scale: 1, rotate: "360deg" }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <MdOutlineNightlight className="text-slate-800 w-[2rem] h-[2rem] dark:text-slate-50 text-3xl" />
                </motion.span>
              </>
            )}
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
