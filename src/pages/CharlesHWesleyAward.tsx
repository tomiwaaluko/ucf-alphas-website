import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, Trophy, FileText } from "lucide-react";

const CharlesHWesleyAward = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const categories = [
    {
      title:
        "Demonstrated Joint Participation in the National Programs and Projects of the Fraternity",
      points: 30,
      icon: Users,
      description:
        "Showcasing our chapter's active involvement in fraternity-wide initiatives",
      images: [
        {
          src: "/lovable-uploads/wesley-award/national-programs-1.jpg",
          caption:
            "Go To High School Go To College Program - Mentoring young students on the importance of education",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-2.jpg",
          caption:
            "A Voteless People Is A Hopeless People - Voter registration and civic engagement initiative",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-3.jpg",
          caption: "Project Alpha - Health and wellness education for youth",
        },
      ],
    },
    {
      title: "Collaboration in Planning and Implementation of Alpha Functions",
      points: 20,
      icon: Calendar,
      description:
        "Founders' Day events, Black and Gold ball, MLK days, Fundraising, etc.",
      images: [
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-1.jpg",
          caption:
            "Founders' Day Celebration - Honoring the legacy of our seven jewels",
        },
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-2.jpg",
          caption:
            "Black and Gold Ball - Annual formal celebrating our brotherhood and sisterhood",
        },
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-3.jpg",
          caption:
            "MLK Day of Service - Serving the community in honor of Dr. Martin Luther King Jr.",
        },
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-4.jpg",
          caption:
            "Chapter Fundraising Event - Supporting our programs and initiatives",
        },
      ],
    },
    {
      title:
        "Joint Recognition of Progress and Services to and from the Chapters",
      points: 15,
      icon: Trophy,
      description:
        "Plaques, certificates, letters of sponsorship of activities or events, scholarships presented or received, etc.",
      images: [
        {
          src: "/lovable-uploads/wesley-award/recognition-1.jpg",
          caption:
            "Outstanding Chapter Award - Recognition for excellence in service and brotherhood",
        },
        {
          src: "/lovable-uploads/wesley-award/recognition-2.jpg",
          caption:
            "Scholarship Presentation - Supporting academic excellence in our community",
        },
        {
          src: "/lovable-uploads/wesley-award/recognition-3.jpg",
          caption:
            "Community Partnership Certificate - Collaboration with local organizations",
        },
      ],
    },
    {
      title: "Chapters Participation in Past Conferences and Conventions",
      points: 10,
      icon: FileText,
      description: "List with documentation",
      images: [
        {
          src: "/lovable-uploads/wesley-award/conferences-1.jpg",
          caption:
            "FFAC Regional Conference - Xi Iota Chapter delegation representing UCF",
        },
        {
          src: "/lovable-uploads/wesley-award/conferences-2.jpg",
          caption:
            "National Convention Attendance - Brothers participating in fraternity-wide programming",
        },
        {
          src: "/lovable-uploads/wesley-award/conferences-3.jpg",
          caption:
            "Leadership Summit - Chapter officers developing skills and networking",
        },
      ],
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
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Award className="w-24 h-24 text-yellow-400 mx-auto" />
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Charles H. Wesley Award
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Recognizing Excellence in Chapter Collaboration and Service
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Categories Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="space-y-20">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Category Header */}
                      <div className="mb-12">
                        <div className="flex items-start gap-6 mb-6">
                          <motion.div
                            className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-2xl flex items-center justify-center border-2 border-yellow-400/40 shadow-2xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <IconComponent className="w-10 h-10 text-yellow-400" />
                          </motion.div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <h3 className="text-2xl md:text-3xl font-bold text-white font-cinzel leading-tight">
                                {category.title}
                              </h3>
                              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-bold text-2xl px-6 py-3 rounded-full shadow-xl border-2 border-yellow-300">
                                {category.points} pts
                              </div>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"></div>
                      </div>

                      {/* Image Gallery */}
                      <div className="bg-gradient-to-br from-yellow-400/5 to-yellow-600/5 border-2 border-yellow-400/20 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="group relative"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: imgIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                            >
                              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-300 overflow-hidden relative">
                                {/* Image placeholder - replace with actual images */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                                  <Award className="w-16 h-16 text-yellow-400/20" />
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300"></div>
                              </div>

                              {/* Caption */}
                              <div className="mt-3 px-2">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {image.caption}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CharlesHWesleyAward;
