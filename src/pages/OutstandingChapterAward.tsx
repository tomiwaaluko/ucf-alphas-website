import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Trophy, Construction } from "lucide-react";

const OutstandingChapterAward = () => {
  return (
    <div className="min-h-screen bg-black text-white font-lora">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Trophy Icon */}
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <Trophy className="w-32 h-32 text-yellow-400 mx-auto" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Construction className="w-12 h-12 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Outstanding Chapter of the Year
          </motion.h1>

          {/* Under Construction Message */}
          <motion.div
            className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-2 border-yellow-400/30 rounded-2xl p-12 backdrop-blur-sm"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Construction className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-cinzel">
              Under Construction
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              This page is currently being developed, please check back later.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <Trophy className="w-8 h-8 text-yellow-400" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OutstandingChapterAward;
