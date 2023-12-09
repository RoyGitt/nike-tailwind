import React from "react";
import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductsCard = ({ imgURL, name, price }) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    fadeUp: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={cardVariants}
      initial="initial"
      whileInView="fadeUp"
    >
      <img src={imgURL} alt={name} className="mb-5" />
      <div className="flex items-cente gap-4">
        <img src={star} />
        <p className="text-xl font-montserrat">(4.5)</p>
      </div>
      <h3 className="text-2xl font-montserrat font-semibold">{name}</h3>
      <h4 className="text-2xl font-palanquin font-semibold text-primary">
        {price}
      </h4>
    </motion.div>
  );
};

export default PopularProductsCard;
