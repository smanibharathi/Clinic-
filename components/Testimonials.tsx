
import React from 'react';

const testimonials = [
  {
    name: "Rajesh Kannan",
    role: "Family Member",
    content: "The home nursing care provided for my father was exceptional. The nurse was very professional and compassionate. Highly recommended for elderly care in Pondicherry.",
    rating: 5
  },
  {
    name: "Sowmya Murali",
    role: "Patient",
    content: "Shrilakshmi Clinic team helped me recover quickly after my surgery. Having a doctor visit at home saved me so much trouble traveling. Very convenient and trustable!",
    rating: 5
  },
  {
    name: "David Arul",
    role: "Son of Patient",
    content: "Finding reliable medical support for my mother was stressful until we found Shrilakshmi. Their staff is well-trained and they treat patients like family.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-widest">Feedback</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i < testi.rating ? '' : 'text-slate-300'}`}></i>
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{testi.name}</h4>
                  <p className="text-xs text-slate-500 uppercase font-semibold">{testi.role}</p>
                </div>
              </div>
              <div className="absolute top-8 right-8 text-slate-200">
                <i className="fas fa-quote-right text-4xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
