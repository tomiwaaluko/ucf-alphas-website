
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MeetTheJewels = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Meet the Jewels
            </h1>
            <div className="text-gray-300 space-y-8">
              <p className="text-lg">
                The Seven Jewels are the founding fathers of Alpha Phi Alpha Fraternity, Inc. 
                These visionary men established our organization on December 4, 1906, at Cornell University.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Henry Arthur Callis",
                  "Charles Henry Chapman", 
                  "Eugene Kinckle Jones",
                  "George Biddle Kelley",
                  "Nathaniel Allison Murray",
                  "Robert Harold Ogle",
                  "Vertner Woodson Tandy"
                ].map((jewel, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                    <h3 className="text-yellow-400 font-semibold text-xl mb-2">{jewel}</h3>
                    <p className="text-sm">Founding Father & Jewel of Alpha Phi Alpha Fraternity, Inc.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheJewels;
