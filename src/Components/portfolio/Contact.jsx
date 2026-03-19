import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, Copy, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdawyryr");
  const [copiedType, setCopiedType] = useState(null); // 'email' ou 'phone'

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-fade delay-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-[#30321e]/70 max-w-2xl mx-auto">
            Interessado ou quer saber mais sobre meu trabalho? Entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="animate-slide-fade delay-1">
            {state.succeeded ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center animate-bounce">
                <Check className="mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold">Mensagem enviada!</h3>
                <p>Obrigado, Isac recebeu seu e-mail e responderá em breve.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 text-sm underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#30321e] mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#b9bbaa] rounded-xl focus:border-[#5c5e48] focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#30321e] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#b9bbaa] rounded-xl focus:border-[#5c5e48] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#30321e] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-[#b9bbaa] rounded-xl focus:border-[#5c5e48] focus:outline-none transition-colors resize-none"
                    placeholder="Como posso ajudar você?"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-4 bg-[#000000] text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8 animate-slide-fade delay-2">
            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-6">
                Contatos
              </h3>

              <div className="space-y-4">
                {/* Bloco de Email */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl group border border-transparent hover:border-[#b9bbaa] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#5c5e48]/10 rounded-full flex items-center justify-center text-[#5c5e48]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-[#30321e]/70">Email</div>
                      <div className="font-medium text-[#000000]">isac.brs.contact@gmail.com</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('isac.brs.contact@gmail.com', 'email')}
                    className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors text-[#5c5e48]"
                    title="Copiar Email"
                  >
                    {copiedType === 'email' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Bloco de Telefone */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl group border border-transparent hover:border-[#b9bbaa] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#5c5e48]/10 rounded-full flex items-center justify-center text-[#5c5e48]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-[#30321e]/70">Telefone</div>
                      <div className="font-medium text-[#000000]">+55 77 99176-4296</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('+5577991764296', 'phone')}
                    className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors text-[#5c5e48]"
                    title="Copiar Telefone"
                  >
                    {copiedType === 'phone' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#000000] mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/isac-barros-2602703a4" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#5c5e48] hover:scale-110 transition-all shadow-lg group">
                  <Linkedin className="text-[#5c5e48] group-hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://github.com/isacbrs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#5c5e48] hover:scale-110 transition-all shadow-lg group">
                  <Github className="text-[#5c5e48] group-hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://www.instagram.com/isac.brs/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#5c5e48] hover:scale-110 transition-all shadow-lg group">
                  <Instagram className="text-[#5c5e48] group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}