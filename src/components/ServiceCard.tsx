
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "service-card-container bg-white p-8 rounded-xl shadow-sm border border-gray-100",
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="service-card-icon">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
