
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TestimonialProps {
  name: string;
  position: string;
  company?: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const TestimonialsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials: TestimonialProps[] = [
    {
      name: "Rohan Sharma",
      position: "CEO",
      company: "TechStart Solutions",
      content: "Fintaxplanner has been instrumental in managing our company's taxes and compliance requirements. Their team is responsive and always available for consultation. They've helped us save significantly on our tax liabilities while ensuring full compliance.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.0",
    },
    {
      name: "Priya Mehta",
      position: "Business Owner",
      company: "Mehta Textiles",
      content: "I've been using Fintaxplanner's GST filing services for the past two years. The process is smooth and their team handles everything with utmost professionalism. They are thorough in their approach and ensure that all compliance requirements are met on time.",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.0",
    },
    {
      name: "Sagar Jain",
      position: "Freelance Consultant",
      content: "As an NRI with income in India, tax filing was always a challenge until I found Fintaxplanner. They simplified the process and ensured full compliance with both Indian and international tax regulations. Their expertise in NRI taxation is unparalleled.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.0",
    },
    {
      name: "Ananya Reddy",
      position: "Startup Founder",
      company: "GreenEats",
      content: "When we incorporated our company, Fintaxplanner guided us through every step of the process. Their knowledge about startup regulations and tax benefits was exceptional. They've become our trusted advisors for all financial matters.",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.0",
    },
    {
      name: "Vikram Singh",
      position: "Director",
      company: "Momentum Builders",
      content: "Our construction business has complex tax requirements. Fintaxplanner has expertly handled our tax planning and compliance needs for over three years. Their proactive approach to tax optimization has been invaluable to our business growth.",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.0",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-darkblue">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about our services and their experience working with us.
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Grid View
              </Button>
              <Button
                variant={viewMode === 'carousel' ? "default" : "outline"}
                onClick={() => setViewMode('carousel')}
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="15" x2="15" y1="3" y2="21" />
                  <line x1="9" x2="9" y1="3" y2="21" />
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="3" x2="21" y1="15" y2="15" />
                </svg>
                Carousel View
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  testimonial={testimonial} 
                  delay={index * 100} 
                />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div className="flex items-center justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevSlide}
                  className="absolute left-0 z-10 rounded-full bg-white shadow-md"
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
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>

                <div className="w-full max-w-3xl mx-10">
                  <TestimonialCard 
                    testimonial={testimonials[currentSlide]} 
                    delay={0} 
                    carousel
                  />
                </div>

                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextSlide}
                  className="absolute right-0 z-10 rounded-full bg-white shadow-md"
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
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentSlide ? 'bg-brand-blue' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-brand-lightblue rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-darkblue">
              Ready to Experience Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Join our growing list of satisfied clients and let us help you with your financial and taxation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-brand-blue hover:bg-brand-darkblue"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-lightblue"
                onClick={() => {
                  window.open(`https://wa.me/919999999999?text=${encodeURIComponent("Hello, I'd like to know more about your services.")}`, '_blank');
                }}
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
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface TestimonialCardProps {
  testimonial: TestimonialProps;
  delay: number;
  carousel?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay, carousel = false }) => {
  return (
    <div 
      className={`testimonial-card ${carousel ? 'p-8' : ''} animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <AspectRatio ratio={1/1}>
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name} 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">
            {testimonial.position}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700">{testimonial.content}</p>
      
      <div className="mt-4 text-sm text-right text-gray-500 italic">
        - {testimateTimeAgo()}
      </div>
    </div>
  );
};

// Helper function to generate random time ago text
const testimateTimeAgo = () => {
  const options = [
    "2 weeks ago",
    "1 month ago",
    "3 months ago",
    "6 months ago",
    "Last year",
  ];
  return options[Math.floor(Math.random() * options.length)];
};

export default TestimonialsPage;
