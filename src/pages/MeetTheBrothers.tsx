
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MeetTheBrothers = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Meet the Brothers
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                The brothers of Theta Sigma Chapter represent excellence in scholarship, 
                leadership, and service. Our diverse membership includes students and 
                professionals who are making a positive impact in their communities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20 text-center">
                    <div className="w-24 h-24 bg-yellow-400/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-yellow-400 font-semibold text-lg mb-2">Brother Name</h3>
                    <p className="text-sm text-gray-400">Line Name</p>
                    <p className="text-sm text-gray-400">Crossing Semester</p>
                  </div>
                ))}
              </div>
              
              <p className="text-center">
                Our brotherhood extends beyond the university years, creating lifelong bonds 
                and professional networks that span generations.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheBrothers;
