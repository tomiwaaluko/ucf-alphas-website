import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  Linkedin,
  Mail,
  MapPin,
  BookOpen,
  Building,
} from "lucide-react";
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
    organizations: string[];
  }

  const brotherData: { [key: string]: BrotherData } = {
    "1": {
      name: "Tomiwa Aluko",
      crossingSemester: "Spring 2022",
      position: "Active Member",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      bio: "Tomiwa Aluko is a Computer Engineering major who brings innovative thinking and technical expertise to the chapter. As one of the Spring 2022 line brothers, he has been instrumental in developing the chapter's digital presence and technological initiatives.\n\nHe is passionate about using engineering solutions to solve real-world problems and actively mentors younger students in STEM fields. Tomiwa's dedication to excellence and community service exemplifies the values of scholarship and leadership.",
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
      organizations: [],
    },
    "2": {
      name: "Nijel Beverly",
      crossingSemester: "Spring 2022",
      position: "Graduate",
      image: "/brothers/Nijel Beverly.jpg",
      bio: "Nijel Beverly is a Milwaukee, Wisconsin native with a creative mind, a heart for people, and a hustle that never quits. He is a graduate of the University of Central Florida, where he earned his degree in Business Management while building a name for himself in sports media, digital content, and campus leadership.\n\nNijel has always believed in the power of storytelling — whether through short films, hype videos, or social campaigns. Over the years, he has interned with a sports agency and UCF Athletics' video team, managing everything from editing and shooting content to running social media and designing graphics. He has also served as Community Outreach Chair for the NAACP and led event coordination with student organizations like Knights of the Roundtable.\n\nOutside of work, Nijel loves documenting life, growing his skills in acting and visual storytelling through digital media, and staying grounded in his roots and faith.",
      major: "Business Administration - Integrated Business",
      year: "Graduate",
      hometown: "Milwaukee, Wisconsin",
      interests: ["Video editing and graphic design", "Acting", "Working out"],
      linkedin: "https://www.linkedin.com/in/nijel-beverly-ab7451285",
      email: "nijelbeverly@gmail.com",
      achievements: [
        "UCF Athletics editor",
        "First Generation",
        "Event of the Year as program coordinator (KORT)",
      ],
      quote:
        "Our deepest fear is not that we are inadequate, but that we are powerful beyond measure.",
      organizations: ["NAACP", "Knights of the Roundtable"],
    },
    "3": {
      name: "Abdul Ibrahim",
      crossingSemester: "Fall 2024",
      position: "Active Member",
      image: "/brothers/Abdul Ibrahim.PNG",
      bio: "Abdul Ibrahim is a senior at the University of Central Florida majoring in Health Sciences on the pre-clinical track. Upon graduation, he aspires to become an Orthopedic Physician Associate. As a proud Nigerian, his cultural background has instilled in him values of discipline, perseverance, and integrity.\n\nAbdul is passionate about health and wellness, and he enjoys staying active through sports and regular exercise. He considers himself a dedicated, goal-oriented individual who values teamwork, lifelong learning, and service to others. His commitment to excellence is evident in his academic achievements and leadership roles within various organizations.",
      major: "Health Sciences Pre-Clinical",
      year: "Senior",
      hometown: "Miami, Florida",
      interests: ["Sports", "Exercising", "Gaming"],
      linkedin: "https://www.linkedin.com/in/aibrahim0121",
      email: "ab637481@ucf.edu",
      achievements: [
        "Dean's List 5x",
        "President's List 3x",
        "UCF Chapter of SISTUHS INC. Sankofa Award for Health",
        "Association of Pre-Physician Associates Honor Member 3x",
        "UCF Section of NCNW Presidential Hall of Fame Award",
      ],
      quote: "It's either you got it or you don't",
      organizations: [
        "Black Men in Medicine (Former President and Charter Member)",
        "Men of Integrity",
      ],
    },
    "4": {
      name: "Corey Barnes Jr.",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&crop=face",
      bio: "Corey Barnes Jr. is a Mechanical Engineering major who brings technical innovation and problem-solving skills to the brotherhood. His passion for engineering design and sustainable technology aligns perfectly with the fraternity's commitment to community service and progress.\n\nCorey's analytical mindset and dedication to environmental sustainability drive his academic pursuits and personal projects. He is known for his collaborative approach to engineering challenges and his commitment to developing solutions that benefit both the community and the environment.",
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
      organizations: [],
    },
    "5": {
      name: "Jacob Herrera",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500&h=600&fit=crop&crop=face",
      bio: "Jacob Herrera is a Mechanical Engineering major known for his collaborative approach to problem-solving and his commitment to mentoring fellow students. His technical skills and leadership qualities make him a valuable addition to the chapter.\n\nJacob excels in project management and team leadership, consistently demonstrating excellence in engineering ethics and technical execution. His dedication to helping others succeed, combined with his innovative thinking, has made him a respected peer and mentor within the engineering community.",
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
      organizations: [],
    },
    "6": {
      name: "Adams Brown Jr.",
      crossingSemester: "Fall 2024",
      position: "Neophyte",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      bio: "Adams Brown Jr. is studying Integrated Business and brings a strategic mindset to the chapter's operations. His analytical skills and business acumen have been valuable in planning chapter events and financial initiatives.\n\nAdams demonstrates exceptional leadership potential through his understanding of business strategy and financial analysis. His commitment to professional development and his ability to think strategically about organizational growth make him an asset to any team or project he joins.",
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
      organizations: [],
    },
    "7": {
      name: "Benjamin Blocker",
      crossingSemester: "Fall 2024",
      position: "Active Member",
      image: "/brothers/Benjamin Blocker.jpeg",
      bio: "Benjamin Blocker is a Kinesiology major from Jacksonville, Florida, with a passion for health, fitness, and helping others achieve their wellness goals. He believes that physical activity and proper nutrition are key to living a fulfilling life, and he enjoys sharing this knowledge with others.\n\nOutside of academics, Benjamin loves working out, playing sports, and staying active. He also has a strong interest in music and enjoys discovering new artists and genres. His goal is to become a physical therapist and help people recover from injuries while promoting healthy lifestyles.\n\nBenjamin is committed to excellence in everything he does and always strives to be a positive influence in his community and among his brothers.",
      major: "Kinesiology",
      year: "Junior",
      hometown: "Jacksonville, Florida",
      interests: [
        "Working out",
        "Playing sports",
        "Music",
        "Health and wellness",
      ],
      linkedin: "https://www.linkedin.com/in/benjamin-blocker-59698b266/",
      email: "be991046@ucf.edu",
      achievements: [
        "Dean's List",
        "Kinesiology Program Excellence",
        "Community Health Advocate",
      ],
      quote: "Excellence is not a skill, it's an attitude.",
      organizations: [
        "Black Undergraduate Kinesiology Association (Former President, Former Membership Chair, and charter member)",
        "Black Men in Medicine (Former Fundraising Chair and Former Parliamentarian)",
      ],
    },
    "8": {
      name: "Jevaughn Morris",
      crossingSemester: "Fall 2024",
      position: "Graduate",
      image: "/brothers/Jevaughn Morris.jpg",
      bio: "Jevaughn Morris is a graduating senior majoring in Information Technology. He enjoys exploring different areas of technology such as web development, data analytics, and cybersecurity, working on personal projects outside the classroom whenever possible.\n\nWhether experimenting with new tools or solving problems through code, Jevaughn finds practical ways to apply what he learns. Alongside his interest in technology, he is also learning photo editing and graphic design, which allows him to tap into his creative side.\n\nJevaughn finds joy in giving back through community service, especially when working with local communities and mentoring the younger generation. In his free time, he enjoys spending time with friends and is always open to trying something new.",
      major: "Information Technology",
      year: "Graduate",
      hometown: "Coral Springs, FL",
      interests: ["Sports", "Video Games", "Cooking", "Music", "Fitness"],
      linkedin: "https://www.linkedin.com/in/jevmorris2/",
      email: "je280952@ucf.edu",
      achievements: [
        "Spring '24 Deans List",
        "2025 NSBE Communication Zone Committee Member of the Year",
      ],
      quote: "Never put off until tomorrow what can be done today",
      organizations: ["NSBE"],
    },
    "9": {
      name: "Toluwani Aluko",
      crossingSemester: "Fall 2024",
      position: "Active Member",
      image: "/brothers/Toluwani Aluko.jpg",
      bio: "Toluwani Aluko is a Nigerian-American Biology major on the pre-health track at the University of Central Florida, with aspirations of becoming a dentist. He is passionate about healthcare and committed to making a positive impact in underserved communities.\n\nOutside of academics, Toluwani enjoys reading and playing basketball, which help him stay balanced and focused. He is always eager to learn and grow, consistently demonstrating dedication to both his academic pursuits and personal development.",
      major: "Biology (Pre-Health)",
      year: "Junior",
      hometown: "Miami, Florida",
      interests: ["Reading", "Basketball"],
      linkedin: "www.linkedin.com/in/toluwani-aluko-909997306",
      email: "ol847219@ucf.edu",
      achievements: [
        "National Award of the Conrad Challenge Innovator Certificate",
        "Congresswoman Ileana Ros-Lehtinen Congressional Award for Community Service",
        "City of West Park Commendation of Community Service",
      ],
      quote: "The future belongs to those who prepare for it today",
      organizations: [],
    },
    "10": {
      name: "Treylon Chukes",
      crossingSemester: "Fall 2024",
      position: "Chapter President",
      image: "/brothers/Treylon Chukes.jpeg",
      bio: "Treylon Chukes is a dedicated and motivated individual with a strong passion for medicine and helping others. He is an undergraduate student at UCF majoring in Biology on the Pre-Health track, and he has had the opportunity to grow through various leadership and academic roles.\n\nTreylon serves as the Chapter President of the Xi Iota Chapter and has also served as a charter member and former First Vice President of the Black Men in Medicine UCF Chapter. These experiences have helped him develop a sense of discipline, empathy, and purpose, especially as he works toward a career in anesthesia.\n\nOutside of academics, Treylon enjoys working on mechanical projects, and he always looks for ways to give back to his community and grow as a leader.",
      major: "Biology Pre-Health",
      year: "Junior",
      hometown: "Quincy, FL/ USA",
      interests: [],
      linkedin: "https://www.linkedin.com/in/tchukes",
      email: "tr319165@ucf.edu",
      achievements: [
        "Chapter President of Xi Iota Chapter",
        "Charter member and former First Vice President of Black Men in Medicine UCF Chapter",
      ],
      quote: "It's not over when you fail, it's over when you quit",
      organizations: ["Black Men in Medicine UCF Chapter"],
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

                  {/* Organizations */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Organizations
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {brother.organizations.map((org, index) => (
                        <div key={index}>
                          <p className="text-white text-sm">{org}</p>
                        </div>
                      ))}
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BrotherDetail;
