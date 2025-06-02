
import Navigation from "../components/Navigation";
import Eboard from "../components/Eboard";
import Footer from "../components/Footer";

const EboardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <Eboard />
      </div>
      <Footer />
    </div>
  );
};

export default EboardPage;
