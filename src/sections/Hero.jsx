import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";

const Hero = () => {
  const [shoeImg, setShoeImg] = useState(bigShoe1);

  return (
    <section className="flex justify-between items-center mt-14 padding">
      <div className="flex flex-col justify-between">
        <h4 className="text-2xl text-primary mb-14">Our summer collections</h4>
        <h1 className="flex flex-col text-8xl font-bold">
          <span className="mb-6">The New Arrival</span>
          <span className="mb-6">
            <span className="text-primary ">Nike</span> Shoes
          </span>
        </h1>
        <h5 className="flex flex-col text-xl text-slate-600  mb-14">
          <span> Discover stylish Nike arrivals, quality</span>
          <span> comfort, and innovation for your active life.</span>
        </h5>
        <button className="flex items-center gap-4 bg-primary text-[#fff] self-start text-xl rounded-3xl px-7 py-3 ">
          Shop Now
          <BsFillArrowRightCircleFill />
        </button>
        <div className="flex gap-20 mt-16">
          <h3 className="flex flex-col font-palanquin">
            <span className="text-5xl font-bold">1k+</span>
            <span className="font-montserrat font-2xl mt-2">Brands</span>
          </h3>
          <h3 className="flex flex-col font-palanquin">
            <span className="text-5xl font-bold">500+</span>
            <span className="font-montserrat font-2xl mt-2">Shops</span>
          </h3>
          <h3 className="flex flex-col font-palanquin">
            <span className="text-5xl font-bold">250k+</span>
            <span className="font-montserrat font-2xl mt-2">Customers</span>
          </h3>
        </div>
      </div>
      <div className="basis-[40%]">
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
