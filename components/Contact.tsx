
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }

    // Mock PHP submission
    console.log('Form Submitted (PHP simulation):', formData);
    setStatus({ type: 'success', msg: 'Thank you! Your inquiry has been sent. We will contact you soon.' });
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setStatus({ type: null, msg: '' }), 5000);
  };

  return (
    <div className="py-20 bg-medical">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary p-10 md:p-16 text-white">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Have questions about our home care services or need to book a consultation? Reach out to us and we'll be happy to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Location</h4>
                  <p className="text-blue-100">Main Road, Pondicherry - 605001</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone</h4>
                  <p className="text-blue-100">+91 123 456 7890</p>
                  <p className="text-blue-100">+91 098 765 4321</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="text-blue-100">contact@shrilakshmiclinic.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Send us a Message</h3>
            
            {status.type && (
              <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                <p className="font-medium">{status.msg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your contact number"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">How can we help? *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Send Inquiry Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
