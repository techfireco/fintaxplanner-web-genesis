
import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "flex items-start feature-card group transition-all duration-700 ease-out",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="feature-icon bg-brand-lightblue rounded-full p-3 mr-4 text-brand-blue transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors duration-300">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  const features = [
    {
      title: "9+ Years of Industry Experience",
      description: "Deep expertise in accounting, GST compliance, and TDS filings across various industries.",
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
      title: "Pan-India Clientele",
      description: "Serving clients across all states with dedicated support for businesses of all sizes.",
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
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </svg>
      ),
    },
    {
      title: "Personalized & Transparent Service",
      description: "Timely, personalized service with complete transparency in all our processes and pricing.",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Leading Accounting Tools Expertise",
      description: "Proficiency in Tally, Zoho, KEKA, and other modern accounting tools for efficient automation.",
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
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>} 
      id="about" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="text-brand-blue font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 mt-2">
              Trusted Financial <span className="text-brand-blue">Partners</span>
            </h2>
            <div className="w-20 h-1 bg-brand-blue rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine years of experience with modern technology to deliver exceptional accounting and tax services 
              tailored to your business needs across India.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-1000 ease-out",
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
