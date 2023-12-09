import React from "react";
import { motion } from "framer-motion";
import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    fadeUp: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="fadeUp"
      className="flex  items-center justify-center gap-6 flex-col-reverse tablet:flex-col"
    >
      <img src={imgURL} className="w-40 h-40 rounded-full" />
      <p className="para text-center  mx-auto dark:text-slate-300 w-full tablet:w-[70%] tablet:mx-auto">
        {feedback}
      </p>
      <div className="flex para gap-3 dark:text-slate-50">
        <img src={star} /> ({rating})
      </div>
      <h4 className="text-3xl font-semibold dark:text-slate-50">
        {customerName}
      </h4>
    </motion.div>
  );
};

export default CustomerCard;
