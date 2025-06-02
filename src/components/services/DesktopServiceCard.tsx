
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { ServiceProps } from "@/data/servicesData";

interface DesktopServiceCardProps {
  service: ServiceProps;
  index: number;
  onServiceClick: (service: ServiceProps) => void;
  onWhatsAppClick: (title: string) => void;
}

const DesktopServiceCard = ({ service, index, onServiceClick, onWhatsAppClick }: DesktopServiceCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "service-card group cursor-pointer",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "transition-all duration-700 ease-out"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => onServiceClick(service)}
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
            onWhatsAppClick(service.title);
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
};

export default DesktopServiceCard;
