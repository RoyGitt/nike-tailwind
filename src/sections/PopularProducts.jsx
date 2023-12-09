import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {


  return (
    <section
      className="max-w-[1440px] mx-auto flex flex-col justify-center gap-12 padding laptoplg:h-screen"
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
      <div className="flex tablet:grid tablet:grid-cols-2 laptoplg:flex laptoplg:flex-row justify-between dark:text-slate-50 flex-col gap-10 ">
        {products.map((product) => (
          <PopularProductsCard key={product.imgURL} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
