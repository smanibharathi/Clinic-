
import React from 'react';

const servicesList = [
  { icon: 'fa-user-nurse', title: 'Home Nursing Care', desc: 'Professional bedside nursing, injections, wound dressing, and monitoring.' },
  { icon: 'fa-home', title: 'Doctor Home Visits', desc: 'Expert medical consultations and health checkups at your doorstep.' },
  { icon: 'fa-blind', title: 'Elderly Care', desc: 'Dedicated companionship and medical support for senior citizens.' },
  { icon: 'fa-procedures', title: 'Post-operative Care', desc: 'Specialized recovery assistance after surgeries and hospital discharges.' },
  { icon: 'fa-stethoscope', title: 'General Medical Consultation', desc: 'Walk-in consultations for minor ailments and regular follow-ups.' },
  { icon: 'fa-vials', title: 'Lab Sample Collection', desc: 'Blood and urine sample collection from your home for diagnostic tests.' },
];

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-lg mb-4">Our Services & Timings</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Comprehensive Care Solutions</h3>
          <p className="text-slate-600 text-lg">We offer a wide range of clinical and home-based healthcare services to meet the diverse needs of our community in Pondicherry.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-medical text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-4">{service.desc}</p>
              <a href="#contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Timing Section */}
        <div className="mt-20 bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 md:p-16 text-white">
            <h4 className="text-3xl font-bold mb-6">Clinic Working Hours</h4>
            <p className="text-blue-100 mb-8 text-lg">We are available throughout the week to ensure you get the medical attention you need.</p>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-semibold text-xl">Monday – Sunday</span>
                <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Everyday</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider mb-2">Morning Shift</p>
                  <p className="text-2xl font-bold">8:00 AM – 1:00 PM</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider mb-2">Evening Shift</p>
                  <p className="text-2xl font-bold">4:00 PM – 9:00 PM</p>
                </div>
              </div>
              <p className="text-sm italic text-blue-100 opacity-80 mt-6">* Emergency home visits available on call 24/7</p>
            </div>
          </div>
          <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://picsum.photos/seed/reception/800/800')" }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
