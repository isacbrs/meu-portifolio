import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function Mission() {
  // Se o modo baixar estava dando certo com esse caminho, vamos mantê-lo:
  const pdfUrl = "/meucurriculo.pdf"; 

  return (
    <section id="mission" className="py-20 md:py-32 bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#b9bbaa]/30 rounded-full mb-4">
              <span className="text-sm font-medium text-[#30321e]">Sobre mim</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
              Isac Barros
            </h2>
            
            <p className="text-lg text-[#30321e]/80">
              Sou graduando em Engenharia de Software pela Universidade Católica de Brasília...
            </p>

            <div className="pt-4">
              {/* REMOVEMOS O ATRIBUTO 'download' PARA ELE ABRIR */}
              <a 
                href={pdfUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5c5e48] text-white rounded-xl font-semibold shadow-lg hover:bg-[#30321e] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FileText size={20} />
                Visualizar Currículo
                <Download size={18} className="ml-1 opacity-70" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
                alt="Engenharia de Software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
