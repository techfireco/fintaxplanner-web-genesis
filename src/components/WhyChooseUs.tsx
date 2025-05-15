
import { useState, useEffect } from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(true); // Initialize as true for immediate visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`flex items-start transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="bg-brand-lightblue rounded-full p-3 mr-4 text-brand-blue">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team of CAs",
      description: "Our team consists of experienced Chartered Accountants with diverse expertise.",
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
      title: "Fast Turnaround",
      description: "Quick response and fast service delivery for all your taxation needs.",
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
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "PAN India Support",
      description: "Serving clients across all states and union territories in India.",
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
      title: "100% Digital Process",
      description: "Fully digital workflows for document submission, approval, and filing.",
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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Choose <span className="text-brand-blue">Fintaxplanner</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine expertise with modern technology to deliver exceptional financial services tailored to your needs.
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
          
          <div className="relative animate-fade-in">
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
