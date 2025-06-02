
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";
import { services, ServiceProps } from "@/data/servicesData";
import MobileServiceAccordion from "@/components/services/MobileServiceAccordion";
import DesktopServiceCard from "@/components/services/DesktopServiceCard";
import ServiceDialog from "@/components/services/ServiceDialog";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleWhatsAppClick = (title: string) => {
    toast({
      title: "Opening WhatsApp",
      description: `Connecting you about ${title} services`,
      duration: 3000,
    });
    
    const message = `Hello, I would like to inquire about your ${title} service.`;
    window.open(`https://wa.me/918447973745?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-brand-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-darkblue">
                Our Services
              </h1>
              <div className="w-20 h-1 bg-brand-blue rounded-full mb-4"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial and taxation services to help your business thrive in today's complex regulatory environment.
              </p>
            </div>
          </div>

          {isMobile ? (
            <MobileServiceAccordion 
              services={services} 
              onWhatsAppClick={handleWhatsAppClick} 
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <DesktopServiceCard
                  key={index}
                  service={service}
                  index={index}
                  onServiceClick={setSelectedService}
                  onWhatsAppClick={handleWhatsAppClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ServiceDialog
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onWhatsAppClick={handleWhatsAppClick}
      />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
