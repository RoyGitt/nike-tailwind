import React from "react";
import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";

const Testimonials = () => {
  return (
    <section className="section flex-col justify-center items-center laptop:h-screen">
      <h1 className="heading--primary mb-6 dark:text-slate-50">
        What Our <span className="text-primary">Customers </span>Say?
      </h1>
      <p className="para mx-auto text-center tablet:w-[40%] tablet:mx-auto dark:text-slate-300 w-fulltext-left mb-8">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-col gap-20 tablet:flex-row">
        {reviews.map((review) => (
          <CustomerCard key={review.feedback} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
