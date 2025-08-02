import React, { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Snowflake,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Building,
  Zap,
  Droplets,
  Trash2
} from 'lucide-react';

// Importando as imagens
import electricalInfrastructureImage from './assets/electrical_infrastructure.png';
import rappelInstallationImage from './assets/rappel_installation.png';
import cleaningBagImage from './assets/cleaning_bag.png';

import drainImage from './assets/x5MIqG8rR7ac.png';
import serviceImage from './assets/Hf8bihmGaDKB.jpg';
import heroImage from './assets/WTz0HU50nBEu.jpg';

function App() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Carlos Silva",
      text: "Atendimento diferenciado. Os profissionais são muito cordiais e realizaram o serviço com perfeição, sem contar o valor abaixo do mercado. Super recomendo!",
      rating: 5
    },
    {
      name: "Ana Santos",
      text: "Serviço top, alta qualidade. O atendimento foi ótimo, o serviço muito profissional e rápido. O pós venda também foi excelente.",
      rating: 5
    },
    {
      name: "João Oliveira",
      text: "Ficamos muito satisfeitos com a ClimaTech. Eles foram atenciosos, solícitos, caprichosos, além de muito educados na instalação dos A/C.",
      rating: 5
    },
    {
      name: "Maria Costa",
      text: "Trabalho feito com muita qualidade, honestidade e transparência. Em meio a tantos problemas no mercado, temos que elogiar quem faz seu serviço com maestria.",
      rating: 5
    }
  ]);

  const [newTestimonialName, setNewTestimonialName] = useState('');
  const [newTestimonialText, setNewTestimonialText] = useState('');

  const handleAddTestimonial = () => {
    if (newTestimonialName.trim() === '' || newTestimonialText.trim() === '') {
      alert('Por favor, preencha seu nome e seu depoimento.');
      return;
    }
    setTestimonials([
      ...testimonials,
      { name: newTestimonialName, text: newTestimonialText, rating: 5 } // Defaulting to 5 stars for new testimonials
    ]);
    setNewTestimonialName('');
    setNewTestimonialText('');
  };

  const handleDeleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const services = [
    {
      icon: <Snowflake className="w-8 h-8 text-blue-600" />,
      title: "Instalação de Ar Condicionado",
      description: "Instalação profissional de split, piso teto, cassete, multi split e sistema dutado com garantia total.",
      image: heroImage
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Instalação de Drenos em Prédios",
      description: "Serviços especializados de instalação de drenos para ar condicionado em edifícios e condomínios.",
      image: drainImage
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Instalação em Altura",
      description: "Serviços de rapel e balancim para instalação em locais de difícil acesso com certificação NR35.",
      image: rappelInstallationImage
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Manutenção e Limpeza",
      description: "Limpeza profunda, manutenção preventiva e corretiva para garantir o melhor desempenho.",
      image: cleaningBagImage
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "PMOC e ART",
      description: "Emissão de documentação técnica obrigatória para ambientes climatizados comerciais.",
      image: serviceImage
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Infraestrutura Elétrica",
      description: "Instalação completa de infraestrutura elétrica e tubulações para sistemas de climatização.",
      image: electricalInfrastructureImage
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-blue-900 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Atendimento: Chapecó e região</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>arcondicionadochapeco@gmail.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(49) 99938-5365</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300" onClick={() => window.open("https://www.instagram.com/arcondicionado.chapeco?igsh=N3BnZDFtODV6bzFr", "_blank")} />
              <MessageCircle className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Snowflake className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gradient">Ar Condicionado Chapecó</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>

              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => window.open("https://wa.me/qr/VE3WOKCI56BYH1", "_blank")}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale pelo WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Tudo sobre ar condicionado
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Instalação, limpeza, rapel, infraestrutura de ar condicionado, 
                instalação de drenos em prédios, troca de peças, emissão de PMOC e ART
              </p>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4" onClick={() => window.open("https://wa.me/qr/VE3WOKCI56BYH1", "_blank")}>
                Solicite um orçamento
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Técnico instalando ar condicionado" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Soluções em climatização residenciais e empresariais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos com equipe de técnicos profissionais para todos os tipos de serviços em ar condicionado. Solicite seu orçamento rápido e sem compromisso!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Profissionais Qualificados</h3>
                <p className="text-gray-600">Equipe técnica altamente treinada e certificada</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
                <p className="text-gray-600">Todos os serviços com garantia completa</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certificação NR35</h3>
                <p className="text-gray-600">Técnicos certificados para trabalho em altura</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Soluções</h2>
            <p className="text-xl text-gray-600">Oferecemos serviços completos em climatização</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section-padding bg-gray-50 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Veja o que os clientes dizem</h2>
            <p className="text-xl text-gray-600">Conheça os comentários reais dos nossos clientes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card relative">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    onClick={() => handleDeleteTestimonial(index)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Deixe seu Depoimento</h3>
            <div className="grid grid-cols-1 gap-4">
              <Input 
                placeholder="Seu Nome" 
                value={newTestimonialName} 
                onChange={(e) => setNewTestimonialName(e.target.value)} 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Textarea 
                placeholder="Seu Depoimento" 
                value={newTestimonialText} 
                onChange={(e) => setNewTestimonialText(e.target.value)} 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
              />
              <Button 
                onClick={handleAddTestimonial} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Enviar Depoimento
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-blue-900 text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Snowflake className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Ar Condicionado Chapecó</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Soluções completas em climatização para residências e empresas.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-300" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-300" onClick={() => window.open("https://www.instagram.com/arcondicionado.chapeco?igsh=N3BnZDFtODV6bzFr", "_blank")} />
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-300" />
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(49) 99938-5365</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>arcondicionadochapeco@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chapecó e região</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Instalação de Ar Condicionado</li>
                <li>Instalação de Drenos</li>
                <li>Serviços em Altura</li>
                <li>Manutenção e Limpeza</li>
                <li>PMOC e ART</li>
                <li>Infraestrutura</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 ClimaTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 p-0" onClick={() => window.open("https://wa.me/qr/VE3WOKCI56BYH1", "_blank")}>
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}

export default App;

