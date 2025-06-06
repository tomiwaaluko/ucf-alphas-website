
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const jewels = [
  {
    id: "henry-callis",
    name: "Henry Arthur Callis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "charles-chapman",
    name: "Charles Henry Chapman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "eugene-jones",
    name: "Eugene Kinckle Jones",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "george-kelley",
    name: "George Biddle Kelley",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "nathaniel-murray",
    name: "Nathaniel Allison Murray",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "robert-ogle",
    name: "Robert Harold Ogle",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face"
  },
  {
    id: "vertner-tandy",
    name: "Vertner Woodson Tandy",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop&crop=face"
  }
];

const MeetTheJewels = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center">
              Meet the Jewels
            </h1>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              The Seven Jewels are the founding fathers of Alpha Phi Alpha Fraternity, Inc. 
              These visionary men established our organization on December 4, 1906, at Cornell University.
            </p>
            
            <div className="relative">
              <Carousel
                className="w-full max-w-5xl mx-auto"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {jewels.map((jewel) => (
                    <CarouselItem key={jewel.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card 
                        className="relative bg-gray-900 border-yellow-400/20 overflow-hidden h-96 cursor-pointer"
                        onMouseEnter={() => setHoveredCard(jewel.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative w-full h-full">
                          <img
                            src={jewel.image}
                            alt={jewel.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center transition-opacity duration-300 ${
                            hoveredCard === jewel.id ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <h3 className="text-yellow-400 font-bold text-xl mb-2 text-center px-4">
                              {jewel.name}
                            </h3>
                            <Link to={`/jewel/${jewel.id}`}>
                              <Button 
                                variant="outline" 
                                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                              >
                                Learn More
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-yellow-400 text-black hover:bg-yellow-500" />
                <CarouselNext className="right-4 bg-yellow-400 text-black hover:bg-yellow-500" />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheJewels;
