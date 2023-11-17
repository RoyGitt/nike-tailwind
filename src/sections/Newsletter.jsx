import React from "react";

const Newsletter = () => {
  return (
    <section className="flex justify-between items-center">
      <h1 className="heading--primary flex-[0.6]">
        Sign Up for <span className="text-primary">Updates</span> & Newsletter
      </h1>
      <form className="flex justify-between flex-[0.45] border-2 border-slate-400  pl-6 px-3 py-2 rounded-[40px]">
        <input type="text" placeholder="subscribe@nike.com" />
        <button className="button--solid">Sign Up</button>
      </form>
    </section>
  );
};

export default Newsletter;
