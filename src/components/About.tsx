
import { Award, Users, BookOpen, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Scholarship",
      description: "Promoting academic excellence and intellectual growth among our members and community."
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Building lifelong bonds of friendship, support, and mutual respect."
    },
    {
      icon: Heart,
      title: "Service",
      description: "Dedicated to improving our communities through meaningful service and outreach."
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Developing leaders who will make positive impacts in their professions and communities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            About Xi Iota Chapter
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of scholarship, fellowship, good character, and the uplifting of humanity, 
            the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. continues the proud tradition of excellence 
            established by our founders at Cornell University in 1906.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Alpha Phi Alpha Fraternity, Inc. develops leaders, promotes brotherhood and academic 
                excellence, while providing service and advocacy for our communities. We are committed 
                to being "First of All, Servants of All, We Shall Transcend All."
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Academic Excellence and Scholarship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Community Service and Outreach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Leadership Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Brotherhood and Fellowship
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop" 
                alt="Brotherhood"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
