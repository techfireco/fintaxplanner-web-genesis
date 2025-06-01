
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const timelineEvents = [
    {
      year: "2015",
      title: "Foundation & Early Years",
      description: "Abdul Razzaq began his career with a strong focus on core accounting principles, developing expertise across various industries.",
    },
    {
      year: "2018",
      title: "Specialization Development",
      description: "Developed deep expertise in GST compliance, TDS filings, and end-to-end bookkeeping services.",
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Introduced automation support using Tally, Zoho, KEKA, and other leading accounting tools.",
    },
    {
      year: "2022",
      title: "Business Expansion",
      description: "Expanded services to include comprehensive payroll processing and statutory compliance solutions.",
    },
    {
      year: "2024",
      title: "Pan-India Presence",
      description: "Established as a trusted financial services firm serving clients across India with specialized sector expertise.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-darkblue">
              About Fintaxplanner
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering reliable and efficient accounting solutions to businesses across India with over 9 years of experience.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-brand-lightgray p-8 rounded-xl animate-fade-in-up hover-card">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-darkblue">Our Mission</h2>
              <p className="text-gray-700">
                To simplify finance for businesses by offering dependable and personalized accounting, GST, and TDS services 
                that ensure compliance and support growth.
              </p>
            </div>

            <div className="bg-brand-lightgray p-8 rounded-xl animate-fade-in-up animation-delay-200 hover-card">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-darkblue">Our Vision</h2>
              <p className="text-gray-700">
                To be recognized as a leading accounting and tax advisory firm in India—valued for our integrity, 
                responsiveness, and ability to make complex financial matters simple and manageable.
              </p>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-20 hover-card">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2 text-brand-darkblue">
                Abdul Razzaq
              </h2>
              <p className="text-brand-blue font-medium mb-4">Founder & Finance Professional</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  At Fintaxplanner, we specialize in delivering reliable and efficient accounting solutions to businesses across India. 
                  Founded by Abdul Razzaq, a finance professional with over 9 years of experience, our firm is built on a foundation 
                  of precision, compliance, and client-centric service.
                </p>
                <p>
                  Abdul's career began with a strong focus on core accounting principles, and over the years, he has developed deep 
                  expertise in GST compliance, TDS filings, and end-to-end bookkeeping. His hands-on experience spans across industries, 
                  helping clients streamline their financial operations, automate accounting processes, and stay compliant with evolving tax regulations.
                </p>
                <p>
                  What started as a small practice has grown into a trusted financial services firm serving clients from various sectors 
                  across India. Our commitment to accuracy, transparency, and timely delivery has earned us the trust of businesses from 
                  startups to established enterprises.
                </p>
              </div>

              {/* Founder Quote */}
              <div className="mt-8 p-6 bg-brand-lightblue rounded-lg border-l-4 border-brand-blue">
                <p className="text-gray-700 italic mb-4">
                  "When I started Fintaxplanner, my goal was simple—to make professional accounting services accessible, affordable, 
                  and effective for businesses of all sizes. Today, I'm proud to lead a firm that supports clients across India with 
                  the same dedication and attention to detail that I began with. Whether you're a growing startup or an established 
                  enterprise, we're here to help you stay financially sound and compliant."
                </p>
                <p className="font-semibold text-brand-darkblue">— Abdul Razzaq, Founder</p>
              </div>
            </div>
          </div>

          {/* Our Journey */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-darkblue">
              Our Journey
            </h2>
            
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-brand-lightblue"></div>
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Circle */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-blue border-4 border-white z-10"></div>
                    
                    {/* Content */}
                    <div className="ml-10 md:ml-0 md:w-5/12 pb-8 md:pb-0">
                      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover-card">
                        <div className="inline-block px-4 py-1 rounded-full bg-brand-lightblue text-brand-blue font-semibold mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for alternate layout */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-brand-lightgray p-8 rounded-xl">
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-darkblue">Let's Work Together</h3>
            <p className="text-gray-600 mb-6">
              Looking for a dependable partner to manage your accounting, GST, or TDS needs?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918447973745" 
                className="bg-brand-blue text-white px-6 py-3 rounded-2xl hover:bg-brand-darkblue transition-colors"
              >
                📞 Call us today
              </a>
              <a 
                href="mailto:accounts@fintaxplanner.com" 
                className="bg-white text-brand-blue px-6 py-3 rounded-2xl border border-brand-blue hover:bg-brand-lightblue transition-colors"
              >
                📧 Drop us a message
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
