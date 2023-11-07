import Navbar from "./components/Navbar";
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
    </main>
  );
}

export default App;
