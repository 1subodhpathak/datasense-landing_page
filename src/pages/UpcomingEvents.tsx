import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaLaptop, FaVideo, FaCode, FaTrophy, FaCalendar, FaClock, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

// Event type definition
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  capacity: string;
  location: string;
  type: 'workshop' | 'webinar' | 'bootcamp' | 'hackathon';
  registrationLink: string;
}

const eventTypeMap = {
  'workshops': 'workshop',
  'webinars': 'webinar',
  'bootcamps': 'bootcamp',
  'hackathons': 'hackathon'
} as const;

const UpcomingEvents = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();

  // Set initial active tab based on URL parameter
  const initialTab = eventType ? eventTypeMap[eventType as keyof typeof eventTypeMap] || 'workshop' : 'workshop';
  const [activeTab, setActiveTab] = useState<'workshop' | 'webinar' | 'bootcamp' | 'hackathon'>(initialTab);

  // Update URL when tab changes
  const handleTabChange = (type: typeof activeTab) => {
    setActiveTab(type);
    const urlType = Object.entries(eventTypeMap).find(([_, value]) => value === type)?.[0];
    navigate(`/events/${urlType}`);
  };

  // Update active tab when URL changes
  useEffect(() => {
    if (eventType && eventTypeMap[eventType as keyof typeof eventTypeMap]) {
      setActiveTab(eventTypeMap[eventType as keyof typeof eventTypeMap]);
    }
  }, [eventType]);

  // Sample events data
  const events: Event[] = [
    // Workshop Events
    {
      id: 1,
      title: "Data Analysis with Python Workshop",
      description: "Hands-on workshop covering data manipulation, analysis, and visualization using Python and popular libraries.",
      date: "2024-04-15",
      time: "10:00 AM - 2:00 PM",
      capacity: "50 participants",
      location: "Online (Zoom)",
      type: "workshop",
      registrationLink: "/register/workshop-1"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description: "Interactive workshop on ML basics, featuring practical exercises with scikit-learn and TensorFlow.",
      date: "2024-04-22",
      time: "2:00 PM - 6:00 PM",
      capacity: "40 participants",
      location: "Online (Zoom)",
      type: "workshop",
      registrationLink: "/register/workshop-2"
    },
    {
      id: 3,
      title: "Data Visualization with Power BI",
      description: "Learn to create impactful dashboards and reports using Microsoft Power BI's advanced features.",
      date: "2024-04-29",
      time: "9:00 AM - 1:00 PM",
      capacity: "45 participants",
      location: "Online (Microsoft Teams)",
      type: "workshop",
      registrationLink: "/register/workshop-3"
    },
    // Webinar Events
    {
      id: 4,
      title: "SQL Mastery Series: Advanced Queries",
      description: "Deep dive into advanced SQL concepts, optimization techniques, and best practices for database management.",
      date: "2024-04-20",
      time: "3:00 PM - 5:00 PM",
      capacity: "100 participants",
      location: "Online (YouTube Live)",
      type: "webinar",
      registrationLink: "/register/webinar-1"
    },
    {
      id: 5,
      title: "Big Data Analytics Trends 2024",
      description: "Expert panel discussion on emerging trends in big data analytics and their industry applications.",
      date: "2024-04-25",
      time: "6:00 PM - 8:00 PM",
      capacity: "150 participants",
      location: "Online (YouTube Live)",
      type: "webinar",
      registrationLink: "/register/webinar-2"
    },
    {
      id: 6,
      title: "Cloud Computing Essentials",
      description: "Comprehensive overview of cloud platforms, services, and deployment strategies.",
      date: "2024-04-30",
      time: "4:00 PM - 6:00 PM",
      capacity: "120 participants",
      location: "Online (Zoom Webinar)",
      type: "webinar",
      registrationLink: "/register/webinar-3"
    },
    // Bootcamp Events
    {
      id: 7,
      title: "Full Stack Development Bootcamp",
      description: "Intensive 4-week bootcamp covering modern web development technologies and practices.",
      date: "2024-05-01",
      time: "9:00 AM - 6:00 PM",
      capacity: "30 participants",
      location: "Hybrid (Online & Office)",
      type: "bootcamp",
      registrationLink: "/register/bootcamp-1"
    },
    {
      id: 8,
      title: "Data Engineering Career Track",
      description: "8-week comprehensive program on data pipeline development, ETL processes, and data warehousing.",
      date: "2024-05-15",
      time: "10:00 AM - 5:00 PM",
      capacity: "25 participants",
      location: "Online (Daily Live Sessions)",
      type: "bootcamp",
      registrationLink: "/register/bootcamp-2"
    },
    {
      id: 9,
      title: "Cloud DevOps Bootcamp",
      description: "6-week intensive training on DevOps practices, tools, and cloud infrastructure management.",
      date: "2024-06-01",
      time: "9:00 AM - 4:00 PM",
      capacity: "35 participants",
      location: "Hybrid (Online & Lab Sessions)",
      type: "bootcamp",
      registrationLink: "/register/bootcamp-3"
    },
    // Hackathon Events
    {
      id: 10,
      title: "Data Science Innovation Challenge",
      description: "48-hour hackathon focused on solving real-world data science challenges with amazing prizes.",
      date: "2024-05-15",
      time: "Starts: 9:00 AM",
      capacity: "200 participants",
      location: "Virtual Event",
      type: "hackathon",
      registrationLink: "/register/hackathon-1"
    },
    {
      id: 11,
      title: "AI Solutions Hackathon",
      description: "36-hour competition to develop innovative AI solutions for healthcare and environmental challenges.",
      date: "2024-05-25",
      time: "Starts: 10:00 AM",
      capacity: "150 participants",
      location: "Virtual Event",
      type: "hackathon",
      registrationLink: "/register/hackathon-2"
    },
    {
      id: 12,
      title: "Smart Cities Hackathon",
      description: "72-hour hackathon to create data-driven solutions for urban development and smart city initiatives.",
      date: "2024-06-10",
      time: "Starts: 8:00 AM",
      capacity: "180 participants",
      location: "Hybrid (Online & Physical Venue)",
      type: "hackathon",
      registrationLink: "/register/hackathon-3"
    }
  ];

  // Icon mapping
  const iconMap = {
    workshop: FaLaptop,
    webinar: FaVideo,
    bootcamp: FaCode,
    hackathon: FaTrophy,
  };

  // Filter events based on active tab
  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
            Upcoming Events
          </span>
        </h1>
        <p className="text-xl text-center text-bubbles opacity-90 max-w-2xl mx-auto">
          Join our interactive learning events and accelerate your tech journey with hands-on experience and expert guidance.
        </p>
      </div>

      {/* Event Type Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(iconMap).map(([type, Icon]) => (
            <button
              key={type}
              onClick={() => handleTabChange(type as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === type
                  ? 'bg-caribbean text-white transform scale-105'
                  : 'bg-dark-cyan/50 text-light-cyan hover:bg-primary-cyan/20'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="capitalize">{type}s</span>
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-dark-cyan/30 backdrop-blur-sm rounded-xl p-6 border border-primary-cyan/20 hover:border-primary-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = iconMap[event.type];
                  return Icon ? <Icon className="w-6 h-6 text-primary-cyan" /> : null;
                })()}
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              </div>
              
              <p className="text-bubbles mb-4">{event.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-light-cyan">
                  <FaCalendar className="w-4 h-4 text-primary-cyan" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { dateStyle: 'long' })}</span>
                </div>
                <div className="flex items-center gap-2 text-light-cyan">
                  <FaClock className="w-4 h-4 text-primary-cyan" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-light-cyan">
                  <FaUsers className="w-4 h-4 text-primary-cyan" />
                  <span>{event.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-light-cyan">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary-cyan" />
                  <span>{event.location}</span>
                </div>
              </div>

              <a
                href={event.registrationLink}
                className="block w-full text-center bg-caribbean hover:bg-teal text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
