const badges = [
  {
    title: "Excel",
    description: "Master spreadsheets, formulas, data cleaning, and automation. Learn advanced Excel tricks for business and analytics.",
    icon: "📊",
    extra: "Pivot tables, charts, macros, and more.",
  },
  {
    title: "Power BI",
    description: "Create interactive dashboards and reports. Connect, model, and visualize your data for impactful business decisions.",
    icon: "🖥️",
    extra: "DAX, Power Query, and real-time analytics.",
  },
  {
    title: "Tableau",
    description: "Visualize data with beautiful dashboards. Drag-and-drop analytics for quick insights and storytelling.",
    icon: "📈",
    extra: "Calculated fields, parameters, and live data connections.",
  },
  {
    title: "SQL",
    description: "Query, join, and analyze data from databases. Practice with 2000+ real-world SQL exercises and projects.",
    icon: "🗄️",
    extra: "Subqueries, window functions, and performance tuning.",
  },
  {
    title: "Python",
    description: "Automate tasks, analyze data, and build applications. Learn Python for data science, web, and scripting.",
    icon: "🐍",
    extra: "Pandas, NumPy, data visualization, and APIs.",
  },
  {
    title: "AI/ML",
    description: "Explore artificial intelligence and machine learning. Build models, make predictions, and solve real problems.",
    icon: "🤖",
    extra: "Regression, classification, clustering, and deep learning.",
  },
];

const BadgeScroller = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-dark-cyan via-caribbean to-bright-cyan py-16 relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative flex">
        {/* First set of badges */}
        <div className="flex animate-scroll-infinite gap-8 py-4 pr-8">
          {badges.map((badge, index) => (
            <div
              key={`badge-1-${index}`}
              className="shrink-0 w-80 relative group"
            >
              {/* Glowing border animation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-caribbean via-bright-cyan to-caribbean rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Main badge container */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-caribbean/30 
                            transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-caribbean/50">
                
                {/* Badge header with icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Animated icon container */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-caribbean to-bright-cyan rounded-lg flex items-center justify-center
                                    shadow-lg shadow-caribbean/30 group-hover:shadow-caribbean/60 transition-all duration-300">
                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                          {badge.icon}
                        </span>
                      </div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-lg border-2 border-caribbean/50 animate-ping opacity-75"></div>
                    </div>
                    
                    {/* Badge title */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-caribbean bg-clip-text text-transparent">
                      {badge.title}
                    </h3>
                  </div>
                  
                  {/* Achievement indicator */}
                  <div className="w-3 h-3 bg-bright-cyan rounded-full animate-pulse shadow-lg shadow-bright-cyan/50"></div>
                </div>
                
                {/* Badge description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  {badge.description}
                </p>
                <p className="text-cyan-200 text-xs mb-4">{badge.extra}</p>
                
                {/* Progress bar simulation */}
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-caribbean to-bright-cyan rounded-full
                                animate-pulse shadow-sm shadow-caribbean/30"
                       style={{ width: `${100 + (index * 5)}%` }}>
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-bright-cyan rounded-full animate-bounce"></div>
                <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-caribbean rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-bright-cyan rounded-full animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex animate-scroll-infinite gap-8 py-4 pr-8">
          {badges.map((badge, index) => (
            <div
              key={`badge-2-${index}`}
              className="shrink-0 w-80 relative group"
            >
              {/* Glowing border animation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-caribbean via-bright-cyan to-caribbean rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Main badge container */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-caribbean/30 
                            transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-caribbean/50">
                
                {/* Badge header with icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Animated icon container */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-caribbean to-bright-cyan rounded-lg flex items-center justify-center
                                    shadow-lg shadow-caribbean/30 group-hover:shadow-caribbean/60 transition-all duration-300">
                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                          {badge.icon}
                        </span>
                      </div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-lg border-2 border-caribbean/50 animate-ping opacity-75"></div>
                    </div>
                    
                    {/* Badge title */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-caribbean bg-clip-text text-transparent">
                      {badge.title}
                    </h3>
                  </div>
                  
                  {/* Achievement indicator */}
                  <div className="w-3 h-3 bg-bright-cyan rounded-full animate-pulse shadow-lg shadow-bright-cyan/50"></div>
                </div>
                
                {/* Badge description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  {badge.description}
                </p>
                <p className="text-cyan-200 text-xs mb-4">{badge.extra}</p>
                
                {/* Progress bar simulation */}
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-caribbean to-bright-cyan rounded-full
                                animate-pulse shadow-sm shadow-caribbean/30"
                       style={{ width: `${100 + (index * 5)}%` }}>
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-bright-cyan rounded-full animate-bounce"></div>
                <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-caribbean rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-bright-cyan rounded-full animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeScroller;