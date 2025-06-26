
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Greeting />
      <Footer />
    </div>
  );
};

export default Index;
