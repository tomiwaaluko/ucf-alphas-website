
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const ProgramDetail = () => {
  const { programId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const programData = {
    "brothers-keeper": {
      title: "Brother's Keeper",
      subtitle: "A. Charles Haston Brother's Keeper Program",
      description: "This comprehensive service program was developed with the mission of advocating and improving the quality of life for Alpha Phi Alpha Fraternity, Inc.'s senior brothers, their spouses and widows; brothers who are retired and have disabilities or ailments; and vulnerable community members. The program focuses on providing support, resources, and advocacy for those in our community who need it most.",
      extendedInfo: "The Brother's Keeper program embodies the fraternity's commitment to lifelong brotherhood and community service. Through this initiative, we ensure that no brother walks alone, especially during times of need. The program includes health and wellness checks, financial assistance guidance, social activities, and advocacy services.",
      images: [
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png"
      ]
    },
    "voteless-people": {
      title: "A Voteless People is a Hopeless People",
      subtitle: "Civic Engagement & Voter Registration Initiative",
      description: "Initiated in the 1930s when many African-Americans had the right to vote but were prevented from exercising this right due to poll taxes, threats of reprisal, and lack of education about the voting process. For over 85 years, voter education and registration have remained a dominant focus of this outreach activity.",
      extendedInfo: "This program continues to be relevant today as we work to ensure all citizens understand their voting rights and have access to the ballot box. We conduct voter registration drives, provide civic education workshops, and advocate for voting rights at local, state, and national levels.",
      images: [
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png"
      ]
    },
    "go-to-college": {
      title: "Go-to-High-School, Go-to-College",
      subtitle: "Educational Excellence Program",
      description: "Established in 1922, this program concentrates on the importance of completing secondary and collegiate education as a road to advancement. It motivates young men to pursue higher education and provides them with the tools for academic success.",
      extendedInfo: "This program includes mentorship opportunities, scholarship information, study skills workshops, college preparation seminars, and ongoing academic support. We believe education is the great equalizer and work tirelessly to ensure young people have access to quality educational opportunities.",
      images: [
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png"
      ]
    },
    "project-alpha": {
      title: "Project Alpha",
      subtitle: "Health & Wellness Initiative",
      description: "A collaborative project designed to provide education, motivation, and skill-building on issues of responsibility, relationships, teen pregnancy, and sexually transmitted diseases for young males ages 12-15 years. It provides young men with current and accurate information about teen pregnancy prevention.",
      extendedInfo: "Project Alpha workshops cover topics including healthy relationships, personal responsibility, goal setting, and making informed decisions. The program is delivered by trained Alpha men who serve as positive role models and mentors for young participants.",
      images: [
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
        "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png"
      ]
    }
  };

  const program = programData[programId as keyof typeof programData];

  if (!program) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Program Not Found</h1>
          <Link to="/national-programs" className="text-yellow-400 hover:text-yellow-300">
            Return to National Programs
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
          <div className="max-w-6xl mx-auto px-4">
            <Link 
              to="/national-programs"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to National Programs
            </Link>

            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
                {program.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {program.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-yellow-400/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">About This Program</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {program.extendedInfo}
                  </p>
                </div>

                <div className="bg-gray-900/50 p-8 rounded-2xl border border-yellow-400/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Get Involved</h3>
                  <p className="text-gray-300 mb-4">
                    Interested in participating in this program or learning more about how you can contribute to our community initiatives?
                  </p>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Program Gallery</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {program.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <img
                            src={image}
                            alt={`${program.title} - Image ${index + 1}`}
                            className="w-full h-80 object-cover rounded-xl border border-yellow-400/20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium">
                              {index + 1} of {program.images.length}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-yellow-400/20 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black" />
                  <CarouselNext className="right-2 bg-yellow-400/20 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black" />
                </Carousel>

                <div className="flex justify-center mt-4 space-x-2">
                  {program.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
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

export default ProgramDetail;
