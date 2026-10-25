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
  [
  {
    id: 't1_ucb',
    year: '2026',
    title: 'Engenharia de Software',
    description: 'Graduação na Universidade Católica de Brasília (UCB)',
    icon: GraduationCap,
    branches: [
      { id: 'b_ucb1', title: 'Mérito Acadêmico', description: 'Bolsista integral pelo PROUNI, focado em excelência acadêmica.' },
      { id: 'b_ucb2', title: 'Foco no Ecossistema Apple', description: 'Construindo a base técnica e de UX com o objetivo de integrar o Apple Developer Academy.'}
    ]
  },
  {
    id: 't2_cs50',
    year: '2026',
    title: 'CS50x: Computer Science',
    description: 'Fundação sólida em Ciência da Computação pela Harvard University',
    icon: BookOpen,
    branches: [
      { id: 'b_cs50_1', title: 'Lógica e Algoritmos', description: 'Estruturas de dados complexas, algoritmos de busca, ordenação e Big O.' },
      { id: 'b_cs50_2', title: 'Baixo Nível', description: 'Gerenciamento direto de memória, manipulação de ponteiros e performance em C.' }
    ]
  },
  {
    id: 't3_cifra',
    year: '2026',
    title: 'Projeto: Criptografia Baseada em Cifra',
    description: 'Aplicação prática do CS50x construída em C',
    icon: Code,
    branches: [
      { id: 'b_cifra_1', title: 'Manipulação de Memória', description: 'Validação rigorosa de argumentos via CLI e aplicação de aritmética modular.' },
      { id: 'b_cifra_2', title: 'Resolução de Problemas', description: 'Processamento eficiente garantindo a integridade dos dados contra vulnerabilidades.' }
    ]
  },
  {
    id: 't4_helsinki',
    year: '2026',
    title: 'Elements of AI',
    description: 'Fundamentos de Inteligência Artificial pela University of Helsinki',
    icon: Brain,
    branches: [
      { id: 'b_helsinki_1', title: 'Fundamentos Matemáticos', description: 'Redes neurais, machine learning e a matemática por trás dos modelos.' },
      { id: 'b_helsinki_2', title: 'Visão Prática', description: 'Integração de Inteligência Artificial para a resolução de problemas reais.' }
    ]
  },
  {
    id: 't5_msa',
    year: '2026',
    title: 'Microsoft Student Ambassador',
    description: 'Atuação na comunidade técnica (Trilha Influencer)',
    icon: Users,
    branches: [
      { id: 'b_msa_1', title: 'Comunidade e Compartilhamento', description: 'Disseminação sobre ferramentas e ecossistemas para estudantes e profissionais.' },
      { id: 'b_msa_2', title: 'Liderança Comportamental', description: 'Incentivo ao aprendizado contínuo, engajamento técnico e desenvolvimento de carreira.' }
    ]
  },
  {
    id: 't6_hackathon',
    year: '2026',
    title: 'Nebius x NVIDIA Global AI Hackathon',
    description: 'Líder de Equipe e Desenvolvedor Back-End',
    icon: Trophy,
    branches: [
      { id: 'b_hack_1', title: 'Inovação sob Pressão', description: 'Arquitetura de API integrando modelos de IA da NVIDIA aplicando Privacy by Design.' },
      { id: 'b_hack_2', title: 'Liderança Colaborativa', description: 'Gerenciamento de equipe assíncrona com Kanban, superando barreiras de idiomas.' }
    ]
  },
  {
    id: 't7_calendario',
    year: '2026',
    title: 'Projeto: Gestão Acadêmica Colaborativa',
    description: 'Plataforma desenhada para resolver a perda de prazos acadêmicos',
    icon: Layout,
    branches: [
      { id: 'b_cal_1', title: 'Challenge Based Learning', description: 'Aplicação da metodologia CBL para identificar a raiz do problema e criar uma solução focada no usuário.' },
      { id: 'b_cal_2', title: 'O Facilitador', description: 'Estruturação técnica da API e coordenação da equipe limitando o fluxo de tarefas (WIP) via Kanban.' }
    ]
  }
]
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
