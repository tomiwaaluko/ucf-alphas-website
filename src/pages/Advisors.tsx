import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Advisors = () => {
  const [hoveredAdvisor, setHoveredAdvisor] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const advisors = [
    {
      id: 1,
      name: "Martin A. Johnson",
      position: "Graduate Advisor",
      title: "Senior Army Instructor",
      organization: "Paul J Hagerty HS",
      achievements: [
        "Bronze Star Medal",
        "Medal Meritorious Service Medal (4)",
        "Army Commendation Medal (5)",
        "Distinguished Military Graduate",
        "Superior Graduate Army ILE",
        "Who's Who Among Colleges and Universities 1996",
      ],
      quote:
        "You must remember that words mean things. A person may forget the exact words you said, but they will never forget how those words made them feel.",
      image: "/advisors/IMG_3904 - Martin Johnson.jpeg",
    },
    {
      id: 2,
      name: "Brodrick D. Johnson",
      position: "Campus Advisor",
      title: "Assistant AD for Student-Athlete Development",
      organization: "University of Central Florida",
      achievements: [
        "2024 Sporty Recipient - Social Responsibility",
        "2023-2024 Outstanding Community Partner - Orange County Public Schools",
        "15+ Years College Athletics Experience",
      ],
      quote:
        "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars, to change the world.",
      image: "/advisors/IMG_1244 - Bhop Johnson.jpeg",
    },
    {
      id: 3,
      name: "Dr. James Thompson",
      position: "Academic Advisor",
      title: "Dean of Student Affairs",
      organization: "University of North Texas",
      achievements: [
        "Academic Excellence Leadership",
        "Student Success Advocate",
        "Higher Education Innovation",
      ],
      quote:
        "Education is the most powerful weapon which you can use to change the world.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Mr. Charles Davis",
      position: "Alumni Relations Advisor",
      title: "Corporate Executive",
      organization: "Fortune 500 Company",
      achievements: [
        "Corporate Leadership Excellence",
        "Alumni Network Development",
        "Professional Mentorship",
      ],
      quote:
        "The strength of the pack is the wolf, and the strength of the wolf is the pack.",
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
                  Meet the <span className="text-white">Advisors</span>
                </motion.h1>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                  <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-6 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                    Guidance • Wisdom • Leadership
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
                  Our distinguished advisors provide invaluable guidance,
                  wisdom, and mentorship to the
                  <br className="hidden sm:block" />
                  Xi Iota Chapter. These accomplished leaders help shape our
                  brothers into men of
                  <br className="hidden sm:block" />
                  excellence while preserving the rich traditions of Alpha Phi
                  Alpha.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Advisors Grid Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {advisors.map((advisor, index) => (
                  <motion.div
                    key={advisor.id}
                    className="relative group cursor-pointer overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredAdvisor(advisor.id)}
                    onHoverEnd={() => setHoveredAdvisor(null)}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Position Badge */}
                      <div className="absolute top-4 right-4 bg-black/80 text-yellow-400 px-3 py-1 rounded text-sm backdrop-blur-sm border border-yellow-400/30">
                        {advisor.position}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                        <h3 className="text-yellow-400 font-semibold text-xl mb-2 font-cinzel">
                          {advisor.name}
                        </h3>
                        <p className="text-white text-sm mb-2">
                          {advisor.title}
                        </p>
                        <p className="text-gray-300 text-xs mb-4">
                          {advisor.organization}
                        </p>
                        <Link
                          to={`/advisor/${advisor.id}`}
                          className="bg-yellow-400 text-black px-6 py-2 text-sm font-medium hover:bg-yellow-300 transition-colors duration-200 rounded"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Wisdom & Guidance Section */}
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
                  Wisdom Through Experience
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our advisors bring decades of professional experience,
                  academic excellence, and fraternal wisdom to guide our
                  chapter. They serve as mentors, role models, and champions of
                  our mission to develop leaders who serve humanity. Their
                  guidance ensures that our traditions remain strong while we
                  continue to evolve and grow.
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
                    Contact Our Advisors
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

export default Advisors;
