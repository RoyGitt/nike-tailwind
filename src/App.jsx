import { useContext, useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Testimonials from "./sections/Testimonials";
import Parallax from "./sections/Parallax";

function App() {

  return (
    <body className="dark:bg-slate-950">
      <Navbar />
      
      <main className="max-container">
        <Hero />
        <PopularProducts />
        <Parallax />
        <SuperQuality />
        <Features />
        <SpecialOffer />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </body>
  );
}

export default App;
