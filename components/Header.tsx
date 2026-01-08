
import React, { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <i className="fas fa-hand-holding-medical text-white text-xl"></i>
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-slate-800 tracking-tight leading-none">
            SHRILAKSHMI<br/><span className="text-sm font-medium text-primary">CLINIC</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-4 px-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-primary text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-lg font-bold"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
