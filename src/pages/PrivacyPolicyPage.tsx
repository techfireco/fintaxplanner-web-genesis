
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-darkblue">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Fintaxplanner ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>fintaxplanner.com</strong> and use our services. This policy complies with applicable data protection laws and regulations in India.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Business information (company name, GST number, PAN details)</li>
                <li>Financial information relevant to our services</li>
                <li>Communication preferences and service requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-brand-blue">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-brand-blue">2.3 Third-Party Analytics and Advertising</h3>
              <p className="text-gray-700 mb-4">We use third-party services for analytics and advertising:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> To understand website usage and improve our services</li>
                <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                <li><strong>Facebook Pixel:</strong> To track conversions and create targeted advertising campaigns</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accounting, tax, and financial services</li>
                <li>Communicate with you about our services</li>
                <li>Process your requests and inquiries</li>
                <li>Improve our website and services</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Analyze website usage and user behavior</li>
                <li>Create targeted advertising campaigns</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">4. Cookies and Tracking Technologies</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">4.1 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Social Media Cookies:</strong> Enable social media features and personalized ads</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-brand-blue">4.2 Google Ads and Facebook Pixel</h3>
              <p className="text-gray-700 mb-4">
                We use Google Ads and Facebook Pixel to track conversions, optimize ad performance, and create custom audiences for remarketing. These services may collect information about your browsing behavior across websites.
              </p>
              
              <p className="text-gray-700">
                You can opt out of personalized advertising by visiting:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Google Ads Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">adssettings.google.com</a></li>
                <li>Facebook Ad Preferences: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">facebook.com/ads/preferences</a></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">6. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">7. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Financial and tax-related documents may be retained for longer periods as required by Indian law.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">8. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at <a href="mailto:accounts@fintaxplanner.com" className="text-brand-blue hover:underline">accounts@fintaxplanner.com</a>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">9. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">10. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-brand-lightgray rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-darkblue">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Fintaxplanner</strong></p>
                <p>Email: <a href="mailto:accounts@fintaxplanner.com" className="text-brand-blue hover:underline">accounts@fintaxplanner.com</a></p>
                <p>Phone: <a href="tel:+918447973745" className="text-brand-blue hover:underline">+91 8447973745</a></p>
                <p>Website: <a href="https://fintaxplanner.com" className="text-brand-blue hover:underline">fintaxplanner.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
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

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
