import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./assets/logo.png";


export default function Header({ scrollY }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#mission' },
    { label: 'Áreas', href: '#features' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ];

 function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
    </nav>
  );
}

  // Função para scroll suave
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrolled = scrollY > 20;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#e8e8e8]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold text-[#000000] hover:text-[#5c5e48] transition-colors">
          Isac Barros
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={e => handleSmoothScroll(e, item.href)}
              className="text-sm font-medium text-[#30321e] hover:text-[#5c5e48] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5c5e48] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#000000]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#e8e8e8] shadow-xl md:hidden">
            <nav className="flex flex-col p-6 gap-4">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={e => handleSmoothScroll(e, item.href)}
                  className="text-lg font-medium text-[#30321e] hover:text-[#5c5e48] transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
