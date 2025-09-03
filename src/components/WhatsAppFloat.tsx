import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços da JS Desenvolvimento.";
    const whatsappUrl = `https://wa.me/5531972398971?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float">
      {/* Expanded Card */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 bg-white shadow-elegant rounded-lg p-4 mb-2 border">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">JS Desenvolvimento</h4>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3 mb-3">
            <p className="text-sm text-foreground mb-2">👋 Olá! Como podemos ajudar você?</p>
            <p className="text-xs text-muted-foreground">
              Responderemos em breve. Horário de atendimento: Seg à Sex, 08:00 às 18:00
            </p>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-smooth flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Iniciar Conversa</span>
          </button>
        </div>
      )}

      {/* Float Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;