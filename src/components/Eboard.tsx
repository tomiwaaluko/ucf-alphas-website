
import { Mail, Phone, Linkedin } from "lucide-react";

const Eboard = () => {
  const officers = [
    {
      name: "Marcus Johnson",
      position: "President",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=300&fit=crop&crop=face",
      email: "president@xiiotaapa.org",
      phone: "(555) 123-4567"
    },
    {
      name: "David Williams", 
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      email: "vp@xiiotaapa.org",
      phone: "(555) 234-5678"
    },
    {
      name: "Michael Davis",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop&crop=face", 
      email: "secretary@xiiotaapa.org",
      phone: "(555) 345-6789"
    },
    {
      name: "James Wilson",
      position: "Treasurer", 
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      email: "treasurer@xiiotaapa.org",
      phone: "(555) 456-7890"
    },
    {
      name: "Robert Brown",
      position: "Chaplain",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=face",
      email: "chaplain@xiiotaapa.org", 
      phone: "(555) 567-8901"
    },
    {
      name: "Anthony Taylor",
      position: "Social Chair",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=300&fit=crop&crop=face",
      email: "social@xiiotaapa.org",
      phone: "(555) 678-9012"
    }
  ];

  return (
    <section id="eboard" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Executive Board
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders of Xi Iota Chapter who guide our brotherhood 
            with integrity, vision, and unwavering commitment to our principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-6 group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <img 
                  src={officer.image}
                  alt={officer.name}
                  className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400 object-cover mb-4 group-hover:border-yellow-300 transition-colors"
                />
                <h3 className="text-xl font-bold text-white mb-2">{officer.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{officer.position}</p>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={`mailto:${officer.email}`} 
                  className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">{officer.email}</span>
                </a>
                <a 
                  href={`tel:${officer.phone}`}
                  className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">{officer.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Leadership Opportunities</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in joining our executive board? We're always looking for dedicated brothers 
              who want to make a difference in our chapter and community.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eboard;
