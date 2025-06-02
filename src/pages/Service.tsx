
import Navigation from "../components/Navigation";
import Service from "../components/Service";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
