import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft, Share2, ChevronDown } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blogData";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };
  
  // Helper function to process bold text
  const processBoldText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  // FAQ Accordion Component
  const FAQAccordion = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 transition-all hover:border-primary/50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-900 pr-4">{question}</span>
          <ChevronDown 
            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="p-5 pt-0 text-gray-700 leading-relaxed bg-gray-50">
            <div dangerouslySetInnerHTML={{ __html: processBoldText(answer) }} />
          </div>
        </div>
      </div>
    );
  };

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let tableRows: JSX.Element[] = [];
    let inTable = false;
    let inFAQSection = false;
    let faqItems: Array<{ question: string; answer: string }> = [];
    let currentFAQ: { question: string; answer: string } | null = null;

    lines.forEach((line, index) => {
      // Check if we're entering FAQ section
      if (line.includes('## FAQ') || line.includes('FAQs')) {
        inFAQSection = true;
        elements.push(
          <div key={index} className="mt-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-8"></div>
          </div>
        );
        return;
      }

      // Handle FAQ questions (starting with ###)
      if (inFAQSection && line.startsWith('### ')) {
        // Save previous FAQ if exists
        if (currentFAQ && currentFAQ.question && currentFAQ.answer) {
          faqItems.push(currentFAQ);
        }
        // Start new FAQ
        currentFAQ = { question: line.substring(4).trim(), answer: '' };
        return;
      }

      // Collect FAQ answer
      if (inFAQSection && currentFAQ && line.trim() !== '' && !line.startsWith('#')) {
        currentFAQ.answer += (currentFAQ.answer ? '\n' : '') + line;
        return;
      }

      // Check if FAQ section ended (next major heading)
      if (inFAQSection && line.startsWith('## ') && !line.includes('FAQ')) {
        // Save last FAQ
        if (currentFAQ && currentFAQ.question && currentFAQ.answer) {
          faqItems.push(currentFAQ);
        }
        // Render all FAQ items
        if (faqItems.length > 0) {
          elements.push(
            <div key={`faq-section-${elements.length}`} className="my-8">
              {faqItems.map((faq, idx) => (
                <FAQAccordion
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  index={idx}
                />
              ))}
            </div>
          );
          faqItems = [];
        }
        inFAQSection = false;
        currentFAQ = null;
      }

      // If we were in a table and this line is not a table row, close the table
      if (inTable && !line.includes('|')) {
        if (tableRows.length > 0) {
          elements.push(
            <table key={`table-${elements.length}`} className="w-full border-collapse border border-gray-300 my-6">
              <tbody>{tableRows}</tbody>
            </table>
          );
          tableRows = [];
        }
        inTable = false;
      }

      // Skip rendering FAQ content in normal flow
      if (inFAQSection) {
        return;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        const headerText = processBoldText(line.substring(2));
        elements.push(
          <h1 
            key={index} 
            className="text-3xl font-bold text-gray-900 mb-6 mt-8"
            dangerouslySetInnerHTML={{ __html: headerText }}
          />
        );
        return;
      }
      if (line.startsWith('## ')) {
        const headerText = processBoldText(line.substring(3));
        elements.push(
          <h2 
            key={index} 
            className="text-2xl font-bold text-gray-900 mb-4 mt-8"
            dangerouslySetInnerHTML={{ __html: headerText }}
          />
        );
        return;
      }
      if (line.startsWith('### ')) {
        const headerText = processBoldText(line.substring(4));
        elements.push(
          <h3 
            key={index} 
            className="text-xl font-bold text-gray-900 mb-3 mt-6"
            dangerouslySetInnerHTML={{ __html: headerText }}
          />
        );
        return;
      }
      
      // Handle images
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imageMatch) {
        const altText = imageMatch[1];
        const imageName = imageMatch[2];
        elements.push(
          <div key={index} className="my-8 text-center">
            <img
              src={`/images/blog/${imageName}`}
              alt={altText}
              className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              style={{ maxHeight: '500px' }}
            />
            {altText && (
              <p className="text-sm text-gray-600 mt-2 italic">{altText}</p>
            )}
          </div>
        );
        return;
      }
      
      // Handle lists
      if (line.startsWith('- ')) {
        const listText = processBoldText(line.substring(2));
        elements.push(
          <li 
            key={index} 
            className="mb-2 ml-4"
            dangerouslySetInnerHTML={{ __html: listText }}
          />
        );
        return;
      }
      
      // Handle tables (basic implementation)
      if (line.includes('|') && line.trim() !== '') {
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
        // Skip separator lines that contain only dashes
        const isDashSeparator = cells.every(cell => /^-+$/.test(cell));
        if (cells.length > 1 && !isDashSeparator) {
          inTable = true;
          tableRows.push(
            <tr key={index}>
              {cells.map((cell, cellIndex) => {
                const processedCell = processBoldText(cell).replace(/❌|✅/g, '');
                return (
                  <td 
                    key={cellIndex} 
                    className="border border-gray-300 px-4 py-2"
                    dangerouslySetInnerHTML={{ __html: processedCell }}
                  />
                );
              })}
            </tr>
          );
        }
        return;
      }
      
      // Handle empty lines
      if (line.trim() === '') {
        elements.push(<br key={index} />);
        return;
      }
      
      // Handle regular paragraphs
      if (line.trim() !== '' && !line.startsWith('#') && !line.startsWith('-') && !line.includes('|')) {
        const processedLine = processBoldText(line);
        elements.push(
          <p 
            key={index} 
            className="mb-4 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
        return;
      }
    });

    // Close any remaining FAQ section
    if (inFAQSection) {
      if (currentFAQ && currentFAQ.question && currentFAQ.answer) {
        faqItems.push(currentFAQ);
      }
      if (faqItems.length > 0) {
        elements.push(
          <div key={`faq-section-${elements.length}`} className="my-8">
            {faqItems.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
              />
            ))}
          </div>
        );
      }
    }

    // Close any remaining table
    if (inTable && tableRows.length > 0) {
      elements.push(
        <table key={`table-${elements.length}`} className="w-full border-collapse border border-gray-300 my-6">
          <tbody>{tableRows}</tbody>
        </table>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">
              {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
            </span>
          </nav>
        </div>
      </div>
      
      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.publishedAt), "MMMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <span>By {post.author}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Share Button */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Article Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4">
                {renderContent(post.content)}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#1e3a8a'}}>
              Need Professional Tax Advice?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our expert team is here to help you navigate complex tax situations and maximize your savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-white hover:opacity-90"
                style={{backgroundColor: '#1e3a8a'}}
              >
                Get Expert Consultation
              </Link>
              <Link
                to="/blog"
                className="border-2 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                style={{
                  borderColor: '#1e3a8a',
                  color: '#1e3a8a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e3a8a';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1e3a8a';
                }}
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPostPage;