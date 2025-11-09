import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Camera,
  FolderOpen,
  Grid3X3,
  List,
} from "lucide-react";
import { useRef } from "react";

const ServiceGallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Gallery events data - All events in chronological order
  const galleryEvents = [
    // {
    //   id: 1,
    //   title: "2024 District Conference",
    //   date: "2024",
    //   location: "St. Augustine, FL",
    //   participants: 18,
    //   photoCount: 1,
    //   coverImage: "/CHWPhotos/districtconference2024/IMG_7480.png",
    //   description:
    //     "Xi Iota and DXL attended the 2024 District Conference in St. Augustine, showcasing chapter unity and excellence.",
    //   tags: ["District", "Conference", "Unity"],
    // },
    {
      id: 2,
      title: "Metro Orlando Food Distribution",
      date: "May 29, 2024",
      location: "Metro Orlando Community",
      participants: 4,
      photoCount: 3,
      coverImage:
        "/service-gallery/metro-orlando-food-distribution/IMG_7537.jpg",
      description:
        "Brothers Ibrahim, Brown, Blocker, and Chukes dedicated their time to serving the Metro Orlando community by assisting with the packaging and distribution of food for families in need, addressing food insecurity and supporting those facing hardship.",
      tags: ["Community Outreach", "Food Security", "Service"],
    },
    {
      id: 3,
      title: "Community Food Distribution with YMOD",
      date: "November 9, 2024",
      location: "Orlando, FL",
      participants: 10,
      photoCount: 4,
      coverImage: "/CHWPhotos/nov9/IMG_7428.png",
      description:
        "Xi Iota joined forces with DXL and the Young Men of Distinction (YMOD) program to distribute food to Orlando families in need. The event fostered partnerships across community organizations while promoting collective service.",
      tags: ["YMOD", "Food Distribution", "Community Service"],
    },
    {
      id: 4,
      title: "Brother's Keeper Yard Service",
      date: "November 2, 2024",
      location: "Orlando, FL",
      participants: 8,
      photoCount: 1,
      coverImage: "/CHWPhotos/nov2/image0.jpg",
      description:
        "Undergraduates and alumni reunited to assist Bro. Felton Johnson, performing yard cleanup and home care. This ongoing collaboration demonstrates consistency in supporting elder brothers through hands-on service.",
      tags: ["Brother's Keeper", "Elder Support", "Yard Service"],
    },
    {
      id: 5,
      title: "Forsyth Woods Elementary Christmas Gift Giving",
      date: "December 3, 2024",
      location: "Forsyth Woods Elementary School",
      participants: 8,
      photoCount: 5,
      coverImage: "/CHWPhotos/dec3/IMG_7432.png",
      description:
        "Brothers from both chapters celebrated the holiday season by providing gifts to students at Forsyth Woods Elementary School, spreading joy and ensuring that every child experienced a memorable Christmas.",
      tags: ["Christmas", "Youth Support", "Gift Giving"],
    },
    {
      id: 6,
      title: "Founder's Day Breakfast Celebration",
      date: "December 4, 2024",
      location: "Orlando, FL",
      participants: 25,
      photoCount: 5,
      coverImage: "/CHWPhotos/dec4/IMG_7454.png",
      description:
        "Xi Iota and Delta Xi Lambda came together to celebrate Founder's Day with a joint breakfast honoring both undergraduate and graduate chapter successes. Awards were presented and brothers received complimentary professional headshots.",
      tags: ["Founder's Day", "Awards", "Brotherhood"],
    },
    {
      id: 7,
      title: "Second Harvest Food Bank Collaboration",
      date: "December 16, 2024",
      location: "Second Harvest Food Bank, Orlando",
      participants: 15,
      photoCount: 4,
      coverImage: "/CHWPhotos/dec16/IMG_7436.png",
      description:
        "Xi Iota and Delta Xi Lambda worked alongside community volunteers at Second Harvest Food Bank, packaging 1,455 boxes and 21,825 meals for families across Central Florida. This project reflected large-scale servant leadership and measurable community impact.",
      tags: ["Food Bank", "Community Impact", "Service"],
    },
    {
      id: 8,
      title: "MLK Commemorative Luncheon",
      date: "January 17, 2025",
      location: "Orlando, FL",
      participants: 20,
      photoCount: 2,
      coverImage: "/CHWPhotos/jan17/IMG_7440.png",
      description:
        "The Xi Iota Chapter attended DXL's MLK Commemorative Luncheon, honoring Dr. King's leadership and Alpha's historical role in civil rights. The event served as a moment of unity and reflection on purpose and progress.",
      tags: ["MLK", "Civil Rights", "Leadership"],
    },
    {
      id: 9,
      title: "Orlando MLK Parade",
      date: "January 18, 2025",
      location: "Orlando, FL",
      participants: 18,
      photoCount: 2,
      coverImage: "/CHWPhotos/jan18/IMG_7442.png",
      description:
        "Brothers from both chapters proudly marched together in the annual MLK Parade, representing Alpha Phi Alpha and honoring Dr. King's enduring legacy of equality, justice, and service.",
      tags: ["MLK", "Parade", "Community"],
    },
    {
      id: 10,
      title: "MLK Day of Service",
      date: "January 20, 2025",
      location: "Orlando, FL",
      participants: 15,
      photoCount: 2,
      coverImage: "/CHWPhotos/jan20/IMG_7444.png",
      description:
        "Xi Iota and DXL partnered with Orlando Alphas and the NAACP for the MLK Million Dollar Pack Initiative, assembling meal kits for local families. The collaboration embodied Alpha's mission of 'Service to All.'",
      tags: ["MLK", "Service", "NAACP"],
    },
    {
      id: 11,
      title: "Black History Month Outreach",
      date: "February 7-8, 2025",
      location: "Jones High School & Rollins College",
      participants: 10,
      photoCount: 2,
      coverImage:
        "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7550.jpg",
      description:
        "The Xi Iota Chapter alongside NPHC UCF continued our Black History Month outreach by visiting Jones High School and Rollins College for their Upward Bound Program. We connected with students, shared the legacy of the Divine Nine, and emphasized the importance of brotherhood, education and service.",
      tags: ["Black History Month", "Divine Nine", "Education"],
    },
    {
      id: 12,
      title: "Campus Visit with King Solomon Foundation",
      date: "February 21, 2025",
      location: "UCF Campus",
      participants: 12,
      photoCount: 2,
      coverImage: "/CHWPhotos/feb21/IMG_7446.png",
      description:
        "In partnership with the King Solomon Foundation, an initiative led by brothers of Delta Xi Lambda, Xi Iota hosted a campus visit for high school students to UCF. Undergraduate brothers provided campus tours and shared experiences about college life, academic success, and leadership.",
      tags: ["Education", "Campus Tour", "Mentorship"],
    },
    {
      id: 13,
      title: "First Place – Metro Orlando NPHC Alumni Step Show",
      date: "March 3, 2025",
      location: "Metro Orlando, FL",
      participants: 10,
      photoCount: 1,
      coverImage: "/CHWPhotos/mar3/image0.jpg",
      description:
        "Xi Iota won first place at the 2025 Metro Orlando NPHC Alumni Step Show with theme '25: A Silver Opportunity for Unity in Motion'. The chapter earned a $2,000 prize and trophy for excellence in performance, teamwork, and representation of Alpha Phi Alpha Fraternity, Inc.",
      tags: ["Step Show", "Competition", "First Place"],
    },
    {
      id: 14,
      title: "94th Southern Regional Convention",
      date: "March 7-10, 2025",
      location: "Atlanta, GA",
      participants: 25,
      photoCount: 1,
      coverImage: "/CHWPhotos/mar11/image0.jpg",
      description:
        "Both chapters attended the regional convention, participating in leadership workshops, Alpha trainings, and networking sessions. Xi Iota and DXL also held a joint brotherhood dinner, fostering mentorship and fraternal unity.",
      tags: ["Regional", "Convention", "Leadership"],
    },
    {
      id: 15,
      title: "Go To High School Go To College – YMOD All-Star Game",
      date: "March 22, 2025",
      location: "Orlando, FL",
      participants: 12,
      photoCount: 1,
      coverImage: "/CHWPhotos/mar22.png",
      description:
        "Xi Iota showed support to Delta Xi Lambda's YMOD program by participating in an all-star basketball game with young students. Brothers combined the fun of athletics with meaningful mentorship, teaching students the importance of seeking higher education.",
      tags: ["YMOD", "Education", "Basketball"],
    },
    {
      id: 16,
      title: "Go To High School Go To College – UCF Campus Tour",
      date: "March 23, 2025",
      location: "UCF Campus",
      participants: 15,
      photoCount: 1,
      coverImage: "/CHWPhotos/mar23.png",
      description:
        "The Delta Xi Lambda chapter collaborated with the UCF Athletics Department and invited brothers of Xi Iota to host a comprehensive campus tour for out-of-state high school students. The collaboration showcased the university's programs while brothers shared their experiences.",
      tags: ["Campus Tour", "Education", "UCF"],
    },
    {
      id: 17,
      title: "Head Start Literacy & Disney Gala Service",
      date: "April 4, 2025",
      location: "Head Start Orlando & Disney",
      participants: 8,
      photoCount: 3,
      coverImage: "/CHWPhotos/apr4.png",
      description:
        "Xi Iota brothers joined DXL at Head Start Orlando to read to children and assist with Disney's Celebrate the Children's Gala, advancing Alpha's mission of education and empowerment through literacy.",
      tags: ["Literacy", "Disney", "Youth"],
    },
    {
      id: 18,
      title: "Brother's Keeper",
      date: "June 14, 2025",
      location: "Orlando, FL",
      participants: 10,
      photoCount: 1,
      coverImage: "/CHWPhotos/jun14.png",
      description:
        "Both chapters served an elderly Alpha brother by cleaning and maintaining his property. This early-year act of service reinforced the fraternity's value of intergenerational brotherhood.",
      tags: ["Brother's Keeper", "Elder Support", "Service"],
    },
    {
      id: 19,
      title: "Xi Iota Charter Day Celebration",
      date: "June 16, 2025",
      location: "UCF Campus",
      participants: 30,
      photoCount: 3,
      coverImage: "/CHWPhotos/jun16/IMG_7477.png",
      description:
        "The Xi Iota Chapter celebrated its Charter Day anniversary with a community cookout, bringing together brothers from Delta Xi Lambda and members of the UCF community. The event featured good food, fellowship, and brotherhood.",
      tags: ["Charter Day", "Brotherhood", "Celebration"],
    },
    {
      id: 20,
      title: "Community Food Distribution with Zeta Phi Beta",
      date: "June 18, 2025",
      location: "Orlando, FL",
      participants: 12,
      photoCount: 1,
      coverImage: "/CHWPhotos/jun18.png",
      description:
        "Xi Iota and DXL joined the Sigma Epsilon Chapter of Zeta Phi Beta Sorority, Inc. to distribute food and household items to Orlando residents, promoting collaboration across Greek organizations for community benefit.",
      tags: ["Food Distribution", "Divine Nine", "Service"],
    },
    {
      id: 21,
      title: "2025 General Convention",
      date: "July 2025",
      location: "Philadelphia, PA",
      participants: 15,
      photoCount: 1,
      coverImage: "",
      description:
        "Brothers from both chapters attended the 2025 General Convention in Philadelphia, representing the Southern Region and engaging in national fraternity business.",
      tags: ["General Convention", "National", "Philadelphia"],
    },
    {
      id: 22,
      title: "Livingston Street Church Food Drive",
      date: "August 21, 2025",
      location: "Livingston Street Church, Orlando",
      participants: 10,
      photoCount: 1,
      coverImage: "/CHWPhotos/aug22.png",
      description:
        "Xi Iota and Delta Xi Lambda partnered with Livingston Street Church of God to distribute food and household supplies to underserved families. This service initiative demonstrated commitment to addressing food insecurity in the Orlando community.",
      tags: ["Food Drive", "Church Partnership", "Service"],
    },
    {
      id: 23,
      title: "Divine Nine Plots Ribbon-Cutting Ceremony",
      date: "September 20, 2024",
      location: "UCF Campus",
      participants: 20,
      photoCount: 2,
      coverImage: "/CHWPhotos/sept20/IMG_7467.png",
      description:
        "A historic moment for the Divine Nine at UCF with the ribbon-cutting of newly built plots honoring the legacy of the NPHC organizations on campus. Brothers from Xi Iota and Delta Xi Lambda gathered alongside UCF alumni to celebrate this milestone.",
      tags: ["Divine Nine", "NPHC", "UCF"],
    },
    {
      id: 24,
      title: "Livingston Street Church Food Drive",
      date: "September 18, 2025",
      location: "Livingston Street Church, Orlando",
      participants: 10,
      photoCount: 1,
      coverImage: "/CHWPhotos/sept18.png",
      description:
        "Both chapters returned to partner with Livingston Street Church of God for another food distribution event, providing essential supplies to families in need. This recurring service demonstrates consistency in addressing food insecurity.",
      tags: ["Food Drive", "Church Partnership", "Service"],
    },
    {
      id: 25,
      title: "Literacy Domain Day at Callahan Head Start",
      date: "October 8, 2025",
      location: "Callahan Head Start, Orlando",
      participants: 12,
      photoCount: 1,
      coverImage: "/CHWPhotos/oct8.png",
      description:
        "Both chapters participated in Literacy Domain Day, where brothers read to children and distributed books to promote literacy and educational engagement. The event emphasized mentorship and Alpha's dedication to youth development.",
      tags: ["Literacy", "Youth", "Education"],
    },
    {
      id: 26,
      title: "Brother's Keeper Initiative",
      date: "October 20, 2024",
      location: "Orlando, FL",
      participants: 8,
      photoCount: 1,
      coverImage: "/CHWPhotos/oct20.png",
      description:
        "Brother Nelson from Xi Iota joined the Delta Xi Lambda Chapter to host Alpha's national initiative, Brother's Keeper. The brothers joined forces to support DXL charter member, Bro. Felton A. Johnson, by assisting with yard activities and home maintenance.",
      tags: ["Brother's Keeper", "Elder Support", "National Program"],
    },
    {
      id: 27,
      title: "A Voteless People Is A Hopeless People",
      date: "October 29, 2024",
      location: "UCF Campus",
      participants: 15,
      photoCount: 4,
      coverImage: "/CHWPhotos/oct29/IMG_7470.png",
      description:
        "Xi Iota hosted a voter education seminar in collaboration with the UCF NAACP Chapter and Equal Ground, supported by DXL alumni. The event informed attendees about ballot measures, voting rights, and civic engagement.",
      tags: ["Voter Education", "Civic Engagement", "NPHC"],
    },
    {
      id: 28,
      title: "Go To High School Go To College – Middle School Campus Tour",
      date: "October 29, 2024",
      location: "UCF Campus",
      participants: 12,
      photoCount: 1,
      coverImage: "/CHWPhotos/october29.png",
      description:
        "The Delta Xi Lambda and Xi Iota chapters collaborated to host a campus tour specifically designed for middle school students from South Florida. Brothers provided age-appropriate guidance about college preparation and the value of education.",
      tags: ["Campus Tour", "Middle School", "Education"],
    },
    {
      id: 29,
      title: "UCF Campus Tour & KSFAN Mentorship",
      date: "Recent Monday",
      location: "UCF Campus",
      participants: 6,
      photoCount: 4,
      coverImage:
        "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg",
      description:
        "The Xi Iota Chapter welcomed the KSFAN to the campus of UCF. Brothers helped tour the students around campus, sharing insights on college life, academic success, and the legacy of Alpha.",
      tags: ["Campus Tour", "Mentorship", "UCF"],
    },
    {
      id: 30,
      title: "2024 District Conference",
      date: "2024",
      location: "Orlando, FL",
      participants: 30,
      photoCount: 2,
      coverImage: "/CHWPhotos/districtconference2024/IMG_7480.png",
      description:
        "The Xi Iota Chapter and Delta Xi Lambda Chapter demonstrated strong attendance at the 2024 District Conference with over 30 brothers registered. Serving as the host chapter, both chapters showcased exemplary leadership and DXL won Outstanding Chapter of the Year.",
      tags: ["District", "Conference", "Host Chapter"],
    },
    // {
    //   id: 31,
    //   title: "2025 District Conference",
    //   date: "2025",
    //   location: "Jacksonville, FL",
    //   participants: 25,
    //   photoCount: 1,
    //   coverImage: "/CHWPhotos/districtconference2024/IMG_7480.png",
    //   description:
    //     "Xi Iota and Delta Xi Lambda attended the 2025 District Conference in Jacksonville, continuing their tradition of strong chapter representation and engagement.",
    //   tags: ["District", "Conference", "Jacksonville"],
    // },
    {
      id: 32,
      title: "Project Alpha",
      date: "Ongoing",
      location: "Orlando, FL",
      participants: 15,
      photoCount: 3,
      coverImage: "/CHWPhotos/projectalpha/IMG_7474.png",
      description:
        "The Xi Iota Chapter and Delta Xi Lambda joined forces to showcase Alpha Phi Alpha's national Project Alpha initiative to the Young Men of Distinction (YMOD) program. This health and wellness education program targeted at-risk youth.",
      tags: ["Project Alpha", "Health", "Youth Development"],
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
      </motion.div>

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
              to="/service"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="font-semibold">Back to Service</span>
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.section
            className="py-12 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 text-center">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Service <span className="text-white">Gallery</span>
              </motion.h1>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Explore our community service events and witness the positive
                  impact we're making together.
                  <br className="hidden sm:block" />
                  Each event represents our commitment to service and
                  brotherhood.
                </p>
              </motion.div>

              {/* View Mode Toggle */}
              <motion.div
                className="flex justify-center items-center space-x-4 mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <List className="w-4 h-4 mr-2" />
                  List View
                </button>
              </motion.div>
            </div>
          </motion.section>

          {/* Gallery Content */}
          <motion.section
            className="py-20 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-7xl mx-auto px-4">
              {viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group cursor-pointer"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Link to={`/service-gallery/${event.id}`}>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={event.coverImage}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Camera className="w-3 h-3 mr-1" />
                            {event.photoCount}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                            {event.title}
                          </h3>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Users className="w-4 h-4 mr-2" />
                              {event.participants} participants
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded text-xs border border-yellow-400/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                            <div className="flex items-center text-yellow-400">
                              <FolderOpen className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">
                                View Gallery
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {galleryEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all group cursor-pointer overflow-hidden"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Link to={`/service-gallery/${event.id}`}>
                        <div className="flex">
                          <div className="w-1/3 relative">
                            <img
                              src={event.coverImage}
                              alt={event.title}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-2 py-1 rounded text-xs font-semibold flex items-center">
                              <Camera className="w-3 h-3 mr-1" />
                              {event.photoCount}
                            </div>
                          </div>

                          <div className="w-2/3 p-6">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                              {event.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="flex items-center text-gray-400 text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                {event.date}
                              </div>
                              <div className="flex items-center text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.location}
                              </div>
                              <div className="flex items-center text-gray-400 text-sm">
                                <Users className="w-4 h-4 mr-2" />
                                {event.participants} participants
                              </div>
                            </div>

                            <p className="text-gray-300 mb-4">
                              {event.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {event.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-400/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServiceGallery;
