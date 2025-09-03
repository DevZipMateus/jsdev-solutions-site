import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EgestorERP from '@/components/EgestorERP';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Update document title and meta description
    document.title = "JS Desenvolvimento - Soluções Completas em TI | Desenvolvimento de Sites, eGestor, Google Ads";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'JS Desenvolvimento oferece soluções completas em TI: desenvolvimento de sites, sistema eGestor, Google Ads, Meta Ads e infraestrutura. Tecnologia que transforma ideias em soluções.');
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JS Desenvolvimento e Soluções em Informática",
      "image": "https://lovable-uploads/623485a2-ea31-4745-b12b-4ffe9e1d77d1.png",
      "telephone": "+5531972398971",
      "email": "alexcassimiro@jsdesenvolvimento.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Mirabela 82",
        "addressLocality": "Betim",
        "addressRegion": "MG",
        "postalCode": "32670-622",
        "addressCountry": "BR"
      },
      "url": window.location.origin,
      "description": "Soluções completas em TI com desenvolvimento de sites, sistema eGestor, Google Ads, Meta Ads e infraestrutura tecnológica.",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00",
      "sameAs": [
        "https://instagram.com/js_desenvolvimento"
      ],
      "serviceType": ["Desenvolvimento de Sites", "Sistema eGestor", "Google Ads", "Meta Ads", "Infraestrutura TI"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <EgestorERP />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
