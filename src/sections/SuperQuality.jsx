import React, { useRef } from "react";
import { shoe8 } from "../assets/images";
import { useInView, motion } from "framer-motion";

const SuperQuality = () => {
  const sectionVariants = {
    initial: { x: -300, y: 300, opacity: 0 },
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
      className="section flex-col laptop:flex-row laptop:h-screen"
      id="about-us"
    >
      <motion.div
        variants={sectionVariants}
        className="flex flex-col gap-8 laptop:flex-1"
      >
        <h2 className="heading--primary dark:text-slate-50">
          We Provide You <span className="text-primary">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="para dark:text-slate-300">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="para dark:text-slate-300">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <motion.button
          className="button--solid mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View details
        </motion.button>
      </motion.div>
      <motion.div variants={sectionVariants} className="laptop:flex-1">
        <img
          src={shoe8}
          alt="super quality shoes"
          className="laptoplg:w-full"
        />
      </motion.div>
    </motion.section>
  );
};

export default SuperQuality;
