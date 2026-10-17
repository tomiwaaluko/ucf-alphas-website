import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Sample data - replace with actual information
const currentMissBlackAndGold = {
  name: "Trinity Smoot",
  year: "2026-2027",
  image: "/missbgcourt/Trinity Smoot.jpg",
  bio: "Raised in West Palm Beach, Florida, Trinity Smoot is a Health Sciences major on the Pre-Clinical track with a minor in Journalism Studies at the University of Central Florida. With aspirations of becoming a sports medicine physician, she hopes to combine her passion for medicine, athletics, and advocacy to ensure that every young athlete has the opportunity to participate, grow, and thrive through sports. Trinity has seen firsthand the confidence, discipline, leadership, and community that sports can build. Through her platform, Youth Sports for All Abilities, she champions accessible athletic opportunities for children of all abilities and works to challenge the idea that a disability should ever define a child's potential. Sports doesn't just build athletes—it builds leaders.",
  achievements: [
    "Miss Black & Gold 2026, Xi Iota Chapter of Alpha Phi Alpha Fraternity, Incorporated",
    "Member of SISTUHS Incorporated",
    "Secretary of Black Undergraduate Kinesiology Association",
    "Special Olympics Florida Volunteer",
    "Troy McQuagge Hope Endowed Scholarship Recipient",
  ],
  platform: "Building confidence, discipline, and opportunity through youth sports",
  hometown: "West Palm Beach, Florida",
  major: "Health Sciences, Pre-Clinical Track. Minor in Journalism Studies",
  university: "University of Central Florida",
};

const currentMissXiIota = {
  name: "Briahna Hill",
  year: "2026-2027",
  image: "/missbgcourt/Briahna Hill.jpg",
  bio: "Briahna Hill is a believer that every individual carries a gift, uniquely their own, and when it is nurtured can unlock the greatest version of themselves. For her, this gift is expressed through her multimedia creativity, compassion, and desire to help herself and others become the best versions of themselves. As a transformational leader, Briahna is a firm believer in the limitless potential of tomorrow's leaders, who are shaped by the guidance of today's mentors. By earning over 1,500 service hours mentoring youth, with an ultimate goal of attending medical school to become a doctor, Briahna believes that continued growth is a necessity for high achievement. One of her greatest achievements will not be just the titles before her name, but the lives that she has forever touched.",
  achievements: [
    "Dean's List for 5 semesters",
    "Fall 2024 initiate of the Pi Psi Chapter of Alpha Kappa Alpha Sorority, Incorporated",
    "Greek Gala Excellence in Community Service award recipient",
    "University of Miami Health Career Motivators Program attendee",
    "President of Jewels Inc and Black Psychology Club at UCF",
  ],
  platform: "Youth Mentorship",
  hometown: "Broward County, Florida",
  major: "Psychology",
  university: "University of Central Florida",
};

const currentMissYellowRose = {
  name: "Elishama Providence",
  year: "2026-2027",
  image: "/missbgcourt/Elishama Providence.jpg",
  bio: "Born in Brooklyn, New York, and raised in Altamonte Springs, Florida, Elishama Providence is a proud first-generation student majoring in nursing at the University of Central Florida. She is pursuing her second degree in Bachelor of Science in Nursing with the dream of becoming a neonatal nurse practitioner, where she hopes to provide advocacy and compassionate care while making a lasting impact within the community. She carries light into every room, reminding others that faith, hope, and grace still exist.",
  achievements: [
    "First-generation college student",
    "Works as a Neonatal ICU registered nurse",
    "Community Service Chair of Fanm Kreyol Inc",
    "Miss Yellow Rose",
    "Member of Club Kreyol",
  ],
  platform: "Mental Health Mentorship within the Education Community",
  hometown: "Altamonte Springs, Florida",
  major: "Nursing",
  university: "University of Central Florida",
};

const previousWinners = [
  {
    name: "Grace Castelin",
    year: "2024-2025",
    image: "/missbgcourt/previouswinners/Grace-Castelin.png",
    major: "B.A. in Political Science",
  },
  {
    name: "Ta'mia Brownlee",
    year: "2023-2024",
    image: "/missbgcourt/previouswinners/Tamia-Shade1.png",
    major:
      "M.S. Medical Physiology and Pharmacology B.S. in Biology with a minor in Sociology",
  },
  {
    name: "Jourdan Campbell",
    year: "2022-2023",
    image: "/missbgcourt/previouswinners/Jourdan-Campbell.png",
    major: "B.S. Psychology - Neuroscience",
  },
];

const MissBlackAndGold = () => {
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

          {/* Royal Court Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900/20 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/2 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600/2 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/1 to-transparent rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-5xl md:text-7xl font-bold mb-8 font-cinzel leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-yellow-400">Introducing Our</span>
                  <br />
                  <span className="text-white">2025-2026</span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Royal Court
                  </span>
                </motion.h2>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                  <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-8 py-3 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold text-lg">
                    Excellence • Elegance • Leadership
                  </span>
                </motion.div>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Meet the exceptional women who represent the highest ideals of
                  scholarship, service, and sisterhood in our community.
                </motion.p>
              </motion.div>

              {/* Royal Court Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Miss Black and Gold */}
                <motion.div
                  className="relative group"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-yellow-400/30 backdrop-blur-sm overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative frame */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={currentMissBlackAndGold.image}
                        alt={currentMissBlackAndGold.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Title badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm">
                        Miss Black & Gold
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
                        {currentMissBlackAndGold.name}
                      </motion.h3>
                      <p className="text-gray-400 font-semibold mb-2">
                        {currentMissBlackAndGold.university}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {currentMissBlackAndGold.major}
                      </p>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        Platform: {currentMissBlackAndGold.platform}
                      </p>

                      {/* Decorative line */}
                      <motion.div
                        className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 mb-4"
                        initial={{ width: 0 }}
                        whileHover={{ width: "4rem" }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Learn More Button */}
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          window.open("/miss-black-and-gold-details", "_self");
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
                  </motion.div>
                </motion.div>

                {/* Miss Xi Iota */}
                <motion.div
                  className="relative group"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-yellow-400/30 backdrop-blur-sm overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative frame */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />

                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={currentMissXiIota.image}
                        alt={currentMissXiIota.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Title badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm">
                        Miss Xi Iota
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
                        {currentMissXiIota.name}
                      </motion.h3>
                      <p className="text-gray-400 font-semibold mb-2">
                        {currentMissXiIota.university}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {currentMissXiIota.major}
                      </p>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        Platform: {currentMissXiIota.platform}
                      </p>

                      {/* Decorative line */}
                      <motion.div
                        className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 mb-4"
                        initial={{ width: 0 }}
                        whileHover={{ width: "4rem" }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Learn More Button */}
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          window.open("/miss-xi-iota-details", "_self");
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
                  </motion.div>
                </motion.div>

                {/* Miss Yellow Rose */}
                <motion.div
                  className="relative group"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-yellow-400/30 backdrop-blur-sm overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative frame */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    />

                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={currentMissYellowRose.image}
                        alt={currentMissYellowRose.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Title badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold text-sm">
                        Miss Yellow Rose
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
                        {currentMissYellowRose.name}
                      </motion.h3>
                      <p className="text-gray-400 font-semibold mb-2">
                        {currentMissYellowRose.university}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {currentMissYellowRose.major}
                      </p>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        Platform: {currentMissYellowRose.platform}
                      </p>

                      {/* Decorative line */}
                      <motion.div
                        className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 mb-4"
                        initial={{ width: 0 }}
                        whileHover={{ width: "4rem" }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Learn More Button */}
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          window.open("/miss-yellow-rose-details", "_self");
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
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
                          className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                            winner.name === "Grace Castelin"
                              ? "object-cover object-top"
                              : "object-cover"
                          }`}
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
                          {winner.major}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Call to Action Section */}
          {/* <motion.section
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
          </motion.section> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MissBlackAndGold;
