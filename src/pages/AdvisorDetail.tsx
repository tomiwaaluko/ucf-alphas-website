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

const AdvisorDetail = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  interface AdvisorData {
    name: string;
    position: string;
    title: string;
    organization: string;
    image: string;
    bio: string;
    yearsOfService: string;
    education: string;
    specialties: string[];
    hometown: string;
    organizations: string[];
    initiatedChapter?: string;
    currentChapter?: string;
    linkedin?: string;
    email?: string;
    achievements: string[];
    quote: string;
  }

  const advisorData: { [key: string]: AdvisorData } = {
    "1": {
      name: "Martin A. Johnson",
      position: "Graduate Advisor",
      title: "MAJ, US Army (RET), Senior Army Instructor",
      organization: "Paul J Hagerty HS",
      image: "/advisors/IMG_3904 - Martin Johnson.jpeg",
      bio: "Brother Martin A. Johnson, a proud native of the Bronx, New York, is a decorated U.S. Army veteran and seasoned operations leader with over 25 years of distinguished military service. He graduated from Mount Saint Michael Academy in 1991 and earned his bachelor's degree from the University of Central Florida in 1996.\n\nMartin is a Fall 1992 Initiate of the Xi Iota Chapter. During his time at UCF, he held various leadership positions within the Xi Iota Chapter, including Chapter President, Vice President, and Dean of Membership. He also served as NPHC President, NPHC Vice President, and NPHC Southern Region Undergraduate Member-at-Large.\n\nIn 1997, he enlisted in the U.S. Army as a 68W Medical Specialist and later commissioned as a Second Lieutenant in the Field Artillery upon completing Officer Candidate School in 2009. Throughout his military career, Brother Johnson served with excellence in multiple operational environments, including three deployments—two to Afghanistan and one to Kosovo—in support of Operation Enduring Freedom. His outstanding service earned him the Bronze Star and multiple Meritorious Service Medals.\n\nAs an accomplished Operations Manager and military educator, Brother Johnson has led and developed teams ranging from 10 to 250 personnel in high-pressure, fast-paced environments. He brings expertise in intelligence analysis, strategic operational planning, and organizational leadership. His prior role as Assistant Professor of Military Science and Officer in Charge of the Army ROTC program at Nova Southeastern University underscores his commitment to mentoring and shaping future military leaders.\n\nCurrently, Brother Johnson serves as the Senior Army Instructor for the Husky JROTC Battalion at Paul J. Hagerty High School, continuing his legacy of leadership and service. He holds a Master of Arts in Higher Education Administration from the University of Louisville.\n\nBrother Johnson is a Life Member of Alpha Phi Alpha Fraternity, Inc., actively participating in the Delta Xi Lambda Chapter. He serves as the College Brothers Affairs Committee Chair and is the Graduate Advisor to the Xi Iota Chapter. Additionally, he is affiliated with Prince Hall Masons.\n\nBrother Johnson and his wife of 28 years, Soror Laja Y. Gass-Johnson (Zeta Phi Beta Sorority, Inc., Sigma Epsilon Chapter, Spring '93), are the proud parents of two sets of twins: Maiyah and Lailah, and Langston and McKenna (Zeta Phi Beta Sorority, Inc., Sigma Epsilon Chapter, Spring '23), and proud grandparents of Malia.",
      yearsOfService: "Fall 1992",
      education:
        "Master of Arts in Higher Education Administration, University of Louisville\nBachelor's Degree, University of Central Florida 1996",
      specialties: [
        "Reading, Writing, Cooking",
        "Mentoring, Volunteering, Learning",
        "Military Leadership",
        "Strategic Operational Planning",
      ],
      hometown: "Bronx, New York",
      organizations: [
        "Alpha Phi Alpha Fraternity, Inc.",
        "Prince Hall Affiliated Free and Accepted Masons",
      ],
      initiatedChapter: "Xi Iota",
      currentChapter: "Delta Xi Lambda",
      linkedin: "https://www.linkedin.com/in/martin-johnson-m-a-hea-2390603a",
      email: "martin.a.johnson1906@gmail.com",
      achievements: [
        "Bronze Star Medal",
        "Medal Meritorious Service Medal (4)",
        "Army Commendation Medal (5)",
        "National Defense Service Medal (2)",
        "Kosovo Campaign Medal",
        "Afghanistan Campaign Medal (2)",
        "Global War on Terrorism Service Medal",
        "Korean Defense Medal",
        "Combat Action Badge",
        "Army Parachutist Badge",
        "Army Air Assault Badge",
        "Sergeant Audie Murphy Award",
        "Honorable Order of Saint Barbara",
        "Distinguished Military Graduate, Class 01-09, Army Officer Candidate School",
        "Superior Graduate, Army ILE - Advanced Operations Course",
        "Superior Graduate, Command and General Staff Intermediate Education Course",
        "Who's Who Among Colleges and Universities 1996",
      ],
      quote:
        "You must remember that words mean things. A person may forget the exact words you said, but they will never forget how those words made them feel.",
    },
    "2": {
      name: "Brodrick D. Johnson",
      position: "Campus Advisor",
      title: "Assistant AD for Student-Athlete Development",
      organization: "University of Central Florida",
      image: "/advisors/IMG_1244 - Bhop Johnson.jpeg",
      bio: "Brother Brodrick D. Johnson is a proud native of Jonesboro, Arkansas, raised by his parents, Frederick and Salenia Love, alongside three brothers and four sisters. A man of deep faith, he believes his life's purpose is to uplift others by helping them recognize their value and potential.\n\nBrodrick earned his bachelor's degree in Sports Management and completed a master's degree in Sports Administration in August 2012. With over 15 years of experience in college athletics, he has served in a variety of roles that have shaped his relentless work ethic and deep passion for student-athlete development.\n\nIn Spring 2019, he became a member of Alpha Phi Alpha Fraternity, Inc., the oldest intercollegiate historically African American fraternity. Since joining, he has held multiple leadership roles and currently advises two undergraduate chapters: Theta Upsilon at Arkansas State University and Xi Iota at the University of Central Florida.\n\nCurrently, Brother Johnson serves at the University of Central Florida (UCF) as the Assistant Athletics Director for student-athlete development, focusing on the holistic development of student-athletes. His mission is to prepare young men and women for success beyond the playing field. Through the Knights Leadership Academy, he has developed programs that integrate academic support, career readiness, community service, and leadership training to foster well-rounded individuals.\n\nOver the past four years, he has led initiatives centered on leadership, time management, financial literacy, and career development. By collaborating with faculty, alumni, and industry professionals, his team has created internship pipelines, mentoring relationships, and hands-on workshops in resume writing and interview preparation designed to equip athletes for life after sports.\n\nCommunity engagement is a core pillar of his work. He has helped lead efforts that resulted in UCF student-athletes completing over 3,000 hours of service in just two years. His partnerships with the Boys and Girls Club of Orlando, Orange County Public Schools, Team Impact, and Orlando Health reflect his commitment to building a culture of giving back.\n\nBrother Johnson's long-term vision is to position UCF Athletics as a leader in community outreach—not only in Florida, but nationwide. He works with a dedicated team at UCF, all committed to transforming lives, uplifting the community, and empowering the next generation of leaders.",
      yearsOfService: "Spring 2019",
      education:
        "Master's Degree in Sports Administration (August 2012); Bachelor's Degree in Sports Management",
      specialties: [
        "Sports, time with family, close friends, and Fraternity brothers",
        "Traveling in and out the country, music (especially live)",
        "Student-Athlete Development",
        "Leadership Training",
      ],
      hometown: "Jonesboro, Arkansas",
      organizations: ["Alpha Phi Alpha Fraternity, Inc."],
      initiatedChapter: "Mu Omicron Lambda",
      currentChapter: "Delta Xi Lambda",
      linkedin: "https://www.linkedin.com/in/brodrick-johnson-2294a9128",
      email: "bjohnson@athletics.ucf.edu",
      achievements: [
        "2024 Sporty Recipient for best in Social Responsibility by Greater Orlando Sports Commission",
        "2023-2024 Outstanding Community Partner Recipient for Orange County Public School System",
        "15+ Years of Experience in College Athletics",
        "Led UCF student-athletes to complete over 3,000 hours of community service in two years",
      ],
      quote:
        "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars, to change the world.",
    },
    "3": {
      name: "Dr. James Thompson",
      position: "Academic Advisor",
      title: "Dean of Student Affairs",
      organization: "University of North Texas",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      bio: "Dr. James Thompson serves as the Academic Advisor, focusing on the educational success and personal development of chapter members. As Dean of Student Affairs at UNT, he brings a deep understanding of higher education systems and student support services. His commitment to academic excellence and holistic student development aligns perfectly with Alpha Phi Alpha's emphasis on scholarship. Dr. Thompson works closely with brothers to ensure they maintain high academic standards while actively participating in fraternal activities and community service.",
      yearsOfService: "Spring 2018",
      education: "Ed.D. in Higher Education Administration, Harvard University",
      specialties: [
        "Academic Success Coaching",
        "Student Development",
        "Higher Education Policy",
        "Leadership Education",
      ],
      hometown: "Dallas, Texas",
      organizations: ["Alpha Phi Alpha Fraternity, Inc."],
      initiatedChapter: "Beta Delta Lambda",
      currentChapter: "Beta Delta Lambda",
      linkedin: "https://linkedin.com/in/james-thompson-edd",
      email: "james.thompson@unt.edu",
      achievements: [
        "Academic Excellence Leadership",
        "Student Success Advocate",
        "Higher Education Innovation",
      ],
      quote:
        "Education is the most powerful weapon which you can use to change the world.",
    },
    "4": {
      name: "Mr. Charles Davis",
      position: "Alumni Relations Advisor",
      title: "Corporate Executive",
      organization: "Fortune 500 Company",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face",
      bio: "Mr. Charles Davis serves as the Alumni Relations Advisor, maintaining strong connections between current brothers and the broader Alpha Phi Alpha community. With his extensive corporate background and leadership experience, he facilitates networking opportunities and mentorship programs that bridge the gap between college and career success. Charles is instrumental in organizing alumni events and creating pathways for professional development. His commitment to lifelong brotherhood ensures that Xi Iota Chapter members remain connected to their fraternal family throughout their careers.",
      yearsOfService: "Fall 2020",
      education: "MBA in Management, Northwestern Kellogg",
      specialties: [
        "Alumni Engagement",
        "Corporate Relations",
        "Professional Mentorship",
        "Network Development",
      ],
      hometown: "Chicago, Illinois",
      organizations: ["Alpha Phi Alpha Fraternity, Inc."],
      initiatedChapter: "Beta Phi Lambda",
      currentChapter: "Beta Phi Lambda",
      linkedin: "https://linkedin.com/in/charles-davis-executive",
      email: "charles.davis@fortune500.com",
      achievements: [
        "Corporate Leadership Excellence",
        "Alumni Network Development",
        "Professional Mentorship",
      ],
      quote:
        "The strength of the pack is the wolf, and the strength of the wolf is the pack.",
    },
  };

  const advisor = advisorData[id as string];

  if (!advisor) {
    return (
      <div className="min-h-screen bg-black text-white font-lora flex items-center justify-center relative overflow-hidden">
        <Navigation />
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
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
            Advisor Not Found
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The advisor you're looking for doesn't exist in our records.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/advisors"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Advisors
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
              to="/advisors"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="font-semibold">Back to Advisors</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
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
                  {advisor.name}
                </motion.h1>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-300 italic max-w-2xl mx-auto">
                    "{advisor.quote}"
                  </p>
                </motion.div>

                {/* Position and Organization Badges */}
                <motion.div
                  className="flex justify-center space-x-4 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {advisor.position}
                  </span>
                  <span className="bg-black/80 text-yellow-400 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-yellow-400/30 font-semibold">
                    {advisor.yearsOfService}
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Profile Image */}
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
                        src={advisor.image}
                        alt={advisor.name}
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
                    {advisor.linkedin && (
                      <motion.a
                        href={advisor.linkedin}
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
                    {advisor.email && (
                      <motion.a
                        href={`mailto:${advisor.email}`}
                        className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Personal Info */}
                  <motion.div
                    className="mt-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isHeroInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
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
                          <p className="text-white text-sm">
                            {advisor.hometown}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-400 text-sm">
                            Initiated
                          </h4>
                          <p className="text-white text-sm">
                            {advisor.initiatedChapter
                              ? `${advisor.initiatedChapter} | ${advisor.yearsOfService}`
                              : advisor.yearsOfService}
                          </p>
                        </div>
                        {advisor.currentChapter && (
                          <div>
                            <h4 className="font-semibold text-gray-400 text-sm">
                              Current
                            </h4>
                            <p className="text-white text-sm">
                              {advisor.currentChapter}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bio and Details */}
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
                    <div className="max-h-80 overflow-y-auto scrollbar-thin pr-2">
                      <div className="text-gray-300 leading-relaxed space-y-4">
                        {advisor.bio.split("\n\n").map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-300 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements Grid */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-cinzel">
                      Achievements
                    </h2>
                    <div className="max-h-64 overflow-y-auto scrollbar-thin pr-2">
                      <div className="grid grid-cols-1 gap-3">
                        {advisor.achievements.map((achievement, index) => (
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
                  {/* Professional Info */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Professional
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Title
                        </h4>
                        <p className="text-white text-sm">{advisor.title}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-400 text-sm">
                          Company
                        </h4>
                        <p className="text-white text-sm">
                          {advisor.organization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Education
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-white text-sm space-y-1">
                          {advisor.education.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Organizations Info */}
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <Building className="h-5 w-5 text-yellow-400 mr-2" />
                      <h3 className="text-lg font-bold text-yellow-400 font-cinzel">
                        Organizations
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {advisor.organizations.map((org, index) => (
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
                      {advisor.specialties.map((specialty, index) => (
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
                          {specialty}
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

export default AdvisorDetail;
