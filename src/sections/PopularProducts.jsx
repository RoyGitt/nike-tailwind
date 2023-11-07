import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section className="h-screen flex flex-col justify-center gap-16 padding">
      <h2 className="text-5xl capitalize font-bold">
        Our <span className="text-primary font-montserrat">popular</span>{" "}
        Products
      </h2>
      <p className="flex flex-col texl-xl text-slate-600  tracking-wider leading-normal font-montserrat">
        <span>
          Experience top-notch quality and style with our sought-after
          selections.
        </span>
        <span>Discover a world of comfort, design, and value</span>
      </p>
      <div className="flex justify-between">
        {products.map((product) => (
          <PopularProductsCard key={product.imgURL} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
