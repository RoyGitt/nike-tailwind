import React from "react";
import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";

const Testimonials = () => {
  return (
    <section className="section flex-col justify-center items-center">
      <h1 className="heading--primary mb-6">
        What Our <span className="text-primary">Customers </span>Say?
      </h1>
      <p className="para w-[40%] mx-auto text-center mb-24">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex">
        {reviews.map((review) => (
          <CustomerCard key={review.feedback} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
