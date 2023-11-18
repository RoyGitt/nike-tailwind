import React from "react";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="section" id="about-us">
      <div className="flex-[0.8] flex flex-col gap-8">
        <h2 className="heading--primary dark:text-slate-50">
          We Provide You <span className="text-primary">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="para dark:text-slate-300">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="para dark:text-slate-300">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="button--solid">View details</button>
      </div>
      <div className="">
        <img src={shoe8} alt="super quality shoes" className="" />
      </div>
    </section>
  );
};

export default SuperQuality;
