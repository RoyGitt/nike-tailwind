import React, { useContext, useRef } from "react";
import { bigShoe1, mountains, planets, stars, sun } from "../assets/images";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ThemeContext } from "../store/themeContext";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yShoe = useTransform(scrollYProgress, [0, 1], ["0", "250%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  const { isDarkMode } = useContext(ThemeContext);

  console.log(isDarkMode);
  return (
    <section
      ref={ref}
      className={`h-screen relative laptop:flex justify-center snap-y items-center overflow-hidden hidden  ${
        !isDarkMode && "bg-slate-400"
      }`}
    >
      <img
        src={mountains}
        className="abosolute w-full h-full z-20 bg-contain laptop:bg-cover"
      />
      <motion.img
        src={bigShoe1}
        className="absolute z-10"
        alt="air jordan 87678"
        style={{ y: yShoe }}
      />
      <motion.img
        src={stars}
        className="absolute  h-full w-full bg-contain laptop:bg-cover"
        style={{ x: xStars }}
      />
      <motion.img
        src={isDarkMode ? planets : sun}
        className="absolute"
        style={{ y: yPlanets }}
      />
    </section>
  );
};

export default Parallax;
