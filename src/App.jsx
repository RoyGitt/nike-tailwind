import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";

function App() {
  return (
    <main className="max-container">
      <Navbar />
      <Hero />
      <PopularProducts />
    </main>
  );
}

export default App;
