import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

const MeetTheBrothers = () => {
  const [hoveredBrother, setHoveredBrother] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const brothers = [
    {
      id: 1,
      name: "Tomiwa Aluko",
      crossingSemester: "Spring 2022",
      lineNumber: "#1",
      major: "Computer Engineering",
      achievements: [
        "Dean's List",
        "Tech Innovation Award",
        "Engineering Excellence",
      ],
      quote: "Excellence is not a skill, it's an attitude.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Nijel Beverly",
      crossingSemester: "Spring 2022",
      lineNumber: "#2",
      major: "Business Administration Integrated Business",
      achievements: [
        "Student Body President",
        "Entrepreneur of the Year",
        "Business Leadership",
      ],
      quote:
        "Leadership is about making others better as a result of your presence.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Abdul Ibrahim",
      crossingSemester: "Fall 2024",
      lineNumber: "#3",
      major: "Science",
      achievements: [
        "Research Excellence",
        "Academic Scholar",
        "Scientific Innovation",
      ],
      quote: "Science is the foundation of all human progress.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Corey Barnes Jr.",
      crossingSemester: "Fall 2024",
      lineNumber: "#4",
      major: "Mechanical Engineering",
      achievements: [
        "Engineering Design Award",
        "Innovation Champion",
        "Technical Excellence",
      ],
      quote: "Innovation distinguishes between a leader and a follower.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Jacob Herrera",
      crossingSemester: "Fall 2024",
      lineNumber: "#5",
      major: "Mechanical Engineering",
      achievements: [
        "Engineering Excellence",
        "Project Leadership",
        "Technical Mentorship",
      ],
      quote: "Engineering is the art of making the impossible possible.",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Adams Brown Jr.",
      crossingSemester: "Fall 2024",
      lineNumber: "#6",
      major: "Integrated Business",
      achievements: [
        "Business Strategy Award",
        "Financial Excellence",
        "Leadership Development",
      ],
      quote:
        "Success in business requires training and discipline and hard work.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Benjamin Blocker",
      crossingSemester: "Fall 2024",
      lineNumber: "#7",
      major: "Kinesiology",
      achievements: [
        "Health & Wellness Advocate",
        "Athletic Excellence",
        "Community Health Leader",
      ],
      quote: "Movement is medicine for creating change in all aspects of life.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Jevaughn Morris",
      crossingSemester: "Fall 2024",
      lineNumber: "#8",
      major: "Information Technology",
      achievements: [
        "Technology Innovation",
        "Digital Solutions",
        "IT Excellence",
      ],
      quote: "Technology is best when it brings people together.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Toluwani Aluko",
      crossingSemester: "Fall 2024",
      lineNumber: "#9",
      major: "Biology (Pre-Med)",
      achievements: [
        "Pre-Med Excellence",
        "Research Scholar",
        "Future Healthcare Leader",
      ],
      quote: "Medicine is not only a science; it is also an art.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Treylon Chukes",
      crossingSemester: "Fall 2024",
      lineNumber: "#10",
      major: "Biology",
      achievements: [
        "Scientific Research",
        "Academic Excellence",
        "Biology Innovation",
      ],
      quote: "Biology is the most powerful technology ever created.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    },
  ];
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-500/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/2 to-transparent rounded-full"></div>
      </motion.div>

      {/* Floating Brotherhood Symbols */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            className="py-20 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            style={{ y: headerY }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 text-center">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isHeroInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{ duration: 1.2 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Meet the <span className="text-white">Brothers</span>
                </motion.h1>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                  <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-6 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                    Excellence • Leadership • Brotherhood
                  </span>
                </motion.div>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  The brothers of Xi Iota Chapter represent excellence in
                  scholarship, leadership, and service.
                  <br className="hidden sm:block" />
                  Our diverse membership includes students and professionals who
                  are making a positive
                  <br className="hidden sm:block" />
                  impact in their communities and beyond.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Brothers Grid Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cinzel">
                  Our <span className="text-yellow-400">Brotherhood</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Each brother brings unique talents and perspectives to our
                  fraternal bond
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brothers.map((brother, index) => (
                  <motion.div
                    key={brother.id}
                    className="relative group cursor-pointer overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredBrother(brother.id)}
                    onHoverEnd={() => setHoveredBrother(null)}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={brother.image}
                        alt={brother.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Crossing Semester Badge */}
                      <div className="absolute top-4 right-4 bg-black/80 text-yellow-400 px-3 py-1 rounded text-sm backdrop-blur-sm border border-yellow-400/30">
                        {brother.crossingSemester}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-yellow-400 font-semibold text-xl mb-2 font-cinzel">
                          {brother.name}
                        </h3>
                        <p className="text-white text-sm mb-4">
                          {brother.major}
                        </p>
                        <Link
                          to={`/brother/${brother.id}`}
                          className="bg-yellow-400 text-black px-6 py-2 text-sm font-medium hover:bg-yellow-300 transition-colors duration-200 rounded"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Legacy Statement Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
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
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/50"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50"></div>

                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Brotherhood Beyond Boundaries
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our brotherhood extends beyond the university years, creating
                  lifelong bonds and professional networks that span
                  generations. Each brother contributes to a legacy of
                  excellence, service, and leadership that continues to inspire
                  future generations.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our Brotherhood
                  </motion.button>
                  <motion.button
                    className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 font-cinzel"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
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

export default MeetTheBrothers;
