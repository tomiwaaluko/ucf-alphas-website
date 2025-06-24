import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

// Leadership data - organized for better presentation
const leadershipData = [
  {
    name: "Treylon Chukes",
    position: "President",
    image: "/leadership/treylon-chukes.jpg",
    description:
      "Leading the chapter with vision and dedication to Alpha Phi Alpha's principles.",
    responsibilities: [
      "Chapter oversight",
      "Strategic planning",
      "External relations",
    ],
  },
  {
    name: "Abdul Ibrahim",
    position: "Vice President",
    image: "/leadership/abdul-ibrahim.jpg",
    description:
      "Supporting chapter operations and assisting in leadership initiatives.",
    responsibilities: [
      "Administrative support",
      "Committee coordination",
      "Member engagement",
    ],
  },
  {
    name: "Toluwani Aluko",
    position: "Secretary, Historian, Associate Editor to the Sphinx",
    image: "/leadership/toluwani-aluko.jpg",
    description:
      "Maintaining chapter records and preserving our historical legacy.",
    responsibilities: [
      "Meeting minutes",
      "Historical documentation",
      "Communications",
    ],
  },
  {
    name: "Adams Brown",
    position: "Treasurer, Sergeant at Arms",
    image: "/leadership/adams-brown.jpg",
    description:
      "Managing chapter finances and maintaining order during meetings.",
    responsibilities: [
      "Financial management",
      "Budget oversight",
      "Meeting order",
    ],
  },
  {
    name: "Corey Barnes",
    position: "Financial Secretary",
    image: "/leadership/corey-barnes.jpg",
    description: "Handling financial records and member dues administration.",
    responsibilities: [
      "Dues collection",
      "Financial records",
      "Member accounts",
    ],
  },
  {
    name: "Jacob Herrera",
    position: "Director of Education, Chaplain",
    image: "/leadership/jacob-herrera.jpg",
    description:
      "Overseeing educational programs and providing spiritual guidance.",
    responsibilities: [
      "Educational initiatives",
      "Spiritual guidance",
      "Academic support",
    ],
  },
  {
    name: "Benjamin Blocker",
    position: "Parliamentarian",
    image: "/leadership/benjamin-blocker.jpg",
    description:
      "Ensuring proper parliamentary procedure and governance standards.",
    responsibilities: [
      "Parliamentary procedure",
      "Policy guidance",
      "Rules compliance",
    ],
  },
];

const Leadership = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-500/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/1 to-transparent rounded-full"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
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
            className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{ duration: 1 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Xi Iota <span className="text-white">Leadership</span>
                </motion.h1>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                  <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-6 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                    Dedicated Brothers Leading with Excellence
                  </span>
                </motion.div>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  The Xi Iota Chapter is led by dedicated brothers who are
                  committed to upholding
                  <br className="hidden sm:block" /> the values and traditions
                  of Alpha Phi Alpha Fraternity, Inc. Our leadership
                  <br className="hidden sm:block" />
                  team exemplifies scholarship, fellowship, good character, and
                  the pursuit of
                  <br className="hidden sm:block" /> social justice.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Leadership Grid Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/3 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-yellow-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  Executive <span className="text-yellow-400">Board</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Meet the brothers who guide our chapter's mission and vision
                </p>
              </motion.div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadershipData.map((leader, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-yellow-400/20 backdrop-blur-sm overflow-hidden"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image Container */}
                      <div className="relative h-80 overflow-hidden">
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-3xl blur-xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />{" "}
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-gray-900/20"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <motion.h3
                          className="text-2xl font-bold text-yellow-400 mb-2 font-cinzel"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {leader.name}
                        </motion.h3>

                        <p className="text-gray-400 font-semibold mb-3 text-sm">
                          {leader.position}
                        </p>

                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {leader.description}
                        </p>

                        {/* Responsibilities */}
                        <div className="space-y-2">
                          <h4 className="text-yellow-400 font-semibold text-sm">
                            Key Responsibilities:
                          </h4>
                          {leader.responsibilities.map(
                            (responsibility, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center space-x-2"
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                viewport={{ once: true }}
                              >
                                <motion.div
                                  className="w-2 h-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: idx * 0.3,
                                  }}
                                />
                                <span className="text-gray-400 text-xs">
                                  {responsibility}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>

                        {/* Decorative line */}
                        <motion.div
                          className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4"
                          initial={{ width: 0 }}
                          whileHover={{ width: "4rem" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>{" "}
                      {/* Decorative corner accent */}
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Call to Action Section */}
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
                {/* Decorative corner elements */}
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
                  Join Our Brotherhood
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Interested in becoming part of our leadership team? Learn more
                  about opportunities
                  <br className="hidden sm:block" /> to serve and lead within
                  the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc.
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
                    Learn About Membership
                  </motion.button>
                  <motion.button
                    className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 font-cinzel"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Leadership
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

export default Leadership;
