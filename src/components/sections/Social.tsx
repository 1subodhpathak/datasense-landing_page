import { BsYoutube, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

// Add the useCountAnimation hook from Rating.tsx
const useCountAnimation = (end: number, duration: number = 1000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<number>(start);
  const timeRef = useRef<number>();

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      countRef.current = start + Math.floor((end - start) * progress);
      setCount(countRef.current);

      if (progress < 1) {
        timeRef.current = requestAnimationFrame(animate);
      }
    };

    timeRef.current = requestAnimationFrame(animate);

    return () => {
      if (timeRef.current) {
        cancelAnimationFrame(timeRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
};

const socialMediaData = {
  stats: [
    { count: '50K+', label: 'YouTube Subscribers', numericValue: 50 },
    { count: '100K+', label: 'LinkedIn Followers', numericValue: 100 },
    { count: '25K+', label: 'Instagram Followers', numericValue: 25 },
    { count: '30K+', label: 'Twitter Followers', numericValue: 30 }
  ],
  featuredContent: [
    {
      title: 'SQL Interview Questions',
      views: '250K',
      platform: 'YouTube',
      icon: BsYoutube,
      color: 'text-red-500'
    },
    {
      title: 'Data Analytics Career Guide',
      views: '180K',
      platform: 'LinkedIn',
      icon: BsLinkedin,
      color: 'text-blue-500'
    },
    {
      title: 'Python Tips & Tricks',
      views: '120K',
      platform: 'Instagram',
      icon: BsInstagram,
      color: 'text-pink-500'
    },
    {
      title: 'Industry Insights',
      views: '90K',
      platform: 'Twitter',
      icon: BsTwitter,
      color: 'text-sky-500'
    }
  ]
};

function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const AnimatedStat = ({ stat }: { stat: typeof socialMediaData.stats[0] }) => {
    const count = useCountAnimation(
      stat.numericValue,
      1000,
      0
    );

    return (
      <div className="p-6 bg-slate-800/30 rounded-xl text-center border border-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
        <div className="text-3xl font-bold text-cyan-100 mb-2">
          {isInView ? `${count}K+` : '0K+'}
        </div>
        <div className="text-cyan-300 text-sm">
          {stat.label}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Our Social Media Presence
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Join our growing community of data enthusiasts across platforms
        </p>

        {/* Social Media Stats with Animation */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {socialMediaData.stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>

        {/* Featured Content */}
        <h3 className="text-2xl font-bold text-center text-cyan-100 mb-8">
          Featured Content
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialMediaData.featuredContent.map((content, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/30 rounded-xl
                hover:bg-slate-700/40 transition-all duration-300
                border border-cyan-900/20 hover:border-cyan-500/30
                backdrop-blur-sm hover:-translate-y-1"
            >
              <content.icon 
                className={`text-4xl ${content.color} mb-4 
                  group-hover:scale-110 transition-transform`}
              />
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">
                {content.title}
              </h4>
              <p className="text-cyan-300 text-sm">
                {content.platform} • {content.views} views
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block bg-caribbean hover:bg-teal text-white 
              font-bold py-3 px-8 rounded-lg transition-all duration-300 
              transform hover:scale-105"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;