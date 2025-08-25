import React, { useState, useEffect } from "react";
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

const Service = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Slideshow media data - you can replace these with your own images/videos
  const slideshowMedia = [
    {
      type: "image",
      src: "/lovable-uploads/105ac18a-2fb8-4c53-8a52-f90f03c7cee1.png",
      title: "Community Food Drive",
      description:
        "Providing meals to families in need during the holiday season",
    },
    {
      type: "image",
      src: "/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png",
      title: "Educational Mentorship",
      description:
        "One-on-one tutoring sessions helping students achieve academic excellence",
    },
    {
      type: "image",
      src: "/lovable-uploads/3ab3677c-347e-4879-adef-d912371f9833.png",
      title: "Health & Wellness Fair",
      description:
        "Free health screenings and wellness education for our community",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      title: "Youth Leadership Workshop",
      description:
        "Empowering the next generation through leadership development programs",
    },
  ];

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
        "SAT Prep Courses",
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
        "Health Screenings",
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
    { number: "15", label: "Partner Organizations" },
    { number: "100+", label: "Students Mentored" },
  ];

  return (
    <section
      id="service"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
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
                      src="/lovable-uploads/105ac18a-2fb8-4c53-8a52-f90f03c7cee1.png"
                      alt="Community Food Drive"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      12 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        Community Food Drive
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Holiday Season 2024
                      </p>
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
                      src="/lovable-uploads/229d7c7e-989f-4a85-9217-4c0597abfc8c.png"
                      alt="Educational Mentorship"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      8 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        Educational Mentorship
                      </h4>
                      <p className="text-gray-300 text-sm">Spring 2024</p>
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
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                      alt="Youth Leadership Workshop"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                      15 Photos
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        Youth Leadership Workshop
                      </h4>
                      <p className="text-gray-300 text-sm">Fall 2024</p>
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

        {/* Call to Action Section */}
        <motion.div
          className="bg-gradient-to-br from-black via-gray-900 to-black border border-yellow-400/30 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Join Our Service Efforts
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Whether you're a member of our fraternity or a community
                partner, there are many ways to get involved in our service
                initiatives. Together, we can make a lasting impact in our
                community.
              </p>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer With Us
              </motion.button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                  alt="Community Service"
                  className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Making a Difference
                  </h4>
                  <p className="text-gray-200">
                    Every volunteer hour creates positive change
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
