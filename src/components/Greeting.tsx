import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <section id="greetings" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 uppercase tracking-wider"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>

            <motion.div
              className="space-y-8 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 p-8 border-l-4 border-yellow-400">
                <p className="text-xl font-light text-white mb-4">
                  "Alpha Phi Alpha Fraternity, Inc. develops leaders, promotes
                  brotherhood and academic excellence, while providing service
                  and advocacy for our communities."
                </p>
              </div>

              <p className="text-lg">
                Welcome to the official website of the Xi Iota Chapter of Alpha
                Phi Alpha Fraternity, Inc.! We are delighted that you are
                interested in learning more about our esteemed fraternity. Take
                your time to explore our site and discover the rich history and
                values of the organization we hold dear.
              </p>

              <p>
                Alpha Phi Alpha Fraternity, Inc., the first intercollegiate
                Greek letter fraternity established for African American Men,
                was founded on December 4, 1906, at Cornell University in
                Ithaca, New York by seven college men who recognized the need
                for a strong bond of brotherhood among African descendants in
                this country.
              </p>

              <p>
                The Xi Iota Chapter remains steadfast in advancing our mission
                through impactful programs, community engagement, and service
                initiatives. Our chapter has proudly introduced numerous
                initiatives benefiting the University of Central Florida and the
                greater Orlando community, including the Miss Black & Gold
                Scholarship Pageant, The Royal Luncheon, Stroll Like an Alpha,
                and various other community service projects.
              </p>

              <div className="mt-12 pt-8 border-t border-yellow-400/30">
                <p className="font-medium text-white">Sincerely,</p>
                <div className="mt-4 space-y-1">
                  <p className="text-yellow-400 font-semibold text-xl">
                    Treylon Chukes
                  </p>
                  <p className="text-gray-400">Chapter President</p>
                  <p className="text-gray-400">
                    Alpha Phi Alpha Fraternity, Inc.
                  </p>
                  <p className="text-gray-400">Xi Iota Chapter</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1">
                <img
                  src="public/brothers/Treylon Chukes.jpeg"
                  alt="Treylon Chukes, President of Xi Iota Chapter"
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute inset-1 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-400"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-400"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-400"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-400"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Greeting;
