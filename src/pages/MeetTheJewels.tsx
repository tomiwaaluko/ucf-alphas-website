import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const jewels = [
  {
    id: "henry-callis",
    name: "Henry Arthur Callis",
    title: "First President",
    birthYear: "1887",
    contribution: "Visionary Leader",
    image: "https://apa1906.net/wp-content/uploads/2018/08/Image-8@2x.png",
    description:
      "The first president of Alpha Phi Alpha, leading the fraternity's early development.",
  },
  {
    id: "charles-chapman",
    name: "Charles Henry Chapman",
    title: "The Scholar",
    birthYear: "1884",
    contribution: "Academic Excellence",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/efc77a04961ecfbe95d84981c48558b6@2x.png",
    description:
      "Known for his commitment to scholarship and intellectual pursuits.",
  },
  {
    id: "eugene-jones",
    name: "Eugene Kinckle Jones",
    title: "The Organizer",
    birthYear: "1885",
    contribution: "National Development",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/e445b9b1f863a938bb14aa0403ae818b@2x.png",
    description:
      "Instrumental in organizing the fraternity's national structure.",
  },
  {
    id: "george-kelley",
    name: "George Biddle Kelley",
    title: "The Architect",
    birthYear: "1884",
    contribution: "Structural Foundation",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/829c7a18781d10f5e1192abde73e8c9c@2x.png",
    description:
      "The first African American engineer registered in New York State.",
  },
  {
    id: "nathaniel-murray",
    name: "Nathaniel Allison Murray",
    title: "The Diplomat",
    birthYear: "1884",
    contribution: "International Relations",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/350cc52b1906736d4c3162883f62d3fa@2x.png",
    description:
      "Focused on building relationships and expanding the fraternity's reach.",
  },
  {
    id: "robert-ogle",
    name: "Robert Harold Ogle",
    title: "The Innovator",
    birthYear: "1886",
    contribution: "Creative Solutions",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/eca08ce86ecae763e3dc860dc88a0adc@2x.png",
    description:
      "Brought innovative ideas to the fraternity's early operations.",
  },
  {
    id: "vertner-tandy",
    name: "Vertner Woodson Tandy",
    title: "The Designer",
    birthYear: "1885",
    contribution: "Artistic Vision",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/c7a411545e971348810b98ce640fe70e@2x.png",
    description:
      "The first African American architect registered in New York State.",
  },
];

const MeetTheJewels = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedJewel, setSelectedJewel] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-yellow-600/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-yellow-500/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/1 to-transparent rounded-full"></div>{" "}
      </motion.div>

      {/* Floating Stars */}
      <div className="fixed inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          {/* Enhanced Hero Section */}
          <motion.section
            ref={heroRef}
            className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 text-center relative">
              <motion.div style={{ y: textY }} className="mb-16">
                <motion.h1
                  className="text-5xl md:text-8xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Meet the Jewels
                </motion.h1>{" "}
                {/* Decorative Elements - Horizontal Jewels */}
                <motion.div
                  className="flex items-center justify-center space-x-12 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                >
                  {/* Seven Jewels in a horizontal row */}
                  {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        className={`w-4 h-4 bg-gradient-to-br ${
                          index === 3
                            ? "from-yellow-200 via-yellow-400 to-yellow-600" // Center jewel (brightest)
                            : "from-yellow-300 via-yellow-400 to-yellow-500"
                        }`}
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                          filter:
                            "drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))",
                        }}
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />

                      {/* Subtle glow effect */}
                      <motion.div
                        className="absolute inset-0 w-4 h-4 bg-yellow-400/20 rounded-full blur-sm"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 2.5 + index * 0.2,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  The Seven Jewels are the founding fathers of Alpha Phi Alpha
                  Fraternity, Inc. These visionary men established our
                  organization on{" "}
                  <span className="text-yellow-400 font-semibold">
                    December 4, 1906
                  </span>
                  , at Cornell University.
                </motion.p>
                {/* Historical Badge */}
                <motion.div
                  className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-8 py-4 rounded-full border border-yellow-400/30 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <span className="text-yellow-400 font-semibold text-lg">
                    Founded 118 Years Ago
                  </span>
                </motion.div>
              </motion.div>
            </div>{" "}
          </motion.section>

          {/* Enhanced Jewels Gallery Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  The <span className="text-yellow-400">Seven</span> Jewels
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore the legacy of our founding fathers through interactive
                  portraits
                </p>
              </motion.div>

              <div className="relative">
                <Carousel className="w-full max-w-6xl mx-auto">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {jewels.map((jewel, index) => (
                      <CarouselItem
                        key={jewel.id}
                        className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <Card
                            className="relative bg-gray-900 border-2 border-yellow-400/20 overflow-hidden h-[500px] cursor-pointer transition-all duration-500 hover:border-yellow-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
                            onMouseEnter={() => setHoveredCard(jewel.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 border border-yellow-400/30 rounded-full opacity-50"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 border border-yellow-400/20 transform rotate-45"></div>

                            <div className="relative w-full h-full">
                              <motion.img
                                src={jewel.image}
                                alt={jewel.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                whileHover={{ filter: "brightness(1.1)" }}
                              />
                              {/* Enhanced overlay with more information */}
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-6 transition-all duration-500 ${
                                  hoveredCard === jewel.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                                initial={{ y: 50 }}
                                animate={{
                                  y: hoveredCard === jewel.id ? 0 : 50,
                                  opacity: hoveredCard === jewel.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{
                                    y: hoveredCard === jewel.id ? 0 : 20,
                                    opacity: hoveredCard === jewel.id ? 1 : 0,
                                  }}
                                  transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                  <h3 className="text-yellow-400 font-bold text-2xl mb-1 font-cinzel">
                                    {jewel.name}
                                  </h3>
                                  <p className="text-yellow-300 font-semibold mb-1 text-lg">
                                    {jewel.title}
                                  </p>
                                  <p className="text-gray-300 text-sm mb-2">
                                    Born: {jewel.birthYear} •{" "}
                                    {jewel.contribution}
                                  </p>
                                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {jewel.description}
                                  </p>{" "}
                                  <Link to={`/jewel/${jewel.id}`}>
                                    <Button
                                      variant="outline"
                                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold pointer-events-auto"
                                      onMouseDown={(e) => e.stopPropagation()}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        window.location.href = `/jewel/${jewel.id}`;
                                      }}
                                    >
                                      Discover Legacy
                                    </Button>
                                  </Link>
                                </motion.div>
                              </motion.div>{" "}
                              {/* Always visible name bar */}
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-500"
                                animate={{
                                  opacity: hoveredCard === jewel.id ? 0 : 1,
                                }}
                                style={{
                                  pointerEvents:
                                    hoveredCard === jewel.id ? "none" : "auto",
                                }}
                              >
                                <h4 className="text-white font-bold text-lg font-cinzel">
                                  {jewel.name}
                                </h4>
                                <p className="text-yellow-400 text-sm">
                                  {jewel.title}
                                </p>
                              </motion.div>
                              {/* Jewel number badge */}
                              <motion.div
                                className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg font-cinzel shadow-xl"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {index + 1}
                              </motion.div>
                            </div>
                          </Card>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-yellow-400 text-black hover:bg-yellow-500 border-2 border-yellow-300 shadow-xl" />
                  <CarouselNext className="right-4 bg-yellow-400 text-black hover:bg-yellow-500 border-2 border-yellow-300 shadow-xl" />
                </Carousel>
              </div>
            </div>{" "}
          </section>

          {/* Legacy Impact Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/3 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  Their <span className="text-yellow-400">Legacy</span> Lives On
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  The foundation they built continues to inspire generations
                </p>
              </motion.div>
              {/* Quote Section */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 md:p-16 rounded-3xl border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden mb-16"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Decorative quotes */}
                <div className="absolute top-4 left-4 text-6xl text-yellow-400/20 font-serif">
                  "
                </div>
                <div className="absolute bottom-4 right-4 text-6xl text-yellow-400/20 font-serif">
                  "
                </div>

                <blockquote className="text-center relative z-10">
                  <p className="text-2xl md:text-3xl text-gray-300 font-crimson italic leading-relaxed mb-8">
                    We shall transcend all racial barriers and become a part of
                    humanity, working for the benefit of all mankind.
                  </p>
                  <footer className="text-yellow-400 font-semibold text-lg">
                    — The Vision of the Seven Jewels
                  </footer>
                </blockquote>
              </motion.div>
              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "7",
                    label: "Founding Jewels",
                    description: "Visionary Leaders",
                  },
                  {
                    number: "1906",
                    label: "Year Founded",
                    description: "Cornell University",
                  },
                  {
                    number: "118",
                    label: "Years of Legacy",
                    description: "Still Growing",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                      <motion.div
                        className="text-5xl md:text-6xl font-bold text-yellow-400 font-cinzel mb-2"
                        animate={{
                          textShadow: [
                            "0 0 20px rgba(251, 191, 36, 0.3)",
                            "0 0 30px rgba(251, 191, 36, 0.6)",
                            "0 0 20px rgba(251, 191, 36, 0.3)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-white font-semibold text-lg mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {stat.label}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>{" "}
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            className="py-20 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 md:p-16 rounded-3xl border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/50"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50"></div>

                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Explore Their Stories
                </motion.h2>

                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Dive deeper into the individual biographies and achievements
                  of each founding father.
                </motion.p>

                <motion.div
                  className="relative inline-block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to="/jewel/henry-callis">
                    <motion.button
                      className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Begin the Journey
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MeetTheJewels;
