
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NationalPrograms = () => {
  const programs = [
    {
      id: "brothers-keeper",
      title: "Brother's Keeper",
      subtitle: "Formerly called the A. Charles Haston Brother's Keeper program",
      description: "This service program developed with the mission of advocating and improving the quality of life for Alpha Phi Alpha Fraternity, Inc.'s senior brothers, their spouses and widows; brothers who are retired and have disabilities or ailments; and vulnerable community members.",
      icon: "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-yellow-600/10",
      borderColor: "border-yellow-400/20"
    },
    {
      id: "voteless-people",
      title: "A Voteless People is a Hopeless People",
      subtitle: "Civic Engagement & Voter Registration Initiative",
      description: "\"A Voteless People is a Hopeless People\" (aka VPHP) was initiated as a National Program of Alpha during the 1930's when many African-Americans had the right to vote but were prevented from voting because of poll taxes, threats of reprisal, and lack of education about the voting process. Voter education and registration have remained a dominant focus of this outreach activity for over 85 years.",
      icon: "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
      bgColor: "bg-gradient-to-br from-blue-400/10 to-blue-600/10",
      borderColor: "border-blue-400/20"
    },
    {
      id: "go-to-college",
      title: "Go-to-High-School, Go-to-College",
      subtitle: "Educational Excellence Program",
      description: "The \"Go-to-High-School, Go-to-College\" program, established in 1922, concentrates on the importance of completing secondary and collegiate education as a road to advancement. This program motivates young men to pursue higher education and provides them with the tools for academic success.",
      icon: "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
      bgColor: "bg-gradient-to-br from-green-400/10 to-green-600/10",
      borderColor: "border-green-400/20"
    },
    {
      id: "project-alpha",
      title: "Project Alpha",
      subtitle: "Health & Wellness Initiative",
      description: "This collaborative project, which is symbolized by both genders signs side by side, is designed to provide education, motivation, and skill-building on issues of responsibility, relationships, teen pregnancy, and sexually transmitted diseases for young males ages 12-15 years. Designed to provide young men with current and accurate information about teen pregnancy prevention.",
      icon: "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
      bgColor: "bg-gradient-to-br from-purple-400/10 to-purple-600/10",
      borderColor: "border-purple-400/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
                National Programs
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Alpha Phi Alpha Fraternity, Inc. sponsors national programs that address 
                the needs of our communities and align with our core values of scholarship, 
                fellowship, good character, and the uplifting of humanity.
              </p>
            </div>
            
            <div className="space-y-12">
              {programs.map((program, index) => (
                <div 
                  key={program.id}
                  className={`group relative overflow-hidden rounded-2xl ${program.bgColor} ${program.borderColor} border-2 hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className={`p-8 md:p-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400/20 rounded-full flex items-center justify-center border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-110">
                        <img 
                          src={program.icon} 
                          alt={`${program.title} icon`}
                          className="w-12 h-12 md:w-16 md:h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {program.title}
                      </h2>
                      <p className="text-yellow-400 font-semibold mb-4 text-lg">
                        {program.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        {program.description}
                      </p>
                      
                      <Link 
                        to={`/program/${program.id}`}
                        className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 group-hover:shadow-xl"
                      >
                        LEARN MORE
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NationalPrograms;
