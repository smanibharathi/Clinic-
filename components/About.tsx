
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/med1/400/500" className="rounded-2xl shadow-lg mt-8" alt="Medical team" />
              <img src="https://picsum.photos/seed/med2/400/500" className="rounded-2xl shadow-lg mb-8" alt="Home visit" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-8 rounded-full border-8 border-white shadow-xl hidden md:block text-center">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-xs uppercase font-bold">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              About Shrilakshmi Clinic
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-snug">
              Compassionate Care In The Comfort Of Your Own Home
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Shrilakshmi Clinic and Home Health Care Services was founded on the principle that recovery and elderly care are most effective when provided in the familiarity and comfort of one's own home.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Based in Pondicherry, our dedicated team of experienced doctors, professional nurses, and caregivers work tirelessly to ensure that our patients receive hospital-grade medical attention with a personal touch.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: 'fa-user-md', title: 'Experienced Medical Professionals', desc: 'Our team consists of certified doctors and skilled nursing staff.' },
                { icon: 'fa-heartbeat', title: 'Quality Home Care', desc: 'Personalized treatment plans tailored to each patient\'s unique needs.' },
                { icon: 'fa-shield-alt', title: 'Patient Safety & Trust', desc: 'We maintain the highest standards of safety, hygiene, and ethical practice.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 bg-sky-50 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
