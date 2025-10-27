import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface AppointmentFormProps {
  onSuccess?: () => void;
}

export const AppointmentForm = ({ onSuccess }: AppointmentFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredContact: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar a Política de Privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Agendamento recebido!",
      description: "Obrigado! Recebemos seu pedido de agendamento. Em breve entraremos em contato pelo WhatsApp para confirmar data e hora.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredContact: "",
      message: "",
    });
    setAcceptedPrivacy(false);
    setIsSubmitting(false);
    
    if (onSuccess) onSuccess();
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Agende sua Consulta
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground">
              Preencha o formulário e entraremos em contato em até 24 horas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(51) 99999-9999"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Tipo de serviço *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  required
                >
                  <SelectTrigger id="serviceType" className="bg-background/50">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="civel">Direito Cível</SelectItem>
                    <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
                    <SelectItem value="familia">Direito de Família</SelectItem>
                    <SelectItem value="tributario">Direito Tributário</SelectItem>
                    <SelectItem value="lgpd">LGPD & Privacidade</SelectItem>
                    <SelectItem value="empresarial">Consultoria Empresarial</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredContact">Preferência de contato *</Label>
              <Select
                value={formData.preferredContact}
                onValueChange={(value) => setFormData({ ...formData, preferredContact: value })}
                required
              >
                <SelectTrigger id="preferredContact" className="bg-background/50">
                  <SelectValue placeholder="Como prefere ser contatado?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="email">E-mail</SelectItem>
                  <SelectItem value="phone">Telefone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva brevemente sua necessidade jurídica..."
                rows={5}
                className="bg-background/50 resize-none"
              />
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Checkbox
                id="privacy"
                checked={acceptedPrivacy}
                onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                required
              />
              <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                Autorizo o tratamento dos meus dados para contato e atendimento conforme a{" "}
                <a href="/politica-privacidade" className="text-accent hover:underline">
                  Política de Privacidade
                </a>
                . *
              </Label>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar solicitação"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
