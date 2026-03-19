import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import imgJava from '../../../java.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-16"
      style={{ height: 'calc(100vh - 64px)', minHeight: '600px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="h-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Column - Text (52%) */}
          <div className="flex-1 md:w-[52%] space-y-6 animate-slide-fade delay-0">
            <div className="inline-block px-4 py-2 bg-[#b9bbaa]/0 rounded-full mb-4">
              <span className="text-sm font-medium text-[#30321e]"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
              Isac Barros
              <span className="block mt-2 text-[#5c5e48]">Engenheiro de Software</span>
              <span className="block mt-2"> em constante evolução</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#30321e]/80 max-w-xl">
              Evoluindo cada dia mais para chegar cada vez mais longe
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#000000] text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-200"
              >
                Ver Portfólio
                <ArrowRight size={20} />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#30321e] text-[#30321e] rounded-full font-medium hover:bg-[#30321e] hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-200"
              >
                <Mail size={20} />
                Entrar em Contato
              </a>
            </div>
          </div>

          {/* Right Column - Image Collage (48%) */}
          <div className="flex-1 md:w-[48%] relative h-[400px] md:h-full animate-slide-fade delay-2">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Image */}
              <div 
                className="relative animate-slide-fade delay-3"
                style={{ 
                  width: '80%',
                  maxWidth: '534px',
                  aspectRatio: '534/346'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                  alt="Landscape"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.14)' }}
                />
              </div>

              {/* Mini Image 1 */}
              {/* 
              <div 
                className="absolute animate-float animate-slide-fade delay-4"
                style={{ 
                  width: '100px',
                  height: '100px',
                  top: '10%',
                  left: '5%'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=200&q=80"
                  alt="Nature"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              */}

              {/* Mini Image 2 */}
              <div 
                className="absolute animate-float animate-slide-fade delay-5"
                style={{ 
                  width: '90px',
                  height: '90px',
                  bottom: '10%',
                  left: '10%',
                  animationDelay: '1s'
                }}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=12592&format=png&color=000000"
                  alt="Green"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>

              {/* Mini Image 3 */}
              <div 
                className="absolute animate-float animate-slide-fade delay-5"
                style={{ 
                  width: '120px',
                  height: '120px',
                  top: '30%',
                  right: '0%',
                  animationDelay: '2s'
                }}
              >
                <img
                  src={imgJava} 
                  alt="Java"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
