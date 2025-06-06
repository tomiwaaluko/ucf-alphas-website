
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const BrotherDetail = () => {
  const { id } = useParams();
  
  // Sample brother data - in a real app this would come from a database
  const brotherData: { [key: string]: any } = {
    "1": {
      name: "Brother Isaac Goodlow",
      crossingSemester: "Spring 2023",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      bio: "Isaac is a dedicated brother who exemplifies the values of Alpha Phi Alpha. He serves as Vice President and is pursuing a degree in Business Administration. Isaac is passionate about community service and has volunteered over 200 hours with local youth organizations.",
      major: "Business Administration",
      year: "Junior",
      hometown: "Atlanta, GA",
      interests: ["Community Service", "Basketball", "Mentoring Youth"]
    },
    "2": {
      name: "Brother Marcus Johnson",
      crossingSemester: "Fall 2022",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      bio: "Marcus brings financial expertise to our chapter as Treasurer. He is studying Accounting and has been instrumental in organizing our fundraising events. His leadership and attention to detail make him an invaluable member of our brotherhood.",
      major: "Accounting",
      year: "Senior",
      hometown: "Houston, TX",
      interests: ["Finance", "Chess", "Photography"]
    },
    "3": {
      name: "Brother David Williams",
      crossingSemester: "Spring 2022",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face",
      bio: "David serves as our chapter Secretary and is known for his excellent communication skills. He is studying Communications and aspires to work in media. David coordinates many of our social events and community outreach programs.",
      major: "Communications",
      year: "Senior",
      hometown: "Chicago, IL",
      interests: ["Media Production", "Public Speaking", "Traveling"]
    },
    "4": {
      name: "Brother James Thompson",
      crossingSemester: "Fall 2021",
      position: "Member",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&crop=face",
      bio: "James is a Computer Science major who brings technical expertise to our chapter. He has developed several apps for community organizations and is passionate about using technology for social good. James mentors younger students in STEM fields.",
      major: "Computer Science",
      year: "Graduate Student",
      hometown: "Seattle, WA",
      interests: ["Software Development", "Gaming", "Tutoring"]
    },
    "5": {
      name: "Brother Michael Davis",
      crossingSemester: "Spring 2021",
      position: "Member",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500&h=600&fit=crop&crop=face",
      bio: "Michael is pursuing a degree in Pre-Medicine and plans to become a physician. He volunteers at local hospitals and organizes health awareness events in the community. Michael embodies our fraternity's commitment to service and excellence.",
      major: "Pre-Medicine",
      year: "Senior",
      hometown: "Miami, FL",
      interests: ["Healthcare", "Volunteer Work", "Soccer"]
    },
    "6": {
      name: "Brother Anthony Brown",
      crossingSemester: "Fall 2020",
      position: "Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      bio: "Anthony is an Engineering major who has been with our chapter for several years. He has been involved in numerous community projects and is known for his problem-solving skills. Anthony mentors freshman students and helps with academic support programs.",
      major: "Mechanical Engineering",
      year: "Graduate Student",
      hometown: "Detroit, MI",
      interests: ["Engineering Projects", "Mentoring", "Cycling"]
    }
  };

  const brother = brotherData[id || "1"];

  if (!brother) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Brother Not Found</h1>
          <Link to="/meet-the-brothers" className="text-yellow-400 hover:text-yellow-300">
            Return to Meet the Brothers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              to="/meet-the-brothers"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Brothers
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src={brother.image}
                  alt={brother.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-yellow-400 mb-2">
                    {brother.name}
                  </h1>
                  <p className="text-xl text-gray-300">{brother.position}</p>
                  <p className="text-lg text-gray-400">Crossed: {brother.crossingSemester}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">About</h3>
                    <p className="text-gray-300 leading-relaxed">{brother.bio}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400">Major</h4>
                      <p className="text-gray-300">{brother.major}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400">Year</h4>
                      <p className="text-gray-300">{brother.year}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-400">Hometown</h4>
                    <p className="text-gray-300">{brother.hometown}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {brother.interests.map((interest: string, index: number) => (
                        <span 
                          key={index}
                          className="bg-yellow-400/20 text-yellow-400 px-3 py-1 text-sm border border-yellow-400/30"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BrotherDetail;
