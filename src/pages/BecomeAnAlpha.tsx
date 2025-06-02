
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BecomeAnAlpha = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">
              Become An Alpha
            </h1>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                Interested in joining the ranks of Alpha Phi Alpha Fraternity, Inc.? 
                Membership in our organization is a lifelong commitment to excellence, 
                service, and brotherhood.
              </p>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-yellow-400 font-semibold text-xl mb-3">Requirements</h3>
                <ul className="space-y-2">
                  <li>• Enrolled as a full-time student at an accredited institution</li>
                  <li>• Minimum 2.5 cumulative GPA</li>
                  <li>• Demonstration of leadership potential</li>
                  <li>• Commitment to community service</li>
                  <li>• Good moral character</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-yellow-400 font-semibold text-xl mb-3">Interest Meetings</h3>
                <p>
                  We hold interest meetings throughout the academic year. Stay connected 
                  with our social media pages and website for announcements about upcoming 
                  information sessions.
                </p>
              </div>
              
              <p className="text-center text-lg">
                For more information, please contact us through our official channels.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeAnAlpha;
