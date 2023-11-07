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
        <button className="button--transparent">
          Explore Now
          <SiAzuredataexplorer />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
