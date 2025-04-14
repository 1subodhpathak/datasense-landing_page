import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaHandshake, 
  FaUserTie, 
  FaQuestionCircle,
  FaLaptopCode,
  FaGamepad,
  FaCalendarAlt,
  FaFileAlt
} from 'react-icons/fa';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { useScrollTop } from '../../hooks/useScrollTop';

// Core values based on the PDF content
const coreValues = [
  {
    icon: FaLaptopCode,
    title: 'Practice Over Theory',
    description: 'Learning by doing is our foundation'
  },
  {
    icon: FaHandshake,
    title: 'Community-Driven',
    description: 'Growth thrives in shared journeys'
  },
  {
    icon: FaUserTie,
    title: 'Career-Focused',
    description: 'We design every feature to help you land the job'
  },
  {
    icon: FaLightbulb,
    title: 'Always Evolving',
    description: 'Our content and challenges grow with industry needs'
  }
];

// Services offered by DataSense
const services = [
  {
    icon: FaQuestionCircle,
    title: 'Live Quizzes & Custom Quiz Creation',
    description: 'Test your knowledge in real-time and teach to reinforce learning'
  },
  {
    icon: FaUserTie,
    title: '2,000+ Practical Interview Questions',
    description: 'Covering SQL, Python, Power BI, AI, and ML'
  },
  {
    icon: FaLaptopCode,
    title: 'Mock Quizzes & Coding Challenges',
    description: 'Simulate real-world interview conditions'
  },
  {
    icon: FaGamepad,
    title: 'Gaming Arena',
    description: 'Compete with friends in SQL & Python battles, earn points and badges'
  },
  {
    icon: FaCalendarAlt,
    title: 'Free Workshops',
    description: 'Learn from experts about AI innovations, Python practices, and SQL optimization'
  },
  {
    icon: FaFileAlt,
    title: 'Resume & Career Services',
    description: 'AI resume checker, job description match analysis, and more'
  }
];

// Founding members
const foundingMembers = [
  {
    name: 'Shagun Nagpal',
    position: 'CEO & Co-Founder',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Passionate about transforming data education through practical learning experiences.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: 'Satvik Yadav',
    position: 'CFO & Co-Founder',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Committed to making data education accessible and industry-relevant for everyone.",
    linkedin: "#",
    twitter: "#"
  }
];

// Social proof data
const socialProof = [
  { label: 'Active Learners', value: '5,000+' },
  { label: 'Interview Questions', value: '2,000+' },
  { label: 'Expert-Led Workshops', value: '50+' },
  { label: 'Companies with Our Graduates', value: 'Top Data Firms' },
];

// Background pattern component
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <div className="absolute w-full h-full">
      {/* Grid Pattern */}
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              className="text-cyan-500"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Floating Geometric Shapes */}
      <svg
        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-float-slow"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="1"
        />
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          className="text-cyan-400"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Abstract Lines */}
      <svg
        className="absolute top-3/4 right-1/4 w-96 h-96 animate-float"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Hexagon Pattern */}
      <svg
        className="absolute bottom-1/4 left-1/3 w-72 h-72 animate-float-slow"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
          fill="none"
          className="text-cyan-400"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  </div>
);

// Section divider component
const SectionDivider = () => (
  <div className="w-full flex justify-center my-12">
    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></div>
  </div>
);

function About() {
  useScrollTop();

  return (
    <div className="bg-gradient-to-b from-cyan-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section - Full width video background style */}
      <section className="relative py-16 overflow-hidden">
        <BackgroundPattern />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="text-cyan-100">DATASENSE: </span>
              <span className="text-bright-cyan">WHERE PRACTICE POWERS SUCCESS</span>
            </h1>
            <p className="text-xl text-cyan-100 opacity-90 leading-relaxed mb-10 max-w-3xl">
              A hands-on, practice-first learning platform that helps aspiring data professionals 
              master analytics, engineering, and AI/ML through interactive challenges, real-world 
              case studies, and job-focused mentorship.
            </p>
            <p className="text-xl text-cyan-300 opacity-90 italic mb-10">
              We don't just teach concepts—we help you live them.
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 
                rounded-lg text-white text-lg font-medium transition-all shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 
                hover:border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-900/30 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Social Proof in a horizontal banner */}
      <section className="py-12 bg-slate-800/20 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
            {socialProof.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center py-6 px-8"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{item.value}</div>
                <div className="text-cyan-200 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-cyan-100 mb-6">
                Why We Started
              </h2>
              <p className="text-lg text-cyan-100 opacity-90 mb-6 leading-relaxed">
                Our journey began when we noticed something broken in the online education space: 
                too much theory, not enough real-world relevance. Most platforms hand out certificates but 
                don't prepare learners for what the industry truly demands—practical experience and problem-solving skills.
              </p>
              <p className="text-lg text-cyan-100 opacity-90 leading-relaxed">
                With that vision, we built DataSense to stand apart as a platform where you learn by doing, 
                not just watching. Where every quiz, challenge, and mock interview pushes you closer to industry-readiness.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 bg-slate-800/30 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 bg-cyan-900/20 flex items-center justify-center relative overflow-hidden">
                <motion.svg 
                  className="w-3/4 h-3/4 text-cyan-500/30"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible"
                >
                  {/* Path for the journey line */}
                  <motion.path
                    d="M10,80 Q25,80 30,60 T50,40 T70,30 T90,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ 
                      pathLength: 1,
                      pathOffset: [1, 0],
                      transition: {
                        pathLength: { duration: 2, ease: "easeInOut" },
                        pathOffset: { duration: 2, ease: "easeInOut" }
                      }
                    }}
                  />

                  {/* Animated dot following the path */}
                  <circle r="3" fill="currentColor">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M10,80 Q25,80 30,60 T50,40 T70,30 T90,20"
                    />
                  </circle>

                  {/* Stage points with labels */}
                  {[
                    { x: 10, y: 80, label: "Start" },
                    { x: 30, y: 60, label: "Learn" },
                    { x: 50, y: 40, label: "Practice" },
                    { x: 70, y: 30, label: "Master" },
                    { x: 90, y: 20, label: "Succeed" }
                  ].map((point, index) => (
                    <motion.g 
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.5,
                          duration: 0.5 
                        }
                      }}
                    >
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="currentColor"
                        whileHover={{ scale: 1.5 }}
                        className="cursor-pointer"
                      />
                      <motion.text
                        x={point.x}
                        y={point.y + 8}
                        fontSize="4"
                        fill="currentColor"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1],
                          transition: { 
                            delay: index * 0.5,
                            duration: 0.5 
                          }
                        }}
                      >
                        {point.label}
                      </motion.text>
                    </motion.g>
                  ))}

                  {/* Highlight effect */}
                  <circle r="6" fill="none" stroke="currentColor" strokeWidth="1">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="M10,80 Q25,80 30,60 T50,40 T70,30 T90,20"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.3;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-800/10 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-100 mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-cyan-500/30 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300
                  hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.1)]"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-4">
                  Our Mission
                </h2>
                <p className="text-cyan-100 opacity-90 text-lg">
                  Empower individuals to build real-world data skills through hands-on learning, 
                  community engagement, and career-focused mentorship.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300
                  hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.1)]"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-4">
                  Our Vision
                </h2>
                <p className="text-cyan-100 opacity-90 text-lg">
                  To become the most trusted platform for practice-based data learning, 
                  helping learners go from zero to job-ready—faster, smarter, and stronger.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Centered, cleaner grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-cyan-300 opacity-90 max-w-2xl mx-auto">
              These principles guide everything we do at DataSense
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300
                  hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.1)]
                  flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                  <value.icon className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-3">
                  {value.title}
                </h3>
                <p className="text-cyan-300 opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Cleaner card grid with icons */}
      <section className="py-16 bg-slate-800/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-100 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-cyan-300 opacity-90 max-w-2xl mx-auto">
              Comprehensive tools and resources to accelerate your data career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300
                  hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.1)]"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                  <service.icon className="text-xl text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-3">
                  {service.title}
                </h3>
                <p className="text-cyan-300 opacity-90">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-100 mb-4">
              Founding Members
            </h2>
            <p className="text-lg text-cyan-300 opacity-90 max-w-2xl mx-auto">
              Meet the visionaries behind DataSense
            </p>
          </div>
          
          <div className="space-y-16 max-w-4xl mx-auto">
            {/* Shagun's Profile - Image Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
            >
              <div className="lg:w-1/2">
                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden group">
                  <img 
                    src={foundingMembers[0].image}
                    alt={foundingMembers[0].name}
                    className="w-full h-full object-cover transform 
                      group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">{foundingMembers[0].name}</h3>
                <p className="text-xl text-cyan-400 mb-6">{foundingMembers[0].position}</p>
                <p className="text-cyan-200 text-xl leading-relaxed mb-8">{foundingMembers[0].quote}</p>
                <div className="flex gap-6 justify-center lg:justify-start">
                  <a href={foundingMembers[0].linkedin} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <BsLinkedin size={28} />
                  </a>
                  <a href={foundingMembers[0].twitter} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <BsTwitter size={28} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Satvik's Profile - Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
            >
              <div className="lg:w-1/2">
                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden group">
                  <img 
                    src={foundingMembers[1].image}
                    alt={foundingMembers[1].name}
                    className="w-full h-full object-cover transform 
                      group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                <h3 className="text-3xl font-bold text-white mb-3">{foundingMembers[1].name}</h3>
                <p className="text-xl text-cyan-400 mb-6">{foundingMembers[1].position}</p>
                <p className="text-cyan-200 text-xl leading-relaxed mb-8">{foundingMembers[1].quote}</p>
                <div className="flex gap-6 justify-center lg:justify-end">
                  <a href={foundingMembers[1].linkedin} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <BsLinkedin size={28} />
                  </a>
                  <a href={foundingMembers[1].twitter} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <BsTwitter size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DataSense Legacy - Clean centered layout */}
      <section className="py-16 bg-slate-800/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-100 mb-4">
              DataSense Legacy
            </h2>
            <p className="text-lg text-cyan-300 opacity-90 max-w-2xl mx-auto">
              Bridging Legacy and Modern Learning
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto p-10 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
              border border-cyan-900/30 hover:border-cyan-500/30 
              transition-all duration-300 shadow-lg"
          >
            <div className="space-y-6">
              <p className="text-lg text-cyan-100 opacity-90 leading-relaxed">
                DataSense was founded on principles deeply rooted in the legacy of the Nagpal family, 
                a lineage that traces back to the royal heritage of Multan, Punjab. Shagun Nagpal, 
                the fifth-generation descendant of Maharaja Hukkam Chand Nagpal, carries forward a 
                legacy of leadership, community, and unwavering commitment to service that has defined 
                his family for over a century.
              </p>
              
              <p className="text-lg text-cyan-100 opacity-90 leading-relaxed">
                The Nagpal dynasty, led by Maharaja Hukkam Chand, was known not only for its rule 
                but also for its dedication to unity and collective welfare. For over 80 years, 
                Maharaja Hukkam Chand guided his region with wisdom and compassion, raising a family 
                that valued resilience, collaboration, and assistance for all. This philosophy of 
                support and bringing people together became the bedrock of the Nagpal family, 
                instilling a tradition of service and community upliftment that has persevered 
                through generations.
              </p>

              <p className="text-lg text-cyan-100 opacity-90 leading-relaxed">
                Shagun and Satvik founded DataSense with a similar vision: to create an inclusive 
                platform that empowers individuals in data analytics. Just as his great-grandfather 
                championed the welfare of the people, Shagun believes in providing accessible, 
                high-quality learning resources to help people succeed in the modern world of data 
                analytics, Artificial Intelligence and Machine Learning. DataSense is not just a 
                company but a community—a testament to a heritage where knowledge-sharing, 
                collaboration, and empowerment are central.
              </p>

              <p className="text-lg text-cyan-100 opacity-90 leading-relaxed">
                Today, DataSense combines cutting-edge technology with a legacy of service, aiming 
                to educate and support over 40,000 learners globally. With free resources, hands-on 
                workshops, and practical learning tools, Shagun ensures that DataSense embodies the 
                values that have shaped his family for generations. Through DataSense, Shagun Nagpal 
                continues his family's legacy, empowering individuals from diverse backgrounds to 
                excel in AI & Analytics and build their own legacies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Message - Quote-focused testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto p-12 bg-slate-800/40 backdrop-blur-sm rounded-2xl 
            border border-cyan-900/30 shadow-lg relative">
            <div className="text-cyan-500 opacity-20 text-9xl font-serif absolute top-4 left-8">"</div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold text-cyan-100 mb-8 text-center">
                Message from the Founder
              </h2>
              <p className="text-xl text-cyan-300 opacity-90 italic text-center max-w-3xl mx-auto leading-relaxed">
                "Years ago, I dreamed of creating a space where anyone—regardless of background—could build a
                career in data. Today, DataSense is that opportunity. Join us, practice daily, grow continuously, and
                shape the future of data analytics."
              </p>
              <div className="flex items-center justify-center mt-8">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/assets/images/ceo/CeoMessage.png" 
                    alt="Shagun Nagpal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">Shagun Nagpal</p>
                  <p className="text-cyan-400">CEO & Co-Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Section - Modern, standout Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold text-cyan-100 mb-6">
                  Ready to Power Your Success?
                </h2>
                <p className="text-xl text-cyan-300 opacity-90 mb-10 max-w-2xl mx-auto">
                  Join DataSense today and experience the difference that practice-based learning can make
                  in your data career journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 
                    rounded-lg text-white text-lg font-medium transition-all
                    shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                    Get Started Now
                  </button>
                  <button className="px-10 py-4 bg-transparent 
                    border border-cyan-500/30 hover:border-cyan-500/50
                    rounded-lg text-cyan-300 text-lg font-medium 
                    transition-all hover:-translate-y-1">
                    Schedule a Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;