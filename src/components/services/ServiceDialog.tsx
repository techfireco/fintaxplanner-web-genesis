
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ServiceProps } from "@/data/servicesData";

interface ServiceDialogProps {
  service: ServiceProps | null;
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppClick: (title: string) => void;
}

const ServiceDialog = ({ service, isOpen, onClose, onWhatsAppClick }: ServiceDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg glass">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <span className="text-brand-blue">{service?.icon}</span>
            {service?.title}
          </DialogTitle>
          <DialogDescription>
            <div className="mt-6">
              <p className="text-gray-700">{service?.longDescription}</p>
              
              <div className="mt-6 bg-brand-lightgray p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">How can we help you?</h4>
                <p className="text-gray-600 mb-4">Contact us today to learn more about our {service?.title} services.</p>
                
                <Button 
                  onClick={() => {
                    if (service) {
                      onWhatsAppClick(service.title);
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
  );
};

export default ServiceDialog;
