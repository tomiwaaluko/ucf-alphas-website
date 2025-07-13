import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Calendar,
  Users,
  Heart,
  Camera,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InstagramFeed from "../components/InstagramFeed";

const Social = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const socialGridRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);
  const isSocialGridInView = useInView(socialGridRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@xiiotaalphaphibeta",
      url: "https://instagram.com/xiiotaalphaphibeta",
      description:
        "Follow our daily activities, events, and brotherhood moments",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-purple-600/20",
      followers: "2.1K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "Xi Iota Chapter",
      url: "https://facebook.com/xiiotachapter",
      description: "Stay updated with official announcements and events",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-700/20",
      followers: "1.8K",
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@XiIotaAlphas",
      url: "https://twitter.com/xiiotaalphas",
      description: "Real-time updates and community engagement",
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-sky-400/20 to-blue-500/20",
      followers: "956",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "Xi Iota Chapter",
      url: "https://linkedin.com/company/xi-iota-chapter",
      description: "Professional networking and career opportunities",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
      followers: "742",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "Xi Iota Alpha Phi Alpha",
      url: "https://youtube.com/@xiiotaalphaphibeta",
      description: "Event highlights, testimonials, and brotherhood stories",
      color: "from-red-500 to-red-700",
      bgColor: "bg-gradient-to-br from-red-500/20 to-red-700/20",
      followers: "634",
    },
  ];

  const highlights = [
    {
      title: "Brotherhood Events",
      description:
        "From initiation ceremonies to social gatherings, experience the bond of Alpha brotherhood",
      icon: Users,
      color: "text-yellow-400",
    },
    {
      title: "Community Service",
      description:
        "Witness our commitment to service through community outreach and volunteer work",
      icon: Heart,
      color: "text-red-400",
    },
    {
      title: "Academic Excellence",
      description:
        "Celebrating scholastic achievements and educational milestones of our brothers",
      icon: Calendar,
      color: "text-blue-400",
    },
    {
      title: "Behind the Scenes",
      description:
        "Exclusive glimpses into the daily life and traditions of Xi Iota Chapter",
      icon: Camera,
      color: "text-green-400",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-500/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/2 to-transparent rounded-full"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="pt-32 pb-20 px-4 text-center relative overflow-hidden"
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={
              isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 font-cinzel"
              initial={{ y: 30, opacity: 0 }}
              animate={
                isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect With Us
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Stay connected with the Xi Iota Chapter through our social media
                platforms. Follow us for the latest updates, events, brotherhood
                moments, and community service initiatives.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={
                isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold font-cinzel">
                #XiIotaFamily #AlphaPride
              </span>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Social Platforms Grid */}
        <motion.section ref={socialGridRef} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={
                isSocialGridInView
                  ? { y: 0, opacity: 1 }
                  : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-cinzel">
                Follow Our Journey
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of Alpha brothers and supporters across all
                platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-500 group`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isSocialGridInView
                      ? { y: 0, opacity: 1 }
                      : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${platform.color}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <platform.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {platform.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {platform.handle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold text-lg">
                        {platform.followers}
                      </p>
                      <p className="text-gray-400 text-xs">followers</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{platform.description}</p>

                  <motion.div
                    className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Follow Us →
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* Content Highlights */}
        <motion.section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-cinzel">
                What You'll See
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Discover the diverse content that showcases our fraternal
                excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4 ${highlight.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="h-8 w-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 font-cinzel">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="py-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-6 font-cinzel">
              Join the Conversation
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of our digital brotherhood. Share your experiences,
              connect with fellow Alphas, and stay engaged with the Xi Iota
              family wherever you are.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #AlphaPride
              </motion.span>
              <motion.span
                className="bg-black/80 text-yellow-400 px-6 py-3 rounded-full font-semibold border border-yellow-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #XiIotaFamily
              </motion.span>
              <motion.span
                className="bg-black/80 text-yellow-400 px-6 py-3 rounded-full font-semibold border border-yellow-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #Brotherhood
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default Social;
