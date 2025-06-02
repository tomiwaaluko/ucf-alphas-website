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
            </h1>{" "}
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                The Xi Iota Chapter is led by dedicated brothers who are
                committed to upholding the values and traditions of Alpha Phi
                Alpha Fraternity, Inc.
              </p>{" "}
              <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                {" "}
                {/* President */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/treylon-chukes.jpg"
                      alt="Treylon Chukes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Treylon Chukes
                    </h3>
                    <p className="text-white text-sm">President</p>
                  </div>
                </div>
                {/* Vice President */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/abdul-ibrahim.jpg"
                      alt="Abdul Ibrahim"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Abdul Ibrahim
                    </h3>
                    <p className="text-white text-sm">Vice President</p>
                  </div>
                </div>
                {/* Secretary */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/toluwani-aluko.jpg"
                      alt="Toluwani Aluko"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Toluwani Aluko
                    </h3>
                    <p className="text-white text-sm">
                      Secretary, Historian, Associate Editor to the Sphinx
                    </p>
                  </div>
                </div>
                {/* Treasurer */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/adams-brown.jpg"
                      alt="Adams Brown"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Adams Brown
                    </h3>
                    <p className="text-white text-sm">
                      Treasurer, Sergeant at Arms
                    </p>
                  </div>
                </div>
                {/* Financial Secretary */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/corey-barnes.jpg"
                      alt="Corey Barnes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Corey Barnes
                    </h3>
                    <p className="text-white text-sm">Financial Secretary</p>
                  </div>
                </div>{" "}
                {/* Director of Education */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/jacob-herrera.jpg"
                      alt="Jacob Herrera"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Jacob Herrera
                    </h3>
                    <p className="text-white text-sm">
                      Director of Education, Chaplain
                    </p>
                  </div>
                </div>
                {/* Parliamentarian */}
                <div className="bg-gray-900 rounded-lg border border-yellow-400/20 overflow-hidden">
                  <div className="aspect-square bg-gray-800">
                    <img
                      src="/leadership/benjamin-blocker.jpg"
                      alt="Benjamin Blocker"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      Benjamin Blocker
                    </h3>
                    <p className="text-white text-sm">Parliamentarian</p>
                  </div>
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
