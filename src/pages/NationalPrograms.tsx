import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NationalPrograms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const programs = [
    {
      id: "brothers-keeper",
      title: "Brother's Keeper",
      subtitle:
        "Formerly called the A. Charles Haston Brother's Keeper program",
      description:
        "This service program developed with the mission of advocating and improving the quality of life for Alpha Phi Alpha Fraternity, Inc.'s senior brothers, their spouses and widows; brothers who are retired and have disabilities or ailments; and vulnerable community members.",
      icon: "https://static.wixstatic.com/media/f84812_0d8820ef9acd469d9286f2c8d96ce2c0~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f84812_0d8820ef9acd469d9286f2c8d96ce2c0~mv2.png",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-yellow-600/10",
      borderColor: "border-yellow-400/20",
    },
    {
      id: "voteless-people",
      title: "A Voteless People is a Hopeless People",
      subtitle: "Civic Engagement & Voter Registration Initiative",
      description:
        '"A Voteless People is a Hopeless People" (aka VPHP) was initiated as a National Program of Alpha during the 1930\'s when many African-Americans had the right to vote but were prevented from voting because of poll taxes, threats of reprisal, and lack of education about the voting process. Voter education and registration have remained a dominant focus of this outreach activity for over 85 years.',
      icon: "https://static.wixstatic.com/media/f84812_f91b76115b244f4bb61f0142e1e79b30~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f84812_f91b76115b244f4bb61f0142e1e79b30~mv2.png",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-yellow-600/10",
      borderColor: "border-yellow-400/20",
    },
    {
      id: "go-to-college",
      title: "Go-to-High-School, Go-to-College",
      subtitle: "Educational Excellence Program",
      description:
        'The "Go-to-High-School, Go-to-College" program, established in 1922, concentrates on the importance of completing secondary and collegiate education as a road to advancement. This program motivates young men to pursue higher education and provides them with the tools for academic success.',
      icon: "https://static.wixstatic.com/media/f84812_61a0931ae2234082af39feea44e937c4~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f84812_61a0931ae2234082af39feea44e937c4~mv2.png",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-yellow-600/10",
      borderColor: "border-yellow-400/20",
    },
    {
      id: "project-alpha",
      title: "Project Alpha",
      subtitle: "Health & Wellness Initiative",
      description:
        "This collaborative project, which is symbolized by both genders signs side by side, is designed to provide education, motivation, and skill-building on issues of responsibility, relationships, teen pregnancy, and sexually transmitted diseases for young males ages 12-15 years. Designed to provide young men with current and accurate information about teen pregnancy prevention.",
      icon: "https://static.wixstatic.com/media/f84812_d0a7ba3dde8445ad8ba7aa6dbc4d6787~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f84812_d0a7ba3dde8445ad8ba7aa6dbc4d6787~mv2.png",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-yellow-600/10",
      borderColor: "border-yellow-400/20",
    },
  ];
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
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  National Programs
                </motion.h1>

                {/* Decorative Line */}
                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 1, delay: 0.6 }}
                />

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Alpha Phi Alpha Fraternity, Inc. sponsors national programs
                  that address the needs of our communities and align with our
                  core values of scholarship, fellowship, good character, and
                  the uplifting of humanity.
                </motion.p>
              </motion.div>

              <motion.div
                className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-8 py-4 rounded-full border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-yellow-400 font-semibold text-lg relative z-10">
                  Making a Difference Since 1906
                </span>
              </motion.div>
            </div>
          </motion.section>{" "}
          {/* Programs Section */}
          <section className="py-20 relative">
            {/* Section Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/2 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Section Header */}
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  Our <span className="text-yellow-400">Legacy</span> Programs
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Decades of commitment to community service and social progress
                </p>
              </motion.div>

              <div className="space-y-32">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Connection Line */}
                    {index < programs.length - 1 && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent z-10"
                        initial={{ height: 0 }}
                        whileInView={{ height: "4rem" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    )}
                    {/* Floating Elements Around Card */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full"
                        animate={{
                          y: [-10, 10, -10],
                          x: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 4 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-6 -left-6 w-6 h-6 bg-yellow-400/15 rounded-full"
                        animate={{
                          y: [10, -10, 10],
                          x: [5, -5, 5],
                        }}
                        transition={{
                          duration: 3 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                    {/* Program Card */}
                    <div
                      className={`relative overflow-hidden rounded-3xl ${program.bgColor} ${program.borderColor} border-2 hover:border-yellow-400/60 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/20 backdrop-blur-sm`}
                    >
                      {/* Animated Background Gradient */}
                      {/* <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/5"
                        animate={{
                          x: [-100, 400, -100],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      /> */}

                      {/* Decorative Background Elements */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>

                      {/* Geometric Pattern Overlay */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-yellow-400 transform rotate-45"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 border border-yellow-400 rounded-full"></div>
                      </div>

                      <div
                        className={`relative z-10 p-8 md:p-16 flex flex-col ${
                          index % 2 === 0
                            ? "lg:flex-row"
                            : "lg:flex-row-reverse"
                        } items-center gap-12`}
                      >
                        {/* Icon Section */}
                        <motion.div
                          className="flex-shrink-0 relative"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          {/* Pulsing Ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />

                          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-150"></div>
                          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-full flex items-center justify-center border-2 border-yellow-400/40 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                            <motion.img
                              src={program.icon}
                              alt={`${program.title} icon`}
                              className="w-24 h-24 md:w-32 md:h-32 opacity-90 group-hover:opacity-100 transition-opacity duration-500 object-contain filter drop-shadow-lg"
                              whileHover={{
                                filter: "brightness(1.1) contrast(1.1)",
                              }}
                            />
                          </div>
                        </motion.div>
                        {/* Content Section */}
                        <div className="flex-1 text-center lg:text-left space-y-6">
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -50 : 50,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <motion.h2
                              className="text-3xl md:text-5xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-500 font-cinzel leading-tight"
                              whileHover={{
                                textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                              }}
                            >
                              {program.title}
                            </motion.h2>

                            <motion.div
                              className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto lg:mx-0 mb-4 group-hover:w-32 transition-all duration-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: "6rem" }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                              viewport={{ once: true }}
                            />

                            <motion.p
                              className="text-yellow-400 font-semibold mb-6 text-xl"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              {program.subtitle}
                            </motion.p>
                          </motion.div>

                          {/* Quote or Impact Statement */}
                          <motion.div
                            className="relative p-6 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-2xl border-l-4 border-yellow-400/50 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <div className="absolute top-2 left-2 text-yellow-400/30 text-4xl font-serif">
                              "
                            </div>
                            <p className="text-gray-300 italic text-lg pl-8 font-crimson-pro">
                              {index === 0 &&
                                "Supporting our senior brothers and vulnerable community members with dignity and care."}
                              {index === 1 &&
                                "Empowering citizens through education and civic participation since the 1930s."}
                              {index === 2 &&
                                "Inspiring young minds to pursue academic excellence and higher education since 1922."}
                              {index === 3 &&
                                "Educating young men about responsibility, relationships, and healthy decision-making."}
                            </p>
                          </motion.div>

                          <motion.p
                            className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {program.description}
                          </motion.p>

                          {/* Stats or Impact Numbers */}
                          <motion.div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            viewport={{ once: true }}
                          >
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400 font-cinzel">
                                {index === 0 && "85+"}
                                {index === 1 && "90+"}
                                {index === 2 && "100+"}
                                {index === 3 && "30+"}
                              </div>
                              <div className="text-sm text-gray-400">
                                {index === 0 && "Years of Service"}
                                {index === 1 && "Years of Impact"}
                                {index === 2 && "Years of Excellence"}
                                {index === 3 && "Years of Education"}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400 font-cinzel">
                                {index === 0 && "1000+"}
                                {index === 1 && "500K+"}
                                {index === 2 && "10K+"}
                                {index === 3 && "5K+"}
                              </div>
                              <div className="text-sm text-gray-400">
                                {index === 0 && "Lives Touched"}
                                {index === 1 && "Voters Registered"}
                                {index === 2 && "Students Supported"}
                                {index === 3 && "Young Men Educated"}
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            viewport={{ once: true }}
                          >
                            <Link
                              to={`/program/${program.id}`}
                              className="group/btn relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-400/40 font-cinzel text-lg overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                initial={{ x: -100 }}
                                whileHover={{ x: 100 }}
                                transition={{ duration: 0.6 }}
                              />
                              <span className="relative z-10">LEARN MORE</span>
                              <motion.svg
                                className="ml-3 w-6 h-6 relative z-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 5 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </motion.svg>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    {/* Enhanced Program Number */}
                    <motion.div
                      className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl font-cinzel shadow-2xl z-20 border-2 border-yellow-300"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
                      }}
                    >
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(0,0,0,0.5)",
                            "0 0 5px rgba(0,0,0,0.8)",
                            "0 0 0px rgba(0,0,0,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                    </motion.div>
                    {/* Year Badge */}
                    <motion.div
                      className="absolute -top-3 -right-3 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-yellow-400 font-semibold text-sm">
                        {index === 0 && "Since 1950s"}
                        {index === 1 && "Since 1930s"}
                        {index === 2 && "Since 1922"}
                        {index === 3 && "Since 1980s"}
                      </span>
                    </motion.div>{" "}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Enhanced Statistics Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/3 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-600/3 rounded-full blur-3xl"></div>
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
                  Our <span className="text-yellow-400">Impact</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Over a century of transformative community service
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "117", label: "Years of Service", suffix: "+" },
                  { number: "750", label: "Chapters Worldwide", suffix: "+" },
                  { number: "300K", label: "Members Served", suffix: "+" },
                  { number: "50M", label: "Lives Impacted", suffix: "+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="text-4xl md:text-6xl font-bold text-yellow-400 font-cinzel mb-2"
                        animate={{
                          textShadow: [
                            "0 0 20px rgba(251, 191, 36, 0.3)",
                            "0 0 30px rgba(251, 191, 36, 0.6)",
                            "0 0 20px rgba(251, 191, 36, 0.3)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {stat.number}
                        <span className="text-yellow-300">{stat.suffix}</span>
                      </motion.div>
                      <p className="text-gray-300 font-semibold group-hover:text-white transition-colors duration-300">
                        {stat.label}{" "}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          {/* Call to Action Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                />
              ))}
            </div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
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
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 font-cinzel"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Get Involved
                </motion.h2>

                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Join us in making a difference in our communities through
                  these impactful programs.
                </motion.p>

                <motion.div
                  className="relative inline-block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.button
                    className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us to Learn More
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

export default NationalPrograms;
