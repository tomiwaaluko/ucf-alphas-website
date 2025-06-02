
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NationalPrograms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              National Programs
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                Alpha Phi Alpha Fraternity, Inc. sponsors national programs that address 
                the needs of our communities and align with our core values.
              </p>
              
              <div className="space-y-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-3">A Voteless People is a Hopeless People</h3>
                  <p>Our voter registration and civic engagement initiative that encourages political participation in the African American community.</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-3">Go To High School, Go To College</h3>
                  <p>Educational program that motivates young men to pursue higher education and provides them with the tools for academic success.</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-3">Project Alpha</h3>
                  <p>Health initiative focused on educating young African American men about responsible sexuality and teen pregnancy prevention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NationalPrograms;
