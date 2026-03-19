import React from 'react';
import { Code2, Brain, Terminal } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Desenvolvimento Back-end',
    description: 'Criação de sistemas robustos e escaláveis utilizando Java e Python, com foco em Programação Orientada a Objetos e boas práticas.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Desenvolvimento de modelos de Machine Learning e árvores de decisão para automação de tarefas e classificação de dados.',
    // Imagem de análise de dados/IA que não quebra
    image: 'iafoto.png'
  },
  {
    icon: Terminal,
    title: 'Automação de Processos',
    description: 'Otimização de fluxos de trabalho através de scripts Python, transformando tarefas manuais em execuções automáticas e eficientes.',
    // Link de automação/código super estável
    image: 'automacao.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-fade delay-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
            Especialidades Técnicas
          </h2>
          <p className="text-lg text-[#30321e]/70 max-w-2xl mx-auto">
            Foco em engenharia de software e tecnologias modernas para construir aplicações eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-fade delay-${idx + 1}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <feature.icon className="text-[#5c5e48]" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000000] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#30321e]/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}