import React from "react";

const Newsletter = () => {
  return (
    <section
      className="flex justify-between items-center mb-28  flex-col mt-28 "
      id="contact-us"
    >
      <h1 className="heading--primary dark:text-slate-50 text-center text-2xl tablet:text-4xl mb-6 laptoplg:mb-10">
        Sign Up for <span className="text-primary">Updates</span> & Newsletter
      </h1>
      <form className="flex justify-between border-2 border-slate-400  pl-6 px-3  rounded-[40px] py-1 tablet:w-[70%] laptoplg:w-[60%] tablet:mx-auto">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="bg-transparent"
        />
        <button className="button--solid">Sign Up</button>
      </form>
    </section>
  );
};

export default Newsletter;
