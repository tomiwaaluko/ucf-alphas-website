
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Poems = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Poems
            </h1>
            <div className="text-gray-300 space-y-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20">
                <h3 className="text-yellow-400 font-semibold text-2xl mb-4">The Alpha Creed</h3>
                <div className="italic leading-relaxed">
                  <p className="mb-4">
                    "I believe in the principles of Alpha Phi Alpha Fraternity and
                    my obligation to respect and maintain them."
                  </p>
                  <p className="mb-4">
                    "I believe that I should be my brother's keeper and
                    my sister's keeper also."
                  </p>
                  <p>
                    "I believe in the exercise of humility and restraint in all my dealings
                    with others, especially with my fraternity brothers."
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400/20">
                <h3 className="text-yellow-400 font-semibold text-2xl mb-4">Fraternity Motto</h3>
                <p className="text-xl italic text-center">
                  "First of All, Servants of All, We Shall Transcend All"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Poems;
