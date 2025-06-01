
import ServiceCard from './ServiceCard';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";

const Services = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "End-to-end bookkeeping, financial statements, MIS reporting, and reconciliations with automation support.",
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
      title: "GST Services",
      description: "GST registration, return filing, reconciliation with GSTR-2B, notice handling, and e-commerce compliance.",
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
      title: "TDS & Tax Compliance",
      description: "TDS computation, return filing, Form 16/16A generation, and advisory on withholding tax obligations.",
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
      title: "Payroll Processing",
      description: "Monthly payroll using KEKA, employee onboarding, salary structuring, and investment declaration support.",
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
      title: "Statutory Filings & Compliance",
      description: "MSME, ARFLA filings, audit support, and coordination with auditors and regulatory bodies.",
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
      title: "Tax Planning & Advisory",
      description: "Strategic tax planning to optimize finances, investment advisory, and ensure regulatory compliance.",
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
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>} 
      id="services" 
      className="py-20 bg-gray-50"
    >
      <div 
        className={cn(
          "container mx-auto px-4 transition-all duration-1000 ease-out",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="text-center mb-16">
          <span className="text-brand-blue font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 mt-2">
            Comprehensive Accounting & Tax Solutions
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored accounting and tax services designed to meet the needs of businesses across India. 
            From startups to growing enterprises, we ensure compliance, accuracy, and financial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="bg-brand-blue hover:bg-brand-darkblue text-white px-8 py-6 h-auto text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
