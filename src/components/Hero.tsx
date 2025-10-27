import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-law-office.jpg";

export const Hero = () => {
  const whatsappNumber = "5551998887766";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta com o Dr. Rafael Monteiro.")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.85), rgba(11, 11, 11, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Dr. Rafael Monteiro
            <span className="block text-accent mt-2">Monteiro Advocacia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Defesa estratégica com ética e resultado
          </p>

          {/* Practice Areas Bullet */}
          <div className="flex items-center justify-center gap-3 text-accent text-sm md:text-base font-medium tracking-wider">
            <span>Cível</span>
            <span className="text-muted">•</span>
            <span>Trabalhista</span>
            <span className="text-muted">•</span>
            <span>Família</span>
            <span className="text-muted">•</span>
            <span>Tributário</span>
            <span className="text-muted">•</span>
            <span>LGPD</span>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center pt-6">
            <Button 
              variant="hero" 
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar consulta
              </a>
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground pt-4">
            Atendimento nacional — online e presencial em Porto Alegre
          </p>
        </div>
      </div>
    </section>
  );
};
