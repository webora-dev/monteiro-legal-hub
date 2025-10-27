import { useState } from "react";
import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { AppointmentForm } from "@/components/AppointmentForm";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleAppointmentSuccess = () => {
    setAppointmentDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Hero onOpenAppointment={() => setAppointmentDialogOpen(true)} />
      <About />
      <PracticeAreas />
      <Cases />
      <Testimonials />
      <Services />
      <AppointmentForm />
      <FAQ />
      <Blog />
      <Footer />
      <WhatsAppFloat />

      <Dialog open={appointmentDialogOpen} onOpenChange={setAppointmentDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Agendar Consulta</DialogTitle>
          </DialogHeader>
          <AppointmentForm onSuccess={handleAppointmentSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
