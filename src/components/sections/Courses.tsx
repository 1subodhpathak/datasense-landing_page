import { motion } from "framer-motion";
import { BsDatabase } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

const courseData = [
  {
    icon: <BsDatabase className="text-5xl text-cyan-400" />,
    title: "SQL",
    description:
      "Master database management with comprehensive SQL training. Learn querying, data manipulation, and database design through hands-on projects.",
    link: "/courses/sql",
  },
  {
    icon: <FaPython className="text-5xl text-cyan-400" />,
    title: "Python",
    description:
      "Build strong programming foundations with Python. Cover data structures, algorithms, and practical applications in data analysis and automation.",
    link: "/courses/sql",
  },
  {
    icon: <MdOutlineSmartToy className="text-5xl text-cyan-400" />,
    title: "AI & Machine Learning",
    description:
      "Explore cutting-edge AI and ML technologies. Learn model development, deep learning, and practical implementation of AI solutions.",
    link: "/courses/sql",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="w-full py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-100 mb-4">
            Start Learning with DataSense
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            Build job-ready skills with award-winning courses and personalized,
            goal-oriented learning plans
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-cyan-300 opacity-90 text-center max-w-4xl mx-auto">
            Start Learning with DataSense offers a diverse selection of courses in
            Data Analytics, Engineering, AI, and Machine Learning. Master key tools
            like SQL and Python, develop real-world projects, and gain expertise in
            cutting-edge AI and ML techniques. Our personalized, hands-on approach
            ensures you build the skills needed to excel in today's data-driven job
            market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl 
                border border-cyan-900/20 hover:border-cyan-500/30
                hover:bg-slate-700/40 transition-all duration-300
                hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-all duration-500">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-cyan-100 mb-4">
                  {course.title}
                </h3>
                <p className="text-cyan-300 opacity-90 mb-8">{course.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 
                    border border-cyan-500/30 hover:border-cyan-500/50
                    rounded-lg text-cyan-300 font-semibold transition-all duration-300
                    hover:-translate-y-0.5"
                  onClick={() => window.location.href = course.link}
                >
                  Start Learning
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;