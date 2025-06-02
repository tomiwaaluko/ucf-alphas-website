
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Leadership
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                The Theta Sigma Chapter is led by dedicated brothers who are committed to 
                upholding the values and traditions of Alpha Phi Alpha Fraternity, Inc.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-2">President</h3>
                  <p className="text-lg">Joshua Thomas</p>
                  <p className="text-sm text-gray-400">Leading the chapter with vision and dedication</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-2">Vice President</h3>
                  <p className="text-lg">Executive Leadership</p>
                  <p className="text-sm text-gray-400">Supporting chapter operations and initiatives</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-2">Secretary</h3>
                  <p className="text-lg">Chapter Records</p>
                  <p className="text-sm text-gray-400">Maintaining official chapter documentation</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                  <h3 className="text-yellow-400 font-semibold text-xl mb-2">Treasurer</h3>
                  <p className="text-lg">Financial Management</p>
                  <p className="text-sm text-gray-400">Overseeing chapter finances and budgets</p>
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

export default Leadership;
