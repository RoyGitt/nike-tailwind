import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";

const Hero = () => {
  const [shoeImg, setShoeImg] = useState(bigShoe1);

  return (
    <section
      className="flex justify-between items-center pt-32 pb-10  flex-col laptop:flex-row px-4 text-center  laptop:h-screen laptop:px-8 laptop:py-16 laptoplg:pt-40"
      id="home"
    >
      <div className="flex flex-col justify-between laptop:text-left laptop:flex-1 laptoplg:gap-6">
        <h4 className="text-xl laptoplg:text-2xl text-primary dark:text-slate-50 mb-4">
          Our summer collections
        </h4>
        <h1 className="flex flex-col font-bold dark:text-slate-50 text-3xl mobilelg:text-5xl tablet:text-6xl laptoplg:text-7xl">
          <span className="leading-normal">The New Arrival</span>
          <span className="mb-6">
            <span className="text-primary ">Nike</span> Shoes
          </span>
        </h1>
        <h5 className="flex flex-col text-slate-600  dark:text-slate-300 text-sm laptoplg:text-xl mb-8">
          <span> Discover stylish Nike arrivals, quality</span>
          <span> comfort, and innovation for your active life.</span>
        </h5>
        <button className="button--solid self-center laptop:self-start  mb-4">
          Shop Now
          <BsFillArrowRightCircleFill />
        </button>
        <div className="flex justify-center laptop:justify-start dark:text-slate-50 text-sm laptoplg:text-xl  gap-10 mt-4 mb-8">
          <h3 className="flex flex-col font-palanquin">
            <span className=" font-semibold text-2xl laptoplg:text-5xl">
              1k+
            </span>
            <span className="font-montserrat mt-2">Brands</span>
          </h3>
          <h3 className="flex flex-col font-palanquin">
            <span className="font-semibold text-2xl laptoplg:text-5xl">
              500+
            </span>
            <span className="font-montserrat  mt-2">Shops</span>
          </h3>
          <h3 className="flex flex-col font-palanquin">
            <span className="font-semibold text-2xl laptoplg:text-5xl">
              250k+
            </span>
            <span className="font-montserrat  mt-2">Customers</span>
          </h3>
        </div>
      </div>
      <div className=" laptop:flex-1">
        <img src={shoeImg} alt="summer collection shoe" />
        <ul className="flex gap-8 mt-20 ">
          <li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe1 && "border-2 border-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe1);
            }}
          >
            <img src={bigShoe1} width={250} />
          </li>
          <li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe2 && "border-2 border-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe2);
            }}
          >
            <img src={bigShoe2} width={250} />
          </li>
          <li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe3 && "border-2 border-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe3);
            }}
          >
            <img src={bigShoe3} width={250} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
