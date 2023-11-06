import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { SiAzuredataexplorer } from "react-icons/si";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center padding font-montserrat ">
        <img src={headerLogo} alt="logo" />
        <ul className="flex gap-9 text-xl text-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}> {link.label}</a>
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-3 border-2 font-semibold border-primary text-primary  rounded-3xl px-7 py-2 text-xl 	">
          Explore Now
          <SiAzuredataexplorer />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
