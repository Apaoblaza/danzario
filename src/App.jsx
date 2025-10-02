import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Unique from "./components/Unique";
import Product from "./components/Product";
import Creator from "./components/Creator";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Buy from "./components/Buy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <div className="text-ink antialiased">
      <Navbar />
      <Hero />
      <Why />
      <Unique />
      <Product />
      <Creator />
      <Experience />
      <Testimonials />
      <Buy />
      <FAQ />
      <Footer />
      <MobileCTA />
    </div>
  );
}
