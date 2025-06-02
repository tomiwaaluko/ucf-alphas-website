
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Greeting from "../components/Greeting";
import About from "../components/About";
import Lineage from "../components/Lineage";
import Eboard from "../components/Eboard";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Greeting />
      <About />
      <Lineage />
      <Eboard />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
