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

  // Sample gallery events data
  const galleryEvents = [
    {
      id: 1,
      title: "Metro Orlando Food Distribution",
      date: "May 29, 2024",
      location: "Metro Orlando Community",
      participants: 4,
      photoCount: 3,
      coverImage:
        "/service-gallery/metro-orlando-food-distribution/IMG_7537.jpg",
      description:
        "Brothers Ibrahim, Brown, Blocker, and Chukes dedicated their time to serving the Metro Orlando community by assisting with the packaging and distribution of food for families in need, addressing food insecurity and supporting those facing hardship.",
      tags: ["Community Outreach", "Food Security", "Servants of All"],
    },
    {
      id: 2,
      title: "Head Start Literacy & Disney Gala Service",
      date: "April 4, 2025",
      location: "Head Start to Literacy & Disney",
      participants: 8,
      photoCount: 3,
      coverImage:
        "/service-gallery/headstart-literacy-disney-gala-service/IMG_7541.jpg",
      description:
        "The Xi Iota Chapter had the incredible opportunity to give back by passing out and reading books to the youth at Head Start to Literacy, alongside our brothers from Delta Xi Lambda. Later that day, we also assisted in setting up Disney's 'Celebrate the Children's Gala,' continuing our commitment to service and community impact.",
      tags: ["Education", "Literacy", "Service", "Disney"],
    },
    {
      id: 3,
      title: "UCF Campus Tour & KSFAN Mentorship",
      date: "Recent Monday",
      location: "UCF Campus",
      participants: 6,
      photoCount: 4,
      coverImage:
        "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg",
      description:
        "The Xi Iota Chapter welcomed the KSFAN to the campus of UCF. Brothers helped tour the students around campus, sharing insights on college life, academic success, and the legacy of Alpha. It was an honor to inspire the next generation and show them what it means to strive for excellence!",
      tags: ["Leadership", "Scholarship", "Mentorship", "UCF"],
    },
    {
      id: 4,
      title: "Black History Month Outreach",
      date: "February 7-8, 2025",
      location: "Jones High School & Rollins College",
      participants: 10,
      photoCount: 2,
      coverImage:
        "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7550.jpg",
      description:
        "The Xi Iota Chapter alongside NPHC UCF continued our Black History Month outreach by visiting Jones High School and Rollins College for their Upward Bound Program. We connected with students, shared the legacy of the Divine Nine, and emphasized the importance of brotherhood, education and service.",
      tags: ["Black History Month", "Divine Nine", "Education", "Upward Bound"],
    },
    {
      id: 5,
      title: "Forsyth Woods Elementary Christmas Gift Giving",
      date: "December 3, 2024",
      location: "Forsyth Woods Elementary School",
      participants: 8,
      photoCount: 5,
      coverImage:
        "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7553.jpg",
      description:
        "The brothers of the Xi Iota Chapter had the opportunity to be apart of a Christmas gift giving at Forsyth Woods Elementary school. We exuberated the holiday spirit while providing gifts to children who normally are not able to have a traditional Christmas experience.",
      tags: ["Christmas", "Youth Support", "Holiday Spirit", "Gift Giving"],
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
