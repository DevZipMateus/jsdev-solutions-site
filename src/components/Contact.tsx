import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5531972398971?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone",
      content: "(31) 7239-8971",
      link: "https://wa.me/5531972398971"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "alexcassimiro@jsdesenvolvimento.com.br",
      link: "mailto:alexcassimiro@jsdesenvolvimento.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      content: "Rua Mirabela 82, Dom Bosco, Betim - MG, 32670-622",
      link: "https://maps.google.com/?q=Rua+Mirabela+82+Dom+Bosco+Betim+MG"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horário",
      content: "Seg à Sex: 08:00 às 18:00",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Estamos prontos para ajudar você a transformar suas ideias em soluções tecnológicas inovadoras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Solicite seu Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-muted-foreground/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-muted-foreground/30 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-muted-foreground/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-muted-foreground/30 rounded-md focus:border-primary focus:outline-none bg-background"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
                        <option value="Sistema eGestor">Implantação Sistema eGestor</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Infraestrutura TI">Infraestrutura em TI</option>
                        <option value="Consultoria">Consultoria Digital</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Descreva seu projeto ou necessidade"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-muted-foreground/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-primary transition-smooth"
                  >
                    Enviar via WhatsApp
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-primary/20 transition-smooth border-0 bg-card/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Instagram className="w-5 h-5 text-primary mr-2" />
                    Siga-nos nas Redes Sociais
                  </h4>
                  <a
                    href="https://instagram.com/js_desenvolvimento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@js_desenvolvimento</span>
                  </a>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8234567890123!2d-44.1234567!3d-19.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzE1LjYiUyA0NMKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Rua+Mirabela+82+Dom+Bosco+Betim+MG"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização JS Desenvolvimento"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;