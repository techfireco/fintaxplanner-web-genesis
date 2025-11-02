import { Calendar, FileText, AlertCircle, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tax calendar data structure - Add new months to this array
// The first month in the array will be expanded by default
const taxCalendarMonths = [
  {
    id: "nov-2025",
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
        description: "For Oct'25",
        type: "income-tax"
      },
      {
        date: 10,
        category: "GST",
        title: "GSTR 7 (TDS) & GSTR 8 (TCS)",
        description: "",
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
        description: "",
        type: "gst"
      },
      {
        date: 13,
        category: "Income Tax",
        title: "TDS Return",
        description: "For Oct'25",
        type: "income-tax"
      },
      {
        date: 14,
        category: "TDS Certificate",
        title: "TDS Certificate",
        description: "For Q2 (Jul to Sep)",
        type: "tds"
      },
      {
        date: 14,
        category: "GST",
        title: "GSTR 6 for ISD",
        description: "",
        type: "gst"
      },
      {
        date: 20,
        category: "GST",
        title: "GSTR 3B (Monthly)",
        description: "For Oct'25",
        type: "gst"
      },
      {
        date: 20,
        category: "GST",
        title: "GSTR 5A",
        description: "For Oct'25",
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
        description: "If TP applicable",
        type: "income-tax"
      }
    ]
  }
  // Add new months here - they will appear as collapsed accordions
];

const TaxCalendarPage = () => {
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

  const getDaysInMonth = (month: string, year: string) => {
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
    return new Date(parseInt(year), monthIndex + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: string, year: string) => {
    return new Date(`${month} 1, ${year}`).getDay();
  };

  const renderCalendarGrid = (monthData: typeof taxCalendarMonths[0]) => {
    const daysInMonth = getDaysInMonth(monthData.month, monthData.year);
    const firstDay = getFirstDayOfMonth(monthData.month, monthData.year);
    const weeks = [];
    let days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="min-h-[120px] bg-muted/20"></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDueDates = monthData.dueDates.filter(d => d.date === day);
      
      days.push(
        <div
          key={day}
          className="min-h-[120px] border border-border p-2 bg-card hover:bg-accent/5 transition-colors"
        >
          <div className="font-semibold text-sm mb-2">{day}</div>
          <div className="space-y-1">
            {dayDueDates.map((dueDate, idx) => (
              <div
                key={idx}
                className={`text-[10px] p-1.5 rounded border ${getTypeColor(dueDate.type)}`}
              >
                <div className="font-semibold truncate">{dueDate.title}</div>
                <div className="text-[9px] opacity-75 truncate">{dueDate.description}</div>
              </div>
            ))}
          </div>
        </div>
      );

      // If we have 7 days, start a new week
      if (days.length === 7) {
        weeks.push(
          <div key={`week-${weeks.length}`} className="grid grid-cols-7">
            {days}
          </div>
        );
        days = [];
      }
    }

    // Add remaining days to complete the last week
    if (days.length > 0) {
      while (days.length < 7) {
        days.push(
          <div key={`empty-end-${days.length}`} className="min-h-[120px] bg-muted/20"></div>
        );
      }
      weeks.push(
        <div key={`week-${weeks.length}`} className="grid grid-cols-7">
          {days}
        </div>
      );
    }

    return weeks;
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
              Important Due Dates for Tax & GST Compliance
            </p>
          </div>

          {/* Legend */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
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

          {/* Monthly Calendars with Accordion */}
          <Accordion 
            type="single" 
            collapsible 
            defaultValue={taxCalendarMonths[0]?.id}
            className="space-y-4"
          >
            {taxCalendarMonths.map((monthData, monthIndex) => (
              <AccordionItem 
                key={monthData.id} 
                value={monthData.id}
                className="border-2 rounded-2xl overflow-hidden bg-card animate-fade-in"
                style={{ animationDelay: `${0.2 + monthIndex * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">
                        {monthData.month} {monthData.year}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {monthData.dueDates.length} compliance due dates
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  {/* Important Notes */}
                  {monthData.importantNotes.length > 0 && (
                    <div className="mb-6">
                      {monthData.importantNotes.map((note, index) => (
                        <Alert key={index} className="mb-4 border-amber-500/20 bg-amber-500/5">
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          <AlertDescription className="text-foreground">{note}</AlertDescription>
                        </Alert>
                      ))}
                    </div>
                  )}

                  {/* Calendar Header - Days of Week */}
                  <div className="grid grid-cols-7 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div
                        key={day}
                        className="text-center font-semibold text-sm py-2 bg-muted/50"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="border-2 border-border rounded-lg overflow-hidden">
                    {renderCalendarGrid(monthData)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Info Section */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="inline-block p-6 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border-2">
              <FileText className="w-8 h-8 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We update this calendar monthly with the latest compliance due dates
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
