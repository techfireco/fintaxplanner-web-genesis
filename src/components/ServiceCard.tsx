
import { useState, useRef } from 'react';
import { useIntersectionObserver } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const isMobile = useIsMobile();
  const iconRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Add a pulse animation to the button when clicked
    if (iconRef.current) {
      iconRef.current.classList.add('animate-pulse');
      setTimeout(() => {
        if (iconRef.current) iconRef.current.classList.remove('animate-pulse');
      }, 1000);
    }
    
    const message = `Hello, I would like to inquire about your ${title} service.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        `service-card group`, 
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "transition-all duration-700 ease-out"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={iconRef}
        className={cn(
          "service-card-icon transition-transform duration-500",
          isHovered && "transform rotate-12"
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-brand-blue">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div 
        className={cn(
          "absolute bottom-0 right-0 m-4 transition-all duration-500",
          isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'
        )}
      >
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transform transition duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp about this service"
        >
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
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
