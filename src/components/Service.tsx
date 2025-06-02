
import { Users, Heart, GraduationCap, HandHeart } from "lucide-react";

const Service = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description: "Providing educational support and mentorship to students in our community.",
      initiatives: ["Tutoring Sessions", "SAT Prep Courses", "College Guidance"]
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engaging with local organizations to address community needs and challenges.",
      initiatives: ["Food Drives", "Neighborhood Cleanups", "Senior Citizen Support"]
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Promoting healthy lifestyles and providing health education resources.",
      initiatives: ["Health Screenings", "Fitness Programs", "Mental Health Awareness"]
    },
    {
      icon: HandHeart,
      title: "Youth Development",
      description: "Mentoring and empowering young people to reach their full potential.",
      initiatives: ["Mentorship Programs", "Leadership Workshops", "Career Development"]
    }
  ];

  const stats = [
    { number: "500+", label: "Community Hours Served" },
    { number: "50+", label: "Families Assisted" },
    { number: "15", label: "Partner Organizations" },
    { number: "100+", label: "Students Mentored" }
  ];

  return (
    <section id="service" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Service & Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Service is at the heart of Alpha Phi Alpha. Our chapter is committed to making a positive 
            impact in our community through meaningful programs and initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 group hover:bg-black/70 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">{program.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3">Key Initiatives:</h4>
                {program.initiatives.map((initiative, idx) => (
                  <div key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span>{initiative}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black to-gray-900 border border-yellow-400/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Join Our Service Efforts</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you're a member of our fraternity or a community partner, there are many ways 
                to get involved in our service initiatives. Together, we can make a lasting impact 
                in our community.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                Volunteer With Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop" 
                alt="Community Service"
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

export default Service;
