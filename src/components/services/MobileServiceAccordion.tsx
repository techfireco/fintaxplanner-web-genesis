
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ServiceProps } from "@/data/servicesData";

interface MobileServiceAccordionProps {
  services: ServiceProps[];
  onWhatsAppClick: (title: string) => void;
}

const MobileServiceAccordion = ({ services, onWhatsAppClick }: MobileServiceAccordionProps) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
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
                onClick={() => onWhatsAppClick(service.title)}
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
  );
};

export default MobileServiceAccordion;
