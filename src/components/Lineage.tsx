import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Crown,
  Shield,
  Star,
  Award,
  Zap,
  Target,
  Trophy,
  Flame,
  Users,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Enhanced lineage data with icons and descriptions
const lineageCards = [
  {
    id: "conquer",
    name: "The Vanguard",
    fullName: "",
    semester: "Fall 2024",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-yellow-400 to-amber-500",
    description: "",
    members: 8,
    dp: "Tre 'K.I.L.L. S.W.I.T.C.H.' Steward",
    adp: "Camari 'PHrontrunner' Nelson",
    chapters: "ADP: Khadeem 'Lock J.A.W.' Chronicle",
    lineMembers: [
      { number: 1, name: "Abdul 'PHlash Bang' Ibrahim" },
      { number: 2, name: "-" },
      { number: 3, name: "Corey 'Shakespeare' Barnes Jr." },
      { number: 4, name: "Jacob 'PHlast Lane' Herrera" },
      { number: 5, name: "-" },
      { number: 6, name: "Adams 'sixth Sense' Brown Jr." },
      { number: 7, name: "Benjamin 'Pressure Point' Blocker" },
      { number: 8, name: "Jevaughn 'Informer' Morris" },
      { number: 9, name: "Toluwani 'PHrostB.I.T.E.' Aluko" },
      { number: 10, name: "Treylon 'PHinal Lap' Chukes" },
    ],
  },
  {
    id: "unlaw",
    name: "UnLaw.P.H.U.L Answers",
    fullName: "",
    semester: "Spring 2023",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-green-400 to-emerald-500",
    description: "",
    members: 8,
  },
  {
    id: "sovereign",
    name: "THE FIVE PHARAOHS of X's INTERMINABLE REIGN",
    fullName: "",
    semester: "Spring 2022",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    description: "",
    members: 5,
  },
  {
    id: "empire",
    name: "The Last Survivors of I.S.F.E.T",
    fullName: "",
    semester: "Fall 2021",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-purple-400 to-pink-500",
    description: "",
    members: 5,
  },
  {
    id: "legacy",
    name: "The C.R.I.S.I.S.",
    fullName: "",
    semester: "Fall 2020",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
    icon: Zap,
    color: "from-orange-400 to-red-500",
    description: "",
    members: 10,
  },
  {
    id: "dominate",
    name: "The 9th D.I.M.E.N.S.I.O.N.",
    fullName: "",
    semester: "Spring 2019",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=300&fit=crop",
    icon: Flame,
    color: "from-violet-400 to-purple-500",
    description: "",
    members: 9,
  },
  {
    id: "rise",
    name: "The Rage of 6 P.A.T.H.S.",
    fullName: "",
    semester: "Spring 2018",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    description: "",
    members: 6,
  },
  {
    id: "rise",
    name: "The Rage of 6 P.A.T.H.S.",
    fullName: "",
    semester: "Spring 2018",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    description: "",
    members: 6,
  },
  {
    id: "excel",
    name: "The 11 P.H.A.C.E.S. of Phrozen Met3amorphosis",
    fullName: "",
    semester: "Spring 2017",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
    icon: Users,
    color: "from-emerald-400 to-teal-500",
    description: "",
    members: 11,
  },
  {
    id: "power",
    name: "The A.P.H.I.liates of Resurrected Enlightenment",
    fullName: "",
    semester: "Fall 2015",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
    icon: Trophy,
    color: "from-rose-400 to-pink-500",
    description: "",
    members: 5,
  },
  {
    id: "victory",
    name: "The E.N.C.O.R.E.",
    fullName: "",
    semester: "Spring 2015",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    icon: Target,
    color: "from-teal-400 to-cyan-500",
    description: "",
    members: 8,
  },
  {
    id: "triumph",
    name: "The A.P.H.T.E.R.M.A.T.H.",
    fullName: "",
    semester: "Spring 2013",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-green-400 to-emerald-500",
    description: "",
    members: 9,
  },
  {
    id: "trauma",
    name: "Ice Cold Trauma",
    fullName: "",
    semester: "Fall 2011",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    description: "",
    members: 7,
  },
  {
    id: "sacrifice",
    name: "The S.A.C.R.I.PHICE",
    fullName: "",
    semester: "Fall 2010",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-gray-400 to-gray-600",
    description: "",
    members: 6,
  },
  {
    id: "everlast",
    name: "The Everlast-ing P.H.I.R.E",
    fullName: "",
    semester: "Fall 2009",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    icon: Flame,
    color: "from-red-400 to-orange-500",
    description: "",
    members: 2,
  },
  {
    id: "secret",
    name: "The Six Egyptians Chosen for the Rebirth & Emancipation of T3 (S.E.C.R.E.T3.)",
    fullName: "",
    semester: "Spring 2009",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-purple-400 to-violet-500",
    description: "",
    members: 6,
  },
  {
    id: "deep",
    name: "5 Degrees of Enlightened Executive Privilege (D.E.E.P.)",
    fullName: "",
    semester: "Spring 2008",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    description: "",
    members: 5,
  },
  {
    id: "rumble",
    name: "The Rumble in the Jungle",
    fullName: "",
    semester: "Fall 2007",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Zap,
    color: "from-green-400 to-teal-500",
    description: "",
    members: 2,
  },
  {
    id: "centennial",
    name: "4 Pharaohs of the Centennial Massacre",
    fullName: "",
    semester: "Fall 2006",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-red-400 to-pink-500",
    description: "",
    members: 4,
  },
  {
    id: "guardians",
    name: "Guardians of the Temple Light",
    fullName: "",
    semester: "Fall 2005",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-amber-400 to-yellow-500",
    description: "",
    members: 4,
  },
  {
    id: "destructors",
    name: "Five Destructors of the Sixth Dynasty",
    fullName: "",
    semester: "Spring 2005",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
    icon: Trophy,
    color: "from-purple-400 to-red-500",
    description: "",
    members: 5,
  },
  {
    id: "prodigal",
    name: "Five Prodigal Sons of the Fifth Disciple",
    fullName: "",
    semester: "Spring 2004",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-indigo-400 to-blue-500",
    description: "",
    members: 5,
  },
  {
    id: "curse",
    name: "Curse of Knowledge",
    fullName: "",
    semester: "Fall 2002",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Target,
    color: "from-gray-400 to-black",
    description: "",
    members: 1,
  },
  {
    id: "sphinx",
    name: "Sole Survivor of the Sphinx",
    fullName: "",
    semester: "Spring 2002",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-yellow-400 to-amber-500",
    description: "",
    members: 1,
  },
  {
    id: "phoenix",
    name: "The 5 Disciples of the P.H.O.E.N.I.X.",
    fullName: "",
    semester: "Fall 2001",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    icon: Flame,
    color: "from-orange-400 to-red-500",
    description: "",
    members: 5,
  },
  {
    id: "aphinity",
    name: "The Aphinity",
    fullName: "",
    semester: "Fall 2000",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-blue-400 to-purple-500",
    description: "",
    members: 3,
  },
  {
    id: "pharaoh",
    name: "The Last Sons of the 2nd Pharaoh",
    fullName: "",
    semester: "Spring 2000",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Users,
    color: "from-teal-400 to-green-500",
    description: "",
    members: 2,
  },
  {
    id: "timex",
    name: "T.I.M.E.X.",
    fullName: "",
    semester: "Fall 1999",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Trophy,
    color: "from-gray-400 to-slate-500",
    description: "",
    members: 2,
  },
  {
    id: "keepers",
    name: "Keepers of the Lost Process",
    fullName: "",
    semester: "Fall 1997",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-emerald-400 to-green-500",
    description: "",
    members: 7,
  },
  {
    id: "masked",
    name: "Masked Soldiers of Destruction",
    fullName: "",
    semester: "Spring 1997",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
    icon: Zap,
    color: "from-red-400 to-black",
    description: "",
    members: 4,
  },
  {
    id: "rightstu",
    name: "The Right Stu",
    fullName: "",
    semester: "Spring 1996",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-cyan-400 to-blue-500",
    description: "",
    members: 8,
  },
  {
    id: "gfunk",
    name: "G-Funk",
    fullName: "",
    semester: "Spring 1996",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-violet-400 to-purple-500",
    description: "",
    members: 2,
  },
  {
    id: "disciple",
    name: "The Last Disciple of King Solomon's Tomb",
    fullName: "",
    semester: "Fall 1995",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-amber-400 to-yellow-500",
    description: "",
    members: 1,
  },
  {
    id: "disasters",
    name: "Natural Disasters",
    fullName: "",
    semester: "Spring 1994",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    icon: Flame,
    color: "from-orange-400 to-red-500",
    description: "",
    members: 3,
  },
  {
    id: "hardway",
    name: "2 The Hard Way",
    fullName: "",
    semester: "Spring 1993",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    icon: Target,
    color: "from-slate-400 to-gray-500",
    description: "",
    members: 2,
  },
  {
    id: "littlerock",
    name: "Little Rock Nine",
    fullName: "",
    semester: "Fall 1992",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
    icon: Users,
    color: "from-indigo-400 to-blue-500",
    description: "",
    members: 7,
  },
  {
    id: "conceptions",
    name: "Conceptions of the Mind",
    fullName: "",
    semester: "Fall 1990",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-purple-400 to-violet-500",
    description: "",
    members: 3,
  },
  {
    id: "quietstorm",
    name: "Quiet Storm",
    fullName: "",
    semester: "Spring 1990",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Trophy,
    color: "from-gray-400 to-blue-500",
    description: "",
    members: 2,
  },
  {
    id: "fall89",
    name: "Fall 1989",
    fullName: "",
    semester: "Fall 1989",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-teal-400 to-green-500",
    description: "",
    members: 3,
  },
  {
    id: "facesofdeath",
    name: "Faces of Death",
    fullName: "",
    semester: "Spring 1989",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
    icon: Zap,
    color: "from-red-400 to-black",
    description: "",
    members: 2,
  },
  {
    id: "demolition",
    name: "The Demolition Team",
    fullName: "",
    semester: "Fall 1986",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-orange-400 to-red-500",
    description: "",
    members: 6,
  },
  {
    id: "sources",
    name: "Two Selected Sources",
    fullName: "",
    semester: "Spring 1985",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    description: "",
    members: 2,
  },
  {
    id: "fourseasons",
    name: "Four Seasons",
    fullName: "",
    semester: "Fall 1984",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-green-400 to-teal-500",
    description: "",
    members: 4,
  },
  {
    id: "tenacious",
    name: "The Tenacious Trio of Terror",
    fullName: "",
    semester: "Spring 1984",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    icon: Flame,
    color: "from-red-400 to-pink-500",
    description: "",
    members: 3,
  },
  {
    id: "masters",
    name: "The Masters of Manipulation",
    fullName: "",
    semester: "Spring 1983",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    icon: Target,
    color: "from-purple-400 to-violet-500",
    description: "",
    members: 2,
  },
  {
    id: "fourth",
    name: "The Fourth One",
    fullName: "",
    semester: "Fall 1982",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
    icon: Users,
    color: "from-gray-400 to-slate-500",
    description: "",
    members: 2,
  },
  {
    id: "notorious",
    name: "The Notorious Three",
    fullName: "",
    semester: "Spring 1982",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    icon: Trophy,
    color: "from-blue-400 to-indigo-500",
    description: "",
    members: 3,
  },
  {
    id: "second",
    name: "The Second One",
    fullName: "",
    semester: "Spring 1980",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=300&fit=crop",
    icon: Star,
    color: "from-amber-400 to-yellow-500",
    description: "",
    members: 3,
  },
  {
    id: "charter",
    name: "The Minor Jewels",
    fullName: "Charter Line",
    semester: "June 16, 1979",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Crown,
    color: "from-yellow-400 via-amber-500 to-yellow-600",
    description: "The seven young men who established Xi Iota Chapter",
    members: 7,
    isCharter: true,
  },
];

const Lineage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleLearnMore = (lineId: string) => {
    navigate(`/lineage/${lineId}`);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Animated Background */}
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
        {/* Hero Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-yellow-400 mb-6 font-cinzel"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Lineage
              </motion.h1>

              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A Legacy of Excellence: The Brotherhood Lines That Built Our
                Chapter
              </motion.p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: "Total Lines", value: lineageCards.length },
                {
                  label: "Total Brothers",
                  value: lineageCards.reduce(
                    (sum, line) => sum + line.members,
                    0
                  ),
                },
                { label: "Years of Legacy", value: "7+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm text-center"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(250, 204, 21, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 font-cinzel">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Linear Cards Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              {lineageCards.map((line, index) => {
                const IconComponent = line.icon;

                return (
                  <LineageCard
                    key={index}
                    line={line}
                    index={index}
                    IconComponent={IconComponent}
                    onLearnMore={handleLearnMore}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Continue the Legacy
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Each line represents a chapter in our story. Join us in writing
                the next one.
              </motion.p>

              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 font-cinzel"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                onClick={() => navigate("/become-an-alpha")}
              >
                Learn About Membership
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Linear Card Component
interface LineageCardProps {
  line: {
    id: string;
    name: string;
    fullName: string;
    semester: string;
    image: string;
    color: string;
    description: string;
    members: number;
    isCharter?: boolean;
  };
  index: number;
  IconComponent: React.ComponentType<{ className?: string }>;
  onLearnMore: (lineId: string) => void;
}

const LineageCard = ({ line, index, onLearnMore }: LineageCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const isCharter = line.isCharter;

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Special Charter Crown for Charter Line */}
      {isCharter && (
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -20, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 rounded-full font-bold text-sm shadow-2xl border-2 border-yellow-300">
            👑 CHARTER LINE 👑
          </div>
        </motion.div>
      )}

      <motion.div
        className={`bg-gradient-to-br ${
          isCharter
            ? "from-yellow-900/90 to-amber-900/90 border-yellow-400/50"
            : "from-gray-900/90 to-black/90 border-yellow-400/20"
        } rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl relative`}
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced glowing border effect for charter */}
        <motion.div
          className={`absolute -inset-1 ${
            isCharter
              ? "bg-gradient-to-r from-yellow-400/40 to-amber-500/40"
              : "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20"
          } rounded-3xl blur-lg`}
          animate={{
            opacity: isCharter ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: isCharter ? 2 : 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />

        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } relative`}
        >
          {/* Image Section */}
          <div className="lg:w-2/5 relative">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img
                src={line.image}
                alt={line.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  isCharter
                    ? "bg-gradient-to-t from-yellow-900/80 via-amber-900/20 to-transparent"
                    : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                }`}
              ></div>

              {/* Special charter overlay */}
              {isCharter && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className={`text-3xl lg:text-4xl font-bold mb-3 font-cinzel tracking-wider ${
                  isCharter
                    ? "text-yellow-300 drop-shadow-lg"
                    : "text-yellow-400"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {line.name}
              </motion.h2>

              <motion.p
                className={`text-lg mb-4 font-medium ${
                  isCharter ? "text-yellow-200" : "text-gray-400"
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {line.fullName}
              </motion.p>

              <motion.p
                className={`text-base mb-6 leading-relaxed ${
                  isCharter ? "text-amber-100" : "text-gray-300"
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {line.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-6 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div
                  className={`flex items-center px-4 py-2 rounded-full ${
                    isCharter
                      ? "bg-yellow-300/30 border border-yellow-300/50"
                      : "bg-yellow-400/20 border border-yellow-400/30"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      isCharter ? "text-yellow-200" : "text-yellow-400"
                    }`}
                  >
                    {line.semester}
                  </span>
                </div>

                <div
                  className={`flex items-center px-4 py-2 rounded-full ${
                    isCharter
                      ? "bg-amber-800/50 text-amber-200"
                      : "bg-gray-800/50 text-gray-400"
                  }`}
                >
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">
                    {line.members} {isCharter ? "Founding Fathers" : "Brothers"}
                  </span>
                </div>
              </motion.div>

              {/* Learn More Button */}
              <motion.button
                onClick={() => onLearnMore(line.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl font-cinzel ${
                  isCharter
                    ? "bg-gradient-to-r from-yellow-300 to-amber-400 text-amber-900 hover:shadow-yellow-300/50"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:shadow-yellow-400/40"
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {isCharter ? "Learn More" : "Learn More"}
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lineage;
