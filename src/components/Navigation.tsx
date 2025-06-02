
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleDropdown = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-400 font-bold text-xl">ΑΦΑ</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              
              {/* Alpha Phi Alpha Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-yellow-400 transition-colors flex items-center">
                  Alpha Phi Alpha
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-yellow-400/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/fraternity-history" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Fraternity History</Link>
                  <Link to="/meet-the-jewels" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Meet the Jewels</Link>
                  <Link to="/national-programs" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">National Programs</Link>
                  <Link to="/poems" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Poems</Link>
                  <Link to="/become-an-alpha" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Become An Alpha</Link>
                </div>
              </div>

              {/* Xi Iota Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-yellow-400 transition-colors flex items-center">
                  Xi Iota
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-yellow-400/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/chapter-history" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Chapter History</Link>
                  <Link to="/leadership" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Leadership</Link>
                  <Link to="/meet-the-brothers" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Meet the Brothers</Link>
                  <Link to="/lineage" className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10">Lineage</Link>
                </div>
              </div>

              <Link to="/miss-black-and-gold" className="text-white hover:text-yellow-400 transition-colors">
                Miss Black and Gold
              </Link>
              <Link to="/service" className="text-white hover:text-yellow-400 transition-colors">
                Service
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">
              Home
            </Link>
            
            {/* Mobile Alpha Phi Alpha */}
            <div>
              <button 
                onClick={() => toggleDropdown('alpha')}
                className="flex items-center justify-between w-full text-white hover:text-yellow-400 px-3 py-2"
              >
                Alpha Phi Alpha
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'alpha' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'alpha' && (
                <div className="pl-6 space-y-1">
                  <Link to="/fraternity-history" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Fraternity History</Link>
                  <Link to="/meet-the-jewels" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Meet the Jewels</Link>
                  <Link to="/national-programs" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">National Programs</Link>
                  <Link to="/poems" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Poems</Link>
                  <Link to="/become-an-alpha" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Become An Alpha</Link>
                </div>
              )}
            </div>

            {/* Mobile Xi Iota */}
            <div>
              <button 
                onClick={() => toggleDropdown('xi-iota')}
                className="flex items-center justify-between w-full text-white hover:text-yellow-400 px-3 py-2"
              >
                Xi Iota
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'xi-iota' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'xi-iota' && (
                <div className="pl-6 space-y-1">
                  <Link to="/chapter-history" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Chapter History</Link>
                  <Link to="/leadership" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Leadership</Link>
                  <Link to="/meet-the-brothers" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Meet the Brothers</Link>
                  <Link to="/lineage" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">Lineage</Link>
                </div>
              )}
            </div>

            <Link to="/miss-black-and-gold" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">
              Miss Black and Gold
            </Link>
            <Link to="/service" onClick={() => setIsOpen(false)} className="block text-white hover:text-yellow-400 px-3 py-2">
              Service
            </Link>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
