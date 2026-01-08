
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-12 mb-8 gap-8">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <i className="fas fa-hand-holding-medical text-white text-xl"></i>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight leading-none">
              SHRILAKSHMI<br/><span className="text-xs font-medium text-primary">CLINIC & HOME CARE</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Shrilakshmi Clinic and Home Health Care Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
