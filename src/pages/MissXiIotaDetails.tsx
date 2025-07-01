import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Trophy, Heart } from "lucide-react";

// Sample data - replace with actual information
const missXiIotaData = {
  name: "Gabrielle Thompson",
  year: "2024-2025",
  image: "/placeholder.svg", // Replace with actual image
  bio: "Gabrielle Thompson is a junior at the University of Central Florida majoring in Communications with a focus on Public Relations. She is passionate about community outreach, academic excellence, and representing the values of Xi Iota Chapter with grace and leadership.",
  achievements: [
    "Dean's List for 4 consecutive semesters",
    "UCF Student Government Senator",
    "Volunteer coordinator for local youth mentorship program",
    "President of Communications Club",
    "Recipient of the Leadership Excellence Award",
  ],
  platform: "Building bridges through communication and community service",
  hometown: "Orlando, Florida",
  major: "Communications",
  university: "University of Central Florida",
};

export default function MissXiIotaDetails() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 bg-gradient-to-br from-yellow-400/10 via-black to-yellow-600/10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 transition-colors duration-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Royal Court</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative group">
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
                    src={missXiIotaData.image}
                    alt={missXiIotaData.name}
                    className="w-full h-[600px] object-cover rounded-2xl"
                  />

                  {/* Title badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold">
                    Miss Xi Iota {missXiIotaData.year}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div>
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {missXiIotaData.name}
                </motion.h1>

                <motion.div
                  className="space-y-2 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <p className="text-xl text-gray-300 font-semibold">
                    {missXiIotaData.university}
                  </p>
                  <p className="text-lg text-gray-400">
                    {missXiIotaData.major}
                  </p>
                  <p className="text-lg text-gray-400">
                    {missXiIotaData.hometown}
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-6 rounded-2xl border border-yellow-400/30 backdrop-blur-sm mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="text-yellow-400" size={20} />
                    <h3 className="text-lg font-semibold text-yellow-400">
                      Platform
                    </h3>
                  </div>
                  <p className="text-gray-300">{missXiIotaData.platform}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Biography Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-black via-gray-900/20 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-cinzel">
              About <span className="text-yellow-400">Gabrielle</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-yellow-400/20 backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {missXiIotaData.bio}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Achievements */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Trophy className="text-yellow-400" size={32} />
              <h3 className="text-3xl font-bold text-white font-cinzel">
                Notable Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {missXiIotaData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border border-gray-700/30"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star
                    className="text-yellow-400 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
