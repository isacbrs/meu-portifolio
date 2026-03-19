import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// IMPORTANDO AS IMAGENS DA RAIZ
import imgWeather from '../../../WeatherAPI.png';
import imgIA from '../../../IAcredito.png';

const projects = [
  {
    id: 1,
    title: 'Weather API',
    category: 'API',
    description: 'Uma API REST em python que consome dados de uma API meteorológica externa e retorna dados precisos e diversos de uma cidade ou região específica',
    image: imgWeather, // Usando a imagem importada
    tags: ['Back-end','Python' , 'FastAPI'],
    github: 'https://github.com/isacbrs/Weather-API'
  },
  {
    id: 2,
    title: 'IA- Credit-Score-Classifier',
    category: 'IA',
    description: 'Ferramenta de Machine Learning que automatiza a análise de risco de crédito. Desenvolvido com o método Random Forest e processamento de dados para decisões financeiras rápidas e precisas.', 
    image: imgIA, // Usando a imagem importada
    tags: ['Machine Learning', 'Python', 'Pandas', 'Scikit-Learn'],
    github: 'https://github.com/isacbrs/AI-Credit-Score-Classifier'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-[#30321e]/70 max-w-2xl mx-auto">
            Conheça algumas das soluções que desenvolvi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#000000] rounded-full text-sm font-medium hover:bg-[#b9bbaa] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#000000] rounded-full text-sm font-medium hover:bg-[#b9bbaa] transition-colors"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-semibold text-[#5c5e48] mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#30321e]/70 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-[#b9bbaa]/30 text-[#30321e] rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
