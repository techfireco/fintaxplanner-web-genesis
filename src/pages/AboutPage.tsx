
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
}

const AboutPage = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Abdul Razzaq",
      position: "Founder & Senior Chartered Accountant",
      description:
        "With over 15 years of experience in taxation and finance, Abdul has helped hundreds of businesses optimize their tax strategies and achieve financial clarity.",
    },
    {
      name: "Priya Sharma",
      position: "GST & Compliance Specialist",
      description:
        "Priya specializes in GST compliance and corporate regulatory matters, bringing 8 years of expertise in helping businesses navigate complex compliance requirements.",
    },
    {
      name: "Rahul Mehta",
      position: "Tax Planning Advisor",
      description:
        "Rahul is an expert in strategic tax planning for individuals and businesses, with particular focus on optimizing tax efficiency for startups and growing companies.",
    },
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description: "Fintaxplanner was established with a mission to provide accessible tax services to SMEs.",
    },
    {
      year: "2014",
      title: "Expansion",
      description: "Expanded service offerings to include GST services and digital tax filing solutions.",
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched our digital platform enabling clients to access services remotely across India.",
    },
    {
      year: "2022",
      title: "Nationwide Presence",
      description: "Achieved milestone of serving 1000+ clients across 20+ states in India.",
    },
    {
      year: "2024",
      title: "New Horizons",
      description: "Introduced specialized NRI taxation services and expanded corporate advisory team.",
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
              We are a team of dedicated financial experts committed to providing exceptional tax and financial services across India.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-brand-lightgray p-8 rounded-xl animate-fade-in-up hover-card">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-darkblue">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To empower businesses and individuals with strategic financial guidance and tax solutions that drive growth and ensure compliance.
              </p>
              <p className="text-gray-700">
                We believe in building long-term relationships with our clients through trust, expertise, and personalized service.
              </p>
            </div>

            <div className="bg-brand-lightgray p-8 rounded-xl animate-fade-in-up animation-delay-200 hover-card">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-darkblue">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To be the most trusted taxation and financial advisory firm in India, recognized for our integrity, innovation, and client-centric approach.
              </p>
              <p className="text-gray-700">
                We strive to make complex financial matters accessible and manageable for all our clients.
              </p>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-20 hover-card">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2 text-brand-darkblue">
                {teamMembers[0].name}
              </h2>
              <p className="text-brand-blue font-medium mb-4">{teamMembers[0].position}</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Abdul Razzaq founded Fintaxplanner with a vision to make professional financial services accessible to businesses of all sizes across India.
                </p>
                <p>
                  With extensive experience in taxation, accounting, and business advisory, Abdul has helped numerous organizations optimize their tax strategies and achieve financial clarity.
                </p>
                <p>
                  He is a Fellow Member of the Institute of Chartered Accountants of India and holds specializations in International Taxation and GST implementations.
                </p>
                <p>
                  Under his leadership, Fintaxplanner has grown from a small practice to a comprehensive financial services firm serving clients nationwide.
                </p>
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

          {/* Team Members */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-center text-brand-darkblue">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up hover-card"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
