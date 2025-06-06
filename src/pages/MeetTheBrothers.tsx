
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MeetTheBrothers = () => {
  const brothers = [
    {
      id: 1,
      name: "Brother Isaac Goodlow",
      crossingSemester: "Spring 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Brother Marcus Johnson",
      crossingSemester: "Fall 2022",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Brother David Williams",
      crossingSemester: "Spring 2022",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Brother James Thompson",
      crossingSemester: "Fall 2021",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Brother Michael Davis",
      crossingSemester: "Spring 2021",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Brother Anthony Brown",
      crossingSemester: "Fall 2020",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center">
              Meet the Brothers
            </h1>
            <div className="text-gray-300 space-y-8">
              <p className="text-lg text-center max-w-3xl mx-auto">
                The brothers of Xi Iota Chapter represent excellence in
                scholarship, leadership, and service. Our diverse membership
                includes students and professionals who are making a positive
                impact in their communities.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {brothers.map((brother) => (
                  <div
                    key={brother.id}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={brother.image}
                        alt={brother.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-yellow-400 font-semibold text-xl mb-2">
                          {brother.name}
                        </h3>
                        <p className="text-white text-sm mb-4">
                          {brother.crossingSemester}
                        </p>
                        <Link 
                          to={`/brother/${brother.id}`}
                          className="bg-yellow-400 text-black px-6 py-2 text-sm font-medium hover:bg-yellow-300 transition-colors duration-200"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-center mt-12">
                Our brotherhood extends beyond the university years, creating
                lifelong bonds and professional networks that span generations.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheBrothers;
