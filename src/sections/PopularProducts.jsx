import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center gap-12 padding "
      id="products"
    >
      <h2 className="heading--primary dark:text-slate-50">
        Our <span className="text-primary font-montserrat">popular</span>{" "}
        Products
      </h2>
      <p className="flex flex-col para dark:text-slate-300">
        <span>
          Experience top-notch quality and style with our sought-after
          selections.
        </span>
        <span>Discover a world of comfort, design, and value</span>
      </p>
      <div className="flex justify-between dark:text-slate-50">
        {products.map((product) => (
          <PopularProductsCard key={product.imgURL} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
