import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className=" bg-black text-white px-4 laptop:px-8">
      <div className="flex  py-20 max-w-[1440px] mx-auto mx-auto justify-between flex-col gap-10 laptop:flex-row">
        <div className="flex-[0.4] flex flex-col gap-8">
          <img src={footerLogo} className="w-2/6 laptop:w-4/6 laptoplg:w-3/6" />
          <p className="para font-lg text-slate-300">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="flex gap-4">
            {socialMedia.map((platform) => (
              <li key={platform.alt}>
                <a href="/">
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className=" w-10 h-10 bg-white p-2 rounded-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.title}>
              <h4 className="text-2xl font-semibold mb-6">
                {footerLink.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLink.links.map((link) => (
                  <li className="hover:text-slate-400 text-slate-300">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="pb-10 text-slate-300 max-w-[1440px] mx-auto">
        <ul className="max-container mx-auto flex justify-between">
          <li className="hover:text-slate-400">
            <a href="/"> Copyright. All rights reserved.</a>
          </li>
          <li className="hover:text-slate-400">
            <a href="/"> Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
