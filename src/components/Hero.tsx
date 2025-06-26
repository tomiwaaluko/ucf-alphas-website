import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Chapter name in smaller text */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-400 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
            Xi Iota Chapter
          </p>
        </motion.div>{" "}
        {/* Main title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-cinzel"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-white block mb-2">WELCOME TO THE</span>
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            494
            <sup className="text-base md:text-lg lg:text-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent align-top">
              TH
            </sup>{" "}
            HOUSE OF ALPHA
          </span>
        </motion.h1>
        {/* Fraternity name */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Alpha Phi Alpha Fraternity, Inc.
        </motion.h2>{" "}
        {/* Motto */}
        <motion.p
          className="text-lg md:text-xl text-yellow-400 mb-16 font-light tracking-wide font-crimson italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          "First of All, Servants of All, We Shall Transcend All"
        </motion.p>
        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("greetings")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-400 text-black px-8 py-4 text-lg font-medium hover:bg-yellow-300 transition-all duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            onClick={() => navigate("/contact")}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
