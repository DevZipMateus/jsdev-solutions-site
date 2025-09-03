import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tertiary text-tertiary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl leading-tight">JS DESENVOLVIMENTO</span>
                <span className="text-sm text-white/70 uppercase tracking-wide">Soluções em TI</span>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Tecnologia que transforma ideias em soluções. Oferecemos serviços completos em TI 
              com as melhores tecnologias e o melhor custo-benefício do mercado.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com/js_desenvolvimento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary transition-smooth rounded-lg flex items-center justify-center group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="mailto:alexcassimiro@jsdesenvolvimento.com.br"
                className="w-10 h-10 bg-white/10 hover:bg-secondary transition-smooth rounded-lg flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/5531972398971"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-secondary transition-smooth rounded-lg flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  Desenvolvimento de Sites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  Sistema eGestor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  Google Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  Meta Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  Infraestrutura TI
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/5531972398971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-smooth text-sm"
                >
                  (31) 7239-8971
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <a
                  href="mailto:alexcassimiro@jsdesenvolvimento.com.br"
                  className="text-white/70 hover:text-secondary transition-smooth text-sm break-all"
                >
                  alexcassimiro@jsdesenvolvimento.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Rua Mirabela 82, Dom Bosco<br />
                  Betim - MG, 32670-622
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Segunda a Sexta<br />
                  08:00 às 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} JS Desenvolvimento e Soluções em Informática. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm">CNPJ: 31.619.884/0001-90</span>
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/60 hover:text-secondary transition-smooth text-sm"
              >
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;