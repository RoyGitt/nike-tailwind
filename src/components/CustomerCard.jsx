import React from "react";
import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src={imgURL} className="w-40 h-40 rounded-full" />
      <p className="para text-center w-[70%] mx-auto dark:text-slate-300">
        {feedback}
      </p>
      <div className="flex para gap-3 dark:text-slate-50">
        <img src={star} /> ({rating})
      </div>
      <h4 className="text-3xl font-semibold dark:text-slate-50">
        {customerName}
      </h4>
    </div>
  );
};

export default CustomerCard;
