import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const whatsappNumber = "5551998887766";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-border/50">
        Fale conosco
      </span>
    </a>
  );
};
