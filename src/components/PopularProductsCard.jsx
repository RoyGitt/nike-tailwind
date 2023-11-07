import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={imgURL} alt={name} className="mb-5" />
      <div className="flex items-cente gap-4">
        <img src={star} />
        <p className="text-xl font-montserrat">(4.5)</p>
      </div>
      <h3 className="text-2xl font-montserrat font-semibold">{name}</h3>
      <h4 className="text-2xl font-palanquin font-semibold text-primary">
        {price}
      </h4>
    </div>
  );
};

export default PopularProductsCard;
