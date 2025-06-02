
const Lineage = () => {
  const founders = [
    "Henry Arthur Callis",
    "Charles Henry Chapman", 
    "Eugene Kinckle Jones",
    "George Biddle Kelley",
    "Nathaniel Allison Murray",
    "Robert Harold Ogle",
    "Vertner Woodson Tandy"
  ];

  return (
    <section id="lineage" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Our Legacy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded December 4, 1906, at Cornell University in Ithaca, New York, Alpha Phi Alpha stands 
            as the first intercollegiate Greek-letter fraternity for African American men.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">The Seven Jewels</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our fraternity was founded by seven visionary men who came together with a shared commitment 
              to academic excellence, social responsibility, and the uplifting of humanity. These founders, 
              known as "The Seven Jewels," established the foundation upon which our brotherhood continues to thrive.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {founders.map((founder, index) => (
                <div key={index} className="flex items-center p-3 bg-black/30 rounded-lg border border-yellow-400/20">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white font-medium">{founder}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=600&fit=crop" 
              alt="Historical setting"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">1906</p>
              <p className="text-sm">Cornell University</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Motto</h3>
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
              "First of All, Servants of All, We Shall Transcend All"
            </blockquote>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              This guiding principle reflects our commitment to leadership, service, and excellence 
              in all endeavors, inspiring generations of Alpha men to make meaningful contributions 
              to their communities and the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lineage;
