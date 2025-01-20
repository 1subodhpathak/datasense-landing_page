import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-cyan to-darker-cyan opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charleston mb-4">
            About DataSense
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Empowering businesses with intelligent data solutions for informed decision-making
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-darker-cyan/50 backdrop-blur-sm rounded-xl p-6 hover:bg-darker-cyan/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions."
  },
  {
    icon: "🤖",
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to automate and optimize your processes."
  },
  {
    icon: "🔒",
    title: "Secure Solutions",
    description: "Enterprise-grade security measures to protect your valuable data assets."
  },
  {
    icon: "📈",
    title: "Real-time Monitoring",
    description: "Track and analyze your data in real-time for immediate decision making."
  },
  {
    icon: "🎯",
    title: "Custom Solutions",
    description: "Tailored solutions designed to meet your specific business requirements."
  },
  {
    icon: "🌐",
    title: "Cloud Integration",
    description: "Seamless integration with leading cloud platforms for scalable solutions."
  }
];

export default About;