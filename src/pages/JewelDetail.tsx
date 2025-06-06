
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const jewelData = {
  "henry-callis": {
    name: "Henry Arthur Callis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    bio: "Henry Arthur Callis was born in Rochester, New York in 1887. He was one of the founding members of Alpha Phi Alpha Fraternity, Inc. and served as the first Vice President of the organization. Callis was a physician and surgeon who dedicated his life to serving his community and advancing the cause of African American education and civil rights.",
    achievements: [
      "First Vice President of Alpha Phi Alpha Fraternity, Inc.",
      "Renowned physician and surgeon",
      "Advocate for African American education",
      "Community leader and civil rights activist"
    ]
  },
  "charles-chapman": {
    name: "Charles Henry Chapman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    bio: "Charles Henry Chapman was a founding member of Alpha Phi Alpha Fraternity, Inc. Born in 1886, Chapman was known for his dedication to academic excellence and his commitment to the principles of scholarship and service that became hallmarks of the fraternity.",
    achievements: [
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Academic excellence advocate",
      "Committed to scholarship and service",
      "Leader in early fraternity development"
    ]
  },
  "eugene-jones": {
    name: "Eugene Kinckle Jones",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
    bio: "Eugene Kinckle Jones was a prominent social worker and civil rights leader. As one of the Seven Jewels, he helped establish the foundation of Alpha Phi Alpha and went on to become a significant figure in the National Urban League, serving as its executive secretary for many years.",
    achievements: [
      "Executive Secretary of the National Urban League",
      "Prominent social worker and civil rights leader",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Advocate for African American advancement"
    ]
  },
  "george-kelley": {
    name: "George Biddle Kelley",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
    bio: "George Biddle Kelley was the first African American certified public accountant in the state of New York. As one of the Seven Jewels, he brought financial expertise and business acumen to the early development of Alpha Phi Alpha Fraternity, Inc.",
    achievements: [
      "First African American CPA in New York State",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Business and financial expert",
      "Pioneer in professional accounting"
    ]
  },
  "nathaniel-murray": {
    name: "Nathaniel Allison Murray",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
    bio: "Nathaniel Allison Murray was one of the youngest founding members of Alpha Phi Alpha Fraternity, Inc. He was known for his intellectual prowess and his commitment to the academic mission of the fraternity, helping to establish the standards of scholarship that continue today.",
    achievements: [
      "Youngest founding member of Alpha Phi Alpha",
      "Intellectual leader and scholar",
      "Established academic standards for the fraternity",
      "Advocate for higher education"
    ]
  },
  "robert-ogle": {
    name: "Robert Harold Ogle",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
    bio: "Robert Harold Ogle was a founding member of Alpha Phi Alpha Fraternity, Inc. known for his dedication to the principles of brotherhood and service. He played a crucial role in establishing the organizational structure and rituals of the fraternity.",
    achievements: [
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Instrumental in organizational development",
      "Advocate for brotherhood and service",
      "Leader in fraternity ritual development"
    ]
  },
  "vertner-tandy": {
    name: "Vertner Woodson Tandy",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face",
    bio: "Vertner Woodson Tandy was a pioneering architect and the first licensed African American architect in New York State. As one of the Seven Jewels, he brought artistic vision and professional expertise to Alpha Phi Alpha Fraternity, Inc., helping to design the fraternity's early symbols and traditions.",
    achievements: [
      "First licensed African American architect in New York State",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Designed fraternity symbols and traditions",
      "Pioneer in architectural profession"
    ]
  }
};

const JewelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const jewel = id ? jewelData[id as keyof typeof jewelData] : null;

  if (!jewel) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Jewel Not Found</h1>
            <Link to="/meet-the-jewels">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Return to Meet the Jewels
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Link to="/meet-the-jewels" className="inline-block mb-8">
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                ← Back to Meet the Jewels
              </Button>
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={jewel.image}
                  alt={jewel.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <h1 className="text-4xl font-bold text-yellow-400 mb-6">
                  {jewel.name}
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {jewel.bio}
                </p>
                
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Notable Achievements
                </h2>
                <ul className="space-y-2">
                  {jewel.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default JewelDetail;
