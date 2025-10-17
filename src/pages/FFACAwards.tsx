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

          {/* Community Service Section */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 relative">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center font-cinzel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Community Service
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Brother's Keeper – June 14, 2024",
                    description:
                      "Both chapters served an elderly Alpha brother by cleaning and maintaining his property. This early-year act of service reinforced the fraternity's value of intergenerational brotherhood.",
                  },
                  {
                    title:
                      "Community Food Distribution with Zeta Phi Beta – June 18, 2024",
                    description:
                      "Xi Iota and DXL joined the Sigma Epsilon Chapter of Zeta Phi Beta Sorority, Inc. to distribute food and household items to Orlando residents, promoting collaboration across Greek organizations for community benefit.",
                  },
                  {
                    title:
                      "Livingston Street Church Food Drives – August 21 & September 18, 2024",
                    description:
                      "Both chapters partnered with Livingston Street Church of God to distribute food and household supplies to underserved families. These recurring service initiatives demonstrate consistency in addressing food insecurity in Orlando.",
                  },
                  {
                    title: "Brother's Keeper Service Project – August 24, 2024",
                    description:
                      "Xi Iota and Delta Xi Lambda collaborated to support DXL charter member Bro. Felton A. Johnson through Alpha's national initiative, Brother's Keeper. Brothers completed yard work, removed debris, and maintained the property, reinforcing Alpha's value of lifelong brotherhood and intergenerational care.",
                  },
                  {
                    title:
                      "Literacy Domain Day at Callahan Head Start – October 8, 2024",
                    description:
                      "Both chapters participated in Literacy Domain Day, where brothers read to children and distributed books to promote literacy and educational engagement. The event emphasized mentorship and Alpha's dedication to youth development.",
                  },
                  {
                    title:
                      "A Voteless People is a Hopeless People – October 29, 2024",
                    description:
                      "Xi Iota hosted a voter education seminar in collaboration with the UCF NAACP Chapter and Equal Ground, supported by DXL alumni. The event informed attendees about ballot measures, voting rights, and civic engagement, continuing Alpha's historical advocacy for political empowerment.",
                  },
                  {
                    title: "Brother's Keeper Yard Service – November 2, 2024",
                    description:
                      "Undergraduates and alumni reunited to assist Bro. Felton Johnson, performing additional yard cleanup and home care. This ongoing collaboration demonstrates consistency in supporting elder brothers through hands-on service.",
                  },
                  {
                    title:
                      "Community Food Distribution with YMOD – November 9, 2024",
                    description:
                      "Xi Iota joined forces with DXL and the Young Men of Distinction (YMOD) program to distribute food to Orlando families in need. The event fostered partnerships across community organizations while promoting collective service.",
                  },
                  {
                    title:
                      "Christmas Gift Giveaway at Forsyth Woods Elementary – December 3, 2024",
                    description:
                      "Brothers from both chapters celebrated the holiday season by providing gifts to students at Forsyth Woods Elementary School, spreading joy and ensuring that every child experienced a memorable Christmas.",
                  },
                  {
                    title:
                      "Second Harvest Food Bank Collaboration – December 16, 2024",
                    description:
                      "Xi Iota and Delta Xi Lambda worked alongside community volunteers at Second Harvest Food Bank, packaging 1,455 boxes and 21,825 meals for families across Central Florida. This project reflected large-scale servant leadership and measurable community impact.",
                  },
                  {
                    title: "MLK Commemorative Luncheon – January 17, 2025",
                    description:
                      "The Xi Iota Chapter attended DXL's MLK Commemorative Luncheon, honoring Dr. King's leadership and Alpha's historical role in civil rights. The event served as a moment of unity and reflection on purpose and progress.",
                  },
                  {
                    title: "Orlando MLK Parade – January 18, 2025",
                    description:
                      "Brothers from both chapters proudly marched together in the annual MLK Parade, representing Alpha Phi Alpha and honoring Dr. King's enduring legacy of equality, justice, and service.",
                  },
                  {
                    title: "MLK Day of Service – January 20, 2025",
                    description:
                      'Xi Iota and DXL partnered with Orlando Alphas and the NAACP for the MLK Million Dollar Pack Initiative, assembling meal kits for local families. The collaboration embodied Alpha\'s mission of "Service to All."',
                  },
                  {
                    title:
                      "Head Start Literacy Event & Disney's Celebrate the Children's Gala – April 4, 2025",
                    description:
                      "Xi Iota brothers joined DXL at Head Start Orlando to read to children and assist with Disney's Children's Gala, advancing Alpha's mission of education and empowerment through literacy.",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 p-6 rounded-r-lg backdrop-blur-sm"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 font-cinzel">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Alpha Participation Section */}
          <section className="py-20 relative bg-gradient-to-b from-transparent to-yellow-400/5">
            <div className="max-w-6xl mx-auto px-4 relative">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center font-cinzel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Alpha Participation
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    title:
                      "94th Southern Regional Convention – Atlanta, GA (March 7–10, 2025)",
                    description:
                      "Both chapters attended the regional convention, participating in leadership workshops, Alpha trainings, and networking sessions. Xi Iota and DXL also held a joint brotherhood dinner, fostering mentorship and fraternal unity.",
                  },
                  {
                    title:
                      "Fellowship Luncheon with Xi Iota Alumni – April 4, 2025",
                    description:
                      "After completing the literacy event, Xi Iota brothers joined alumni from DXL for a brotherhood luncheon emphasizing mentorship, leadership, and professional development.",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 p-6 rounded-r-lg backdrop-blur-sm"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 font-cinzel">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-gray-400 italic text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Other National Programs are listed under Community/Campus
                Involvement
              </motion.p>
            </div>
          </section>

          {/* Awards/Recognition Section */}
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 relative">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center font-cinzel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Awards/Recognition
              </motion.h2>

              <motion.div
                className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400 p-8 rounded-2xl backdrop-blur-sm shadow-2xl shadow-yellow-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <Trophy className="w-16 h-16 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-3 font-cinzel">
                      First Place – 2025 Metro Orlando NPHC Alumni Step Show
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Theme: "25: A Silver Opportunity for Unity in Motion"
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                      Award:{" "}
                      <span className="text-yellow-400 font-semibold">
                        $2,000 prize and trophy
                      </span>{" "}
                      for excellence in performance, teamwork, and
                      representation of Alpha Phi Alpha Fraternity, Inc.
                    </p>
                  </div>
                </div>
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
