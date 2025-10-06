import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContactModal } from "@/components/ContactModal";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleSendMessageClick = () => {
    setIsContactModalOpen(true);
  };

  const handleGetStarted = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundEffect />

      <div className="relative z-10">
        <Navbar
          onContactClick={handleContactClick}
          onSendMessageClick={handleSendMessageClick}
        />

        <Hero onGetStarted={handleGetStarted} />

        <ServicesSection />

        <ProjectsSection />

        <Footer />

        <ContactModal
          open={isContactModalOpen}
          onOpenChange={setIsContactModalOpen}
        />
      </div>
    </div>
  );
};

export default Index;
