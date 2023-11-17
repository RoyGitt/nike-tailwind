import React from "react";
import { offer } from "../assets/images";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SpecialOffer = () => {
  return (
    <section className="h-screen padding flex justify-between items-center">
      <div className="flex-[0.5]">
        <img src={offer} className="" />
      </div>
      <div className="flex-[0.45] flex flex-col gap-8">
        <h1 className="heading--primary">
          <span className="text-primary">Special</span> Offer
        </h1>
        <p className="para">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="para">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4">
          <button className="button--solid ">
            Shop Now <BsFillArrowRightCircleFill />
          </button>
          <button className="button--transparent ">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
