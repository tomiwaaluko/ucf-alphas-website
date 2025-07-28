import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const BecomeAnAlpha = () => {
  const requirements = [
    {
      title: "Academic Excellence",
      description:
        "Enrolled as a full-time student at an accredited institution with minimum 2.5 cumulative GPA",
    },
    {
      title: "Leadership Potential",
      description:
        "Demonstration of leadership abilities and potential for growth",
    },
    {
      title: "Community Service",
      description: "Commitment to serving and uplifting the community",
    },
    {
      title: "Good Character",
      description: "Strong moral character and ethical standards",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Learn About Alpha",
      description:
        "Research our history, values, and mission to understand what it means to be an Alpha man",
    },
    {
      number: "02",
      title: "Attend Interest Meetings",
      description:
        "Join our information sessions to learn more about membership requirements and expectations",
    },
    {
      number: "03",
      title: "Meet Current Brothers",
      description:
        "Network with active members to gain insights into fraternity life and brotherhood",
    },
    {
      number: "04",
      title: "Begin the Journey",
      description:
        "Start the membership intake process when applications become available",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-lora">
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
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-yellow-400 mb-8 font-cinzel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Become An Alpha
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the legacy of excellence. Become part of a brotherhood
              dedicated to scholarship, fellowship, good character, and the
              uplifting of humanity.
            </motion.p>
            <motion.a
              href="https://apa1906.net/membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Start Your Journey Today
            </motion.a>
          </div>
        </motion.section>

        {/* Requirements Section */}
        <motion.section
          className="py-20 bg-gray-900/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-cinzel">
                Membership Requirements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We seek men of character who embody our values and are committed
                to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.title}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 text-center group hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 font-cinzel">
                    {req.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {req.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-cinzel">
                Your Path to Brotherhood
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these steps to begin your journey toward becoming an
                Alpha man
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-16`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-3xl font-bold text-black font-cinzel">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-4 font-cinzel">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-20 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 rounded-3xl border border-yellow-400/30">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-cinzel">
                Ready to Begin?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay connected with our social media pages and website for
                announcements about upcoming interest meetings and membership
                opportunities.
              </p>

              {/* <div className="space-y-4">
                <p className="text-lg text-yellow-400 font-semibold">
                  "First of All, Servants of All, We Shall Transcend All"
                </p>
                <p className="text-gray-300">
                  For more information, please contact us through our official
                  channels.
                </p>
              </div> */}
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeAnAlpha;
