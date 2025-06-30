import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Trophy,
  Target,
  Heart,
  BookOpen,
  Globe,
  Scroll,
} from "lucide-react";

const FraternityHistory = () => {
  const timelineEvents = [
    {
      year: "1906",
      title: "Founding of the Fraternity",
      description:
        "Alpha Phi Alpha Fraternity, Inc. was founded on December 4, 1906, at Cornell University, as the first intercollegiate Greek-letter fraternity for African American men.",
      icon: Calendar,
    },
    {
      year: "1908",
      title: "Incorporation",
      description:
        "The fraternity was officially incorporated on April 3, 1908, in Washington, D.C., enabling national expansion and governance.",
      icon: Scroll,
    },
    {
      year: "1931",
      title: "First International Chapter Established",
      description:
        "In 1931, Alpha Phi Alpha established its first international chapter in London, England. This milestone marked the beginning of the fraternity's global presence and influence.",
      icon: Globe,
    },
  ];

  const principles = [
    {
      title: "Scholarship",
      description: "Academic excellence and intellectual growth",
      icon: BookOpen,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Brotherhood",
      description: "Clear, powerful, and directly tied to fraternal life",
      icon: Users,
      color: "from-yellow-300 to-yellow-500",
    },
    {
      title: "Good Character",
      description: "Moral integrity and ethical leadership",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Uplifting Humanity",
      description: "Service to community and mankind",
      icon: Target,
      color: "from-yellow-200 to-yellow-400",
    },
  ];

  const notableAlphas = [
    "Martin Luther King Jr.",
    "W.E.B. DuBois",
    "Thurgood Marshall",
    "Adam Clayton Powell Jr.",
    "Andrew Young",
    "Paul Robeson",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section with Parallax Effect */}
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
              Since
            </span>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400 font-cinzel mb-4">
              1906
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-8 font-cinzel leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Legacy of <span className="text-yellow-400">Leadership</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-crimson italic"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "The first intercollegiate Greek-letter fraternity established for
            African-Americans"
          </motion.p>
        </div>
      </motion.div>

      {/* Founding Story Section */}
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
                The Beginning
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  On a cold December evening in 1906, seven visionary men
                  gathered at Cornell University with a dream that would change
                  history. They envisioned an organization that would uplift
                  their people and provide a brotherhood for African-American
                  college men.
                </p>
                <p>
                  What started as a study group became the foundation for the
                  most influential African-American fraternity in history,
                  producing leaders who would shape civil rights, politics,
                  business, and culture for generations to come.
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
                  The Seven Jewels
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Henry Arthur Callis",
                    "Charles Henry Chapman",
                    "Eugene Kinckle Jones",
                    "George Biddle Kelley",
                    "Nathaniel Allison Murray",
                    "Robert Harold Ogle",
                    "Vertner Woodson Tandy",
                  ].map((name, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white font-medium">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/30 h-full">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6 font-cinzel">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Alpha Phi Alpha Fraternity, Inc. develops leaders, promotes
                  brotherhood and academic excellence, while providing service
                  and advocacy for our communities.
                </p>

                <h4 className="text-2xl font-bold text-yellow-400 mb-6 font-cinzel">
                  Our Objectives
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>To stimulate the ambition of its members</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>
                      To prepare them for the greatest usefulness in the causes
                      of humanity, freedom, and dignity of the individual
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>
                      To encourage the highest and noblest form of manhood
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>
                      To aid downtrodden humanity in its efforts to achieve
                      higher social, economic and intellectual status
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-6 rounded-xl border border-yellow-400/50">
                <h4 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                  Our Motto
                </h4>
                <p className="text-2xl font-crimson italic text-yellow-400">
                  "First of All, Servants of All, We Shall Transcend All"
                </p>
              </div>

              <div className="bg-black p-6 rounded-xl border border-yellow-400/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                  Our Aims
                </h4>
                <p className="text-gray-300">
                  Manly Deeds, Scholarship, and Love for all Mankind
                </p>
              </div>

              <div className="bg-black p-6 rounded-xl border border-yellow-400/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                  Founded
                </h4>
                <p className="text-gray-300">
                  December 4, 1906
                  <br />
                  Cornell University
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key Milestones
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-black border border-yellow-400/30 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <event.icon className="w-6 h-6 text-yellow-400 mr-3" />
                      <span className="text-2xl font-bold text-yellow-400 font-cinzel">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-cinzel">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section with Interactive Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Foundation
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <principle.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Members Carousel */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-400 mb-16 text-center font-cinzel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Leaders Who Changed the World
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {notableAlphas.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold cursor-pointer"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-xl text-gray-300 font-crimson italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            True to its form as the 'first of firsts,' Alpha Phi Alpha has been
            interracial since 1945
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FraternityHistory;
