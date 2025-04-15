import { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaUserGraduate, FaChevronDown, FaChevronUp, FaQuoteLeft } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlineBulb, AiOutlineProject } from "react-icons/ai";
import { BsCheckCircle, BsAward, BsBook, BsStarFill } from "react-icons/bs";
import { MdOutlineComputer, MdWorkspaces } from "react-icons/md";
import { useScrollTop } from "../../hooks/useScrollTop";

const syllabusData = [
  {
    title: "Python Basics",
    duration: "2.5 weeks",
    description: "Master Python fundamentals and core programming concepts",
    lessons: [
      { name: "Getting Started with Python", duration: "1 hr", hasProject: false },
      { name: "Variables and Data Types", duration: "1.5 hr", hasProject: true },
      { name: "Control Flow and Loops", duration: "2 hr", hasProject: true },
      { name: "Functions and Modules", duration: "2 hr", hasProject: false },
      { name: "Object-Oriented Programming", duration: "2.5 hr", hasProject: true }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    duration: "3 weeks",
    description: "Learn essential data structures and algorithmic thinking",
    lessons: [
      { name: "Lists and Tuples", duration: "1.5 hr", hasProject: false },
      { name: "Dictionaries and Sets", duration: "2 hr", hasProject: true },
      { name: "Array Operations", duration: "2 hr", hasProject: true },
      { name: "Searching and Sorting", duration: "2.5 hr", hasProject: true },
      { name: "Advanced Data Structures", duration: "3 hr", hasProject: true }
    ]
  },
  {
    title: "Data Analysis with Python",
    duration: "2.5 weeks",
    description: "Apply Python to real-world data analysis tasks",
    lessons: [
      { name: "NumPy Fundamentals", duration: "2 hr", hasProject: false },
      { name: "Pandas for Data Analysis", duration: "2.5 hr", hasProject: true },
      { name: "Data Visualization", duration: "2 hr", hasProject: true },
      { name: "Statistical Analysis", duration: "2 hr", hasProject: false },
      { name: "Real-world Projects", duration: "3 hr", hasProject: true }
    ]
  }
];

const features = [
  {
    icon: <MdOutlineComputer />,
    title: "Interactive Python Shell",
    description: "Write and test Python code in real-time with instant feedback"
  },
  {
    icon: <AiOutlineProject />,
    title: "Hands-on Projects",
    description: "Build real applications and solve data challenges"
  },
  {
    icon: <BsAward />,
    title: "Python Certification",
    description: "Earn an industry-recognized Python programming certificate"
  },
  {
    icon: <MdWorkspaces />,
    title: "Code Playground",
    description: "Experiment with code in a safe, guided environment"
  }
];

const testimonials = [
  {
    name: "Sneha Verma",
    role: "Data Analyst at Amazon",
    quote: "This Python course gave me the foundation I needed to transition into data analytics. The projects are incredibly practical.",
    rating: 5
  },
  {
    name: "Rajesh Singh",
    role: "Full Stack Developer",
    quote: "The course structure is perfect for beginners. I learned Python from scratch and now use it daily in my development work.",
    rating: 5
  },
  {
    name: "Anita Desai",
    role: "Machine Learning Engineer",
    quote: "Excellent foundation for anyone interested in AI/ML. The hands-on approach really helps cement the concepts.",
    rating: 5
  }
];

const PythonCourse = () => {
  useScrollTop();
  const [activeTab, setActiveTab] = useState("syllabus");
  const [expandedModules, setExpandedModules] = useState([0]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <FaPython className="text-6xl text-cyan-400 mr-4" />
              <h1 className="text-5xl font-bold text-cyan-100">Learn Python</h1>
            </div>
            
            <p className="text-xl text-cyan-300 text-center mb-4">
              Master modern Python programming and unlock your potential in tech
            </p>

            <p className="text-cyan-400/80 text-center mb-8">
              Join over 15 million developers who use Python for data science, web development, and automation
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <AiOutlineClockCircle />, text: "8 Weeks Course" },
                { icon: <FaUserGraduate />, text: "Beginner Friendly" },
                { icon: <BsCheckCircle />, text: "Certificate Included" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-cyan-300">
                  <span className="text-2xl">{stat.icon}</span>
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto block px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 
                border border-cyan-500/30 hover:border-cyan-500/50
                rounded-lg text-cyan-300 text-lg font-semibold transition-all duration-300"
            >
              Start Learning Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Tabs */}
          <div className="flex justify-center mb-10 border-b border-cyan-800/30">
            {["about", "syllabus", "faqs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg font-medium capitalize transition-all
                  ${activeTab === tab 
                    ? "text-cyan-300 border-b-2 border-cyan-400" 
                    : "text-cyan-400/60 hover:text-cyan-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "about" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-cyan-300"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-4">About This Course</h3>
                  <p className="mb-4">
                    Python is one of the most popular programming languages, known for its 
                    simplicity and versatility. Whether you're interested in data science, 
                    web development, or automation, Python is an essential skill.
                  </p>
                  <p>
                    This comprehensive course takes you from Python basics to advanced concepts 
                    through hands-on, interactive lessons. You'll learn by writing real Python 
                    code and building practical projects.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Core Python programming concepts and syntax</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Object-oriented programming principles</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Data structures and algorithms in Python</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Python for data analysis and visualization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-4">Prerequisites</h3>
                  <p>
                    No prior Python or programming experience is required. This course starts from the very 
                    basics and gradually builds to more advanced concepts.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "syllabus" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {syllabusData.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl 
                      border border-cyan-900/20 overflow-hidden"
                  >
                    <div 
                      className="p-6 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleModule(index)}
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-100">
                          {module.title}
                        </h3>
                        <p className="text-cyan-300/80 mt-1">{module.description}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-cyan-300 text-sm mr-4">
                          {module.duration}
                        </span>
                        {expandedModules.includes(index) ? (
                          <FaChevronUp className="text-cyan-400" />
                        ) : (
                          <FaChevronDown className="text-cyan-400" />
                        )}
                      </div>
                    </div>

                    {expandedModules.includes(index) && (
                      <div className="px-6 pb-6 pt-2 border-t border-cyan-900/20">
                        <ul className="space-y-4">
                          {module.lessons.map((lesson, i) => (
                            <li key={i} className="text-cyan-300 flex justify-between items-center">
                              <div className="flex items-center">
                                <BsBook className="mr-2 text-cyan-400" />
                                <span>{lesson.name}</span>
                                {lesson.hasProject && (
                                  <span className="ml-2 px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                                    Project
                                  </span>
                                )}
                              </div>
                              <span className="text-cyan-400/80 text-sm">{lesson.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "faqs" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {[
                  { 
                    question: "Do I need prior programming experience?", 
                    answer: "No prior programming experience is needed. This course is designed for complete beginners."
                  },
                  { 
                    question: "What Python version is used?", 
                    answer: "We use Python 3.x, the latest stable version of Python."
                  },
                  { 
                    question: "Will I get a certificate?", 
                    answer: "Yes, upon completion you'll receive a certificate that you can share on LinkedIn or with employers."
                  },
                  { 
                    question: "Do I need to install any software?", 
                    answer: "No, all exercises are done in our browser-based learning environment with no downloads required."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl 
                      border border-cyan-900/20"
                  >
                    <h3 className="text-xl font-semibold text-cyan-100 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-cyan-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-100 mb-12">
            Course Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20"
              >
                <div className="text-3xl text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-100 mb-2">{feature.title}</h3>
                <p className="text-cyan-300/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-100 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20"
              >
                <div className="flex items-start mb-4">
                  <FaQuoteLeft className="text-2xl text-cyan-400" />
                </div>
                <p className="text-cyan-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-cyan-100 font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-300/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl 
            border border-cyan-900/20 text-center">
            <AiOutlineBulb className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-cyan-100 mb-4">
              Ready to master Python?
            </h2>
            <p className="text-cyan-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with our 
              comprehensive Python programming curriculum
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 
                border border-cyan-500/30 hover:border-cyan-500/50
                rounded-lg text-cyan-300 text-lg font-semibold transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PythonCourse;