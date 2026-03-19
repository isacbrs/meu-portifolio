import React from 'react';
// IMPORTANDO A IMAGEM DA RAIZ (Saindo de 3 pastas)
import imgJava from '../../../java.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-slide-fade">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5c5e48]/10 text-[#5c5e48] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5e48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5c5e48]"></span>
              </span>
              <span>Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#000000] leading-tight mb-6">
              Desenvolvedor <br />
              <span className="text-[#5c5e48]">Full Stack</span>
            </h1>
            
            <p className="text-xl text-[#30321e]/70 mb-8 max-w-xl">
              Especialista em Java, Python e React. Transformando ideias complexas em soluções digitais elegantes e eficientes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-[#000000] text-white rounded-full font-semibold hover:bg-[#5c5e48] transition-all transform hover:scale-105"
              >
                Vamos conversar
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 border-2 border-[#000000] text-[#000000] rounded-full font-semibold hover:bg-[#000000] hover:text-white transition-all"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          <div className="flex-1 relative animate-slide-fade delay-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-[#5c5e48] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={imgJava} 
                  alt="Desenvolvimento Java"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
