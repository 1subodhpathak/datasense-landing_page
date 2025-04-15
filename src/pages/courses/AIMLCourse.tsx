import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUserGraduate, FaChevronDown, FaChevronUp, FaQuoteLeft } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlineBulb, AiOutlineProject } from "react-icons/ai";
import { BsCheckCircle, BsAward, BsBook, BsStarFill } from "react-icons/bs";
import { MdOutlineComputer, MdWorkspaces } from "react-icons/md";
import { useScrollTop } from "../../hooks/useScrollTop";

const syllabusData = [
  {
    title: "Machine Learning Fundamentals",
    duration: "3 weeks",
    description: "Master the core concepts of machine learning and statistical modeling",
    lessons: [
      { name: "Introduction to ML", duration: "1.5 hr", hasProject: false },
      { name: "Supervised Learning", duration: "2.5 hr", hasProject: true },
      { name: "Unsupervised Learning", duration: "2.5 hr", hasProject: true },
      { name: "Model Evaluation", duration: "2 hr", hasProject: true },
      { name: "Feature Engineering", duration: "2.5 hr", hasProject: true }
    ]
  },
  {
    title: "Deep Learning & Neural Networks",
    duration: "4 weeks",
    description: "Dive into neural networks and advanced deep learning concepts",
    lessons: [
      { name: "Neural Network Basics", duration: "2.5 hr", hasProject: false },
      { name: "CNN Architecture", duration: "3 hr", hasProject: true },
      { name: "RNN and LSTM", duration: "3 hr", hasProject: true },
      { name: "Transfer Learning", duration: "2.5 hr", hasProject: false },
      { name: "Deep Learning Projects", duration: "4 hr", hasProject: true }
    ]
  },
  {
    title: "Advanced AI Applications",
    duration: "3 weeks",
    description: "Apply AI/ML to solve real-world problems",
    lessons: [
      { name: "Natural Language Processing", duration: "3 hr", hasProject: true },
      { name: "Computer Vision", duration: "3 hr", hasProject: true },
      { name: "Reinforcement Learning", duration: "2.5 hr", hasProject: true },
      { name: "AI Ethics & Bias", duration: "2 hr", hasProject: false },
      { name: "Capstone Project", duration: "5 hr", hasProject: true }
    ]
  }
];

const features = [
  {
    icon: <MdOutlineComputer />,
    title: "AI Lab Environment",
    description: "Train and test models in our cloud-based AI laboratory"
  },
  {
    icon: <AiOutlineProject />,
    title: "Industry Projects",
    description: "Work on real-world AI/ML projects with actual datasets"
  },
  {
    icon: <BsAward />,
    title: "AI/ML Certification",
    description: "Earn a professional certificate in AI and Machine Learning"
  },
  {
    icon: <MdWorkspaces />,
    title: "Model Deployment",
    description: "Learn to deploy ML models to production environments"
  }
];

const testimonials = [
  {
    name: "Dr. Arjun Reddy",
    role: "AI Research Scientist",
    quote: "This course provides an excellent balance of theory and practical implementation. The projects are industry-relevant.",
    rating: 5
  },
  {
    name: "Meera Kapoor",
    role: "ML Engineer at Google",
    quote: "The deep learning section is particularly well-structured. It helped me transition into a machine learning role.",
    rating: 5
  },
  {
    name: "Vikram Shah",
    role: "Data Science Lead",
    quote: "A comprehensive AI/ML curriculum that covers all the essential topics. The hands-on approach is invaluable.",
    rating: 5
  }
];

const AIMLCourse = () => {
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
              <FaRobot className="text-6xl text-cyan-400 mr-4" />
              <h1 className="text-5xl font-bold text-cyan-100">AI & Machine Learning</h1>
            </div>
            
            <p className="text-xl text-cyan-300 text-center mb-4">
              Master the technologies shaping our future
            </p>

            <p className="text-cyan-400/80 text-center mb-8">
              Join the AI revolution and build intelligent systems that solve real-world problems
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <AiOutlineClockCircle />, text: "10 Weeks Course" },
                { icon: <FaUserGraduate />, text: "Intermediate Level" },
                { icon: <BsCheckCircle />, text: "Certificate Included" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-cyan-300">
                  <span className="text-2xl">{stat.icon}</span>
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
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
                    Artificial Intelligence and Machine Learning are revolutionizing industries 
                    worldwide. This comprehensive course covers both theoretical foundations 
                    and practical applications of AI/ML.
                  </p>
                  <p>
                    From fundamental ML algorithms to advanced deep learning techniques, 
                    you'll learn to build and deploy AI systems that can solve complex 
                    real-world problems.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-900/20">
                  <h3 className="text-xl font-semibold text-cyan-100 mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Basic Python programming knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Foundational mathematics (statistics, calculus, linear algebra)</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheckCircle className="mr-2 text-cyan-400 mt-1" />
                      <span>Understanding of basic data structures</span>
                    </li>
                  </ul>
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
                    question: "What hardware requirements are needed?", 
                    answer: "A modern computer with at least 8GB RAM. GPU access is provided through our cloud platform."
                  },
                  { 
                    question: "Is this course suitable for beginners?", 
                    answer: "Basic Python and mathematics knowledge is required. Complete our Python course first if needed."
                  },
                  { 
                    question: "Will I get a certificate?", 
                    answer: "Yes, upon completion you'll receive a certificate that you can share on LinkedIn or with employers."
                  },
                  { 
                    question: "What programming language is used?", 
                    answer: "The course primarily uses Python for implementing AI/ML algorithms and models."
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
              Ready to dive into AI & ML?
            </h2>
            <p className="text-cyan-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are building the future with AI and 
              Machine Learning technologies
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

export default AIMLCourse;