
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MissBlackAndGold = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Miss Black and Gold
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                The Miss Black and Gold pageant is one of our signature events that celebrates 
                the elegance, intelligence, and leadership of young African American women.
              </p>
              <p>
                This annual competition showcases contestants who embody the values of 
                scholarship, service, and sisterhood that align with our fraternity's principles.
              </p>
              <p>
                Through this event, we provide a platform for young women to demonstrate 
                their talents, express their views on important social issues, and compete 
                for scholarship opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MissBlackAndGold;
