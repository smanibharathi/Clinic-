
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="tel:+911234567890" 
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        >
          <i className="fas fa-phone text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
