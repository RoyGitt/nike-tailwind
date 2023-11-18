import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Features = () => {
  return (
    <section className="padding">
      <ul className="flex justify-between dark:text-slate-50">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </ul>
    </section>
  );
};

export default Features;
