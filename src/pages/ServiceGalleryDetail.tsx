import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
} from "lucide-react";

const ServiceGalleryDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Sample event data (in a real app, this would come from an API based on the ID)
  const eventData: Record<
    string,
    {
      title: string;
      date: string;
      location: string;
      participants: number;
      description: string;
      tags: string[];
      photos: Array<{
        id: number;
        url: string;
        caption: string;
        photographer: string;
        likes: number;
      }>;
    }
  > = {
    "1": {
      title: "Community Food Drive",
      date: "December 15, 2024",
      location: "Orlando Community Center",
      participants: 25,
      description:
        "Our annual holiday food drive helped provide meals to over 100 families in need during the holiday season. Brothers worked tirelessly to collect, sort, and distribute food items to ensure every family had a memorable holiday meal.",
      tags: ["Community Outreach", "Holiday Service", "Food Security"],
      photos: [
        {
          id: 1,
          url: "/lovable-uploads/105ac18a-2fb8-4c53-8a52-f90f03c7cee1.png",
          caption: "Brothers organizing food donations for distribution",
          photographer: "Tomiwa Aluko",
          likes: 15,
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
          caption: "Community members receiving holiday meal packages",
          photographer: "Benjamin Blocker",
          likes: 22,
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1593113616828-82830db12678?w=800&h=600&fit=crop",
          caption: "Volunteers sorting through donated canned goods",
          photographer: "Abdul Ibrahim",
          likes: 18,
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
          caption: "Brothers loading delivery vehicles with food packages",
          photographer: "Treylon Chukes",
          likes: 12,
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
          caption: "Team photo after successful food distribution",
          photographer: "Theodore Johnson",
          likes: 31,
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
          caption: "Setting up distribution tables at the community center",
          photographer: "Jevaughn Morris",
          likes: 9,
        },
      ],
    },
    // Add more events as needed
  };

  const event = eventData[id || "1"];

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Event Not Found
          </h1>
          <Link
            to="/service-gallery"
            className="text-yellow-400 hover:text-yellow-300"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const toggleLike = (photoId: number) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(photoId)) {
      newLikedImages.delete(photoId);
    } else {
      newLikedImages.add(photoId);
    }
    setLikedImages(newLikedImages);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % event.photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + event.photos.length) % event.photos.length
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/3 rounded-full blur-3xl"></div>
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
              to="/service-gallery"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="font-semibold">Back to Gallery</span>
            </Link>
          </motion.div>

          {/* Event Header */}
          <motion.section
            className="py-12 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {event.title}
              </motion.h1>

              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">
                    {event.participants} participants
                  </span>
                </div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {event.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm border border-yellow-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Photo Gallery */}
          <motion.section
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  Event Gallery ({event.photos.length} Photos)
                </h2>
                <p className="text-gray-300">
                  Click on any photo to view it in full size
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-yellow-400/20 hover:border-yellow-400/40 transition-all"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Photo actions overlay */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(photo.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                            likedImages.has(photo.id)
                              ? "bg-red-500/80 text-white"
                              : "bg-black/50 text-gray-300 hover:text-red-400"
                          }`}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-black/50 text-gray-300 hover:text-yellow-400 backdrop-blur-sm transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                        {photo.caption}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 text-xs">
                          📸 {photo.photographer}
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Heart className="w-3 h-3 mr-1" />
                          {photo.likes + (likedImages.has(photo.id) ? 1 : 0)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={event.photos[selectedImage].url}
                alt={event.photos[selectedImage].caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              {event.photos.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Photo info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
                <p className="text-lg mb-2">
                  {event.photos[selectedImage].caption}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>📸 {event.photos[selectedImage].photographer}</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(event.photos[selectedImage].id)}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedImages.has(event.photos[selectedImage].id)
                          ? "text-red-400"
                          : "text-gray-300 hover:text-red-400"
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      <span>
                        {event.photos[selectedImage].likes +
                          (likedImages.has(event.photos[selectedImage].id)
                            ? 1
                            : 0)}
                      </span>
                    </button>
                    <span className="text-gray-400">
                      {selectedImage + 1} / {event.photos.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceGalleryDetail;
