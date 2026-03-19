import React, { useEffect, useState } from 'react';
import Header from '../Components/Portfolio/Header';
import Hero from '../Components/Portfolio/Hero';
import Mission from '../Components/Portfolio/Mission';
import Features from '../Components/Portfolio/Features';
import Timeline from '../Components/Portfolio/Timeline';
import Portfolio from '../Components/Portfolio/Portfolio';
import Contact from '../Components/Portfolio/Contact';
import Footer from '../Components/Portfolio/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e8e8] font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes slideFadeIn {
          from {
            transform: translateY(18px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .animate-slide-fade {
          animation: slideFadeIn 700ms cubic-bezier(.22,.9,.3,1) both;
        }

        .animate-float {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .delay-0 { animation-delay: 0ms; }
        .delay-1 { animation-delay: 120ms; }
        .delay-2 { animation-delay: 240ms; }
        .delay-3 { animation-delay: 360ms; }
        .delay-4 { animation-delay: 480ms; }
        .delay-5 { animation-delay: 600ms; }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #5c5e48;
          color: #fff;
        }
      `}} />
      
      <Header scrollY={scrollY} />
      <Hero />
      <Mission />
      <Features />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}