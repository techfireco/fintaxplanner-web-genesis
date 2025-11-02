import { Calendar, FileText, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tax calendar data structure - easy to update monthly
const taxCalendarData = {
  month: "November",
  year: "2025",
  importantNotes: [
    "CBDT has extended the due date of filing ITR for AY 2025-26 from 31 Oct 2025 to 10 Dec 2025",
    "Specified date for furnishing audit report for AY 2024-25 (AY 2025-26) is extended from 31 Oct 2025 to 10 Nov 2025"
  ],
  dueDates: [
    {
      date: 7,
      category: "Income Tax",
      title: "TDS & TCS Payment",
      description: "For October 2025",
      type: "income-tax"
    },
    {
      date: 10,
      category: "GST",
      title: "GSTR 7 (TDS) & GSTR 8 (TCS)",
      description: "GST TDS and TCS returns",
      type: "gst"
    },
    {
      date: 10,
      category: "Income Tax",
      title: "Tax Audit u/s 44AB",
      description: "For AY 25-26 (if TP audit not applicable)",
      type: "income-tax"
    },
    {
      date: 11,
      category: "GST",
      title: "GSTR 1",
      description: "Turnover > INR 5 cr or opted for monthly filing",
      type: "gst"
    },
    {
      date: 13,
      category: "GST",
      title: "GSTR 1 IFF for QRMP",
      description: "Invoice Furnishing Facility",
      type: "gst"
    },
    {
      date: 13,
      category: "Income Tax",
      title: "TDS Return",
      description: "For October 2025",
      type: "income-tax"
    },
    {
      date: 14,
      category: "TDS Certificate",
      title: "TDS Certificate",
      description: "For Q2 (July to September)",
      type: "tds"
    },
    {
      date: 14,
      category: "GST",
      title: "GSTR 6 for ISD",
      description: "Input Service Distributor",
      type: "gst"
    },
    {
      date: 20,
      category: "GST",
      title: "GSTR 3B (Monthly)",
      description: "For October 2025",
      type: "gst"
    },
    {
      date: 20,
      category: "GST",
      title: "GSTR 5A",
      description: "For October 2025",
      type: "gst"
    },
    {
      date: 25,
      category: "GST",
      title: "PMT 06",
      description: "Monthly tax payment under QRMP scheme",
      type: "gst"
    },
    {
      date: 30,
      category: "Income Tax",
      title: "ITR for AY 2025-26",
      description: "If TP (Transfer Pricing) applicable",
      type: "income-tax"
    }
  ]
};

const TaxCalendarPage = () => {
  // Group due dates by date
  const groupedDates = taxCalendarData.dueDates.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {} as Record<number, typeof taxCalendarData.dueDates>);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "income-tax":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20";
      case "gst":
        return "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20";
      case "tds":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20";
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "income-tax":
        return "bg-blue-500 text-white";
      case "gst":
        return "bg-green-500 text-white";
      case "tds":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-brand-light/10">
      <Navbar />
      
      <main className="flex-grow section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-2xl mb-4">
              <Calendar className="w-8 h-8 text-brand-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Tax Compliance Calendar
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {taxCalendarData.month} {taxCalendarData.year} - Important Due Dates
            </p>
          </div>

          {/* Important Notes */}
          {taxCalendarData.importantNotes.length > 0 && (
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {taxCalendarData.importantNotes.map((note, index) => (
                <Alert key={index} className="mb-4 border-amber-500/20 bg-amber-500/5">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <AlertDescription className="text-foreground">{note}</AlertDescription>
                </Alert>
              ))}
            </div>
          )}

          {/* Legend */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500"></div>
              <span className="text-sm font-medium">Income Tax</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="text-sm font-medium">GST</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span className="text-sm font-medium">TDS Certificate</span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedDates)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([date, items], index) => (
                <Card
                  key={date}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  {/* Date Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-lg">
                        {date}
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          {taxCalendarData.month} {taxCalendarData.year}
                        </div>
                        <div className="text-sm font-medium">{items.length} Due Date{items.length > 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Items */}
                  <div className="space-y-4">
                    {items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`p-4 rounded-lg border-2 ${getTypeColor(item.type)}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={`${getTypeBadgeColor(item.type)} text-xs`}>
                            {item.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>

          {/* Download Section */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="inline-block p-6 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border-2">
              <FileText className="w-8 h-8 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Need a printable version?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact us to receive the complete tax calendar PDF
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TaxCalendarPage;
