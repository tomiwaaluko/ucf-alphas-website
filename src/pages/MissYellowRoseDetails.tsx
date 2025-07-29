import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

// Sample data - this would match the data from MissBlackAndGold.tsx
const currentMissYellowRose = {
  name: "Courtney Edgecombe",
  year: "2025-2026",
  image: "/public/missbgcourt/courtney-edgecombe.jpeg",
  bio: "Born and raised in Nassau, Bahamas, Courtney Edgecombe is a proud international student at the University of Central Florida, majoring in Real Estate. She wants to become a real estate developer one day. Courtney is not only ambitious but also deeply values mentorship, empowerment, and service. Her journey has been filled with challenges, but she remains steadfast in her belief that faith and resilience will open doors to unimaginable opportunities.",
  achievements: [
    "Lewis foundation scholar",
    "President of NCNW",
    "Miss Yellow Rose",
    "Member of National Council of Negro Women",
    "Member of Rekonstruktion Dance Troupe",
  ],
  platform: "Sustainable living",
  hometown: "Nassau, Bahamas",
  major: "Real estate",
  university: "University of Central Florida",
};

const MissYellowRoseDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
            className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4">
              {/* Back Button */}
              <motion.button
                onClick={() => window.history.back()}
                className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8 group"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Royal Court
              </motion.button>

              <div className="text-center mb-16">
                <motion.div
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-bold text-sm mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Miss Yellow Rose {currentMissYellowRose.year}
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 font-cinzel leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {currentMissYellowRose.name}
                </motion.h1>

                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.section>

          {/* Detailed Bio Section */}
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

            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Image Section */}
                <motion.div
                  className="relative"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
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
                        src={currentMissYellowRose.image}
                        alt={currentMissYellowRose.name}
                        className="w-full h-[600px] object-cover rounded-2xl"
                      />
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
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="mb-8 space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                        {currentMissYellowRose.university}
                      </span>
                      <span className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                        {currentMissYellowRose.major}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-yellow-400 font-semibold text-lg">
                        Platform: {currentMissYellowRose.platform}
                      </p>
                      <p className="text-gray-400">
                        Hometown: {currentMissYellowRose.hometown}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-cinzel">
                      About
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {currentMissYellowRose.bio}
                    </p>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    className="space-y-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-2xl font-bold text-yellow-400 mb-6 font-cinzel">
                      Notable Achievements
                    </h4>
                    <div className="grid gap-4">
                      {currentMissYellowRose.achievements.map(
                        (achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-4 bg-gradient-to-r from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-lg p-4 backdrop-blur-sm"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 1.2 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
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
                            <p className="text-gray-300 leading-relaxed font-medium">
                              {achievement}
                            </p>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
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
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 font-cinzel"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Inspired by {currentMissYellowRose.name}?
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Learn more about our Miss Black and Gold pageant and how you
                  can become part of this legacy of excellence.
                </motion.p>

                <motion.button
                  onClick={() =>
                    (window.location.href = "/miss-black-and-gold")
                  }
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel hover:scale-105"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Royal Court
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MissYellowRoseDetails;
