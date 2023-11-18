import { useContext } from "react";
import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <body className="dark:bg-slate-950">
      <main className="max-container">
        <Navbar />
        <Hero />
        <PopularProducts />
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
