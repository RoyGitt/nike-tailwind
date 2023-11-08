import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-[0.3] shadow-lg p-10">
      <img
        src={imgURL}
        alt={label}
        width={45}
        className=" bg-primary p-2 rounded-full mb-6"
      />
      <h4 className="text-2xl font-bold mb-3 tracking-wide">{label}</h4>
      <p className="para ">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
