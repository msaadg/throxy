const CalendarSection = () => {
  const calendarData = [
    { date: 1, type: "normal", label: "" },
    { date: 2, type: "booked", label: "Booked Call" },
    { date: 3, type: "normal", label: "" },
    { date: 4, type: "booked", label: "Booked Call" },
    { date: 5, type: "normal", label: "" },
    { date: 6, type: "booked", label: "Booked Call" },
    { date: 7, type: "booked", label: "Booked Call" },
    { date: 8, type: "normal", label: "" },
    { date: 9, type: "normal", label: "" },
    { date: 10, type: "booked", label: "Booked Call" },
    { date: 11, type: "booked", label: "Booked Call" },
    { date: 12, type: "normal", label: "" },
    { date: 13, type: "booked", label: "Booked Call" },
    { date: 14, type: "booked", label: "Booked Call" },
    { date: 15, type: "normal", label: "" },
    { date: 16, type: "booked", label: "Booked Call" },
    { date: 17, type: "normal", label: "" },
    { date: 18, type: "normal", label: "" },
    { date: 19, type: "booked", label: "Booked Call" },
    { date: 20, type: "normal", label: "" },
    { date: 21, type: "normal", label: "" },
    { date: 22, type: "normal", label: "" },
    { date: 23, type: "normal", label: "" },
    { date: 24, type: "booked", label: "Booked Call" },
    { date: 25, type: "normal", label: "" },
    { date: 26, type: "booked", label: "Booked Call" },
    { date: 27, type: "booked", label: "Booked Call" },
    { date: 28, type: "booked", label: "Booked Call" },
    { date: 29, type: "normal", label: "" },
    { date: 30, type: "normal", label: "" },
    { date: 31, type: "normal", label: "" },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-primary/20 rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground">August 2025</h3>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-4 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-muted-foreground font-medium py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {calendarData.map((item, index) => (
              <div
                key={index}
                className={`
                  aspect-square p-3 rounded-lg border transition-all duration-200 relative group cursor-pointer
                  ${item.type === "booked" 
                    ? "bg-primary/20 border-primary/40 hover:bg-primary/30" 
                    : item.type === "opportunity"
                    ? "bg-accent/20 border-accent/40 hover:bg-accent/30"
                    : "bg-muted/20 border-border hover:bg-muted/40"
                  }
                `}
              >
                <span className="text-sm font-medium text-foreground">{item.date}</span>
                {item.label && (
                  <div className="absolute inset-x-1 bottom-1">
                    <div className={`
                      text-xs p-1 rounded text-center truncate
                      ${item.type === "booked" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                      }
                    `}>
                      {item.label}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;