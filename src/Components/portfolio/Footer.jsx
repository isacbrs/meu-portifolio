import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#30321e] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Isac Barros</h3>
            <p className="text-white/70">
              Evoluindo cada dia mais para chegar cada vez mais longe
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white/70 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-white/70 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/70">
              <li>isac.brs.contact@gmail.com</li>
              {/* O erro estava aqui embaixo: corrigido para </li> */}
              <li>+55 77 99176-4296</li> 
              <li>Brasília, Brasil 📍</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center gap-2">
            Feito por Isac Barros © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
