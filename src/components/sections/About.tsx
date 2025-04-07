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

// Team members
const teamMembers = [
  {
    name: 'Shagun Nagpal',
    position: 'CEO & Co-Founder',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Passionate about transforming data education through practical learning experiences."
  },
  {
    name: 'Satvik Yadav',
    position: 'CFO & Co-Founder',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Committed to making data education accessible and industry-relevant for everyone."
  },
  {
    name: 'Poras',
    position: 'Senior Web Developer',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Building robust solutions that empower learners in their data journey."
  },
  {
    name: 'Navmi Kaur',
    position: 'Media and Marketing',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Creating engaging content that connects learners with opportunities."
  },
  {
    name: 'Subodh',
    position: 'UI/UX Designer',
    image: '/assets/images/ceo/CeoMessage.png',
    quote: "Designing intuitive experiences that make learning data more enjoyable."
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
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
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
          strokeWidth="0.5"
        />
        <polygon
          points="50,10 90,90 10,90"
          fill="none"
          className="text-cyan-400"
          stroke="currentColor"
          strokeWidth="0.5"
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
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="0.5"
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
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  </div>
);

function About() {
  useScrollTop();

  return (
    <div className="bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundPattern />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-center mb-6">
              <span className="text-cyan-100">DATASENSE: </span>
              <span className="text-bright-cyan">WHERE PRACTICE POWERS SUCCESS</span>
            </h1>
            <p className="text-lg text-cyan-100 opacity-90 leading-relaxed mb-8">
              A hands-on, practice-first learning platform that helps aspiring data professionals 
              master analytics, engineering, and AI/ML through interactive challenges, real-world 
              case studies, and job-focused mentorship.
            </p>
            <p className="text-lg text-cyan-300 opacity-90 italic">
              We don't just teach concepts—we help you live them.
            </p>
          </motion.div>
          <div className="flex gap-6 justify-center mt-8">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 
              rounded-lg text-white text-lg font-medium transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border border-cyan-500/30 
              hover:border-cyan-500/50 rounded-lg text-cyan-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
              Why We Started
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-cyan-100 opacity-90 mb-6">
                Our journey began when we noticed something broken in the online education space: 
                too much theory, not enough real-world relevance. Most platforms hand out certificates but 
                don't prepare learners for what the industry truly demands—practical experience and problem-solving skills.
              </p>
              <p className="text-lg text-cyan-100 opacity-90">
                With that vision, we built DataSense to stand apart as a platform where you learn by doing, 
                not just watching. Where every quiz, challenge, and mock interview pushes you closer to industry-readiness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-4">
                Our Mission
              </h2>
              <p className="text-cyan-100 opacity-90">
                Empower individuals to build real-world data skills through hands-on learning, 
                community engagement, and career-focused mentorship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-4">
                Our Vision
              </h2>
              <p className="text-cyan-100 opacity-90">
                To become the most trusted platform for practice-based data learning, 
                helping learners go from zero to job-ready—faster, smarter, and stronger.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <value.icon className="text-3xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-2">
                  {value.title}
                </h3>
                <p className="text-cyan-300 opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <service.icon className="text-3xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent mb-2">
                  {service.title}
                </h3>
                <p className="text-cyan-300 opacity-90">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialProof.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{item.value}</div>
                <div className="text-cyan-200">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DataSense Legacy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
              DataSense Legacy: Bridging Legacy and Modern Learning
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl 
                  border border-cyan-900/30 hover:border-cyan-500/30 
                  transition-all duration-300"
              >
                <p className="text-lg text-cyan-100 opacity-90 mb-6 leading-relaxed">
                  DataSense was founded on principles deeply rooted in the legacy of the Nagpal family, 
                  a lineage that traces back to the royal heritage of Multan, Punjab. Shagun Nagpal, 
                  the fifth-generation descendant of Maharaja Hukkam Chand Nagpal, carries forward a 
                  legacy of leadership, community, and unwavering commitment to service that has defined 
                  his family for over a century.
                </p>
                
                <p className="text-lg text-cyan-100 opacity-90 mb-6 leading-relaxed">
                  The Nagpal dynasty, led by Maharaja Hukkam Chand, was known not only for its rule 
                  but also for its dedication to unity and collective welfare. For over 80 years, 
                  Maharaja Hukkam Chand guided his region with wisdom and compassion, raising a family 
                  that valued resilience, collaboration, and assistance for all. This philosophy of 
                  support and bringing people together became the bedrock of the Nagpal family, 
                  instilling a tradition of service and community upliftment that has persevered 
                  through generations.
                </p>

                <p className="text-lg text-cyan-100 opacity-90 mb-6 leading-relaxed">
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-12">
            Our Team
          </h2>
          <p className="text-center text-lg text-cyan-300 opacity-90 mb-12 max-w-3xl mx-auto">
            Meet the people driving the mission behind DataSense
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform 
                      group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 
                  via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-300">{member.position}</p>
                    <p className="text-sm text-cyan-200 mt-2">{member.quote}</p>
                    <div className="flex gap-4 mt-4">
                      <BsLinkedin className="text-cyan-400 hover:text-cyan-300 cursor-pointer" />
                      <BsTwitter className="text-cyan-400 hover:text-cyan-300 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-8">
            Message from the Founder
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto p-6 bg-slate-800/30 backdrop-blur-sm 
              rounded-2xl border border-cyan-900/30 hover:border-cyan-500/30 transition-all duration-300"
          >
            <p className="text-lg text-cyan-300 opacity-90 italic">
              "Years ago, I dreamed of creating a space where anyone—regardless of background—could build a
              career in data. Today, DataSense is that opportunity. Join us, practice daily, grow continuously, and
              shape the future of data analytics."
            </p>
            <p className="text-right text-cyan-400 mt-4">— Shagun Nagpal, CEO & Co-Founder</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-6">
            Ready to Power Your Success?
          </h2>
          <p className="text-xl text-cyan-300 opacity-90 mb-8 max-w-2xl mx-auto">
            Join DataSense today and experience the difference that practice-based learning can make
            in your data career journey.
          </p>
          <button className="px-6 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30
            border border-cyan-500/30 hover:border-cyan-500/50
            rounded-lg text-cyan-300 text-lg font-medium
            transition-all duration-300 hover:-translate-y-0.5
            hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;