import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className="flex justify-between items-center flex-col padding"
      id="contact-us"
    >
      <h1 className="heading--primary dark:text-slate-50 text-center text-2xl tablet:text-4xl mb-6 laptoplg:mb-10">
        Sign Up for <span className="text-primary">Updates</span> & Newsletter
      </h1>
      <form className="flex justify-between w-full border-2 border-slate-400  pl-6 px-3  rounded-[40px] py-1 tablet:w-[70%] laptoplg:w-[60%] tablet:mx-auto">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="bg-transparent "
        />
        <button className="button--solid">Sign Up</button>
      </form>
    </motion.section>
  );
};

export default Newsletter;
