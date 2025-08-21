import {
  Mail,
  Instagram,
  MapPin,
  Send,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["apa@ucf.edu", "thesonsoft3@gmail.com"],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: ["@ucf_alphas"],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["P.O. Box 160157", "Orlando, FL 32816-8006", "United States"],
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl"></div>
      </div>

      {/* Greek Letter Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400 font-cinzel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-crimson"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Have questions about our chapter, interested in joining, or want to
            partner with us? We'd love to hear from you and welcome you to the
            Alpha family.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400/50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50"></div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 font-cinzel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start">
                      <motion.div
                        className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg group-hover:shadow-yellow-400/40 transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <item.icon className="w-8 h-8 text-black" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-2 text-xl font-cinzel group-hover:text-yellow-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        {item.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400/50"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400/50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50"></div>

              {/* Animated background element */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"
                animate={{
                  x: [-20, 20, -20],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 font-cinzel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Send us a Message
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <label className="block text-white font-medium mb-2 font-cinzel">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-yellow-400/30 rounded-xl px-4 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-400/60"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 font-cinzel">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-yellow-400/30 rounded-xl px-4 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-400/60"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium mb-2 font-cinzel">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded-xl px-4 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-400/60"
                    placeholder="Enter your subject"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white font-medium mb-2 font-cinzel">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-yellow-400/30 rounded-xl px-4 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-400/60 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-400/40 flex items-center justify-center relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: -100 }}
                    whileHover={{ x: 100 }}
                    transition={{ duration: 0.6 }}
                  />
                  <Send className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
