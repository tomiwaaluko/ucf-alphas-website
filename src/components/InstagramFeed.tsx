import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  Camera,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { instagramService, type InstagramMedia } from "../services/instagram";

interface InstagramPost extends InstagramMedia {
  like_count?: number;
  comments_count?: number;
}

// Mock data for demonstration - fallback when API fails
const mockPosts: InstagramPost[] = [
  {
    id: "1",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example1",
    caption:
      "Brothers coming together for our annual community service day! 🤝 #AlphaPhiAlpha #XiIota #Brotherhood #Service",
    timestamp: "2024-01-15T10:30:00Z",
    like_count: 89,
    comments_count: 12,
  },
  {
    id: "2",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example2",
    caption:
      "Mentoring the next generation of leaders at our youth workshop! 📚 #Education #Mentorship #Leadership",
    timestamp: "2024-01-12T14:20:00Z",
    like_count: 67,
    comments_count: 8,
  },
  {
    id: "3",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example3",
    caption:
      "Proud to participate in the local health fair! Promoting wellness in our community 💪 #Health #Wellness #Community",
    timestamp: "2024-01-10T16:45:00Z",
    like_count: 94,
    comments_count: 15,
  },
  {
    id: "4",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example4",
    caption:
      "Food drive success! Thanks to everyone who donated 🍎 #FoodDrive #CommunityService #Giving",
    timestamp: "2024-01-08T12:15:00Z",
    like_count: 78,
    comments_count: 9,
  },
  {
    id: "5",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example5",
    caption:
      "Chapter meeting discussing upcoming initiatives! 🎯 #Planning #Brotherhood #XiIota",
    timestamp: "2024-01-05T19:30:00Z",
    like_count: 56,
    comments_count: 7,
  },
  {
    id: "6",
    media_type: "IMAGE",
    media_url:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop",
    permalink: "https://instagram.com/p/example6",
    caption:
      "Scholarship ceremony honoring academic excellence! 🎓 #Scholarship #Education #Excellence",
    timestamp: "2024-01-03T11:00:00Z",
    like_count: 102,
    comments_count: 18,
  },
];

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useRealData, setUseRealData] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        if (useRealData) {
          // Try to fetch real Instagram data
          try {
            const realPosts = await instagramService.getUserMedia(12);
            setPosts(realPosts);
            console.log(
              "Successfully loaded Instagram data:",
              realPosts.length,
              "posts"
            );
          } catch (apiError) {
            console.warn(
              "Failed to load Instagram data, falling back to mock data:",
              apiError
            );
            setUseRealData(false);
            setPosts(mockPosts);
            setError("Using demo data - Instagram API not configured");
          }
        } else {
          // Use mock data
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading
          setPosts(mockPosts);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error in fetchInstagramPosts:", err);
        setError("Failed to load Instagram posts");
        setPosts(mockPosts); // Fallback to mock data
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [useRealData]);

  const refreshPosts = async () => {
    if (!useRealData) return;

    try {
      setIsRefreshing(true);
      const refreshedPosts = await instagramService.getUserMedia(12);
      setPosts(refreshedPosts);
      setError(null);
    } catch (err) {
      console.error("Error refreshing posts:", err);
      setError("Failed to refresh Instagram posts");
    } finally {
      setIsRefreshing(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (!caption || caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  const getDisplayUrl = (post: InstagramPost) => {
    // For videos, use thumbnail_url if available, otherwise media_url
    if (post.media_type === "VIDEO" && post.thumbnail_url) {
      return post.thumbnail_url;
    }
    return post.media_url;
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Follow Our Journey
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-12 h-12 text-pink-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Follow Our Journey
            </h2>
          </div>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="h-2 w-8 bg-pink-500 mx-4 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Stay connected with Xi Iota Chapter through our Instagram feed. See
            our latest events, service projects, and brotherhood moments.
          </p>

          {/* Status and Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {error && (
              <div className="flex items-center text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-lg">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {useRealData && (
              <motion.button
                onClick={refreshPosts}
                disabled={isRefreshing}
                className="flex items-center bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                />
                {isRefreshing ? "Refreshing..." : "Refresh"}
              </motion.button>
            )}
          </div>

          <motion.a
            href="https://instagram.com/your-chapter-handle" // Replace with your actual Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @XiIotaAPA
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-2xl overflow-hidden group hover:border-pink-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image/Video */}
              <div className="relative overflow-hidden">
                <img
                  src={getDisplayUrl(post)}
                  alt={
                    post.caption
                      ? truncateCaption(post.caption, 50)
                      : "Instagram post"
                  }
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.media_type === "VIDEO" ? (
                    <div className="bg-black/50 rounded-full p-2">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  ) : (
                    <Camera className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">
                    {formatDate(post.timestamp)}
                  </span>
                  <div className="flex items-center gap-4 text-gray-400">
                    {post.like_count && (
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        <span className="text-sm">{post.like_count}</span>
                      </div>
                    )}
                    {post.comments_count && (
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">{post.comments_count}</span>
                      </div>
                    )}
                  </div>
                </div>

                {post.caption && (
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {truncateCaption(post.caption, 120)}
                  </p>
                )}

                <motion.a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View on Instagram
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://instagram.com/your-chapter-handle" // Replace with your actual Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-6 h-6 mr-3" />
            See More on Instagram
            <ExternalLink className="w-5 h-5 ml-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
