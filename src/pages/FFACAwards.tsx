import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FFACAwards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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
      {/* Floating Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/2 to-transparent rounded-full"></div>
      </motion.div>

      {/* Greek Letter Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0">
        <div className="absolute top-1/4 left-1/4 text-9xl font-cinzel text-yellow-400 transform rotate-12">
          Α
        </div>
        <div className="absolute top-1/3 right-1/4 text-8xl font-cinzel text-yellow-400 transform -rotate-12">
          Φ
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-9xl font-cinzel text-yellow-400 transform rotate-45">
          Α
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          {/* Hero Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

            {/* Animated Stars */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
              <motion.div className="mb-8" style={{ y: textY }}>
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Award className="w-20 h-20 text-yellow-400 mx-auto" />
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  FFAC Awards
                </motion.h1>
              </motion.div>
            </div>
          </motion.section>

          {/* Major Awards Buttons Section */}
          <section className="py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 relative">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Outstanding Chapter of the Year Button */}
                <motion.button
                  className="group relative aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/40 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    <motion.div
                      className="mb-6"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Trophy className="w-20 h-20 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center font-cinzel leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                      Outstanding Chapter of the Year
                    </h3>

                    <motion.div
                      className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 group-hover:w-32 transition-all duration-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300"></div>
                </motion.button>

                {/* Charles H. Wesley Award Button */}
                <motion.button
                  onClick={() => navigate("/charles-h-wesley-award")}
                  className="group relative aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/40 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    <motion.div
                      className="mb-6"
                      animate={{
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="w-20 h-20 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center font-cinzel leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                      Charles H. Wesley Award
                    </h3>

                    <motion.div
                      className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 group-hover:w-32 transition-all duration-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300"></div>
                </motion.button>
              </motion.div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FFACAwards;
