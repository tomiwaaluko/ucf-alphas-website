import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Award,
  Users,
  GraduationCap,
  Lightbulb,
  Trophy,
  BookOpen,
  Target,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const OutstandingChapterAward = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string | string[];
    title: string;
    fullCaption: string;
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const categories = [
    {
      title:
        "Contributions to the Growth of Personal Service to Chapter Members",
      icon: Users,
      description:
        "Risk Management, Scholastic/Leadership Activities, training programs, etc.",
      images: [
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Safety PHirst Self-Defense Class – March 25, 2025",
          shortCaption: "Personal safety instruction with UCF PD",
          fullCaption:
            "Safety PHirst Self-Defense Class - March 25, 2025. Xi Iota partnered with UCF Police Department to provide personal safety instruction open to all students. This initiative demonstrated the chapter's commitment to member and community safety through practical risk management education.",
        },
        {
          src: "/brothers/Tomiwa Aluko.jpg",
          title: "Chapter Leadership Development",
          shortCaption: "Brothers excelling in executive positions",
          fullCaption:
            "Chapter Leadership Development. Xi Iota brothers have demonstrated exceptional leadership within the chapter: Bro. Tomiwa Aluko served as President (2023-2024) and currently serves as Assistant East Area Director of FFAC (2024-Present), while Bro. Treylon Chukes serves as current Chapter President, exemplifying the chapter's commitment to developing strong leaders who serve at local and regional levels.",
        },
        {
          src: "/brothers/Abdul Ibrahim.PNG",
          title: "Academic Excellence and Honors",
          shortCaption: "Dean's List and President's List achievements",
          fullCaption:
            "Academic Excellence and Honors. Brothers of Xi Iota have achieved remarkable academic success: Bro. Abdul Ibrahim earned Dean's List honors 5 times and President's List 3 times, while Bro. Benjamin Blocker achieved Dean's List recognition, and Bro. Tomiwa Aluko earned Dean's List honors in 2024 and 2025 from the College of Engineering and Computer Science. These achievements demonstrate the chapter's emphasis on scholastic excellence and academic support among members.",
        },
      ],
    },
    {
      title: "Contributions to the University/College Community",
      icon: GraduationCap,
      description:
        "Pan-Hellenic Council/IFC involvement, personal social services, campus activities, etc.",
      images: [
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Diversified Greek Council Cultural Fair – September 4, 2025",
          shortCaption: "Promoting inter-organizational unity",
          fullCaption:
            "Diversified Greek Council Cultural Fair - September 4, 2025. Brothers Tomiwa Aluko and Benjamin Blocker represented Xi Iota at the DGC Cultural Fair, promoting inter-organizational unity and educating attendees about Alpha Phi Alpha's rich legacy and ongoing initiatives.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title:
            "Spring 2025 Lambda Theta Phi New Member Presentation – April 5, 2025",
          shortCaption: "Supporting fellow Greek organizations",
          fullCaption:
            "Spring 2025 Lambda Theta Phi New Member Presentation - April 5, 2025. Four brothers attended Lambda Theta Phi's new member presentation to support fellow Greek organizations, demonstrating Xi Iota's dedication to fostering collaboration and unity within the campus Greek community.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Opening Knight Tabling – August 17, 2025",
          shortCaption: "New student outreach and chapter information",
          fullCaption:
            "Opening Knight Tabling - August 17, 2025. Xi Iota participated in UCF's RSO showcase, engaging new students with chapter information and outreach during the university's orientation week.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title:
            "Black Student Union 18th Semi-Annual Convocation – August 28, 2025",
          shortCaption: "Chapter visibility at 'Crowned in Black Magic'",
          fullCaption:
            "Black Student Union 18th Semi-Annual Convocation - August 28, 2025. Chapter members attended the BSU's 'Crowned in Black Magic' convocation, demonstrating support for Black student initiatives and maintaining strong campus presence.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "UCF NPHC Christmas Shopping Spree – Boys & Girls Club",
          shortCaption: "Purchasing gifts for 30 children",
          fullCaption:
            "UCF NPHC Christmas Shopping Spree – Boys & Girls Club. Xi Iota joined fellow NPHC organizations for the annual Christmas Shopping Spree, purchasing gifts for 30 children from the Boys & Girls Club of Orlando. This initiative spread holiday cheer while strengthening community ties through collective service and giving.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "St. Jude's Valentine's Day Card Drive",
          shortCaption: "Crafting cards for children at St. Jude's",
          fullCaption:
            "St. Jude's Valentine's Day Card Drive. Brothers collaborated with members of Delta Sigma Theta Sorority, Inc. to host a Valentine's Day event crafting heartfelt cards for children at St. Jude's Research Hospital. The event promoted compassion and service to children facing health challenges.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Pi Psi Adopt-A-Road Cleanup",
          shortCaption: "Environmental stewardship partnership",
          fullCaption:
            "Pi Psi Adopt-A-Road Cleanup. Xi Iota partnered with Pi Psi Chapter (AKA) to conduct a local road cleanup, reinforcing Alpha's commitment to environmental stewardship and community beautification through Greek collaboration.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Passing Out Roses with Xi Iota – February 12-14, 2025",
          shortCaption: "Valentine's Week campus goodwill gesture",
          fullCaption:
            "Passing Out Roses with Xi Iota - February 12-14, 2025. During Valentine's Week, brothers distributed roses across campus as a gesture of goodwill and service, spreading positivity throughout the UCF community.",
        },
        {
          src: "/brothers/Tomiwa Aluko.jpg",
          title: "NSBE UCF Senate Leadership",
          shortCaption: "Senator for National Society of Black Engineers",
          fullCaption:
            "NSBE UCF Senate Leadership. Bro. Tomiwa Aluko serves as Senator for the UCF Chapter of the National Society of Black Engineers (2024-Present), representing Xi Iota in engineering leadership and promoting STEM excellence on campus.",
        },
        {
          src: "/brothers/Theodore Johnson.jpeg",
          title: "NPHC Treasurer Leadership",
          shortCaption: "Financial stewardship for Pan-Hellenic Council",
          fullCaption:
            "NPHC Treasurer Leadership. Bro. Theodore Johnson serves as Treasurer for the National Pan-Hellenic Council (NPHC) at UCF, managing financial operations and demonstrating Xi Iota's commitment to inter-Greek collaboration and fiscal responsibility.",
        },
        {
          src: "/brothers/Theodore Johnson.jpeg",
          title: "Student Government Leadership",
          shortCaption: "Internal Auditor on SGA Executive Board",
          fullCaption:
            "Student Government Leadership. Bro. Theodore Johnson serves as Internal Auditor on the Executive Board of the Student Government Association, bringing financial expertise and oversight to student governance while representing Xi Iota in campus-wide leadership.",
        },
        {
          src: "/brothers/Treylon Chukes.jpeg",
          title: "Black Men in Medicine UCF Leadership",
          shortCaption: "Charter member and former First Vice President",
          fullCaption:
            "Black Men in Medicine UCF Leadership. Bro. Treylon Chukes served as Charter member and former First Vice President of Black Men in Medicine UCF Chapter, establishing organizational foundations and promoting health professions representation for Black men on campus.",
        },
        {
          src: "/brothers/Nijel Beverly.jpg",
          title: "UCF Athletics Media Contribution",
          shortCaption: "UCF Athletics editor promoting Knight sports",
          fullCaption:
            "UCF Athletics Media Contribution. Bro. Nijel Beverly serves as UCF Athletics editor, contributing to media coverage and promotion of university athletics while representing Xi Iota in campus communications.",
        },
      ],
    },
    {
      title:
        "Innovative Chapter-Initiated Programs that Address Social Needs of the Local Community",
      icon: Lightbulb,
      description:
        "Programs created and implemented by the chapter to serve community needs",
      images: [
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Voice for Change: Homelessness Awareness – November 12, 2024",
          shortCaption: "Awareness program with Miss Black & Gold Royal Court",
          fullCaption:
            "Voice for Change: Homelessness Awareness - November 12, 2024. Xi Iota hosted an awareness program in partnership with the Miss Black & Gold Royal Court to educate the community about homelessness and promote solutions to this critical social issue.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title:
            "Operation Matchmaker Valentine's Fundraiser – January 28, 2025",
          shortCaption: "Creative fundraising initiative",
          fullCaption:
            "Operation Matchmaker Valentine's Fundraiser - January 28, 2025. Chapter members organized a creative Valentine's fundraiser featuring chocolate-covered strawberries, breakable hearts, hearts with candy, and rose options to support chapter initiatives and community programs.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title:
            "Monthly Community Food Giveaway – August 21-22, 2025 (Recurring)",
          shortCaption: "Ongoing downtown Orlando service initiative",
          fullCaption:
            "Monthly Community Food Giveaway - August 21-22, 2025. Xi Iota continued its recurring monthly service initiative in downtown Orlando, partnering with alumni chapters and the Royal Court to provide essential food resources to community members in need.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Annual Fight Breast Cancer Awareness Walk/Run",
          shortCaption: "Multi-Greek collaboration for cancer awareness",
          fullCaption:
            "Annual Fight Breast Cancer Awareness Walk/Run. The Xi Iota Chapter volunteered in the annual Fight Breast Cancer Awareness Walk/Run alongside members of other Greek organizations. The chapter's participation helped raise awareness and support the fight against breast cancer through community presence and engagement.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Phamily PHirst Donation Drive – November 9, 2024",
          shortCaption: "Supporting children who lost a parent",
          fullCaption:
            "Phamily PHirst Donation Drive - November 9, 2024. Xi Iota partnered with AKA Pi Psi Chapter to collect clothing and essentials for two young girls who lost a parent, demonstrating compassionate response to family tragedy and community need.",
        },
        {
          src: "/CHWPhotos/nov9/IMG_7437.png",
          title:
            "Community Food Distribution & Roadway Cleanup – November 9, 2024",
          shortCaption: "Multi-partner service day",
          fullCaption:
            "Community Food Distribution & Roadway Cleanup - November 9, 2024. Xi Iota partnered with Delta Xi Lambda Alumni Chapter and YMOD for food distribution, followed by a separate roadway cleanup collaboration with Pi Psi (AKA), demonstrating comprehensive community service in a single day.",
        },
        {
          src: "/CHWPhotos/dec3/IMG_7432.png",
          title: "Forsyth Woods Elementary Gift Giving – December 3, 2024",
          shortCaption: "Christmas gifts and holiday celebration",
          fullCaption:
            "Forsyth Woods Elementary Gift Giving - December 3, 2024 (posted Dec 16). Brothers provided Christmas gifts and organized a holiday celebration with students at Forsyth Woods Elementary, spreading joy and demonstrating Alpha's commitment to youth development.",
        },
        {
          src: "/CHWPhotos/dec16/IMG_7434.png",
          title: "Second Harvest Food Bank Service – December 16, 2024",
          shortCaption: "17 pallets, 21,825 meals assembled",
          fullCaption:
            "Second Harvest Food Bank Service - December 16, 2024. Xi Iota collaborated with Delta Xi Lambda to assemble 17 pallets containing 1,455 boxes, providing 21,825 meals for families in need throughout Central Florida, demonstrating exceptional commitment to fighting hunger.",
        },
        {
          src: "/CHWPhotos/jan20/IMG_7444.png",
          title: "MLK Weekend of Service – January 18-20, 2025",
          shortCaption: "Multi-event service weekend honoring Dr. King",
          fullCaption:
            "MLK Weekend of Service - January 18-20, 2025. Xi Iota participated in multiple events including DXL MLK Luncheon, Orlando MLK Parade, Second Harvest service, and culminated with the MLK Day Million-meal pack in partnership with the City of Orlando and NAACP, embodying Dr. King's legacy of service.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Metro Orlando Food Packaging & Distribution – May 29, 2025",
          shortCaption: "Service team fighting food insecurity",
          fullCaption:
            "Metro Orlando Food Packaging & Distribution - May 29, 2025. Service team including Brothers Ibrahim, Brown, Blocker, and Chukes worked to package and distribute food to combat food insecurity in the Metro Orlando area.",
        },
        {
          src: "/CHWPhotos/jun18.png",
          title: "Metro Orlando Food Distribution – June 18, 2025",
          shortCaption: "Anniversary week service with Zeta Phi Beta",
          fullCaption:
            "Metro Orlando Food Distribution - June 18, 2025. As part of anniversary week celebrations, Xi Iota partnered with Zeta Phi Beta Sigma Epsilon Chapter for community service addressing food insecurity in Metro Orlando.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Summer Food Distribution – July 17, 2025",
          shortCaption: "Fighting local hunger with AKA Pi Psi",
          fullCaption:
            "Summer Food Distribution - July 17, 2025. Xi Iota collaborated with AKA Pi Psi Chapter to package and distribute food to fight local hunger during the summer months when food insecurity often increases.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Straight Street Meal Service – September 8, 2025",
          shortCaption: "Kicking off fall service cycle",
          fullCaption:
            "Straight Street Meal Service - September 8, 2025. Brothers served meals to community members in need, kicking off the fall service cycle and demonstrating Alpha's year-round commitment to serving the underserved.",
        },
        {
          src: "/CHWPhotos/sept18.png",
          title:
            "Livingston Street Church of God Food Drive – September 18, 2025",
          shortCaption: "Monthly food drive ensuring access to essentials",
          fullCaption:
            "Livingston Street Church of God Monthly Food Drive - September 18, 2025. Xi Iota participated in the monthly food drive to ensure local families have access to essential resources, partnering with the church to serve the community.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Fairest of Them All Service – September 26, 2025",
          shortCaption: "Supporting United Against Poverty with AKA",
          fullCaption:
            "Fairest of Them All Service - September 26, 2025. Xi Iota partnered with AKA to support United Against Poverty's operations, demonstrating collaboration across Greek organizations to address poverty in Central Florida.",
        },
      ],
    },
    {
      title: "Academic Standings of the Entire Chapter Brotherhood",
      icon: BookOpen,
      description: "Proper documentation required",
      images: [
        // Academic records would go here
      ],
    },
    {
      title: "Awards and Achievements by Chapter",
      icon: Trophy,
      description:
        "Listing of Awards and Achievements with Documentation (dates required)",
      images: [
        {
          src: "/brothers/Tomiwa Aluko.jpg",
          title: "Young Pillar Scholarship - Bro. Tomiwa Aluko",
          shortCaption:
            "National scholarship recognizing leadership excellence",
          fullCaption:
            "Young Pillar Scholarship - Bro. Tomiwa Aluko. Awarded the prestigious Young Pillar Scholarship recognizing outstanding leadership, scholarship, and service exemplifying Alpha Phi Alpha's ideals. This national recognition highlights Xi Iota's commitment to developing exemplary leaders.",
        },
        {
          src: "/brothers/Jevaughn Morris.jpg",
          title:
            "NSBE Zone Committee Member of the Year - Bro. Jevaughn Morris",
          shortCaption: "Regional STEM leadership recognition",
          fullCaption:
            "NSBE Zone Committee Member of the Year - Bro. Jevaughn Morris. Recognized as Zone Committee Member of the Year by the National Society of Black Engineers for exceptional service and leadership in promoting STEM education and professional development across the region.",
        },
        {
          src: "/brothers/Tomiwa Aluko.jpg",
          title: "KORT Outstanding Officer Award - Bro. Tomiwa Aluko",
          shortCaption: "Campus media excellence recognition",
          fullCaption:
            "KORT Outstanding Officer Award - Bro. Tomiwa Aluko. Honored with the Outstanding Officer Award from KORT (Knights of the Round Table) campus media organization for exceptional leadership and contribution to campus communications and media programming.",
        },
        {
          src: "/brothers/Nijel Beverly.jpg",
          title: "KORT Event of the Year - Bro. Nijel Beverly",
          shortCaption: "Top campus programming recognition",
          fullCaption:
            "KORT Event of the Year - Bro. Nijel Beverly. Recognized for producing the Event of the Year by KORT (Knights of the Round Table), demonstrating Xi Iota's impact on campus programming excellence and student engagement.",
        },
        {
          src: "/brothers/Abdul Ibrahim.PNG",
          title: "SISTUHS INC Sankofa Award - Bro. Abdul Ibrahim",
          shortCaption: "Cultural leadership and community service honor",
          fullCaption:
            "SISTUHS INC Sankofa Award - Bro. Abdul Ibrahim. Awarded the Sankofa Award by SISTUHS INC in recognition of outstanding cultural leadership, community service, and commitment to uplifting the Black community through service and excellence.",
        },
        {
          src: "/brothers/Toluwani Aluko.jpg",
          title: "Conrad Challenge Innovator - Bro. Toluwani Aluko",
          shortCaption: "National innovation competition recognition",
          fullCaption:
            "Conrad Challenge Innovator - Bro. Toluwani Aluko. Recognized as a Conrad Challenge Innovator for developing innovative solutions to global challenges, demonstrating Xi Iota's commitment to fostering innovation and entrepreneurship.",
        },
        {
          src: "/brothers/Toluwani Aluko.jpg",
          title: "Congressional Awards - Bro. Toluwani Aluko",
          shortCaption: "Federal recognition for service excellence",
          fullCaption:
            "Congressional Awards - Bro. Toluwani Aluko. Received Congressional Awards from the United States Congress in recognition of outstanding voluntary public service, personal development, physical fitness, and expedition/exploration activities.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "City of Orlando Commendations",
          shortCaption: "Municipal recognition for community impact",
          fullCaption:
            "City of Orlando Commendations. Xi Iota Chapter has received multiple commendations from the City of Orlando recognizing the chapter's significant contributions to community service, civic engagement, and positive impact on Central Florida residents.",
        },
      ],
    },
    {
      title:
        "Demonstrated Degree of Participation in Alpha National Programs/Projects and Assessments",
      icon: Target,
      description:
        "Brother's Keeper, A Voteless People is a Hopeless People, Go-to-High-School Go-to-College, Project Alpha and Special initiatives: Big Brothers/Big Sisters of America, Boy Scouts of America, College Life to Corporate Life Initiative (C2C), Leadership Development Institute (LDI) World Policy Council",
      images: [
        {
          src: "/CHWPhotos/nov2/image0.jpg",
          title: "Brother's Keeper Yard Service – November 2, 2024",
          shortCaption: "Service for DXL charter member Felton A. Johnson",
          fullCaption:
            "Brother's Keeper Yard Service - November 2, 2024. Xi Iota collaborated with Delta Xi Lambda Alumni Chapter for yard clean-up and debris removal for charter member Felton A. Johnson, exemplifying Alpha's commitment to lifelong brotherhood and care for elder members.",
        },
        {
          src: "/CHWPhotos/jun14.png",
          title: "Brother's Keeper – June 14, 2025",
          shortCaption: "Anniversary week service for senior brother",
          fullCaption:
            "Brother's Keeper - June 14, 2025. As part of the 46th anniversary service series, brothers performed debris removal and yard work for a senior Alpha brother, continuing the fraternity's tradition of intergenerational support and service.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Go Vote PSA – November 5, 2024",
          shortCaption: "Campus civic engagement video with NAACP",
          fullCaption:
            "Go Vote PSA - November 5, 2024. Xi Iota partnered with the NAACP to create a campus civic-engagement video reminding students to vote and check polling information, supporting Alpha's national initiative 'A Voteless People Is A Hopeless People.'",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Boys & Girls Club Trunk or Treat – November 6, 2024",
          shortCaption: "Halloween activities with UCF Athletics",
          fullCaption:
            "Boys & Girls Club Trunk or Treat - November 6, 2024. Xi Iota partnered with UCF Athletics to provide games, candy distribution, and Halloween activities for local youth, combining entertainment with mentorship and community engagement.",
        },
        {
          src: "/CHWPhotos/feb21/IMG_7446.png",
          title: "King Solomon Foundation Campus Tour – February 21, 2025",
          shortCaption: "College access and mentorship day",
          fullCaption:
            "King Solomon Foundation Campus Tour at UCF - February 21, 2025. Xi Iota hosted a college access and mentorship day for visiting students in partnership with the King Solomon Foundation, promoting higher education and career exploration as part of the Go-to-High-School, Go-to-College initiative.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Discovery Middle School Visit – February 4, 2025",
          shortCaption: "Black History Month programming with NPHC",
          fullCaption:
            "Discovery Middle School Visit - February 4, 2025. Xi Iota joined NPHC organizations for roll call, Black History Month programming, and student engagement, inspiring young students about the legacy of Black Greek Letter Organizations.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title:
            "Jones High School & Rollins Upward Bound Outreach – February 7-8, 2025",
          shortCaption: "D9 legacy talk on education and service",
          fullCaption:
            "Jones High School & Rollins Upward Bound Outreach - February 7-8, 2025. Brothers presented on Divine Nine legacy, emphasizing education, service, and brotherhood to students at Jones High School and Rollins Upward Bound program.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Black History Month School Volunteering",
          shortCaption: "Educating students on Black leaders",
          fullCaption:
            "Black History Month School Volunteering. In honor of Black History Month, chapter members volunteered at local schools to educate students on the contributions of Black leaders and the importance of cultural pride and service.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "UCF STEM Day – November 14, 2024",
          shortCaption: "Engineering activities with NSBE UCF",
          fullCaption:
            "UCF STEM Day - November 14, 2024. Xi Iota partnered with NSBE UCF to conduct balloon-car engineering activities with elementary students, providing STEM exposure and educational enrichment.",
        },
        {
          src: "/CHWPhotos/apr4.png",
          title: "Head Start to Literacy: Rumble in the Jungle – April 4, 2025",
          shortCaption: "Read-alouds and Disney Gala setup",
          fullCaption:
            "Head Start to Literacy: Rumble in the Jungle - April 4, 2025. Brothers conducted read-alouds to children and later assisted with setup for Disney's Celebrate the Children's Gala, promoting early literacy and supporting children's development.",
        },
        {
          src: "/CHWPhotos/oct8.png",
          title: "Callahan Head Start Literacy Domain Day – October 8, 2025",
          shortCaption: "Early-childhood literacy support with DXL",
          fullCaption:
            "Callahan Head Start Literacy Domain Day - October 8, 2025. Xi Iota collaborated with Delta Xi Lambda to provide early-childhood literacy support and activities, furthering Alpha's commitment to educational development.",
        },
        {
          src: "/lovable-uploads/placeholder.jpg",
          title: "Campus Tour & College Access – June 16, 2025",
          shortCaption: "Student success and Alpha history presentation",
          fullCaption:
            "Campus Tour & College Access - June 16, 2025. During anniversary week, brothers conducted campus tours and presented on student success and Alpha history, inspiring prospective college students to pursue higher education.",
        },
      ],
    },
  ];

  const nextImage = () => {
    if (
      selectedImage &&
      Array.isArray(selectedImage.src) &&
      selectedImage.src.length > 1
    ) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.src.length);
    }
  };

  const prevImage = () => {
    if (
      selectedImage &&
      Array.isArray(selectedImage.src) &&
      selectedImage.src.length > 1
    ) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedImage.src.length) % selectedImage.src.length
      );
    }
  };
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
                  <Trophy className="w-24 h-24 text-yellow-400 mx-auto" />
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Outstanding Chapter of the Year
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Recognizing Excellence in Chapter Operations and Service
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
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-cinzel leading-tight mb-4">
                              {category.title}
                            </h3>

                            <p className="text-lg text-gray-300 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"></div>
                      </div>

                      {/* Image Gallery Placeholder */}
                      <div className="bg-gradient-to-br from-yellow-400/5 to-yellow-600/5 border-2 border-yellow-400/20 rounded-3xl p-8 backdrop-blur-sm">
                        {category.images.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.images.map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                className="group relative cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.6,
                                  delay: imgIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                                onClick={() => {
                                  setSelectedImage(image);
                                  setCurrentImageIndex(0);
                                }}
                                whileHover={{ y: -5 }}
                              >
                                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border-2 border-yellow-400/20 group-hover:border-yellow-400 transition-all duration-300">
                                  <img
                                    src={
                                      Array.isArray(image.src)
                                        ? image.src[0]
                                        : image.src
                                    }
                                    alt={image.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">
                                      Click to view details
                                    </p>
                                  </div>
                                  {Array.isArray(image.src) &&
                                    image.src.length > 1 && (
                                      <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                                        {image.src.length} photos
                                      </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                  <h4 className="text-lg font-bold text-yellow-400 mb-2">
                                    {image.title}
                                  </h4>
                                  <p className="text-sm text-gray-400">
                                    {image.shortCaption}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <motion.div
                              animate={{
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <Trophy className="w-16 h-16 text-yellow-400/30 mx-auto mb-4" />
                            </motion.div>
                            <p className="text-gray-500 text-lg">
                              Content coming soon
                            </p>
                          </div>
                        )}
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

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/40 max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <DialogTitle className="text-2xl font-bold text-yellow-400 font-cinzel mb-4 pr-8">
            {selectedImage?.title}
          </DialogTitle>

          {selectedImage && (
            <div className="mb-6 rounded-xl overflow-hidden border-2 border-yellow-400/30 relative">
              <img
                src={
                  Array.isArray(selectedImage.src)
                    ? selectedImage.src[currentImageIndex]
                    : selectedImage.src
                }
                alt={selectedImage.title}
                className="w-full h-auto object-contain max-h-[50vh]"
              />

              {Array.isArray(selectedImage.src) &&
                selectedImage.src.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400/90 text-white hover:text-black transition-all p-3 rounded-full border-2 border-yellow-400/50 hover:border-yellow-400"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400/90 text-white hover:text-black transition-all p-3 rounded-full border-2 border-yellow-400/50 hover:border-yellow-400"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-yellow-400 px-4 py-2 rounded-full border border-yellow-400/50 font-bold">
                      {currentImageIndex + 1} / {selectedImage.src.length}
                    </div>
                  </>
                )}
            </div>
          )}

          <DialogDescription className="text-gray-300 text-lg leading-relaxed">
            {selectedImage?.fullCaption}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OutstandingChapterAward;
