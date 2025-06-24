import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const jewelData = {
  "henry-callis": {
    name: "Henry Arthur Callis",
    image: "https://apa1906.net/wp-content/uploads/2018/08/Image-8@2x.png",
    bio: "Henry Arthur Callis was born in Rochester, New York in 1887. He was one of the founding members of Alpha Phi Alpha Fraternity, Inc. and served as the first Vice President of the organization. Callis was a physician and surgeon who dedicated his life to serving his community and advancing the cause of African American education and civil rights.",
    achievements: [
      "First Vice President of Alpha Phi Alpha Fraternity, Inc.",
      "Renowned physician and surgeon",
      "Advocate for African American education",
      "Community leader and civil rights activist",
    ],
  },
  "charles-chapman": {
    name: "Charles Henry Chapman",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/efc77a04961ecfbe95d84981c48558b6@2x.png",
    bio: "Charles Henry Chapman was a founding member of Alpha Phi Alpha Fraternity, Inc. Born in 1886, Chapman was known for his dedication to academic excellence and his commitment to the principles of scholarship and service that became hallmarks of the fraternity.",
    achievements: [
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Academic excellence advocate",
      "Committed to scholarship and service",
      "Leader in early fraternity development",
    ],
  },
  "eugene-jones": {
    name: "Eugene Kinckle Jones",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/e445b9b1f863a938bb14aa0403ae818b@2x.png",
    bio: "Eugene Kinckle Jones was a prominent social worker and civil rights leader. As one of the Seven Jewels, he helped establish the foundation of Alpha Phi Alpha and went on to become a significant figure in the National Urban League, serving as its executive secretary for many years.",
    achievements: [
      "Executive Secretary of the National Urban League",
      "Prominent social worker and civil rights leader",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Advocate for African American advancement",
    ],
  },
  "george-kelley": {
    name: "George Biddle Kelley",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/829c7a18781d10f5e1192abde73e8c9c@2x.png",
    bio: "George Biddle Kelley was the first African American certified public accountant in the state of New York. As one of the Seven Jewels, he brought financial expertise and business acumen to the early development of Alpha Phi Alpha Fraternity, Inc.",
    achievements: [
      "First African American CPA in New York State",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Business and financial expert",
      "Pioneer in professional accounting",
    ],
  },
  "nathaniel-murray": {
    name: "Nathaniel Allison Murray",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/350cc52b1906736d4c3162883f62d3fa@2x.png",
    bio: "Nathaniel Allison Murray was one of the youngest founding members of Alpha Phi Alpha Fraternity, Inc. He was known for his intellectual prowess and his commitment to the academic mission of the fraternity, helping to establish the standards of scholarship that continue today.",
    achievements: [
      "Youngest founding member of Alpha Phi Alpha",
      "Intellectual leader and scholar",
      "Established academic standards for the fraternity",
      "Advocate for higher education",
    ],
  },
  "robert-ogle": {
    name: "Robert Harold Ogle",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/eca08ce86ecae763e3dc860dc88a0adc@2x.png",
    bio: "Robert Harold Ogle was a founding member of Alpha Phi Alpha Fraternity, Inc. known for his dedication to the principles of brotherhood and service. He played a crucial role in establishing the organizational structure and rituals of the fraternity.",
    achievements: [
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Instrumental in organizational development",
      "Advocate for brotherhood and service",
      "Leader in fraternity ritual development",
    ],
  },
  "vertner-tandy": {
    name: "Vertner Woodson Tandy",
    image:
      "https://apa1906.net/wp-content/uploads/2018/08/c7a411545e971348810b98ce640fe70e@2x.png",
    bio: "Vertner Woodson Tandy was a pioneering architect and the first licensed African American architect in New York State. As one of the Seven Jewels, he brought artistic vision and professional expertise to Alpha Phi Alpha Fraternity, Inc., helping to design the fraternity's early symbols and traditions.",
    achievements: [
      "First licensed African American architect in New York State",
      "Founding member of Alpha Phi Alpha Fraternity, Inc.",
      "Designed fraternity symbols and traditions",
      "Pioneer in architectural profession",
    ],
  },
};

const JewelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const jewel = id ? jewelData[id as keyof typeof jewelData] : null;
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  if (!jewel) {
    return (
      <div className="min-h-screen bg-black text-white font-lora">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-cinzel"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Jewel Not Found
            </motion.h1>
            <motion.p
              className="text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The jewel you're looking for could not be found.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/meet-the-jewels">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300">
                  Return to Meet the Jewels
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }
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
          {/* Enhanced Hero Section */}
          <motion.section
            ref={heroRef}
            className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4">
              {/* Back Button */}
              <motion.div
                className="mb-12"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link to="/meet-the-jewels">
                  <motion.div
                    className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="text-xl"
                      animate={{ x: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ←
                    </motion.span>
                    <span className="text-lg font-semibold">
                      Back to Meet the Jewels
                    </span>
                  </motion.div>
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Section */}
                <motion.div
                  className="relative"
                  initial={{ x: -100, opacity: 0 }}
                  animate={
                    isHeroInView
                      ? { x: 0, opacity: 1 }
                      : { x: -100, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.4 }}
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
                        src={jewel.image}
                        alt={jewel.name}
                        className="w-full h-[500px] object-cover rounded-2xl"
                      />
                    </motion.div>

                    {/* Decorative corner elements */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400/50"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400/50"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400/50"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400/50"></div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="relative"
                  style={{ y: textY }}
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    isHeroInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel leading-tight"
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      isHeroInView
                        ? { y: 0, opacity: 1 }
                        : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    {jewel.name}
                  </motion.h1>

                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"></div>
                    <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-6 py-2 rounded-full border border-yellow-400/30 backdrop-blur-sm text-yellow-400 font-semibold">
                      Seven Jewels Founding Member
                    </span>
                  </motion.div>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isHeroInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    {jewel.bio}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Achievements Section */}
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

            <div className="max-w-4xl mx-auto px-4 relative z-10">
              <motion.div
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cinzel">
                  Notable <span className="text-yellow-400">Achievements</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Legacy of excellence and pioneering spirit
                </p>
              </motion.div>

              <div className="grid gap-6">
                {jewel.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm"
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mt-3"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <p className="text-gray-300 text-lg leading-relaxed flex-1">
                        {achievement}
                      </p>
                    </div>

                    {/* Decorative accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/50 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
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
                  Explore More Jewels
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Discover the stories of all Seven Jewels who founded Alpha Phi
                  Alpha Fraternity, Inc.
                </motion.p>

                <motion.div
                  className="relative inline-block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to="/meet-the-jewels">
                    <motion.button
                      className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Meet All Seven Jewels
                    </motion.button>
                  </Link>
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

export default JewelDetail;
