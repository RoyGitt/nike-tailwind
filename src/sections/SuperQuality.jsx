import React from "react";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      className="section flex-col laptop:flex-row laptop:h-screen"
      id="about-us"
    >
      <div className="flex flex-col gap-8 laptop:flex-1">
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
        <button className="button--solid mb-8">View details</button>
      </div>
      <div className="laptop:flex-1">
        <img
          src={shoe8}
          alt="super quality shoes"
          className="laptoplg:w-full"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
