import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  Heart,
  GraduationCap,
  HandHeart,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Camera,
  FolderOpen,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const Service = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // All available slideshow images - 15 total images
  const allSlideshowMedia = useMemo(
    () => [
      {
        type: "image",
        src: "/service-gallery/metro-orlando-food-distribution/IMG_7537.jpg",
        title: "Metro Orlando Food Distribution",
        description:
          "Brothers dedicated their time serving the Metro Orlando community by assisting with food packaging and distribution for families in need",
      },
      {
        type: "image",
        src: "/service-gallery/headstart-literacy-disney-gala-service/IMG_7541.jpg",
        title: "Head Start Literacy & Disney Gala Service",
        description:
          "Reading books to youth at Head Start to Literacy and assisting with Disney's 'Celebrate the Children's Gala'",
      },
      {
        type: "image",
        src: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg",
        title: "UCF Campus Tour & KSFAN Mentorship",
        description:
          "Brothers toured students around UCF campus, sharing insights on college life and the legacy of Alpha",
      },
      {
        type: "image",
        src: "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7550.jpg",
        title: "Black History Month Outreach",
        description:
          "Visiting Jones High School and Rollins College to share the legacy of the Divine Nine and emphasize brotherhood and education",
      },
      {
        type: "image",
        src: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7553.jpg",
        title: "Forsyth Woods Elementary Christmas Gift Giving",
        description:
          "Providing Christmas gifts to children at Forsyth Woods Elementary, bringing holiday spirit to those in need",
      },
      {
        type: "image",
        src: "/CHWPhotos/districtconference2024/IMG_7480.png",
        title: "2024 District Conference",
        description:
          "Host chapter with 30+ brothers registered, showcasing exemplary leadership and fraternal support at the District Conference",
      },
      {
        type: "image",
        src: "/CHWPhotos/mar11/image0.jpg",
        title: "94th Southern Regional Convention",
        description:
          "Brothers attended the regional convention in Atlanta, participating in leadership workshops and networking sessions",
      },
      {
        type: "image",
        src: "/CHWPhotos/jun16/IMG_7477.png",
        title: "Xi Iota Charter Day Celebration",
        description:
          "Celebrating chapter legacy with a community cookout, bringing together brothers and UCF community members",
      },
      {
        type: "image",
        src: "/CHWPhotos/feb21/IMG_7446.png",
        title: "Campus Visit with King Solomon Foundation",
        description:
          "Hosting high school students at UCF, encouraging higher education and leadership development through campus tours",
      },
      {
        type: "image",
        src: "/CHWPhotos/oct29/IMG_7470.png",
        title: "A Voteless People Is A Hopeless People",
        description:
          "Voter education seminar in collaboration with UCF NAACP and Equal Ground, promoting civic engagement and political empowerment",
      },
      {
        type: "image",
        src: "/CHWPhotos/jan20/IMG_7444.png",
        title: "MLK Day of Service",
        description:
          "Brothers partnered with Orlando Alphas and NAACP for the MLK Million Dollar Pack Initiative, serving the community in honor of Dr. King",
      },
      {
        type: "image",
        src: "/CHWPhotos/sept20/IMG_7467.png",
        title: "Divine Nine Plots Ribbon-Cutting",
        description:
          "Historic ceremony honoring the legacy of the Divine Nine at UCF with newly built plots recognizing NPHC organizations",
      },
      {
        type: "image",
        src: "/CHWPhotos/dec3/IMG_7432.png",
        title: "Forsyth Woods Elementary Christmas",
        description:
          "Brothers provided Christmas gifts to students at Forsyth Woods Elementary, spreading holiday joy to children in need",
      },
      {
        type: "image",
        src: "/CHWPhotos/projectalpha/IMG_7474.png",
        title: "Project Alpha",
        description:
          "Health and wellness education program for at-risk youth, providing critical information about health decisions and life skills",
      },
      {
        type: "image",
        src: "/CHWPhotos/mar3/image0.jpg",
        title: "Step Show First Place",
        description:
          "Xi Iota won first place at the 2025 Metro Orlando NPHC Alumni Step Show, earning a $2,000 prize for excellence in performance",
      },
    ],
    []
  );

  // Randomly select 10 images on component mount
  const slideshowMedia = useMemo(() => {
    const shuffled = [...allSlideshowMedia].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [allSlideshowMedia]);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slideshowMedia.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideshowMedia.length) % slideshowMedia.length
    );
  };
  const programs = [
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description:
        "Providing educational support and mentorship to students in our community.",
      initiatives: [
        "Tutoring Sessions",
        "Scholarship Awards",
        "College Guidance",
      ],
    },
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Engaging with local organizations to address community needs and challenges.",
      initiatives: [
        "Food Drives",
        "Neighborhood Cleanups",
        "Senior Citizen Support",
      ],
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Promoting healthy lifestyles and providing health education resources.",
      initiatives: [
        "Attending Health Fairs",
        "Fitness Programs",
        "Mental Health Awareness",
      ],
    },
    {
      icon: HandHeart,
      title: "Youth Development",
      description:
        "Mentoring and empowering young people to reach their full potential.",
      initiatives: [
        "Mentorship Programs",
        "Leadership Workshops",
        "Career Development",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Community Hours Served" },
    { number: "50+", label: "Families Assisted" },
    { number: "15+", label: "Primary Schools Engaged" },
    { number: "100+", label: "Students Mentored" },
  ];

  const handleAdminClick = async () => {
    const redirectTo = `${window.location.origin}/admin/service-events`;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });
  };

  return (
    <section
      id="service"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Service & Impact
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="h-2 w-8 bg-yellow-400 mx-4 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Service is at the heart of Alpha Phi Alpha. Our chapter is committed
            to making a positive impact in our community through meaningful
            programs and initiatives.
          </p>
        </motion.div>

        {/* Slideshow Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-yellow-400">
                Our Service in Action
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <div className="text-gray-400 text-sm">
                  {currentSlide + 1} / {slideshowMedia.length}
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black">
              <div className="aspect-video relative">
                {slideshowMedia.map((media, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {media.title}
                      </h4>
                      <p className="text-gray-200">{media.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slideshowMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-yellow-400 scale-125"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 hover:bg-black/80 transition-all group hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            Our Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 group hover:bg-black/80 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg">
                    <program.icon className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {program.title}
                  </h4>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {program.description}
                </p>

                <div className="space-y-3">
                  <h5 className="text-white font-semibold mb-4 text-lg">
                    Key Initiatives:
                  </h5>
                  {program.initiatives.map((initiative, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">{initiative}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Gallery Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">
              Service Gallery
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our community service events and see the impact we're
              making together
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Featured Event Preview Cards */}
              <Link to="/service-gallery/1">
                <motion.div
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/service-gallery/metro-orlando-food-distribution/IMG_7537.jpg"
                      alt="Metro Orlando Food Distribution"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      3 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        Metro Orlando Food Distribution
                      </h4>
                      <p className="text-gray-300 text-sm">May 29, 2024</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400">
                        <FolderOpen className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">View Event</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link to="/service-gallery/2">
                <motion.div
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/service-gallery/headstart-literacy-disney-gala-service/IMG_7541.jpg"
                      alt="Head Start Literacy & Disney Gala Service"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      3 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        Head Start Literacy & Disney Gala
                      </h4>
                      <p className="text-gray-300 text-sm">April 4, 2025</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400">
                        <FolderOpen className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">View Event</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link to="/service-gallery/3">
                <motion.div
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg"
                      alt="UCF Campus Tour & KSFAN Mentorship"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      4 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        UCF Campus Tour & KSFAN Mentorship
                      </h4>
                      <p className="text-gray-300 text-sm">Recent Monday</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400">
                        <FolderOpen className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">View Event</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/service-gallery">
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Camera className="w-5 h-5 mr-2" />
                  View Full Gallery
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 mt-8 flex justify-end pr-4">
        <button
          type="button"
          onClick={handleAdminClick}
          className="text-xs text-gray-500 hover:text-yellow-400 transition-colors underline underline-offset-4 cursor-pointer"
        >
          Admin service events
        </button>
      </div>
    </section>
  );
};

export default Service;
