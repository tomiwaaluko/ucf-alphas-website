
const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400/20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/105ac18a-2fb8-4c53-8a52-f90f03c7cee1.png" 
                alt="Xi Iota Chapter Logo" 
                className="h-16 w-16 mr-4"
              />
              <div>
                <h3 className="text-white font-bold text-xl">Xi Iota Chapter</h3>
                <p className="text-gray-400">Alpha Phi Alpha Fraternity, Inc.</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              "First of All, Servants of All, We Shall Transcend All"
            </p>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-6 text-xl uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('greetings')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-medium">About</button></li>
              <li><button onClick={() => document.getElementById('lineage')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-medium">Lineage</button></li>
              <li><button onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-medium">Leadership</button></li>
              <li><button onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-medium">Service</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-6 text-xl uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="font-medium">contact@xiiotaapa.org</li>
              <li>(555) 123-4567</li>
              <li>123 University Avenue</li>
              <li>Campus City, State 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-400/20 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2024 Xi Iota Chapter, Alpha Phi Alpha Fraternity, Inc. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Founded December 4, 1906 • Cornell University, Ithaca, NY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
