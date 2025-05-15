
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={cn(
        "service-card-container bg-white p-8 rounded-xl shadow-sm border border-gray-50",
        "transition-all duration-700 ease-out hover:shadow-md"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="service-card-icon bg-blue-100 text-brand-blue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
