
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 border-t border-yellow-400/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl font-bold text-yellow-400 mr-3">ΑΦΑ</span>
              <div>
                <h3 className="text-white font-bold">Xi Iota Chapter</h3>
                <p className="text-gray-400 text-sm">Alpha Phi Alpha Fraternity, Inc.</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              First of All, Servants of All, We Shall Transcend All
            </p>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('lineage')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors">Lineage</button></li>
              <li><button onClick={() => document.getElementById('eboard')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors">Executive Board</button></li>
              <li><button onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-yellow-400 transition-colors">Service</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@xiiotaapa.org</li>
              <li>(555) 123-4567</li>
              <li>123 University Avenue</li>
              <li>Campus City, State 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-400/20 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Xi Iota Chapter, Alpha Phi Alpha Fraternity, Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Founded December 4, 1906 • Cornell University, Ithaca, NY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
