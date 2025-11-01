import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const contactDetails = [
    {
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
          className="text-brand-blue"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      value: "accounts@fintaxplanner.com",
      action: "mailto:accounts@fintaxplanner.com",
    },
    {
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
          className="text-brand-blue"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Service Area",
      value: "Pan-India Coverage",
      action: null,
    },
    {
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
          className="text-brand-blue"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Experience",
      value: "9+ Years in Industry",
      action: null,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-darkblue">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to simplify your finances? Let's take the stress out of your accounting and tax work.
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightblue mb-4">
                    {detail.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{detail.title}</h3>
                  {detail.action ? (
                    <a href={detail.action} className="text-brand-blue hover:underline">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-gray-700">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="bg-brand-lightgray p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-brand-darkblue">Our Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>Accounting & Bookkeeping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>GST Services & Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>TDS & Tax Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>Payroll Processing with KEKA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>Statutory Filings & Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>Expertise in Tally, Zoho & More</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 p-8 rounded-2xl text-white text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Schedule a Free Consultation</h3>
              <p className="text-lg mb-6">Get immediate assistance for all your accounting and tax queries</p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 rounded-2xl"
                onClick={() => {
                  window.open(`https://wa.me/918447973745?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation about your accounting services.")}`, '_blank');
                }}
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
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Start WhatsApp Chat Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      
      <Footer />
    </>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener
  useState(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-2 bg-brand-blue text-white rounded-2xl shadow-lg hover:bg-brand-darkblue transition-colors"
          aria-label="Scroll to top"
        >
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
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ContactPage;
