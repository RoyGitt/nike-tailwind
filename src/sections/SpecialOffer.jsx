import React, { useRef } from "react";
import { offer } from "../assets/images";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useInView, motion } from "framer-motion";

const SpecialOffer = () => {
  const sectionVariants = {
    initial: { x: 300, y: 300, opacity: 0 },
    fadeInTopRight: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      animate={isInView && "fadeInTopRight"}
      ref={ref}
      className="section flex-col-reverse laptop:flex-row laptop:h-screen"
    >
      <div className="flex-[0.5]">
        <img src={offer} className="" />
      </div>
      <div className="flex-[0.45] flex flex-col gap-8">
        <h1 className="heading--primary dark:text-slate-50">
          <span className="text-primary">Special</span> Offer
        </h1>
        <p className="para dark:text-slate-300">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="para dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 mb-10">
          <motion.button
            className="button--solid "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now <BsFillArrowRightCircleFill />
          </motion.button>
          <motion.button
            className="button--transparent "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffer;
