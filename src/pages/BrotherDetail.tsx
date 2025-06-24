import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowLeft, Linkedin, Mail, MapPin, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const BrotherDetail = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Updated brother data to match MeetTheBrothers
  interface BrotherData {
    name: string;
    crossingSemester: string;
    position: string;
    image: string;
    bio: string;
    major: string;
    year: string;
    hometown: string;
    interests: string[];
    linkedin?: string;
    email?: string;
    achievements: string[];
    quote: string;
  }

  const brotherData: { [key: string]: BrotherData } = {
    "1": {
      name: "Tomiwa Aluko",
      crossingSemester: "Spring 2022",
      position: "Active Member",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      bio: "Tomiwa is a Computer Engineering major who brings innovative thinking and technical expertise to our chapter. As one of the Spring 2022 line brothers, he has been instrumental in developing our chapter's digital presence and technological initiatives. He is passionate about using engineering solutions to solve real-world problems and mentors younger students in STEM fields.",
      major: "Computer Engineering",
      year: "Senior",
      hometown: "Lagos, Nigeria",
      interests: [
        "Software Engineering",
        "Robotics",
        "Mentoring",
        "Community Tech Projects",
      ],
      linkedin: "https://linkedin.com/in/tomiwa-aluko",
      email: "tomiwa.aluko@example.com",
      achievements: [
        "Dean's List",
        "Tech Innovation Award",
        "Engineering Excellence",
      ],
      quote: "Excellence is not a skill, it's an attitude.",
    },
    "2": {
      name: "Nijel Beverly",
      crossingSemester: "Spring 2022",
      position: "Active Member",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      bio: "Nijel is pursuing Business Administration Integrated Business and serves as a bridge between our chapter and the business community. His entrepreneurial spirit and leadership abilities make him a natural mentor for brothers interested in business ventures. He has organized several networking events and business workshops for the chapter.",
      major: "Business Administration Integrated Business",
      year: "Senior",
      hometown: "Kingston, Jamaica",
      interests: [
        "Entrepreneurship",
        "Investment Strategy",
        "Public Speaking",
        "Networking",
      ],
      linkedin: "https://linkedin.com/in/nijel-beverly",
      email: "nijel.beverly@example.com",
      achievements: [
        "Student Body President",
        "Entrepreneur of the Year",
        "Business Leadership",
      ],
      quote:
        "Leadership is about making others better as a result of your presence.",
    },
    "3": {
      name: "Abdul Ibrahim",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face",
      bio: "Abdul is a Science major who represents the newest generation of Alpha men. His dedication to academic excellence and scientific research exemplifies our fraternity's commitment to scholarship. He is actively involved in research projects and aims to pursue graduate studies in his field.",
      major: "Science",
      year: "Sophomore",
      hometown: "Accra, Ghana",
      interests: [
        "Scientific Research",
        "Laboratory Work",
        "Academic Tutoring",
        "Chess",
      ],
      linkedin: "https://linkedin.com/in/abdul-ibrahim",
      email: "abdul.ibrahim@example.com",
      achievements: [
        "Research Excellence",
        "Academic Scholar",
        "Scientific Innovation",
      ],
      quote: "Science is the foundation of all human progress.",
    },
    "4": {
      name: "Corey Barnes Jr.",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&crop=face",
      bio: "Corey is a Mechanical Engineering major who brings technical innovation and problem-solving skills to our brotherhood. His passion for engineering design and sustainable technology aligns perfectly with our commitment to community service and progress.",
      major: "Mechanical Engineering",
      year: "Junior",
      hometown: "Birmingham, AL",
      interests: [
        "Engineering Design",
        "Sustainable Technology",
        "3D Printing",
        "Cycling",
      ],
      linkedin: "https://linkedin.com/in/corey-barnes-jr",
      email: "corey.barnes@example.com",
      achievements: [
        "Engineering Design Award",
        "Innovation Champion",
        "Technical Excellence",
      ],
      quote: "Innovation distinguishes between a leader and a follower.",
    },
    "5": {
      name: "Jacob Herrera",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500&h=600&fit=crop&crop=face",
      bio: "Jacob is a Mechanical Engineering major known for his collaborative approach to problem-solving and his commitment to mentoring fellow students. His technical skills and leadership qualities make him a valuable addition to our chapter.",
      major: "Mechanical Engineering",
      year: "Junior",
      hometown: "San Antonio, TX",
      interests: [
        "Project Management",
        "Team Leadership",
        "Engineering Ethics",
        "Soccer",
      ],
      linkedin: "https://linkedin.com/in/jacob-herrera",
      email: "jacob.herrera@example.com",
      achievements: [
        "Engineering Excellence",
        "Project Leadership",
        "Technical Mentorship",
      ],
      quote: "Engineering is the art of making the impossible possible.",
    },
    "6": {
      name: "Adams Brown Jr.",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      bio: "Adams is studying Integrated Business and brings a strategic mindset to our chapter's operations. His analytical skills and business acumen have been valuable in planning chapter events and financial initiatives.",
      major: "Integrated Business",
      year: "Sophomore",
      hometown: "Charlotte, NC",
      interests: [
        "Business Strategy",
        "Financial Analysis",
        "Leadership Development",
        "Basketball",
      ],
      linkedin: "https://linkedin.com/in/adams-brown-jr",
      email: "adams.brown@example.com",
      achievements: [
        "Business Strategy Award",
        "Financial Excellence",
        "Leadership Development",
      ],
      quote:
        "Success in business requires training and discipline and hard work.",
    },
    "7": {
      name: "Benjamin Blocker",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop&crop=face",
      bio: "Benjamin is a Kinesiology major who promotes health and wellness throughout our chapter and community. His expertise in human movement and fitness has made him a go-to resource for brothers seeking to improve their physical and mental well-being.",
      major: "Kinesiology",
      year: "Junior",
      hometown: "Memphis, TN",
      interests: [
        "Health & Wellness",
        "Athletic Training",
        "Community Fitness Programs",
        "Nutrition",
      ],
      linkedin: "https://linkedin.com/in/benjamin-blocker",
      email: "benjamin.blocker@example.com",
      achievements: [
        "Health & Wellness Advocate",
        "Athletic Excellence",
        "Community Health Leader",
      ],
      quote: "Movement is medicine for creating change in all aspects of life.",
    },
    "8": {
      name: "Jevaughn Morris",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      bio: "Jevaughn is an Information Technology major who manages our chapter's digital infrastructure and online presence. His technical skills and innovative approach to problem-solving have modernized many of our operational processes.",
      major: "Information Technology",
      year: "Sophomore",
      hometown: "Kingston, Jamaica",
      interests: [
        "Cybersecurity",
        "Web Development",
        "Digital Innovation",
        "Gaming",
      ],
      linkedin: "https://linkedin.com/in/jevaughn-morris",
      email: "jevaughn.morris@example.com",
      achievements: [
        "Technology Innovation",
        "Digital Solutions",
        "IT Excellence",
      ],
      quote: "Technology is best when it brings people together.",
    },
    "9": {
      name: "Toluwani Aluko",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      bio: "Toluwani is pursuing Biology (Pre-Med) with aspirations of becoming a physician. His commitment to healthcare and service to others embodies the fraternity's principles. He volunteers at local clinics and organizes health awareness events in the community.",
      major: "Biology (Pre-Med)",
      year: "Junior",
      hometown: "Ibadan, Nigeria",
      interests: [
        "Medical Research",
        "Community Health",
        "Volunteer Medicine",
        "Tennis",
      ],
      linkedin: "https://linkedin.com/in/toluwani-aluko",
      email: "toluwani.aluko@example.com",
      achievements: [
        "Pre-Med Excellence",
        "Research Scholar",
        "Future Healthcare Leader",
      ],
      quote: "Medicine is not only a science; it is also an art.",
    },
    "10": {
      name: "Treylon Chukes",
      crossingSemester: "Fall 2024",
      position: "Chapter President",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face",
      bio: "Treylon serves as our Chapter President and is a Biology major with a passion for scientific research and leadership. His vision and dedication have guided our chapter through significant growth and achievement. He balances academic excellence with exceptional leadership skills.",
      major: "Biology",
      year: "Senior",
      hometown: "New Orleans, LA",
      interests: [
        "Biological Research",
        "Leadership Development",
        "Community Outreach",
        "Music",
      ],
      linkedin: "https://linkedin.com/in/treylon-chukes",
      email: "treylon.chukes@example.com",
      achievements: [
        "Scientific Research",
        "Academic Excellence",
        "Biology Innovation",
      ],
      quote: "Biology is the most powerful technology ever created.",
    },
  };
  const brother = brotherData[id || "1"];

  if (!brother) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-lora relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-600/3 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="text-center relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold text-yellow-400 mb-8 font-cinzel"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Brother Not Found
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The brother you're looking for doesn't exist in our records.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/meet-the-brothers"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Meet the Brothers
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

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
        {[...Array(12)].map((_, i) => (
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
        <div className="pt-16">
          {/* Back Button */}
          <motion.div
            className="max-w-7xl mx-auto px-4 py-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/meet-the-brothers"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="font-semibold">Back to Brothers</span>
            </Link>
          </motion.div>{" "}
          {/* Hero Section - Redesigned Layout */}
          <motion.section
            ref={heroRef}
            className="py-12 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4">
              {/* Header with Name and Quote */}
              <motion.div
                className="text-center mb-12"
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-cinzel leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {brother.name}
                </motion.h1>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-300 italic max-w-2xl mx-auto">
                    "{brother.quote}"
                  </p>
                </motion.div>

                {/* Position and Semester Badges */}
                <motion.div
                  className="flex justify-center space-x-4 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {brother.position}
                  </span>
                  <span className="bg-black/80 text-yellow-400 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-yellow-400/30 font-semibold">
                    {brother.crossingSemester}
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Profile Image - Smaller */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isHeroInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-yellow-400/20 backdrop-blur-sm overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing border effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-2xl blur-lg"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={brother.image}
                        alt={brother.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Contact Links Below Image */}
                  <motion.div
                    className="flex flex-col space-y-3 mt-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isHeroInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {brother.linkedin && (
                      <motion.a
                        href={brother.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </motion.a>
                    )}
                    {brother.email && (
                      <motion.a
                        href={`mailto:${brother.email}`}
                        className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>

                {/* Bio and Details - Takes up more space */}
                <motion.div
                  className="lg:col-span-2 space-y-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Bio Section */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-cinzel">
                      About
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {brother.bio}
                    </p>
                  </div>

                  {/* Achievements Grid */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-cinzel">
                      Achievements
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {brother.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 bg-yellow-400/10 p-3 rounded-xl border border-yellow-400/20"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-white font-semibold text-sm">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Info Cards - Right Sidebar */}
                <motion.div
                  className="lg:col-span-1 space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  animate={
                    isHeroInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Academic Info */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Academic
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Major
                        </h4>
                        <p className="text-white text-sm">{brother.major}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Year
                        </h4>
                        <p className="text-white text-sm">{brother.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Personal
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Hometown
                        </h4>
                        <p className="text-white text-sm">{brother.hometown}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Crossed
                        </h4>{" "}
                        <div>
                          <p className="text-white text-sm">
                            {brother.crossingSemester}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3 font-cinzel">
                      Interests
                    </h3>
                    <div className="space-y-2">
                      {brother.interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          className="bg-yellow-400/20 text-yellow-400 px-3 py-2 rounded-lg text-xs border border-yellow-400/30 block text-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(250, 204, 21, 0.3)",
                          }}
                        >
                          {interest}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
          {/* Call to Action - Simplified */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 rounded-3xl border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
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
                  Join Our Brotherhood
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Interested in becoming part of our brotherhood? Learn more
                  about opportunities to join the Xi Iota Chapter of Alpha Phi
                  Alpha Fraternity, Inc.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn About Membership
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/meet-the-brothers"
                      className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 font-cinzel inline-block"
                    >
                      Meet Other Brothers
                    </Link>
                  </motion.div>
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

export default BrotherDetail;
