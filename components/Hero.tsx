
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-medical overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Home Health Care in Pondicherry
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
              SHRILAKSHMI CLINIC <br/>
              <span className="text-primary">& HOME HEALTH CARE</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Trusted home health care services dedicated to providing compassionate, professional medical assistance right at your doorstep in Pondicherry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="tel:+911234567890" 
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transform hover:-translate-y-1 transition-all shadow-lg shadow-blue-200"
              >
                <i className="fas fa-phone-alt"></i>
                Call Now
              </a>
              <a 
                href="#contact" 
                className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transform hover:-translate-y-1 transition-all"
              >
                Book Appointment
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 opacity-75">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-slate-700 font-medium">Expert Nursing</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-slate-700 font-medium">Doctor Visits</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-slate-700 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/doctor-home/800/600" 
                alt="Home Care Professional" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <i className="fas fa-user-md text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Patient Recovery</p>
                    <p className="text-xl font-bold text-slate-800">1000+ Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
