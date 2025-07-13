import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ChapterHistory = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Chapter History
            </h1>
            {/* <div className="text-gray-300 space-y-6">
              {" "}
              <p className="text-lg">
                The Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. was
                chartered at the University of Florida on Thursday, August 9th,
                1973.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-yellow-400 font-semibold text-xl mb-3">
                  Founding Members
                </h3>
                <ul className="space-y-2">
                  <li>• Life Member #21 Brother Dr. John C. Rawls</li>
                  <li>• Albert Daniels</li>
                  <li>• Rayfield McGee</li>
                </ul>
              </div>
              <p>
                Since its inception at the University of Florida, the Xi Iota
                Chapter has taken profound strides to hold the aims and vision
                of the fraternity highly throughout the Alachua County community
                and beyond.
              </p>
              <p>
                For over half a century, our chapter has been devoted to
                promoting the aims of Manly Deeds, Scholarship, and Love for All
                Mankind through our programmatic efforts, community involvement,
                and service and philanthropic initiatives.
              </p>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ChapterHistory;
