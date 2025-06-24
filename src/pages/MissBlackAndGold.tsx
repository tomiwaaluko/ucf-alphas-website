import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Sample data - replace with actual information
const currentMissBlackAndGold = {
  name: "Ashley Johnson",
  year: "2024-2025",
  image: "/placeholder.svg", // Replace with actual image
  bio: "Ashley Johnson is a senior at Howard University majoring in Political Science with a minor in International Relations. She is passionate about social justice, women's empowerment, and community service. Ashley has been actively involved in various campus organizations and has volunteered over 200 hours in community outreach programs.",
  achievements: [
    "Dean's List for 6 consecutive semesters",
    "Student Government Association Vice President",
    "Founder of 'Women in Leadership' campus organization",
    "Volunteer coordinator for local homeless shelter",
    "Recipient of the Academic Excellence Scholarship",
  ],
  platform: "Empowering young women through education and mentorship",
  hometown: "Atlanta, Georgia",
  major: "Political Science",
  university: "Howard University",
};

const previousWinners = [
  {
    name: "Jasmine Williams",
    year: "2023-2024",
    image: "/placeholder.svg",
    university: "Spelman College",
  },
  {
    name: "Brianna Davis",
    year: "2022-2023",
    image: "/placeholder.svg",
    university: "North Carolina A&T",
  },
  {
    name: "Destiny Brown",
    year: "2021-2022",
    image: "/placeholder.svg",
    university: "Hampton University",
  },
  {
    name: "Alexis Thompson",
    year: "2020-2021",
    image: "/placeholder.svg",
    university: "Florida A&M University",
  },
  {
    name: "Maya Robinson",
    year: "2019-2020",
    image: "/placeholder.svg",
    university: "Morehouse College",
  },
  {
    name: "Zoe Anderson",
    year: "2018-2019",
    image: "/placeholder.svg",
    university: "Clark Atlanta University",
  },
];

const MissBlackAndGold = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const currentMissRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);
  const isCurrentMissInView = useInView(currentMissRef);

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
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-500/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/1 to-transparent rounded-full"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
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
                  Miss Black <span className="text-white">&</span> Gold
                </motion.h1>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                  <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-6 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                    Celebrating Excellence, Elegance & Leadership
                  </span>
                </motion.div>

                <motion.div
                  className="max-w-4xl mx-auto text-gray-300 space-y-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <p className="text-xl md:text-2xl leading-relaxed">
                    The Miss Black and Gold pageant is one of our signature
                    events that celebrates the elegance, intelligence, and
                    leadership of young African American women.
                  </p>
                  <p className="text-lg">
                    This annual competition showcases contestants who embody the
                    values of scholarship, service, and sisterhood that align
                    with our fraternity's principles.
                  </p>
                  <p className="text-lg">
                    Through this event, we provide a platform for young women to
                    demonstrate their talents, express their views on important
                    social issues, and compete for scholarship opportunities.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Current Miss Black and Gold Section */}
          <motion.section
            ref={currentMissRef}
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

            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  Current{" "}
                  <span className="text-yellow-400">Miss Black and Gold</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  {currentMissBlackAndGold.year}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <motion.div
                  className="relative"
                  initial={{ x: -100, opacity: 0 }}
                  animate={
                    isCurrentMissInView
                      ? { x: 0, opacity: 1 }
                      : { x: -100, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <div className="relative group">
                    {/* Decorative frame */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div
                      className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-2 rounded-3xl border border-yellow-400/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={currentMissBlackAndGold.image}
                        alt={currentMissBlackAndGold.name}
                        className="w-full h-[600px] object-cover rounded-2xl"
                      />
                    </motion.div>

                    {/* Crown decorative element */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-2xl">👑</span>
                    </motion.div>

                    {/* Decorative corner elements */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400/50"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400/50"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400/50"></div>
                  </div>
                </motion.div>

                {/* Bio Section */}
                <motion.div
                  className="relative"
                  style={{ y: textY }}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    isCurrentMissInView
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 font-cinzel"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isCurrentMissInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {currentMissBlackAndGold.name}
                  </motion.h3>

                  <motion.div
                    className="mb-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={
                      isCurrentMissInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                        {currentMissBlackAndGold.university}
                      </span>
                      <span className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                        {currentMissBlackAndGold.major}
                      </span>
                    </div>
                    <p className="text-yellow-400 font-semibold text-lg">
                      Platform: {currentMissBlackAndGold.platform}
                    </p>
                    <p className="text-gray-400">
                      Hometown: {currentMissBlackAndGold.hometown}
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isCurrentMissInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 1 }}
                  >
                    {currentMissBlackAndGold.bio}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    className="space-y-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      isCurrentMissInView
                        ? { y: 0, opacity: 1 }
                        : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 font-cinzel">
                      Notable Achievements
                    </h4>
                    {currentMissBlackAndGold.achievements.map(
                      (achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ x: 50, opacity: 0 }}
                          animate={
                            isCurrentMissInView
                              ? { x: 0, opacity: 1 }
                              : { x: 50, opacity: 0 }
                          }
                          transition={{
                            duration: 0.8,
                            delay: 1.4 + index * 0.1,
                          }}
                        >
                          <motion.div
                            className="flex-shrink-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mt-2"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                          <p className="text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Previous Winners Gallery */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-400/2 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-yellow-600/2 rounded-full blur-3xl"></div>
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
                  Previous <span className="text-yellow-400">Queens</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Honoring our legacy of excellence and leadership
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {previousWinners.map((winner, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-yellow-400/20 backdrop-blur-sm overflow-hidden"
                      whileHover={{ scale: 1.05 }}
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
                        />

                        <img
                          src={winner.image}
                          alt={winner.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Year badge */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full font-bold text-sm">
                          {winner.year}
                        </div>

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
                          {winner.name}
                        </motion.h3>
                        <p className="text-gray-400 font-semibold">
                          {winner.university}
                        </p>

                        {/* Decorative line */}
                        <motion.div
                          className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4"
                          initial={{ width: 0 }}
                          whileHover={{ width: "4rem" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
                    </motion.div>

                    {/* Floating crown for hover effect */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-sm">👑</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            className="py-20"
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
                  Become the Next Miss Black and Gold
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Join the legacy of exceptional women who have represented our
                  fraternity with grace, intelligence, and leadership.
                  Applications for the next Miss Black and Gold competition will
                  be available soon.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel">
                      Learn More About Applications
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 font-cinzel"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
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

export default MissBlackAndGold;
