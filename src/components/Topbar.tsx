import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Topbar = () => {
  const whatsappNumber = "5551998887766";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta.")}`;

  return (
    <div className="hidden md:block bg-background/95 border-b border-border backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>Seg-Sex 9h–18h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+555199888776" className="hover:text-accent transition-colors">
                +55 51 99888-7766
              </a>
            </div>
          </div>
          <Button 
            asChild 
            variant="ghost" 
            size="sm"
            className="text-accent hover:text-accent"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
