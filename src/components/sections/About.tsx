import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaChartLine, FaGraduationCap } from 'react-icons/fa';

const coreValues = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Constantly evolving our curriculum with cutting-edge data science practices'
  },
  {
    icon: FaHandshake,
    title: 'Support',
    description: 'Dedicated mentorship and guidance throughout your learning journey'
  },
  {
    icon: FaChartLine,
    title: 'Excellence',
    description: 'Commitment to delivering high-quality education and practical skills'
  },
  {
    icon: FaGraduationCap,
    title: 'Success',
    description: 'Focus on real-world applications and career advancement'
  }
];

const timeline = [
  {
    year: '2020',
    title: 'Foundation',
    description: 'DataSense Academy was established with a vision to transform data education'
  },
  {
    year: '2021',
    title: 'Growth',
    description: 'Expanded our course offerings and reached 1000+ students'
  },
  {
    year: '2022',
    title: 'Recognition',
    description: 'Received industry recognition and formed corporate partnerships'
  },
  {
    year: '2023',
    title: 'Innovation',
    description: 'Launched advanced programs and achieved 5000+ student milestone'
  }
];

function About() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-950 to-slate-900 pt-20"> {/* Added pt-20 for navbar spacing */}
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-cyan-100 mb-6">
              Empowering Data Science Excellence
            </h1>
            <p className="text-xl text-cyan-300 leading-relaxed">
              At DataSense Academy, we're dedicated to transforming aspiring data professionals
              into industry-ready experts through comprehensive education and practical training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-100 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-800/30 rounded-xl border border-cyan-900/20 
                  hover:border-cyan-500/30 transition-all duration-300"
              >
                <value.icon className="text-3xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-cyan-200 mb-2">{value.title}</h3>
                <p className="text-cyan-300 opacity-80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-100 mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-24 text-2xl font-bold text-cyan-400">{item.year}</div>
                <div className="flex-1 p-6 bg-slate-800/30 rounded-xl border border-cyan-900/20">
                  <h3 className="text-xl font-bold text-cyan-200 mb-2">{item.title}</h3>
                  <p className="text-cyan-300 opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-cyan-100 mb-6">
            Join Our Data Science Community
          </h2>
          <p className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards your data science career. Connect with us to learn more
            about our programs and opportunities.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold 
            rounded-full transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;