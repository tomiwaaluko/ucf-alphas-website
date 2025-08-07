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
  empire: {
    id: "empire",
    name: "The Last Survivors of I.S.F.E.T",
    nickname: "",
    year: 2021,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-purple-800",
    image: "/lineage/Fall21.jpg",
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
        nickname: "KILL.S.W.I.T.C.H.",
        position: "1",
        year: 2021,
        achievements: [],
      },
      {
        name: "Desmond Richemond",
        nickname: "INVOI.C.E.",
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
        nickname: "ICEolate",
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
    image: "/lineage/Spring 23.jpg",
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
    name: "THE FIVE P.X.I.R.",
    nickname: "",
    year: 2022,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-yellow-600 to-yellow-800",
    image: "/lineage/Spring22alt.jpg",
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
  legacy: {
    id: "legacy",
    name: "The C.R.I.S.I.S.",
    nickname: "",
    year: 2020,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-orange-600 to-red-800",
    image: "/lineage/Fall20.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Malik 'Phourshadow' Santos",
        position: "DP",
      },
      {
        name: "Eldrick 'Static Shock' Clapp",
        position: "ADP",
      },
      {
        name: "Gedeon 'Cyborg' Richemond",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Ainsworth Hunter",
        nickname: "SONIC",
        position: "1",
        year: 2020,
        achievements: [],
      },
      {
        name: "Kenneth Lee",
        nickname: "Cyclops",
        position: "3",
        year: 2020,
        achievements: [],
      },
      {
        name: "Yuhan Ayala",
        nickname: "P.H.A.L.L.O.U.T",
        position: "5",
        year: 2020,
        achievements: [],
      },
      {
        name: "Jason Jean-Lous",
        nickname: "TYPHOON",
        position: "6",
        year: 2020,
        achievements: [],
      },
      {
        name: "Reneau Augusma",
        nickname: "PHrieza",
        position: "7",
        year: 2020,
        achievements: [],
      },
      {
        name: "Terrell Peters-Gillman",
        nickname: "AmpliPHied",
        position: "8",
        year: 2020,
        achievements: [],
      },
      {
        name: "Miche Milius",
        nickname: "Titan",
        position: "9",
        year: 2020,
        achievements: [],
      },
      {
        name: "Brandon Brown",
        nickname: "JackPHrost",
        position: "10",
        year: 2020,
        achievements: [],
      },
      {
        name: "Brendan Toney",
        nickname: "Winter S.O.L.D.I.E.R",
        position: "11",
        year: 2020,
        achievements: [],
      },
      {
        name: "Malachi Mullings",
        nickname: "TePHlon",
        position: "12",
        year: 2020,
        achievements: [],
      },
    ],
  },
  dominate: {
    id: "dominate",
    name: "The 9th D.I.M.E.N.S.I.O.N.",
    nickname: "",
    year: 2019,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-violet-600 to-purple-800",
    image: "/lineage/Spring19.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Jamal 'Knuckles' Adams",
        position: "DP",
      },
      {
        name: "Carl '3 P.E.A.T.' Hughes",
        position: "ADP",
      },
      {
        name: "Malik 'Phourshadow' Santos",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Wilkens Brisenold",
        nickname: "Game phACE",
        position: "1",
        year: 2019,
        achievements: [],
      },
      {
        name: "Omari Peele",
        nickname: "Ricochet",
        position: "2",
        year: 2019,
        achievements: [],
      },
      {
        name: "Aundra Williams",
        nickname: "B.L.A.D.E.",
        position: "3",
        year: 2019,
        achievements: [],
      },
      {
        name: "Tyriq Goldman",
        nickname: "TermiN.A.T.O.R.",
        position: "4",
        year: 2019,
        achievements: [],
      },
      {
        name: "Christopher Paul",
        nickname: "DeciPHer",
        position: "5",
        year: 2019,
        achievements: [],
      },
      {
        name: "Darien Hall",
        nickname: "ParadICE",
        position: "6",
        year: 2019,
        achievements: [],
      },
      {
        name: "Nicolas Francis",
        nickname: "S.U.B.A.T.O.M.I.C.",
        position: "7",
        year: 2019,
        achievements: [],
      },
      {
        name: "Eldrick Clapp",
        nickname: "Static Shock",
        position: "8",
        year: 2019,
        achievements: [],
      },
      {
        name: "Raeshaun Coonce",
        nickname: "ProPHessor X",
        position: "9",
        year: 2019,
        achievements: [],
      },
    ],
  },
  rise: {
    id: "rise",
    name: "The Rage of 6 P.A.T.H.S.",
    nickname: "",
    year: 2018,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-yellow-600 to-orange-800",
    image: "/lineage/Spring18.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Steven 'MorPHIne' Jacques",
        position: "DP",
      },
      {
        name: "Jamal 'Knuckles' Adams",
        position: "ADP",
      },
      {
        name: "Kyle 'BattlePHIeld' Clark",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Romaine Richards",
        nickname: "Cross PHIre",
        position: "2",
        year: 2018,
        achievements: [],
      },
      {
        name: "Keon Roache",
        nickname: "R.A.S.T.A.",
        position: "3",
        year: 2018,
        achievements: [],
      },
      {
        name: "Robert Holland",
        nickname: "C.O.B.R.A.",
        position: "4",
        year: 2018,
        achievements: [],
      },
      {
        name: "Joquebed Louis",
        nickname: "PhroZ.O.E.ne",
        position: "5",
        year: 2018,
        achievements: [],
      },
      {
        name: "Tommy Spencer",
        nickname: "S.I.X. Gauge",
        position: "6",
        year: 2018,
        achievements: [],
      },
      {
        name: "Marshall Holmes",
        nickname: "Secret ServICE",
        position: "7",
        year: 2018,
        achievements: [],
      },
    ],
  },
  excel: {
    id: "excel",
    name: "The 11 P.H.A.C.E.S. of Phrozen Met3amorphosis",
    nickname: "",
    year: 2017,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-emerald-600 to-teal-800",
    image: "/lineage/Spring17.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Brandon 'PHace Off' Williams",
        position: "DP",
      },
      {
        name: "Steven 'MorPHIne' Jacques",
        position: "ADP",
      },
      {
        name: "Xavier 'Phreeze PhrA.M.E.' Henderson",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "James Hosey",
        nickname: "S.H.O.W. CACE",
        position: "1",
        year: 2017,
        achievements: [],
      },
      {
        name: "Akin Adejunmobi",
        nickname: "Black Ops",
        position: "2",
        year: 2017,
        achievements: [],
      },
      {
        name: "Jamal Adams",
        nickname: "Knuckles",
        position: "3",
        year: 2017,
        achievements: [],
      },
      {
        name: "Malik Santos",
        nickname: "Phourshadow",
        position: "4",
        year: 2017,
        achievements: [],
      },
      {
        name: "Denis Louis",
        nickname: "U.L.T.R.O .N",
        position: "5",
        year: 2017,
        achievements: [],
      },
      {
        name: "Daniel Helligar",
        nickname: "D.R.O.N.E",
        position: "6",
        year: 2017,
        achievements: [],
      },
      {
        name: "Johnson Louis",
        nickname: "The P.H.R.O.Z.E.N. One",
        position: "7",
        year: 2017,
        achievements: [],
      },
      {
        name: "Stanley Pierre",
        nickname: "Brain B.LA.S.T",
        position: "8",
        year: 2017,
        achievements: [],
      },
      {
        name: "Brian Jackson",
        nickname: "Thanos",
        position: "9",
        year: 2017,
        achievements: [],
      },
      {
        name: "Gedeon Richemond",
        nickname: "Cyborg",
        position: "10",
        year: 2017,
        achievements: [],
      },
      {
        name: "Mubarak Calloway",
        nickname: "Evolution",
        position: "11",
        year: 2017,
        achievements: [],
      },
    ],
  },
  power: {
    id: "power",
    name: "The A.P.H.I.liates of Resurrected Enlightenment",
    nickname: "",
    year: 2015,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-rose-600 to-pink-800",
    image: "/lineage/Fall15all.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Tyri 'A.P.E.thetic' Travis",
        position: "DP",
      },
      {
        name: "Brandon 'PHace Off' Williams",
        position: "ADP",
      },
      {
        name: "Kevin 'W.A.R. Hero' Young, Jr.",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Steven Jacques",
        nickname: "MorPHIne",
        position: "2",
        year: 2015,
        achievements: [],
      },
      {
        name: "Carl Hughes",
        nickname: "3 P.E.A.T.",
        position: "3",
        year: 2015,
        achievements: [],
      },
      {
        name: "Andrew April",
        nickname: "Muphasa",
        position: "4",
        year: 2015,
        achievements: [],
      },
      {
        name: "Jelani Foy",
        nickname: "Phorce PHIeld",
        position: "5",
        year: 2015,
        achievements: [],
      },
      {
        name: "Kyle Clark",
        nickname: "BattlePHIeld",
        position: "6",
        year: 2015,
        achievements: [],
      },
    ],
  },
  victory: {
    id: "victory",
    name: "The E.N.C.O.R.E.",
    nickname: "",
    year: 2015,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-teal-600 to-cyan-800",
    image: "/lineage/Spring15.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Enaris 'mACEstro' Inman",
        position: "DP",
      },
      {
        name: "Herbert 'A.W.A.R.E.' Utile",
        position: "ADP",
      },
      {
        name: "Ka'nard 'PHourtunate' Robinson",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Brandon Williams",
        nickname: "PHace O",
        position: "1",
        year: 2015,
        achievements: [],
      },
      {
        name: "Kyler Gray",
        nickname: "Black I.C.E",
        position: "2",
        year: 2015,
        achievements: [],
      },
      {
        name: "Kevin Young, Jr.",
        nickname: "W.A.R. Hero",
        position: "3",
        year: 2015,
        achievements: [],
      },
      {
        name: "Tyri Travis",
        nickname: "A.P.E.thetic",
        position: "4",
        year: 2015,
        achievements: [],
      },
      {
        name: "David Augusma",
        nickname: "A.W.O.L.",
        position: "5",
        year: 2015,
        achievements: [],
      },
      {
        name: "Korey Salter",
        nickname: "Silent Assassin",
        position: "6",
        year: 2015,
        achievements: [],
      },
      {
        name: "Xavier Henderson",
        nickname: "Phreeze PhrA.M.E",
        position: "7",
        year: 2015,
        achievements: [],
      },
      {
        name: "Cass Brown",
        nickname: "Phenom",
        position: "8",
        year: 2015,
        achievements: [],
      },
    ],
  },
  triumph: {
    id: "triumph",
    name: "The A.P.H.T.E.R.M.A.T.H.",
    nickname: "",
    year: 2013,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-green-600 to-emerald-800",
    image: "/lineage/Spring13Faces.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Ismael 'Stone Cold' Brown",
        position: "DP",
      },
      {
        name: "Enaris 'mACEstro' Inman",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Herbert Utile",
        nickname: "A.W.A.R.E.",
        position: "1",
        year: 2013,
        achievements: [],
      },
      {
        name: "Phillip Bent",
        nickname: "Deux Process",
        position: "2",
        year: 2013,
        achievements: [],
      },
      {
        name: "Shane Bryant",
        nickname: "Purgatory",
        position: "3",
        year: 2013,
        achievements: [],
      },
      {
        name: "Ka'nard Robinson",
        nickname: "PHourtunate",
        position: "4",
        year: 2013,
        achievements: [],
      },
      {
        name: "Dickenson Joseph",
        nickname: "L.E.T.H.A.L.",
        position: "5",
        year: 2013,
        achievements: [],
      },
      {
        name: "Dwayne Houstonxavier",
        nickname: "Bruce Banner",
        position: "6",
        year: 2013,
        achievements: [],
      },
      {
        name: "Trent Friar",
        nickname: "C.Z.",
        position: "7",
        year: 2013,
        achievements: [],
      },
      {
        name: "Marcel Lilavois",
        nickname: "The GrEIGHT Escape",
        position: "8",
        year: 2013,
        achievements: [],
      },
      {
        name: "Jared Greenaway",
        nickname: "Cold W.A.R.",
        position: "9",
        year: 2013,
        achievements: [],
      },
    ],
  },
  trauma: {
    id: "trauma",
    name: "Ice Cold Trauma",
    nickname: "",
    year: 2011,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-blue-600 to-indigo-800",
    image: "/lineage/Fall11.jpg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Sean 'InPHormant' Bryant",
        position: "DP",
      },
      {
        name: "Barnell 'SolidAPHIed' Warren",
        position: "ADP",
      },
      {
        name: "Evan 'Poseidon' Easterling",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Enaris Inman",
        nickname: "mACEtro",
        position: "1",
        year: 2011,
        achievements: [],
      },
      {
        name: "Jason Washington",
        nickname: "MalICE",
        position: "2",
        year: 2011,
        achievements: [],
      },
      {
        name: "Idrees Khan",
        nickname: "ClassAPHIed",
        position: "3",
        year: 2011,
        achievements: [],
      },
      {
        name: "Taji Johnson",
        nickname: "Major Pain",
        position: "4",
        year: 2011,
        achievements: [],
      },
      {
        name: "Michael Bramwell",
        nickname: "SubZERO",
        position: "5",
        year: 2011,
        achievements: [],
      },
      {
        name: "Joseph Wilson",
        nickname: "Iron Man",
        position: "6",
        year: 2011,
        achievements: [],
      },
      {
        name: "Chris James",
        nickname: "True Grit",
        position: "7",
        year: 2011,
        achievements: [],
      },
    ],
  },
  sacrifice: {
    id: "sacrifice",
    name: "The S.A.C.R.I.PHICE",
    nickname: "",
    year: 2010,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-gray-600 to-gray-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Brandon 'De-PHI-ant' Hamilton",
        position: "DP",
      },
      {
        name: "Ronnie Jerome 'Lumberjack' Weaver, Jr.",
        position: "ADP",
      },
      {
        name: "Lawrence 'GraPHIte' Young",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Barnell Warren",
        nickname: "SolidAPHIed",
        position: "2",
        year: 2010,
        achievements: [],
      },
      {
        name: "Ismael Brown",
        nickname: "Stone Cold",
        position: "3",
        year: 2010,
        achievements: [],
      },
      {
        name: "Jonathan Baucom",
        nickname: "KONGquest",
        position: "4",
        year: 2010,
        achievements: [],
      },
      {
        name: "Joel Joseph (JJ)",
        nickname: "Phearless",
        position: "5",
        year: 2010,
        achievements: [],
      },
      {
        name: "Zumarr Archer",
        nickname: "Aphasic",
        position: "6",
        year: 2010,
        achievements: [],
      },
      {
        name: "Evan Easterling",
        nickname: "Poseidon",
        position: "7",
        year: 2010,
        achievements: [],
      },
    ],
  },
  everlast: {
    id: "everlast",
    name: "The Everlast-ing P.H.I.R.E",
    nickname: "",
    year: 2009,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-orange-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Michael 'Everlast' Pazmino",
        position: "DP",
      },
      {
        name: "Brandon 'Non-CHILL-ant' Jackson",
        position: "ADP",
      },
      {
        name: "Jereme 'Dephendant' Ford",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Shaun Gray",
        nickname: "All PurpACE",
        position: "1",
        year: 2009,
        achievements: [],
      },
      {
        name: "Sean Bryant",
        nickname: "Inphormant",
        position: "7",
        year: 2009,
        achievements: [],
      },
    ],
  },
  secret: {
    id: "secret",
    name: "The Six Egyptians Chosen for the Rebirth & Emancipation of T3 (S.E.C.R.E.T3.)",
    nickname: "",
    year: 2009,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-violet-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Matthew 'Phil-ICE-opher' Bryant",
        position: "DP",
      },
      {
        name: "Michael 'Everlast' Pazmino",
        position: "ADP",
      },
      {
        name: "Brandon 'Non-CHILL-ant' Jackson",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Sherrick Washington",
        nickname: "TenACEous",
        position: "1",
        year: 2009,
        achievements: [],
      },
      {
        name: "Corey Howard",
        nickname: "Sirius",
        position: "2",
        year: 2009,
        achievements: [],
      },
      {
        name: "Jereme Ford",
        nickname: "Dephendant",
        position: "3",
        year: 2009,
        achievements: [],
      },
      {
        name: "Ronnie Jerome Weaver Jr",
        nickname: "Lumberjack",
        position: "4",
        year: 2009,
        achievements: [],
      },
      {
        name: "Robert Harvey",
        nickname: "Phurious",
        position: "5",
        year: 2009,
        achievements: [],
      },
      {
        name: "Lawrence Young",
        nickname: "GrAPHIte",
        position: "6",
        year: 2009,
        achievements: [],
      },
    ],
  },
  rumble: {
    id: "rumble",
    name: "The Rumble in the Jungle",
    nickname: "",
    year: 2007,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-green-600 to-teal-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Justin 'Ali' Baker",
        position: "DP",
      },
      {
        name: "Alex 'Phear Phactor' Hodo",
        position: "ADP",
      },
      {
        name: "Mike 'Epidemic' Suarez",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Michael Pazmino",
        nickname: "Everlast",
        position: "4",
        year: 2007,
        achievements: [],
      },
      {
        name: "Dedrix Daka",
        nickname: "Knockout",
        position: "6",
        year: 2007,
        achievements: [],
      },
    ],
  },
  centennial: {
    id: "centennial",
    name: "4 Pharaohs of the Centennial Massacre",
    nickname: "",
    year: 2006,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-pink-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Sutton 'Tri-Phi-ector' Page III",
        position: "DP",
      },
      {
        name: "CJ 'Grimace' Nixon",
        position: "ADP",
      },
      {
        name: "Bryan 'Governor' Arnette",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Tristan Latchman",
        nickname: "Phusion",
        position: "2",
        year: 2006,
        achievements: [],
      },
      {
        name: "Dwayne Brown",
        nickname: "Iceberg",
        position: "4",
        year: 2006,
        achievements: [],
      },
      {
        name: "Khalil George",
        nickname: "Catastrophic",
        position: "7",
        year: 2006,
        achievements: [],
      },
      {
        name: "Aaron Brown (A.B.)",
        nickname: "Inpherno",
        position: "8",
        year: 2006,
        achievements: [],
      },
    ],
  },
  guardians: {
    id: "guardians",
    name: "Guardians of the Temple Light",
    nickname: "",
    year: 2005,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-amber-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Bryan Arnette",
        nickname: "Governor",
        position: "1",
        year: 2005,
        achievements: [],
      },
      {
        name: "Tadd Hale",
        nickname: "Show Tyme",
        position: "2",
        year: 2005,
        achievements: [],
      },
      {
        name: "Fayoce Sera",
        nickname: "Game",
        position: "3",
        year: 2005,
        achievements: [],
      },
      {
        name: "Eric Moore",
        nickname: "Phive Star",
        position: "5",
        year: 2005,
        achievements: [],
      },
    ],
  },
  destructors: {
    id: "destructors",
    name: "Five Destructors of the Sixth Dynasty",
    nickname: "",
    year: 2005,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-red-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Christopher 'Knowledge' Baroulette",
        position: "DP",
      },
      {
        name: "Alain 'Cardiac' Pompilus",
        position: "ADP",
      },
      {
        name: "Kennard 'Aphrica' Childs",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Mike Suarez",
        nickname: "Epidemic",
        position: "1",
        year: 2005,
        achievements: [],
      },
      {
        name: "Sutton Page III",
        nickname: "Tri-Phi-ector",
        position: "2",
        year: 2005,
        achievements: [],
      },
      {
        name: "Antonio Richards",
        nickname: "Phi-nesse",
        position: "3",
        year: 2005,
        achievements: [],
      },
      {
        name: "Harold Best",
        nickname: "Fourti-phi-ed",
        position: "4",
        year: 2005,
        achievements: [],
      },
      {
        name: "Justin Baker",
        nickname: "Ali",
        position: "5",
        year: 2005,
        achievements: [],
      },
    ],
  },
  curse: {
    id: "curse",
    name: "Curse of Knowledge",
    nickname: "",
    year: 2002,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-gray-600 to-black",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Eric Vaughn",
        nickname: "Adamant",
        position: "6",
        year: 2002,
        achievements: [],
      },
    ],
  },
  sphinx: {
    id: "sphinx",
    name: "Sole Survivor of the Sphinx",
    nickname: "",
    year: 2002,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-yellow-600 to-amber-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Alain Pompilus",
        nickname: "Cardiac",
        position: "5",
        year: 2002,
        achievements: [],
      },
    ],
  },
  phoenix: {
    id: "phoenix",
    name: "The 5 Disciples of the P.H.O.E.N.I.X.",
    nickname: "",
    year: 2001,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-orange-600 to-red-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Stuart Morgan-Graham",
        nickname: "Transcendental",
        position: "1",
        year: 2001,
        achievements: [],
      },
      {
        name: "Carlressian Jones",
        nickname: "Volcano",
        position: "2",
        year: 2001,
        achievements: [],
      },
      {
        name: "Joey Barnes",
        nickname: "Atlas",
        position: "4",
        year: 2001,
        achievements: [],
      },
      {
        name: "Adrian Easterling",
        nickname: "Perseverance",
        position: "5",
        year: 2001,
        achievements: [],
      },
      {
        name: "Christopher Baroulette",
        nickname: "Knowledge",
        position: "6",
        year: 2001,
        achievements: [],
      },
    ],
  },
  aphinity: {
    id: "aphinity",
    name: "The Aphinity",
    nickname: "",
    year: 2000,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-blue-600 to-purple-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Jefferson Grant",
        nickname: "A-phi-rmation",
        position: "1",
        year: 2000,
        achievements: [],
      },
      {
        name: "Jermon Bafaty",
        nickname: "A-phi-luent",
        position: "2",
        year: 2000,
        achievements: [],
      },
      {
        name: "Gerard Merritt",
        nickname: "A-phi-ective",
        position: "3",
        year: 2000,
        achievements: [],
      },
    ],
  },
  pharaoh: {
    id: "pharaoh",
    name: "The Last Sons of the 2nd Pharaoh",
    nickname: "",
    year: 2000,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-teal-600 to-green-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Hugh Palmer",
        nickname: "Benevolent",
        position: "1",
        year: 2000,
        achievements: [],
      },
      {
        name: "Mario Jackson",
        nickname: "Gibraltar",
        position: "3",
        year: 2000,
        achievements: [],
      },
    ],
  },
  timex: {
    id: "timex",
    name: "T.I.M.E.X.",
    nickname: "",
    year: 1999,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-gray-600 to-slate-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Clifford Bell",
        nickname: "Goldschlager",
        position: "2",
        year: 1999,
        achievements: [],
      },
      {
        name: "Christopher Butts",
        nickname: "Aftershock",
        position: "4",
        year: 1999,
        achievements: [],
      },
    ],
  },
  masked: {
    id: "masked",
    name: "Masked Soldiers of Destruction",
    nickname: "",
    year: 1997,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-black",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Marshall White",
        nickname: "Hercules",
        position: "2",
        year: 1997,
        achievements: [],
      },
      {
        name: "Eugene Manselle",
        nickname: "Amnesia",
        position: "4",
        year: 1997,
        achievements: [],
      },
      {
        name: "Brent Berkel",
        nickname: "Relentless",
        position: "6",
        year: 1997,
        achievements: [],
      },
      {
        name: "Gerald Jones",
        nickname: "Dr. Frankenstein",
        position: "7",
        year: 1997,
        achievements: [],
      },
    ],
  },
  rightstu: {
    id: "rightstu",
    name: "The Right Stu",
    nickname: "",
    year: 1996,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-cyan-600 to-blue-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Alex Harris",
        nickname: "J.C.",
        position: "1",
        year: 1996,
        achievements: [],
      },
      {
        name: "Eric Knight",
        nickname: "2 the Hard Way",
        position: "2",
        year: 1996,
        achievements: [],
      },
      {
        name: "Nashon Collie",
        nickname: "3 Times Tough",
        position: "3",
        year: 1996,
        achievements: [],
      },
      {
        name: "Gabbriel Frias",
        nickname: "4 Times The Funk",
        position: "4",
        year: 1996,
        achievements: [],
      },
      {
        name: "Teakoe Coleman",
        nickname: "Imagination",
        position: "7",
        year: 1996,
        achievements: [],
      },
      {
        name: "Anthony Brickhouse",
        nickname: "Brickhouse",
        position: "8",
        year: 1996,
        achievements: [],
      },
      {
        name: "Xavier Samuels",
        nickname: "X-tacy",
        position: "9",
        year: 1996,
        achievements: [],
      },
      {
        name: "Mark Giddar",
        nickname: "Insatiable",
        position: "10",
        year: 1996,
        achievements: [],
      },
    ],
  },
  gfunk: {
    id: "gfunk",
    name: "G-Funk",
    nickname: "",
    year: 1996,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-violet-600 to-purple-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Gosby Gibson",
        nickname: "Hellbound",
        position: "1",
        year: 1996,
        achievements: [],
      },
      {
        name: "Michael Henry",
        nickname: "X-man",
        position: "2",
        year: 1996,
        achievements: [],
      },
    ],
  },
  disciple: {
    id: "disciple",
    name: "The Last Disciple of King Solomon's Tomb",
    nickname: "",
    year: 1995,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-amber-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Gregory Saunders",
        nickname: "Brain-Freez",
        position: "1",
        year: 1995,
        achievements: [],
      },
    ],
  },
  disasters: {
    id: "disasters",
    name: "Natural Disasters",
    nickname: "",
    year: 1994,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-orange-600 to-red-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Delano Arahna",
        nickname: "Cyclone",
        position: "1",
        year: 1994,
        achievements: [],
      },
      {
        name: "Brian Forson",
        nickname: "Earthquake",
        position: "2",
        year: 1994,
        achievements: [],
      },
      {
        name: "Francisco Amado",
        nickname: "Monsoon",
        position: "3",
        year: 1994,
        achievements: [],
      },
    ],
  },
  littlerock: {
    id: "littlerock",
    name: "Little Rock Nine",
    nickname: "",
    year: 1992,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-indigo-600 to-blue-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Wes Hewitt",
        nickname: "Timezone",
        position: "3",
        year: 1992,
        achievements: [],
      },
      {
        name: "Jameson Moschella",
        nickname: "Paranoia",
        position: "4",
        year: 1992,
        achievements: [],
      },
      {
        name: "Robin Holmes",
        nickname: "Turmoil",
        position: "5",
        year: 1992,
        achievements: [],
      },
      {
        name: "Alphonso Jeerson",
        nickname: "Lay-Low",
        position: "6",
        year: 1992,
        achievements: [],
      },
      {
        name: "Daryl Lewis",
        nickname: "Aggravation",
        position: "7",
        year: 1992,
        achievements: [],
      },
      {
        name: "Martin Johnson",
        nickname: "Mr. Philosophy",
        position: "8",
        year: 1992,
        achievements: [],
      },
      {
        name: "Lowell Dawson",
        nickname: "Generator",
        position: "9",
        year: 1992,
        achievements: [],
      },
    ],
  },
  conceptions: {
    id: "conceptions",
    name: "Conceptions of the Mind",
    nickname: "",
    year: 1990,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-violet-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Mark Hinson",
        nickname: "Confusion",
        position: "1",
        year: 1990,
        achievements: [],
      },
      {
        name: "Earl Freeman",
        nickname: "Delusion",
        position: "2",
        year: 1990,
        achievements: [],
      },
      {
        name: "Andre Johnson",
        nickname: "Illusion",
        position: "3",
        year: 1990,
        achievements: [],
      },
    ],
  },
  quietstorm: {
    id: "quietstorm",
    name: "Quiet Storm",
    nickname: "",
    year: 1990,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-gray-600 to-blue-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Mike Jones",
        nickname: "Poison",
        position: "1",
        year: 1990,
        achievements: [],
      },
      {
        name: "John Christian",
        nickname: "Nucleus",
        position: "2",
        year: 1990,
        achievements: [],
      },
    ],
  },
  fall89: {
    id: "fall89",
    name: "Fall 1989",
    nickname: "",
    year: 1989,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-teal-600 to-green-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Reggie Bundrage",
        nickname: "Hellraiser",
        position: "1",
        year: 1989,
        achievements: [],
      },
      {
        name: "Victor Marshall",
        nickname: "",
        position: "2",
        year: 1989,
        achievements: [],
      },
      {
        name: "John Dubriel",
        nickname: "",
        position: "3",
        year: 1989,
        achievements: [],
      },
    ],
  },
  facesofdeath: {
    id: "facesofdeath",
    name: "Faces of Death",
    nickname: "",
    year: 1989,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-black",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Mike Rosson",
        nickname: "Grim Reaper",
        position: "1",
        year: 1989,
        achievements: [],
      },
      {
        name: "Luis Bodden",
        nickname: "Lethal Injection",
        position: "2",
        year: 1989,
        achievements: [],
      },
    ],
  },
  demolition: {
    id: "demolition",
    name: "The Demolition Team",
    nickname: "",
    year: 1986,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-orange-600 to-red-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Mike White",
        nickname: "Cement Mixer",
        position: "1",
        year: 1986,
        achievements: [],
      },
      {
        name: "Al Weaver",
        nickname: "Architect",
        position: "2",
        year: 1986,
        achievements: [],
      },
      {
        name: "Kelvin Shaw",
        nickname: "Hammer",
        position: "3",
        year: 1986,
        achievements: [],
      },
      {
        name: "Marvin Fleming",
        nickname: "Nails",
        position: "4",
        year: 1986,
        achievements: [],
      },
      {
        name: "Anthony Pelt",
        nickname: "Dispatcher",
        position: "5",
        year: 1986,
        achievements: [],
      },
      {
        name: "Mathieu Daquin",
        nickname: "Ruler",
        position: "6",
        year: 1986,
        achievements: [],
      },
    ],
  },
  sources: {
    id: "sources",
    name: "Two Selected Sources",
    nickname: "",
    year: 1985,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-blue-600 to-indigo-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Rodney Rackley",
        nickname: "Thunder",
        position: "1",
        year: 1985,
        achievements: [],
      },
      {
        name: "Jerry Caple",
        nickname: "Lightning",
        position: "2",
        year: 1985,
        achievements: [],
      },
    ],
  },
  tenacious: {
    id: "tenacious",
    name: "The Tenacious Trio of Terror",
    nickname: "",
    year: 1984,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-red-600 to-pink-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Marcus Nichols",
        nickname: "Baby Hulk",
        position: "1",
        year: 1984,
        achievements: [],
      },
      {
        name: "Norman Edwards",
        nickname: "Baby Sinister",
        position: "2",
        year: 1984,
        achievements: [],
      },
      {
        name: "Lorenzo Roberts",
        nickname: "Baby Blockbuster",
        position: "3",
        year: 1984,
        achievements: [],
      },
    ],
  },
  masters: {
    id: "masters",
    name: "The Masters of Manipulation",
    nickname: "",
    year: 1983,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-purple-600 to-violet-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Darryl Harris",
        nickname: "Chameleon",
        position: "1",
        year: 1983,
        achievements: [],
      },
      {
        name: "Kurt Coleman",
        nickname: "The Professor",
        position: "2",
        year: 1983,
        achievements: [],
      },
    ],
  },
  fourth: {
    id: "fourth",
    name: "The Fourth One",
    nickname: "",
    year: 1982,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-gray-600 to-slate-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Gerard Blunt",
        nickname: "Captain Devastation",
        position: "",
        year: 1982,
        achievements: [],
      },
      {
        name: "Will James",
        nickname: "Major Abrasion",
        position: "",
        year: 1982,
        achievements: [],
      },
    ],
  },
  notorious: {
    id: "notorious",
    name: "The Notorious Three",
    nickname: "",
    year: 1982,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-blue-600 to-indigo-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Johnny J. Mack, Jr.",
        nickname: "",
        position: "1",
        year: 1982,
        achievements: [],
      },
      {
        name: "David Wright",
        nickname: "",
        position: "2",
        year: 1982,
        achievements: [],
      },
      {
        name: "David Glover",
        nickname: "",
        position: "3",
        year: 1982,
        achievements: [],
      },
    ],
  },
  second: {
    id: "second",
    name: "The Second One",
    nickname: "",
    year: 1980,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-amber-600 to-yellow-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Karl Harmon",
        nickname: "Master Mind",
        position: "1",
        year: 1980,
        achievements: [],
      },
      {
        name: "Gani Oginni",
        nickname: "",
        position: "2",
        year: 1980,
        achievements: [],
      },
      {
        name: "Humphrey Iwhono",
        nickname: "",
        position: "3",
        year: 1980,
        achievements: [],
      },
    ],
  },
  fourseasons: {
    id: "fourseasons",
    name: "Four Seasons",
    nickname: "",
    year: 1984,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-green-600 to-teal-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "John Davidson",
        nickname: "Mr. Summer",
        position: "1",
        year: 1984,
        achievements: [],
      },
      {
        name: "Antoine Ferguson",
        nickname: "Mr. Winter",
        position: "2",
        year: 1984,
        achievements: [],
      },
      {
        name: "Tony Brackins",
        nickname: "Mr. Spring",
        position: "3",
        year: 1984,
        achievements: [],
      },
      {
        name: "Tony Taylor",
        nickname: "Mr. Fall",
        position: "4",
        year: 1984,
        achievements: [],
      },
    ],
  },
  hardway: {
    id: "hardway",
    name: "2 The Hard Way",
    nickname: "",
    year: 1993,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-slate-600 to-gray-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Kyle Parker",
        nickname: "Mr. Hyde",
        position: "1",
        year: 1993,
        achievements: [],
      },
      {
        name: "Drumeco Lauriston",
        nickname: "Dr. Jekyll",
        position: "2",
        year: 1993,
        achievements: [],
      },
    ],
  },
  keepers: {
    id: "keepers",
    name: "Keepers of the Lost Process",
    nickname: "",
    year: 1997,
    semester: "Fall",
    description: "",
    fullDescription: "",
    color: "from-emerald-600 to-green-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Byron Willis",
        nickname: "Repeat",
        position: "1",
        year: 1997,
        achievements: [],
      },
      {
        name: "Zedie Williams",
        nickname: "Certain Death",
        position: "2",
        year: 1997,
        achievements: [],
      },
      {
        name: "Maro Onokpise",
        nickname: "Petrified",
        position: "3",
        year: 1997,
        achievements: [],
      },
      {
        name: "T.K. Walker",
        nickname: "Granite",
        position: "4",
        year: 1997,
        achievements: [],
      },
      {
        name: "Cecil Ennis",
        nickname: "Thunder",
        position: "5",
        year: 1997,
        achievements: [],
      },
      {
        name: "Tavis Anderson",
        nickname: "Enigma",
        position: "6",
        year: 1997,
        achievements: [],
      },
      {
        name: "Shawn Rogers",
        nickname: "Master I.C.E.",
        position: "7",
        year: 1997,
        achievements: [],
      },
    ],
  },
  prodigal: {
    id: "prodigal",
    name: "Five Prodigal Sons of the Fifth Disciple",
    nickname: "",
    year: 2004,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-indigo-600 to-blue-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [],
    members: [
      {
        name: "Cedric Davis",
        nickname: "Phirst Degree",
        position: "1",
        year: 2004,
        achievements: [],
      },
      {
        name: "Alex Hodo",
        nickname: "Phear Phactor",
        position: "2",
        year: 2004,
        achievements: [],
      },
      {
        name: "Lynwood Bell II",
        nickname: "Phocused",
        position: "4",
        year: 2004,
        achievements: [],
      },
      {
        name: "CJ Nixon",
        nickname: "Grimace",
        position: "6",
        year: 2004,
        achievements: [],
      },
      {
        name: "Kennard Childs",
        nickname: "Aphrica",
        position: "7",
        year: 2004,
        achievements: [],
      },
    ],
  },
  deep: {
    id: "deep",
    name: "5 Degrees of Enlightened Executive Privilege (D.E.E.P.)",
    nickname: "",
    year: 2008,
    semester: "Spring",
    description: "",
    fullDescription: "",
    color: "from-blue-600 to-indigo-800",
    image: "/placeholder.svg",
    motto: "",
    values: [],
    deanStaff: [
      {
        name: "Bryan 'Governor' Arnette",
        position: "DP",
      },
      {
        name: "Khalil 'Catastrophic' George",
        position: "ADP",
      },
    ],
    members: [
      {
        name: "Vincent Periera",
        nickname: "Phrost Bite",
        position: "1",
        year: 2008,
        achievements: [],
      },
      {
        name: "Dwayne Barrett",
        nickname: "Arctic-ulate",
        position: "3",
        year: 2008,
        achievements: [],
      },
      {
        name: "Brandon Jackson",
        nickname: "Non-CHILL-Ant",
        position: "4",
        year: 2008,
        achievements: [],
      },
      {
        name: "Brandon Hamilton",
        nickname: "De-PHI-Ant",
        position: "5",
        year: 2008,
        achievements: [],
      },
      {
        name: "Matthew Bryant",
        nickname: "Phil-ICE-opher",
        position: "6",
        year: 2008,
        achievements: [],
      },
    ],
  },
  charter: {
    id: "charter",
    name: "The Minor Jewels",
    nickname: "Charter Line",
    year: 1979,
    semester: "Summer",
    description: "The founders of Xi Iota Chapter",
    fullDescription:
      "On June 16, 1979, seven young men made history by establishing the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Incorporated. These Minor Jewels laid the foundation for over four decades of brotherhood, scholarship, and service that continues to this day.",
    color: "from-yellow-400 via-amber-500 to-yellow-600",
    image: "/placeholder.svg",
    motto: "First of the Finest",
    values: ["Foundation", "Legacy", "Brotherhood", "Excellence"],
    deanStaff: [],
    members: [
      {
        name: "Carlton Evans",
        nickname: "Bulldog",
        position: "1",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "Michael Wingfield",
        nickname: "",
        position: "2",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "Reginald Spann",
        nickname: "",
        position: "3",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "John Stover",
        nickname: "",
        position: "4",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "Byron Wilhite",
        nickname: "Al",
        position: "5",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "Victor Thomas",
        nickname: "",
        position: "6",
        year: 1979,
        achievements: ["Charter Member"],
      },
      {
        name: "Wil Nix",
        nickname: "",
        position: "7",
        year: 1979,
        achievements: ["Charter Member"],
      },
    ],
  },
};

const LineageDetail = () => {
  const { lineId } = useParams<{ lineId: string }>();
  const navigate = useNavigate();

  const lineData = lineId ? lineageDetailData[lineId] : null;
  const isCharter = lineId === "charter";

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
    <div
      className={`min-h-screen text-white ${
        isCharter
          ? "bg-gradient-to-br from-amber-100 via-yellow-50 to-gray-100"
          : "bg-gradient-to-br from-black via-gray-900 to-black"
      }`}
    >
      <Navigation />

      <div className="pt-20 pb-16">
        {/* Charter Special Banner */}
        {isCharter && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 mb-8"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black p-6 rounded-2xl text-center shadow-2xl border-2 border-yellow-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                CHARTER LINE
              </h2>
              <p className="text-lg font-semibold">
                The Charter Members of Xi Iota Chapter
              </p>
              <p className="text-base">Established June 16, 1979</p>
            </div>
          </motion.div>
        )}

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
            className={`flex items-center mb-8 transition-colors duration-300 ${
              isCharter
                ? "text-amber-800 hover:text-amber-900"
                : "text-yellow-400 hover:text-yellow-300"
            }`}
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
                className={`text-5xl md:text-7xl font-bold mb-4 ${
                  isCharter
                    ? "text-amber-900 drop-shadow-lg"
                    : "text-yellow-400"
                }`}
              >
                {lineData.name}
              </motion.h1>

              {lineData.nickname && (
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`text-xl mb-4 ${
                    isCharter ? "text-amber-800 font-semibold" : "text-gray-300"
                  }`}
                >
                  {lineData.nickname}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`flex items-center mb-6 ${
                  isCharter ? "text-amber-700" : "text-gray-400"
                }`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>
                  {isCharter ? "Chartered" : "Crossed"}{" "}
                  {lineData.semester || "Fall"} {lineData.year}
                </span>
                <Users className="w-5 h-5 ml-6 mr-2" />
                <span>
                  {lineData.members.length}{" "}
                  {isCharter ? "Charter Members" : "Members"}
                </span>
              </motion.div>

              {/* Charter Description */}
              {isCharter && lineData.fullDescription && (
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-amber-800 text-lg leading-relaxed mb-6"
                >
                  {lineData.fullDescription}
                </motion.p>
              )}
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
                  className={`w-full h-96 ${
                    lineId === "power" ? "object-contain" : "object-cover"
                  }`}
                />
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
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl ${
                  isCharter ? "bg-yellow-300/30" : "bg-yellow-400/20"
                }`}
              />
              <div
                className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl ${
                  isCharter ? "bg-amber-400/20" : "bg-yellow-400/10"
                }`}
              />
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
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              isCharter ? "text-amber-900" : "text-white"
            }`}
          >
            {isCharter ? "Charter Members" : "Line Members"}
          </h2>

          {/* Special Charter Message */}
          {isCharter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center mb-12"
            >
              <p className="text-amber-800 text-lg leading-relaxed max-w-4xl mx-auto">
                These seven visionary men established the Xi Iota Chapter,
                creating a legacy of brotherhood, scholarship, and service that
                continues to inspire generations of Alpha men.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lineData.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden ${
                  isCharter
                    ? "bg-gradient-to-br from-amber-200/80 to-yellow-200/80 border border-amber-400"
                    : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-500/20"
                }`}
              >
                {/* Special charter glow effect */}
                {isCharter && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-xl blur-sm"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                )}

                <div className="text-center relative">
                  {/* Charter star for founding members */}
                  {isCharter && (
                    <motion.div
                      className="text-2xl mb-2 text-amber-700"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      ⭐
                    </motion.div>
                  )}

                  <h3
                    className={`text-xl font-bold mb-1 ${
                      isCharter ? "text-amber-900" : "text-white"
                    }`}
                  >
                    {member.name}
                  </h3>

                  {member.nickname && (
                    <p
                      className={`font-semibold ${
                        isCharter ? "text-amber-800" : "text-yellow-400"
                      }`}
                    >
                      {member.nickname}
                    </p>
                  )}

                  {member.position && (
                    <p
                      className={`text-sm mt-1 ${
                        isCharter ? "text-amber-700" : "text-gray-400"
                      }`}
                    >
                      #{member.position}
                    </p>
                  )}

                  {/* Charter member achievements */}
                  {isCharter &&
                    member.achievements &&
                    member.achievements.length > 0 && (
                      <div className="mt-3">
                        {member.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="inline-block bg-amber-300/40 text-amber-900 text-xs px-2 py-1 rounded-full mr-1 mb-1 border border-amber-500"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
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
