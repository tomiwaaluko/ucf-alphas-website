
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-yellow-400 font-bold text-xl">ΑΦΑ</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-yellow-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('lineage')} className="text-white hover:text-yellow-400 transition-colors">
                Lineage
              </button>
              <button onClick={() => scrollToSection('eboard')} className="text-white hover:text-yellow-400 transition-colors">
                Eboard
              </button>
              <button onClick={() => scrollToSection('service')} className="text-white hover:text-yellow-400 transition-colors">
                Service
              </button>
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
            <button onClick={() => scrollToSection('hero')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('lineage')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              Lineage
            </button>
            <button onClick={() => scrollToSection('eboard')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              Eboard
            </button>
            <button onClick={() => scrollToSection('service')} className="block text-white hover:text-yellow-400 px-3 py-2 w-full text-left">
              Service
            </button>
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
