
import { motion } from 'framer-motion';

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
                  "Alpha Phi Alpha Fraternity, Inc. develops leaders, promotes brotherhood and academic excellence, while providing service and advocacy for our communities."
                </p>
              </div>
              
              <p className="text-lg">
                On behalf of the "Extraordinary" Xi Iota Chapter of Alpha Phi Alpha Fraternity, 
                Inc., I welcome you to our chapter website! It is great to know that you have sought to 
                learn more about our distinguished fraternity, and I hope you take the time to explore 
                our website to learn more about the organization we love.
              </p>
              
              <p>
                Alpha Phi Alpha Fraternity, Inc., the first intercollegiate Greek letter fraternity 
                established for African American Men, was founded on December 4, 1906, at Cornell 
                University in Ithaca, New York by seven college men who recognized the need for a 
                strong bond of brotherhood among African descendants in this country.
              </p>
              
              <p>
                The Xi Iota Chapter has been devoted to promoting our aims through programmatic efforts, 
                community involvement, and service initiatives. We have introduced many programs for the 
                benefit of the University of Florida and the local community such as Golden Night of Unity, 
                The Meltdown Freshmen Welcome Weekend, Miss Black and Gold, and our Annual Scholarship 
                Basketball Game.
              </p>
              
              <div className="mt-12 pt-8 border-t border-yellow-400/30">
                <p className="font-medium text-white">Sincerely,</p>
                <div className="mt-4 space-y-1">
                  <p className="text-yellow-400 font-semibold text-xl">Joshua Thomas</p>
                  <p className="text-gray-400">Chapter President</p>
                  <p className="text-gray-400">Alpha Phi Alpha Fraternity, Inc.</p>
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
              <img 
                src="/lovable-uploads/3ab3677c-347e-4879-adef-d912371f9833.png" 
                alt="Joshua Thomas, President of Xi Iota Chapter"
                className="w-full h-auto shadow-2xl border border-yellow-400/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Greeting;
