
import { useState, useEffect } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    window.open(`https://wa.me/918447973745?text=${encodeURIComponent('Hello, I would like to inquire about your accounting and tax services.')}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <button 
      className={cn(
        "whatsapp-button z-50 rounded-2xl",
        isAnimating ? "animate-bounce" : "animate-pulse",
        isMobile 
          ? `${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} fixed bottom-6 right-6` 
          : "fixed bottom-6 right-6"
      )}
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-whatsapp"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
