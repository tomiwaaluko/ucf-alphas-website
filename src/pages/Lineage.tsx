import Navigation from "../components/Navigation";
import Lineage from "../components/Lineage";
import Footer from "../components/Footer";

const LineagePage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-lora">
      <Navigation />
      <div className="pt-16">
        <Lineage />
      </div>
      <Footer />
    </div>
  );
};

export default LineagePage;
