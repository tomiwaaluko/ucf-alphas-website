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

const lineageDetailData: { [key: string]: LineageDetailData } = {
  conquer: {
    id: "conquer",
    name: "Conquer",
    nickname: "The Conquerors",
    year: 2019,
    description:
      "A line that exemplifies determination and excellence, conquering every challenge with brotherhood and dedication.",
    fullDescription:
      "The Conquer line stands as a testament to the unwavering spirit of Alpha Phi Alpha. Through their journey, they have demonstrated that with brotherhood, determination, and dedication, any obstacle can be overcome. Their legacy continues to inspire future generations of Alpha men to face challenges head-on and emerge victorious.",
    color: "from-red-600 to-red-800",
    image: "/placeholder.svg",
    motto: "Victory Through Unity",
    values: ["Determination", "Excellence", "Brotherhood", "Leadership"],
    members: [
      {
        name: "Michael Johnson",
        nickname: "Ace",
        position: "Line President",
        year: 2019,
        achievements: [
          "Dean's List",
          "Student Government",
          "Community Service Award",
        ],
      },
      {
        name: "David Williams",
        nickname: "Titan",
        year: 2019,
        achievements: ["Academic Excellence", "Leadership Recognition"],
      },
      {
        name: "Christopher Davis",
        nickname: "Phoenix",
        year: 2019,
        achievements: ["Athletic Achievement", "Scholarship Recipient"],
      },
      {
        name: "Anthony Brown",
        nickname: "Storm",
        year: 2019,
        achievements: ["Community Leader", "Honor Society"],
      },
      {
        name: "Marcus Wilson",
        nickname: "Thunder",
        year: 2019,
        achievements: ["Research Excellence", "Mentorship Program"],
      },
      {
        name: "James Anderson",
        nickname: "Lightning",
        year: 2019,
        achievements: ["Service Leadership", "Academic Honor"],
      },
      {
        name: "Robert Taylor",
        nickname: "Warrior",
        year: 2019,
        achievements: ["Athletic Excellence", "Community Impact"],
      },
      {
        name: "Kenneth Thomas",
        nickname: "Champion",
        year: 2019,
        achievements: ["Leadership Award", "Academic Achievement"],
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
    name: "Elevate",
    nickname: "The Elevated",
    year: 2021,
    description:
      "Rising above expectations and elevating the standards of excellence in service and scholarship.",
    fullDescription:
      "The Elevate line represents the continuous pursuit of excellence and the elevation of standards within Alpha Phi Alpha. These brothers have consistently raised the bar in academics, service, and leadership, inspiring others to reach new heights of achievement and personal growth.",
    color: "from-purple-600 to-purple-800",
    image: "/placeholder.svg",
    motto: "Rise Above Excellence",
    values: ["Excellence", "Innovation", "Growth", "Inspiration"],
    members: [
      {
        name: "Xavier Rodriguez",
        nickname: "Summit",
        position: "Line President",
        year: 2021,
        achievements: [
          "Outstanding Leadership",
          "Academic Excellence",
          "Innovation Award",
        ],
      },
      {
        name: "Mason Lewis",
        nickname: "Peak",
        year: 2021,
        achievements: ["Research Excellence", "Community Leadership"],
      },
      {
        name: "Lucas Lee",
        nickname: "Apex",
        year: 2021,
        achievements: ["Scholarship Recipient", "Service Recognition"],
      },
      {
        name: "Ethan Walker",
        nickname: "Zenith",
        year: 2021,
        achievements: ["Academic Honor", "Leadership Development"],
      },
      {
        name: "Noah Hall",
        nickname: "Pinnacle",
        year: 2021,
        achievements: ["Excellence in Service", "Mentorship Award"],
      },
      {
        name: "Logan Allen",
        nickname: "Crown",
        year: 2021,
        achievements: ["Student Leadership", "Community Impact"],
      },
      {
        name: "Carter Young",
        nickname: "Sovereign",
        year: 2021,
        achievements: ["Academic Achievement", "Service Excellence"],
      },
    ],
  },
  illuminate: {
    id: "illuminate",
    name: "Illuminate",
    nickname: "The Illuminators",
    year: 2022,
    description:
      "Bringing light to the community and illuminating the path for future generations of Alpha men.",
    fullDescription:
      "The Illuminate line serves as beacons of hope and guidance within their communities. Through their dedication to service and mentorship, they have illuminated pathways for others to follow, embodying the true spirit of Alpha Phi Alpha's mission to uplift humanity.",
    color: "from-yellow-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "Light the Way Forward",
    values: ["Guidance", "Service", "Mentorship", "Hope"],
    members: [
      {
        name: "Adrian Hernandez",
        nickname: "Beacon",
        position: "Line President",
        year: 2022,
        achievements: [
          "Community Leadership",
          "Mentorship Excellence",
          "Service Award",
        ],
      },
      {
        name: "Julian King",
        nickname: "Radiance",
        year: 2022,
        achievements: ["Academic Excellence", "Leadership Recognition"],
      },
      {
        name: "Dominic Wright",
        nickname: "Luminary",
        year: 2022,
        achievements: ["Research Achievement", "Community Service"],
      },
      {
        name: "Sebastian Lopez",
        nickname: "Prism",
        year: 2022,
        achievements: ["Innovation Award", "Academic Honor"],
      },
      {
        name: "Mateo Hill",
        nickname: "Aurora",
        year: 2022,
        achievements: ["Service Excellence", "Leadership Development"],
      },
      {
        name: "Diego Scott",
        nickname: "Solar",
        year: 2022,
        achievements: ["Scholarship Award", "Community Impact"],
      },
      {
        name: "Emilio Green",
        nickname: "Flame",
        year: 2022,
        achievements: ["Academic Achievement", "Mentorship Recognition"],
      },
      {
        name: "Ricardo Adams",
        nickname: "Glow",
        year: 2022,
        achievements: ["Leadership Excellence", "Service Recognition"],
      },
      {
        name: "Fernando Baker",
        nickname: "Shine",
        year: 2022,
        achievements: ["Research Excellence", "Community Leadership"],
      },
    ],
  },
  transcend: {
    id: "transcend",
    name: "Transcend",
    nickname: "The Transcendent",
    year: 2023,
    description:
      "Transcending boundaries and expectations while upholding the highest ideals of Alpha Phi Alpha.",
    fullDescription:
      "The Transcend line represents the newest generation of Alpha men who continue to push boundaries and exceed expectations. Their commitment to excellence and innovation ensures that the legacy of Alpha Phi Alpha will continue to evolve and inspire future generations.",
    color: "from-green-600 to-green-800",
    image: "/placeholder.svg",
    motto: "Beyond Limits, Beyond Excellence",
    values: ["Innovation", "Excellence", "Vision", "Legacy"],
    members: [
      {
        name: "Alexander Gonzalez",
        nickname: "Infinity",
        position: "Line President",
        year: 2023,
        achievements: [
          "Outstanding Leadership",
          "Innovation Excellence",
          "Academic Achievement",
        ],
      },
      {
        name: "Benjamin Nelson",
        nickname: "Beyond",
        year: 2023,
        achievements: ["Research Recognition", "Service Leadership"],
      },
      {
        name: "Samuel Carter",
        nickname: "Limitless",
        year: 2023,
        achievements: ["Academic Excellence", "Community Impact"],
      },
      {
        name: "Daniel Mitchell",
        nickname: "Eternal",
        year: 2023,
        achievements: ["Leadership Development", "Scholarship Award"],
      },
      {
        name: "Andrew Perez",
        nickname: "Ascend",
        year: 2023,
        achievements: ["Service Excellence", "Academic Honor"],
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
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                <span
                  className={`bg-gradient-to-r ${lineData.color} bg-clip-text text-transparent`}
                >
                  {lineData.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl text-yellow-400 font-semibold mb-2"
              >
                {lineData.nickname}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center text-gray-400 mb-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Crossed {lineData.year}</span>
                <Users className="w-5 h-5 ml-6 mr-2" />
                <span>{lineData.members.length} Members</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                {lineData.fullDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30"
              >
                <h3 className="text-yellow-400 font-bold mb-2">Line Motto</h3>
                <p className="text-white italic">"{lineData.motto}"</p>
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

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-7xl mx-auto px-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lineData.values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 text-center border border-yellow-500/20"
              >
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-white font-semibold">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold">
                    "{member.nickname}"
                  </p>
                  {member.position && (
                    <p className="text-gray-400 text-sm mt-1">
                      {member.position}
                    </p>
                  )}
                </div>

                {member.achievements && member.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Achievements
                    </h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
