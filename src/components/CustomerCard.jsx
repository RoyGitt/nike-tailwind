import React from "react";
import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src={imgURL} className="w-40 h-40 rounded-full" />
      <p className="para text-center w-[70%] mx-auto">{feedback}</p>
      <div className="flex para gap-3">
        <img src={star} /> ({rating})
      </div>
      <h4 className="text-3xl font-semibold">{customerName}</h4>
    </div>
  );
};

export default CustomerCard;
