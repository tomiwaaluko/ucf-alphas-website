
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FraternityHistory = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Fraternity History
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                Alpha Phi Alpha Fraternity, Inc., the first intercollegiate Greek letter fraternity 
                established for African American Men, was founded on December 4, 1906, at Cornell 
                University in Ithaca, New York.
              </p>
              <p>
                The fraternity was founded by seven college men who recognized the need for a 
                strong bond of brotherhood among African descendants in this country. These seven 
                visionary founders, known as the "Jewels" of the fraternity, established the 
                foundation for what would become the largest and most prestigious African American 
                Greek letter organization.
              </p>
              <p>
                From its inception, Alpha Phi Alpha has been committed to the principles of 
                scholarship, fellowship, good character, and the uplifting of humanity. The 
                fraternity has played a significant role in the civil rights movement and 
                continues to be a force for positive change in communities across the globe.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FraternityHistory;
