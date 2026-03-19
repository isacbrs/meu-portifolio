import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  Calendar, 
  Award, 
  Lightbulb, 
  GraduationCap, 
  Cpu, 
  BookOpen 
} from 'lucide-react';

const timelineData = [
  {
    id: 't1',
    year: '2025',
    title: 'Fundamentos Tecnológicos',
    description: 'Formação em Informática e Ferramentas Digitais pela Microlins',
    icon: BookOpen,
    branches: [
      { id: 'b1', title: 'Alfabetização Digital', description: 'Domínio de arquitetura de computadores e sistemas operacionais.' },
      { id: 'b2', title: 'Produtividade', description: 'Uso avançado do Pacote Office para gestão de dados e apresentações.' }
    ]
  },
  {
    id: 't2',
    year: '2026',
    title: 'Python',
    description: 'Certificação Profissional pela Hashtag Treinamentos',
    icon: BookOpen,
    branches: [
      { id: 'b3', title: 'Data Science', description: 'Criação de modelos de Machine Learning para análise preditiva de cenários.' },
      { id: 'b4', title: 'Automação', description: 'Desenvolvimento de scripts para otimização de tarefas e processos repetitivos.' },
      { id: 'b5', title: 'Análise de Dados', description: 'Manipulação de grandes volumes de dados com foco em geração de insights.' }
    ]
  },
  {
    id: 't3',
    year: '2026',
    title: 'Java Developer',
    description: 'Formação em Desenvolvimento Java pela FIAP',
    icon: BookOpen,
    branches: [
      { id: 'b3_java', title: 'Arquitetura POO', description: 'Domínio básico de Programação Orientada a Objetos e padrões de projeto.' },
      { id: 'b4_java', title: 'Java Core', description: 'Tratamento de exceções, coleções avançadas e performance de código.' },
      { id: 'b5_java', title: 'Ecossistema Back-End', description: 'Construção de aplicações escaláveis focadas em segurança e persistência de dados.' }
    ]
  },
  {
    id: 't4',
    year: '2026',
    title: 'Engenharia de Software',
    description: 'Graduação na Universidade Católica de Brasília (UCB)',
    icon: GraduationCap,
    branches: [
      { id: 'b6', title: 'Mérito Acadêmico', description: 'Bolsista integral (100%) pelo PROUNI, selecionado via desempenho no ENEM.' },
      { id: 'b7', title: 'Nível Atual', description: 'Estou no meu primeiro Semestre, aprendendo sobre UX, Front-End e Boas práticas profissionais.'}
    ]
  },
  {
    id: 't5',
    year: '2026',
    title: 'Projeto: IA de Crédito',
    description: 'Desenvolvimento de Inteligência Artificial para Previsão de Crédito',
    icon: Cpu,
    branches: [
      { id: 'b8', title: 'Engenharia de Dados', description: 'Aplicação de boas práticas de software e limpeza de dados reais.' },
      { id: 'b9', title: 'Modelagem', description: 'Implementação de algoritmos de classificação para tomada de decisão financeira.' }
    ]
  }
];

export default function Timeline() {
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  return (
    <section id="timeline" className="py-20 md:py-32 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-fade">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
            Minha Jornada
          </h2>
          <p className="text-lg text-[#30321e]/70 max-w-2xl mx-auto">
            A evolução contínua da minha carreira técnica e acadêmica.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#b9bbaa]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <div
                key={item.id}
                className="relative animate-slide-fade"
              >
                {/* Node Icon */}
                <div className="flex items-center justify-center">
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-[#5c5e48] flex items-center justify-center shadow-lg">
                    <item.icon className="text-[#5c5e48]" size={28} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
                  <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        <Calendar className="text-[#5c5e48]" size={20} />
                        <span className="text-sm font-semibold text-[#5c5e48]">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#000000] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#30321e]/70 mb-4">
                        {item.description}
                      </p>

                      {/* Expand Button */}
                      {item.branches.length > 0 && (
                        <button
                          onClick={() => toggleNode(item.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#5c5e48] text-white rounded-full text-sm font-medium hover:bg-[#30321e] transition-colors"
                          aria-expanded={expandedNodes[item.id]}
                        >
                          {expandedNodes[item.id] ? <Minus size={16} /> : <Plus size={16} />}
                          {expandedNodes[item.id] ? 'Recolher' : 'Ver Detalhes'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Branches Detail Area */}
                {expandedNodes[item.id] && item.branches.length > 0 && (
                  <div className="mt-6 ml-8 md:ml-0 md:px-12">
                    <div className="grid md:grid-cols-3 gap-4">
                      {item.branches.map((branch, branchIdx) => (
                        <div
                          key={branch.id}
                          className="bg-[#b9bbaa]/30 rounded-xl p-4 border border-[#8e8d82]/30 animate-slide-fade"
                          style={{ animationDelay: `${branchIdx * 100}ms` }}
                        >
                          <h4 className="font-semibold text-[#000000] mb-1">
                            {branch.title}
                          </h4>
                          <p className="text-sm text-[#30321e]/70">
                            {branch.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
