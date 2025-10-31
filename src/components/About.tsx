import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users } from "lucide-react";
import lawyerPhoto from "@/assets/rafael-monteiro.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-card/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-accent/20 shadow-2xl">
              <img 
                src={lawyerPhoto} 
                alt="Dr. Rafael Monteiro — advogado com 14 anos de experiência em Direito Cível, Trabalhista, Família, Tributário e LGPD"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">14+</div>
              <div className="text-sm font-medium">Anos de experiência</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Sobre o Advogado
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Rafael Monteiro é advogado com 14 anos de experiência em contencioso e consultoria. 
              Pós-graduado em Direito Empresarial e consultor em compliance. Representa clientes em 
              todo o Brasil, com foco em soluções estratégicas e eficientes.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Pós-graduação em Direito Empresarial</h3>
                  <p className="text-sm text-muted-foreground">Especialização em consultoria e compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Membro da OAB/RS</h3>
                  <p className="text-sm text-muted-foreground">Registro ativo e em dia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Atendimento Nacional</h3>
                  <p className="text-sm text-muted-foreground">Online e presencial em Porto Alegre</p>
                </div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="mt-4">
                  Ver currículo completo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Currículo Completo</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-3">Formação Acadêmica</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bacharel em Direito - UFRGS (2006)</li>
                      <li>• Pós-graduação em Direito Empresarial - FGV (2009)</li>
                      <li>• Especialização em Compliance e LGPD - Insper (2021)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-3">Certificações</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• DPO Certificado - Data Protection Officer</li>
                      <li>• Mediação e Arbitragem - CONIMA</li>
                      <li>• Direito Tributário Avançado - IBET</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-3">Publicações</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• "LGPD na Prática Empresarial" - Revista Jurídica (2022)</li>
                      <li>• "Estratégias em Litígios Trabalhistas" - Editora RT (2020)</li>
                      <li>• Colunista do Portal Jurídico Nacional</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
