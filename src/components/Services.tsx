import { Globe, Database, TrendingUp, Smartphone, Server, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
const Services = () => {
  const services = [{
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Desenvolvimento de Sites",
    description: "Sites profissionais, responsivos e otimizados para conversão. Do institucional ao e-commerce, criamos sua presença digital com as melhores práticas de SEO e UX.",
    features: ["Design Responsivo", "SEO Otimizado", "Carregamento Rápido", "Segurança SSL"]
  }, {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Implantação de Sistema eGestor",
    description: "Como parceiros oficiais do eGestor, oferecemos a implantação completa do sistema de gestão empresarial mais completo do mercado.",
    features: ["Gestão Financeira", "Controle de Estoque", "Vendas & CRM", "Relatórios Gerenciais"]
  }, {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Google Ads",
    description: "Campanhas otimizadas no Google Ads para aumentar sua visibilidade e gerar leads qualificados. Gestão completa com foco no ROI.",
    features: ["Campanhas de Busca", "Remarketing", "Shopping Ads", "Relatórios Detalhados"]
  }, {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Meta Ads (Facebook/Instagram)",
    description: "Estratégias personalizadas de marketing digital nas redes sociais para alcançar seu público-alvo e aumentar conversões.",
    features: ["Segmentação Avançada", "Criativos Otimizados", "A/B Testing", "Pixel de Conversão"]
  }, {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Infraestrutura em TI",
    description: "Soluções completas de infraestrutura tecnológica para empresas, incluindo servidores, redes, backup e segurança.",
    features: ["Configuração de Servidores", "Redes Corporativas", "Backup Automático", "Segurança Digital"]
  }, {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Consultoria Digital",
    description: "Análise completa da sua presença digital e estratégias personalizadas para crescimento online sustentável.",
    features: ["Auditoria Digital", "Estratégia de Crescimento", "Análise de Concorrentes", "Plano de Ação"]
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Soluções completas em tecnologia da informação para impulsionar seu negócio no mundo digital.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-background/80 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-950">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-balance text-zinc-950">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com as melhores soluções em TI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="bg-secondary hover:bg-secondary-glow text-secondary-foreground shadow-secondary transition-bounce px-8 py-4">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://wa.me/5531972398971', '_blank')} className="border-white/60 text-white hover:border-white transition-smooth px-8 py-4 bg-amber-600 hover:bg-amber-500">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;