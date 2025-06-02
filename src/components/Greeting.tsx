
import { motion } from 'framer-motion';

const Greeting = () => {
  return (
    <section id="greetings" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-yellow-400 mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Greetings
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                On behalf of the "Extraordinary" Theta Sigma Chapter of Alpha Phi Alpha Fraternity, 
                Inc., I welcome you to our chapter website! It is great to know that you have sought to 
                learn more about our distinguished fraternity, and I hope you take the time to explore 
                our website to learn more about the organization we love.
              </p>
              
              <p>
                Alpha Phi Alpha Fraternity, Inc., the first intercollegiate Greek letter fraternity 
                established for African American Men, was founded on December 4, 1906, at Cornell 
                University in Ithaca, New York by seven college men who recognized the need for a 
                strong bond of brotherhood among African descendants in this country. The seven 
                visionary founders, known as the "Jewels" of the fraternity, are Henry Arthur Callis, 
                Charles Henry Chapman, Eugene Kinckle Jones, George Biddle Kelley, Nathaniel Allison 
                Murray, Robert Harold Ogle, and Vertner Woodson Tandy. The fraternity initially 
                served as a study and support group for minority students who faced racial prejudice, 
                both educationally and socially, at Cornell. The Jewel founders and early leaders of the 
                fraternity succeeded in laying a firm foundation for Alpha Phi Alpha's principles of 
                scholarship, fellowship, good character, and the uplifting of humanity.
              </p>
              
              <p>
                The Theta Sigma Chapter of Alpha Phi Alpha Fraternity, Inc. was chartered at the 
                University of Florida on Thursday, August 9th, 1973 by Life Member #21 Brother Dr. 
                John C. Rawls, Albert Daniels, and Rayfield McGee. Since its inception at the University 
                of Florida, the Theta Sigma Chapter has taken profound strides to hold the aims and 
                vision of the fraternity highly throughout the Alachua County community and beyond. 
                Manly Deeds, Scholarship, and Love for All Mankind are the aims of our dear fraternity, 
                and the Theta Sigma Chapter has been devoted to promoting these aims through our 
                programmatic efforts, community involvement, and service and philanthropic 
                initiatives. The Theta Sigma Chapter has done so for over half a century and is 
                dedicated to continuing to do so for years to come. Theta Sigma has introduced many 
                programs for the benefit of the University of Florida and the Alachua Community such 
                as Golden Night of Unity, The Meltdown Freshmen Welcome Weekend, Golden Affair, 
                Ice an Alpha, The Gainesville Unity Run, The Golden Opportunity Scholarship, Miss 
                Black and Old Gold, TS Welcome Week, Alpha Week, and our Annual Scholarship 
                Basketball Game.
              </p>
              
              <p>
                We thank you and appreciate you for visiting our chapter's website. We hope that you 
                take the time to learn more about our Extraordinary chapter through our programs, 
                service opportunities, initiatives, and of course our website.
              </p>
              
              <div className="mt-8 pt-6 border-t border-yellow-400/20">
                <p className="font-semibold">Sincerely,</p>
                <div className="mt-4 space-y-1">
                  <p className="text-yellow-400 font-semibold">Joshua Thomas</p>
                  <p>Alpha Phi Alpha Fraternity, Inc.</p>
                  <p>Theta Sigma Chapter - President</p>
                  <p>The University of Florida</p>
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
                alt="Joshua Thomas, President of Theta Sigma Chapter"
                className="w-full h-auto rounded-lg shadow-2xl border-2 border-yellow-400/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Greeting;
