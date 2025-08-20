import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Users, Star, Trophy } from "lucide-react";

const ChapterHistory = () => {
  const foundingMembers = [
    'Carlton "Bulldog" Evans',
    "Will Nix",
    "Reginald Spann",
    "John Stover",
    "Victor Thomas",
    "Byron Willhite",
    "Michael Wingfield",
  ];

  const timelineEvents = [
    {
      year: "1978",
      title: "The Beginning",
      description:
        "Nine brothers at UCF saw the need for Alpha Phi Alpha on campus and initiated the pledge process.",
      icon: Users,
    },
    {
      year: "1979",
      title: "Study Group Formation",
      description:
        "The Graduate chapter in Orlando was brought into the process and a study group was started.",
      icon: Calendar,
    },
    {
      year: "June 16, 1979",
      title: "Crossing the Burning Sands",
      description:
        "Seven brothers remained and crossed, with a gala celebration held in the Student Center.",
      icon: Star,
    },
    {
      year: "Present",
      title: "Continued Growth",
      description:
        "Xi Iota has adapted to changes and continues to stay active on campus.",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-lora relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl"></div>
      </div>

      {/* Greek Letter Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0">
        <div className="absolute top-1/4 left-1/4 text-9xl font-cinzel text-yellow-400 transform rotate-12">
          Ξ
        </div>
        <div className="absolute top-1/3 right-1/4 text-8xl font-cinzel text-yellow-400 transform -rotate-12">
          Ι
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-9xl font-cinzel text-yellow-400 transform rotate-45">
          Α
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <motion.div
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-yellow-400 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
                Xi Iota Chapter
              </span>
              <div className="text-8xl md:text-9xl font-bold text-yellow-400 font-cinzel mb-4">
                1979
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-7xl font-bold text-white mb-8 font-cinzel leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our <span className="text-yellow-400">Chapter History</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-crimson italic"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              "Seven brothers who saw potential and made it reality"
            </motion.p>
          </div>
        </motion.div>

        {/* Origins Story Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-cinzel">
                  The UCF Beginning
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    The origins of the Xi Iota chapter of Alpha Phi Alpha
                    Fraternity, Inc. at the University of Central Florida
                    parallel the beginnings of the Original chapter at Cornell
                    University in 1906.
                  </p>
                  <p>
                    The University of Central Florida, in 1978, was quite
                    different from what it is today. At that time the university
                    was the only thing within miles. The population at UCF was
                    approximately 14,000 and of that total three percent were
                    African-American.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-8 rounded-2xl border border-yellow-400/30">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-cinzel">
                    UCF in 1978
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">
                        Population: ~14,000 students
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">
                        3% African-American enrollment
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">
                        Limited social life for black students
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Journey to Alpha
            </motion.h2>

            <motion.div
              className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 md:p-12 rounded-2xl border border-yellow-400/30 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  There were already two black fraternities, the Omegas and the
                  Sigmas, but those did not appeal to the needs of the nine
                  brothers who initiated the pledge process. Most were familiar
                  with Alpha Phi Alpha in some way so they went about finding
                  out what would be needed to bring Alpha to UCF.
                </p>
                <p>
                  The Graduate chapter in Orlando was brought into the process
                  and a study group was started. Social life at UCF, for blacks,
                  was virtually non-existent and the brothers saw the potential
                  for Alpha Phi Alpha to greatly improve the atmosphere, which
                  it certainly did.
                </p>
                <p>
                  The pledge process itself was long and arduous and nine
                  brothers soon became eight, then seven. The brothers who
                  remained crossed the burning sands on June 16, 1979, with a
                  gala event held in the Student Center, that summer to
                  celebrate the occasion.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Chapter Timeline
            </motion.h2>

            {/* New Horizontal Timeline Design */}
            <div className="relative">
              {/* Main timeline line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/30 via-yellow-400 to-yellow-400/30 transform -translate-y-1/2"></div>

              {/* Mobile vertical line */}
              <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-yellow-400"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className="relative">
                    {/* Timeline connector for mobile */}
                    <div className="md:hidden absolute left-8 top-8 w-8 h-1 bg-yellow-400"></div>

                    {/* Timeline dot */}
                    <div className="absolute top-8 left-8 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black z-10 shadow-lg hover:scale-110 transition-transform duration-300" />

                    {/* Card */}
                    <div
                      className={`ml-20 md:ml-0 ${
                        index % 2 === 0 ? "md:mb-32" : "md:mt-32"
                      } bg-gradient-to-br from-black to-gray-900 border border-yellow-400/30 p-6 rounded-2xl hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 backdrop-blur-sm relative overflow-hidden group`}
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400/40 group-hover:border-yellow-400 transition-colors duration-300"></div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-full mb-4 group-hover:from-yellow-400/50 group-hover:to-yellow-600/50 transition-all duration-300">
                          <event.icon className="w-6 h-6 text-yellow-400" />
                        </div>

                        {/* Year badge */}
                        <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-3 font-cinzel">
                          {event.year}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 font-cinzel group-hover:text-yellow-400 transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {event.description}
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-4 flex space-x-1">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all duration-500 ${
                                i <= index
                                  ? "bg-yellow-400 w-6"
                                  : "bg-gray-600 w-2"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline number */}
                    <div className="absolute -top-3 left-12 md:left-1/2 md:transform md:-translate-x-1/2 bg-black border-2 border-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-yellow-400 font-bold text-sm font-cinzel z-20 hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline decorative elements */}
              <div className="hidden md:block">
                {/* Start arrow */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-yellow-400"></div>
                </div>

                {/* End arrow */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-yellow-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Members Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Charter Line
            </motion.h2>

            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-8 rounded-2xl border border-yellow-400/50 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-4 right-4 text-yellow-400/30 text-6xl font-cinzel">
                    7
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-6 font-cinzel">
                    Founding Members
                  </h3>
                  <p className="text-yellow-400 mb-6 text-lg font-semibold">
                    Crossed June 16, 1979
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {foundingMembers.map((name, index) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-300"
                      >
                        <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white font-medium">{name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-6 rounded-xl border border-yellow-400/20">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-3 font-cinzel">
                    Legacy of Leadership
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    These seven visionary men laid the foundation for what would
                    become one of the most influential chapters of Alpha Phi
                    Alpha at UCF. Their courage to persevere through the
                    challenging pledge process established a legacy that
                    continues today.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-yellow-400/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                    The Celebration
                  </h4>
                  <p className="text-gray-300">
                    A gala event was held in the Student Center during the
                    summer of 1979 to celebrate this historic achievement and
                    welcome Alpha Phi Alpha to UCF.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 md:p-16 rounded-3xl border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
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
                Our Continuing Legacy
              </motion.h2>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-crimson italic"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "Many things have changed over the years, however Xi Iota has
                adapted to the changes and continued to grow. We are still very
                active on campus and will continue to stay that way."
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 font-cinzel mb-2">
                    45+
                  </div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 font-cinzel mb-2">
                    100+
                  </div>
                  <div className="text-gray-400">Brothers Initiated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 font-cinzel mb-2">
                    ∞
                  </div>
                  <div className="text-gray-400">Impact on UCF</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ChapterHistory;
