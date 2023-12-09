import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import CountUp from "react-countup";

const Hero = () => {
  const [shoeImg, setShoeImg] = useState(bigShoe1);

  const headingVariants = {
    hidden: { opacity: 0, x: -1000 },
    slideIn: {
      opacity: 1,
      x: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    initial: {
      x: 0,
    },
    slide: {
      x: "-100%",
      transition: {
        duration: 25,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      },
    },
  };

  const statsVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    slideDown: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section
      className="max-w-[1440px] mx-auto flex justify-between items-center pt-32 pb-10  flex-col laptop:flex-row px-4 text-center  laptop:h-screen laptop:px-8 laptop:py-16 laptoplg:pt-40 relative z-1"
      id="home"
    >
      <div className="flex flex-col justify-between laptop:text-left laptop:flex-1 laptoplg:gap-6">
        <h4 className="text-xl laptoplg:text-2xl text-primary dark:text-slate-50 mb-4">
          Our summer collections
        </h4>
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="slideIn"
          className="flex flex-col font-bold dark:text-slate-50 text-3xl mobilelg:text-5xl tablet:text-6xl laptoplg:text-7xl "
        >
          <motion.span variants={headingVariants} className="leading-normal">
            The New Arrival
          </motion.span>
          <motion.span variants={headingVariants} className="mb-6">
            <span className="text-primary ">Nike</span> Shoes
          </motion.span>
        </motion.h1>
        <h5 className="flex flex-col text-slate-600  dark:text-slate-300 text-sm laptoplg:text-xl mb-8">
          <span> Discover stylish Nike arrivals, quality</span>
          <span> comfort, and innovation for your active life.</span>
        </h5>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button--solid self-center laptop:self-start  mb-4 relative z-10"
          onClick="#products"
        >
          Shop Now
          <BsFillArrowRightCircleFill />
        </motion.button>
        <motion.div
          className="flex justify-center laptop:justify-start dark:text-slate-50 text-sm laptoplg:text-xl  gap-10 mt-4 mb-8 relative z-10"
          variants={statsVariants}
          initial="initial"
          animate="slideDown"
        >
          <motion.h3
            variants={statsVariants}
            className="flex flex-col font-palanquin"
          >
            <span className=" font-semibold text-2xl laptoplg:text-5xl">
              <CountUp start={100} end={1000} duration={5} />
            </span>
            <span className="font-montserrat mt-2">Brands</span>
          </motion.h3>
          <motion.h3
            variants={statsVariants}
            className="flex flex-col font-palanquin"
          >
            <span className="font-semibold text-2xl laptoplg:text-5xl">
              <CountUp start={100} end={500} duration={2} />+
            </span>
            <span className="font-montserrat  mt-2">Shops</span>
          </motion.h3>
          <motion.h3
            variants={statsVariants}
            className="flex flex-col font-palanquin"
          >
            <span className="font-semibold text-2xl laptoplg:text-5xl">
              <CountUp start={100} end={250} duration={2} />
              k+
            </span>
            <span className="font-montserrat  mt-2">Customers</span>
          </motion.h3>
        </motion.div>
      </div>
      <div className=" laptop:flex-1">
        <motion.img
          className="mx-auto relative z-10"
          key={shoeImg}
          src={shoeImg}
          alt="summer collection shoe"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        />
        <ul className="flex gap-8 mt-20 relative z-10">
          <motion.li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe1 && "shadow-lg shadow-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe1);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={bigShoe1} width={250} />
          </motion.li>
          <motion.li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe2 && "shadow-lg shadow-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe2);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={bigShoe2} width={250} />
          </motion.li>
          <motion.li
            className={`bg-card bg-center bg-cover p-3 rounded-md ${
              shoeImg == bigShoe3 && "shadow-lg shadow-primary"
            }`}
            onClick={() => {
              setShoeImg(bigShoe3);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={bigShoe3} width={250} />
          </motion.li>
        </ul>
      </div>
      <motion.h1
        className="absolute text-[28rem] text-slate-600 opacity-25 z[-1] whitespace-nowrap bottom-[-50px] "
        variants={textVariants}
        initial="initial"
        animate="slide"
      >
        JUST DO IT <span className="text-primary">URBANITY</span>{" "}
        <span>FINESSE</span> <span className="text-primary">DASH</span>
      </motion.h1>
    </section>
  );
};

export default Hero;
