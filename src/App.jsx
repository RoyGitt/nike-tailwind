import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";

function App() {
  return (
    <main className="max-container">
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Features />
    </main>
  );
}

export default App;
