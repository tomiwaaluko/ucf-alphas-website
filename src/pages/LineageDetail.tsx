import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Calendar, Award } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface Member {
  name: string;
  nickname: string;
  position?: string;
  year: number;
  achievements?: string[];
}

interface LineageDetailData {
  id: string;
  name: string;
  nickname: string;
  year: number;
  description: string;
  fullDescription: string;
  color: string;
  image: string;
  motto: string;
  members: Member[];
  values: string[];
}

interface DeanStaff {
  name: string;
  position: string;
}

interface LineageDetailData {
  id: string;
  name: string;
  nickname: string;
  year: number;
  semester?: string;
  description: string;
  fullDescription: string;
  color: string;
  image: string;
  motto: string;
  members: Member[];
  values: string[];
  deanStaff?: DeanStaff[];
}

const lineageDetailData: { [key: string]: LineageDetailData } = {
  conquer: {
    id: "conquer",
    name: "The Vanguard",
    nickname: "",
    year: 2024,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-red-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Tre 'K.I.L.L. S.W.I.T.C.H.' Steward",
        position: "DP",
      },
      {
        name: "Camari 'PHrontrunner' Nelson",
        position: "ADP",
      },
      {
        name: "Khadeem 'Lock J.A.W.' Chronicle",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Abdul Ibrahim",
        nickname: "PHlash Bang",
        position: "1",
        year: 2024,
        achievements: [],
      },
      {
        name: "Corey Barnes Jr.",
        nickname: "Shakespeare",
        position: "3",
        year: 2024,
        achievements: [],
      },
      {
        name: "Jacob Herrera",
        nickname: "PHlast Lane",
        position: "4",
        year: 2024,
        achievements: [],
      },
      {
        name: "Adams Brown Jr.",
        nickname: "6ixth Sense",
        position: "6",
        year: 2024,
        achievements: [],
      },
      {
        name: "Benjamin Blocker",
        nickname: "Pressure Point",
        position: "7",
        year: 2024,
        achievements: [],
      },
      {
        name: "Jevaughn Morris",
        nickname: "Informer",
        position: "8",
        year: 2024,
        achievements: [],
      },
      {
        name: "Toluwani Aluko",
        nickname: "PHrostB.I.T.E.",
        position: "9",
        year: 2024,
        achievements: [],
      },
      {
        name: "Treylon Chukes",
        nickname: "PHinal Lap",
        position: "10",
        year: 2024,
        achievements: [],
      },
    ],
  },
  persist: {
    id: "persist",
    name: "Persist",
    nickname: "The Persistent",
    year: 2020,
    description:
      "Through perseverance and unwavering commitment, this line has shown the true meaning of Alpha brotherhood.",
    fullDescription:
      "The Persist line embodies the true essence of perseverance. In the face of unprecedented challenges and global uncertainty, these brothers demonstrated unwavering commitment to their goals and to each other. Their journey exemplifies how persistence and brotherhood can overcome any obstacle.",
    color: "from-blue-600 to-blue-800",
    image: "/placeholder.svg",
    motto: "Strength Through Persistence",
    values: ["Perseverance", "Commitment", "Unity", "Resilience"],
    members: [
      {
        name: "Brandon Jackson",
        nickname: "Fortress",
        position: "Line President",
        year: 2020,
        achievements: [
          "Leadership Excellence",
          "Community Service",
          "Academic Honor",
        ],
      },
      {
        name: "Jordan White",
        nickname: "Anchor",
        year: 2020,
        achievements: ["Scholarship Award", "Student Leadership"],
      },
      {
        name: "Isaiah Harris",
        nickname: "Rock",
        year: 2020,
        achievements: ["Research Recognition", "Mentorship Excellence"],
      },
      {
        name: "Caleb Martin",
        nickname: "Steel",
        year: 2020,
        achievements: ["Academic Achievement", "Service Award"],
      },
      {
        name: "Elijah Thompson",
        nickname: "Iron",
        year: 2020,
        achievements: ["Leadership Development", "Community Impact"],
      },
      {
        name: "Gabriel Garcia",
        nickname: "Stone",
        year: 2020,
        achievements: ["Excellence in Service", "Academic Recognition"],
      },
    ],
  },
  elevate: {
    id: "elevate",
    name: "The Last Survivors of I.S.F.E.T",
    nickname: "",
    year: 2021,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-purple-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Eldrick 'Static Shock' Clapp",
        position: "DP",
      },
      {
        name: "Raeshaun 'ProPHessor X' Coonce",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Tre Steward",
        nickname: "K.I.L.L.S.W.I.T.C.H.",
        position: "1",
        year: 2021,
        achievements: [],
      },
      {
        name: "Desmond Richebonod",
        nickname: "INVOL.C",
        position: "2",
        year: 2021,
        achievements: [],
      },
      {
        name: "Brandon Mullings",
        nickname: "HEPHAESTUS",
        position: "3",
        year: 2021,
        achievements: [],
      },
      {
        name: "Jeffrey Cherisma",
        nickname: "ICfolate",
        position: "4",
        year: 2021,
        achievements: [],
      },
      {
        name: "Rick Pierre-Louis",
        nickname: "PHilomathic",
        position: "6",
        year: 2021,
        achievements: [],
      },
    ],
  },
  illuminate: {
    id: "illuminate",
    name: "THE FIVE PHARAOHS of X's INTERMINABLE REIGN",
    nickname: "",
    year: 2022,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-yellow-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Raeshaun 'ProPHessor X' Coonce",
        position: "DP",
      },
      {
        name: "Brendan 'Winter S.O.L.D.I.E.R' Toney",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Jordan Bolds",
        nickname: "C.O.L.O.S.S.U.S.",
        position: "1",
        year: 2022,
        achievements: [],
      },
      {
        name: "Sergio Bodden",
        nickname: "HYPNOS",
        position: "2",
        year: 2022,
        achievements: [],
      },
      {
        name: "Nijel Beverly",
        nickname: "THE M.I.S.S.I.O.N.",
        position: "3",
        year: 2022,
        achievements: [],
      },
      {
        name: "Olatomiwa Aluko",
        nickname: "EXILE",
        position: "4",
        year: 2022,
        achievements: [],
      },
      {
        name: "Steven Woodbury",
        nickname: "ENDorphin",
        position: "5",
        year: 2022,
        achievements: [],
      },
    ],
  },
  transcend: {
    id: "transcend",
    name: "UnLaw.P.H.U.L Answers",
    nickname: "",
    year: 2023,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-green-600 to-green-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Rick 'PHilomathic' Pierre-Louis",
        position: "DP",
      },
      {
        name: "Tre 'K.I.L.L.S.W.I.T.C.H.' Steward",
        position: "ADP",
      },
      {
        name: "Nijel 'THE M.I.S.S.I.O.N.' Beverly",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Camari Nelson",
        nickname: "PHrontrunner",
        position: "1",
        year: 2023,
        achievements: [],
      },
      {
        name: "Samuel Vallon",
        nickname: "SoulFly",
        position: "2",
        year: 2023,
        achievements: [],
      },
      {
        name: "Nehito Dorval",
        nickname: "MorPHeus",
        position: "5",
        year: 2023,
        achievements: [],
      },
      {
        name: "Khadeem Chronicle",
        nickname: "Lock J.A.W.",
        position: "6",
        year: 2023,
        achievements: [],
      },
      {
        name: "Rashawn Hendricks",
        nickname: "UnPHorseen",
        position: "7",
        year: 2023,
        achievements: [],
      },
      {
        name: "Jonathan Weaver",
        nickname: "Juggernaut",
        position: "8",
        year: 2023,
        achievements: [],
      },
      {
        name: "Miles Coats",
        nickname: "PerPHectionist",
        position: "10",
        year: 2023,
        achievements: [],
      },
    ],
  },
  unlaw: {
    id: "unlaw",
    name: "UnLaw.P.H.U.L Answers",
    nickname: "",
    year: 2023,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-green-600 to-green-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Rick 'PHilomathic' Pierre-Louis",
        position: "DP",
      },
      {
        name: "Tre 'K.I.L.L.S.W.I.T.C.H.' Steward",
        position: "ADP",
      },
      {
        name: "Nijel 'THE M.I.S.S.I.O.N.' Beverly",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Camari Nelson",
        nickname: "PHrontrunner",
        position: "1",
        year: 2023,
        achievements: [],
      },
      {
        name: "Samuel Vallon",
        nickname: "SoulFly",
        position: "2",
        year: 2023,
        achievements: [],
      },
      {
        name: "Nehito Dorval",
        nickname: "MorPHeus",
        position: "5",
        year: 2023,
        achievements: [],
      },
      {
        name: "Khadeem Chronicle",
        nickname: "Lock J.A.W.",
        position: "6",
        year: 2023,
        achievements: [],
      },
      {
        name: "Rashawn Hendricks",
        nickname: "UnPHorseen",
        position: "7",
        year: 2023,
        achievements: [],
      },
      {
        name: "Jonathan Weaver",
        nickname: "Juggernaut",
        position: "8",
        year: 2023,
        achievements: [],
      },
      {
        name: "Miles Coats",
        nickname: "PerPHectionist",
        position: "10",
        year: 2023,
        achievements: [],
      },
    ],
  },
  sovereign: {
    id: "sovereign",
    name: "THE FIVE PHARAOHS of X's INTERMINABLE REIGN",
    nickname: "",
    year: 2022,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-yellow-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Raeshaun 'ProPHessor X' Coonce",
        position: "DP",
      },
      {
        name: "Brendan 'Winter S.O.L.D.I.E.R' Toney",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Jordan Bolds",
        nickname: "C.O.L.O.S.S.U.S.",
        position: "1",
        year: 2022,
        achievements: [],
      },
      {
        name: "Sergio Bodden",
        nickname: "HYPNOS",
        position: "2",
        year: 2022,
        achievements: [],
      },
      {
        name: "Nijel Beverly",
        nickname: "THE M.I.S.S.I.O.N.",
        position: "3",
        year: 2022,
        achievements: [],
      },
      {
        name: "Olatomiwa Aluko",
        nickname: "EXILE",
        position: "4",
        year: 2022,
        achievements: [],
      },
      {
        name: "Steven Woodbury",
        nickname: "ENDorphin",
        position: "5",
        year: 2022,
        achievements: [],
      },
    ],
  },
};

const LineageDetail = () => {
  const { lineId } = useParams<{ lineId: string }>();
  const navigate = useNavigate();

  const lineData = lineId ? lineageDetailData[lineId] : null;

  if (!lineData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Line Not Found</h1>
          <button
            onClick={() => navigate("/lineage")}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            Back to Lineage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation />

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 mb-16"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/lineage")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Lineage
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400"
              >
                {lineData.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center text-gray-400 mb-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>
                  Crossed {lineData.semester || "Fall"} {lineData.year}
                </span>
                <Users className="w-5 h-5 ml-6 mr-2" />
                <span>{lineData.members.length} Members</span>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={lineData.image}
                  alt={lineData.name}
                  className="w-full h-96 object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${lineData.color} opacity-60`}
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Dean Staff Section */}
        {lineData.deanStaff && lineData.deanStaff.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-7xl mx-auto px-4 mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Dean Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lineData.deanStaff.map((staff, index) => (
                <motion.div
                  key={staff.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 shadow-lg"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {staff.name}
                    </h3>
                    <p className="text-yellow-400 font-semibold">
                      {staff.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Line Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lineData.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 shadow-lg"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold">
                    {member.nickname}
                  </p>
                  {member.position && (
                    <p className="text-gray-400 text-sm mt-1">
                      #{member.position}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default LineageDetail;
