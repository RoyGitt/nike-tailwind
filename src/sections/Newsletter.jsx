import React from "react";

const Newsletter = () => {
  return (
    <section
      className="flex justify-between items-center mb-28"
      id="contact-us"
    >
      <h1 className="heading--primary flex-[0.6] dark:text-slate-50">
        Sign Up for <span className="text-primary">Updates</span> & Newsletter
      </h1>
      <form className="flex justify-between flex-[0.45] border-2 border-slate-400  pl-6 px-3 py-2 rounded-[40px]">
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
