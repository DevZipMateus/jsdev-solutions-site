import { CheckCircle, Users, Lightbulb, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Qualidade Garantida",
      description: "Utilizamos as melhores tecnologias e práticas do mercado para entregar soluções de alta qualidade."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atendimento Personalizado",
      description: "Análise detalhada das necessidades de cada cliente para oferecer soluções sob medida."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tendências e tecnologias em TI para seu negócio."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Melhor Custo-Benefício",
      description: "Soluções eficientes e competitivas que aumentam a produtividade do seu negócio."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre a <span className="text-primary">JS Desenvolvimento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Somos especialistas em transformar desafios tecnológicos em oportunidades de crescimento para seu negócio.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As soluções e os serviços de TI oferecidos pela JS Desenvolvimento contam sempre 
                com o apoio das melhores tecnologias, com análises detalhadas das necessidades 
                dos clientes, e com a dedicação e competência dos seus profissionais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso objetivo é, com o melhor custo-benefício do mercado, aumentar a eficiência 
                dos seus negócios através de soluções tecnológicas inovadoras e personalizadas.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Parceiro oficial eGestor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Especialistas em Google Ads e Meta Ads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Infraestrutura completa em TI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Desenvolvimento de sites profissionais</span>
                </div>
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center shadow-elegant">
                <div className="text-center text-white">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 p-8">
                    <img 
                      src="/lovable-uploads/623485a2-ea31-4745-b12b-4ffe9e1d77d1.png" 
                      alt="JS Desenvolvimento Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Tecnologia</h4>
                  <p className="text-lg opacity-90">que transforma</p>
                  <p className="text-lg opacity-90">ideias em soluções</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-secondary">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-primary">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;