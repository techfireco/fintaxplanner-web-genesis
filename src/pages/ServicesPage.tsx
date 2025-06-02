import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ServiceProps {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
}

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(
    null
  );
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const services: ServiceProps[] = [
    {
      title: "ITR Filing",
      description: "Accurate and timely filing of Income Tax Returns for individuals and businesses.",
      longDescription:
        "Our comprehensive Income Tax Return filing service ensures compliance with tax regulations while maximizing your eligible deductions and exemptions. We handle everything from collecting necessary documents to final submission, keeping you updated throughout the process.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "GST Registration & Filing",
      description:
        "Comprehensive GST services including registration, filing and compliance management.",
      longDescription:
        "From helping businesses register for GST to managing regular filing requirements, our GST services ensure you remain compliant with the latest regulations. We handle the entire GST lifecycle, including input tax credits, e-way bills, and reconciliations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Company Incorporation",
      description:
        "End-to-end support for registering your business as a private limited company or LLP.",
      longDescription:
        "We guide entrepreneurs through the entire company incorporation process, from name approval to obtaining certificates of incorporation. Our experts handle all regulatory requirements, documentation, and filings needed to establish your business entity properly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M20 9h3" />
          <path d="M20 14h3" />
          <path d="M1 9h3" />
          <path d="M1 14h3" />
        </svg>
      ),
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to optimize finances and ensure compliance.",
      longDescription:
        "Our tax planning services help individuals and businesses minimize tax liabilities through legal methods. We analyze your financial situation to identify potential savings opportunities and develop customized tax strategies aligned with your long-term goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Audit Services",
      description: "Statutory audits, internal audits, and tax audits for businesses and organizations.",
      longDescription:
        "Our comprehensive audit services include statutory audits, internal audits, and specialized tax audits. We follow rigorous processes to verify financial records, identify discrepancies, and provide recommendations to improve financial controls and reporting.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "TDS Filing",
      description: "Timely and accurate TDS return filing to ensure compliance with tax laws.",
      longDescription:
        "Our TDS filing service ensures accurate deduction and timely deposit of tax deducted at source. We handle preparation and filing of TDS returns (24Q, 26Q, etc.), generate Form 16/16A, and help resolve any TDS-related discrepancies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Bookkeeping",
      description: "Professional bookkeeping services to maintain accurate financial records.",
      longDescription:
        "Our bookkeeping services help businesses maintain organized and accurate financial records. We handle day-to-day accounting tasks, record transactions, reconcile accounts, and prepare financial statements to give you clear visibility into your business finances.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "MSME/Startup Registration",
      description: "Assistance with registering your business as an MSME or startup.",
      longDescription:
        "We provide end-to-end assistance for MSME and startup registration, helping you access various government schemes, subsidies, and benefits. Our experts guide you through the application process and documentation requirements to ensure successful registration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "ROC Compliances",
      description: "Managing compliance requirements with the Registrar of Companies.",
      longDescription:
        "Our ROC compliance services ensure your company meets all regulatory requirements. We handle annual filings, maintain statutory registers, prepare board and general meeting minutes, and manage document submissions to keep your business fully compliant.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          <line x1="9" y1="9" x2="10" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      ),
    },
    {
      title: "NRI Taxation",
      description: "Specialized tax services for Non-Resident Indians with international income.",
      longDescription:
        "Our NRI taxation services address the unique tax challenges faced by Non-Resident Indians. We handle foreign income reporting, DTAA benefits, FEMA compliance, tax planning for NRIs, and provide guidance on investments and repatriation of funds to India.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  const handleWhatsAppClick = (title: string) => {
    // Show a toast notification when WhatsApp button is clicked
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
            // Mobile: Accordion-style services layout
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                >
                  <div 
                    className="p-4 cursor-pointer flex items-center justify-between"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-lightblue rounded-lg flex items-center justify-center text-brand-blue">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${activeAccordion === index ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                  
                  {activeAccordion === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button 
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Chat on WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Grid layout with enhanced animations
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
                
                return (
                  <div
                    key={index}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className={cn(
                      "service-card group cursor-pointer",
                      isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      "transition-all duration-700 ease-out"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="service-card-icon group-hover:rotate-12 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-brand-blue border-brand-blue hover:bg-brand-lightblue transform transition duration-300 hover:scale-105 active:scale-95"
                      >
                        Learn More
                      </Button>
                      
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppClick(service.title);
                        }}
                        size="icon"
                        className="bg-green-500 hover:bg-green-600 text-white rounded-full transform transition duration-300 hover:scale-110 active:scale-95"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg glass">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <span className="text-brand-blue">{selectedService?.icon}</span>
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-6">
                <p className="text-gray-700">{selectedService?.longDescription}</p>
                
                <div className="mt-6 bg-brand-lightgray p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">How can we help you?</h4>
                  <p className="text-gray-600 mb-4">Contact us today to learn more about our {selectedService?.title} services.</p>
                  
                  <Button 
                    onClick={() => {
                      if (selectedService) {
                        handleWhatsAppClick(selectedService.title);
                      }
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2 transform transition duration-300 hover:scale-105 active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
