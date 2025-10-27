import { Mail, MapPin, Phone } from "lucide-react";
import logoImage from "@/assets/logo-monteiro.png";

export const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logoImage} alt="Monteiro Advocacia logo" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Defesa estratégica com ética e resultado desde 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#areas" className="hover:text-accent transition-colors">Áreas de Atuação</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/politica-privacidade" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Porto Alegre, RS<br />Atendimento nacional</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+5551998887766" className="hover:text-accent transition-colors">
                  +55 51 99888-7766
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:contato@monteiroadvocacia.com.br" className="hover:text-accent transition-colors">
                  contato@monteiroadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Monteiro Advocacia — Todos os direitos reservados. Desenvolvido por <a href="#" className="text-accent hover:underline">Webora</a>.</p>
        </div>
      </div>
    </footer>
  );
};
