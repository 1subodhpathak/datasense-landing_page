import { useState } from 'react';
// import { BsStarFill } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { BiLike, BiComment, BiShare } from 'react-icons/bi';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Data Analyst at Amazon',
    avatar: 'RS',
    rating: 5,
    text: 'The SQL course was exceptional. Got placed at Amazon within 2 months of completing the course. The interview preparation support was invaluable.',
  },
  {
    name: 'Priya Patel',
    role: 'BI Developer at Microsoft',
    avatar: 'PP',
    rating: 5,
    text: 'The mock interviews and career guidance helped me transition from a non-tech background to a BI role. Highly recommended for aspiring analysts.',
  },
  {
    name: 'Amit Kumar',
    role: 'Data Scientist at Flipkart',
    avatar: 'AK',
    rating: 5,
    text: 'Comprehensive Python and SQL training with real-world projects. The community support and mentorship are unmatched.',
  },
  {
    name: 'Neha Singh',
    role: 'Analytics Lead at Google',
    avatar: 'NS',
    rating: 5,
    text: 'The personalized mentoring sessions helped me crack my dream job. The curriculum is perfectly aligned with industry requirements.',
  }
];

// LinkedIn style testimonials
const linkedinTestimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Senior Data Engineer at Netflix',
    avatar: 'AM',
    time: '2w',
    text: 'Just completed the DataSense Advanced SQL course! 🚀 The hands-on projects and real-world scenarios prepared me perfectly for my Netflix interview. Highly recommend to anyone looking to level up their data skills! #DataSense #SQL #CareerGrowth',
    likes: 127,
    comments: 23,
    shares: 8
  },
  {
    name: 'Kavya Reddy',
    role: 'Data Analyst at Uber',
    avatar: 'KR',
    time: '1w',
    text: 'From zero coding experience to landing a role at Uber! 🎯 DataSense Python bootcamp changed my life. The mentorship program and career guidance were exceptional. Thank you DataSense team! #CareerTransition #Python #DataAnalysis',
    likes: 203,
    comments: 45,
    shares: 12
  },
  {
    name: 'Rohit Gupta',
    role: 'BI Developer at Zomato',
    avatar: 'RG',
    time: '3d',
    text: 'DataSense SQL + Python combo course = Dream job at Zomato! 💼 The curriculum is industry-focused and the support system is incredible. Special thanks to the placement team! #DataSense #Success #BusinessIntelligence',
    likes: 89,
    comments: 18,
    shares: 5
  },
  {
    name: 'Sneha Jain',
    role: 'Data Scientist at PayTM',
    avatar: 'SJ',
    time: '5d',
    text: 'Grateful to DataSense for the comprehensive training! 🙏 The mock interviews and technical prep helped me crack PayTM. The community support throughout the journey was amazing! #DataScience #MockInterviews #Success',
    likes: 156,
    comments: 31,
    shares: 9
  }
];

// Twitter style testimonials
const twitterTestimonials = [
  {
    name: 'Vikash Kumar',
    handle: '@vikash_data',
    avatar: 'VK',
    time: '2h',
    text: 'Just got my offer letter from @microsoft! 🎉 Thanks to @DataSenseIndia for the amazing SQL course. The practical approach made all the difference! #DataSense #Microsoft #SQLSuccess',
    retweets: 45,
    likes: 189,
    replies: 12
  },
  {
    name: 'Anisha Patel',
    handle: '@anisha_analytics',
    avatar: 'AP',
    time: '1d',
    text: 'Career update: Joined @Google as Analytics Lead! 📊 DataSense Python + SQL course was the game-changer. The community and mentorship are unmatched! #DataSense #Google #CareerGrowth',
    retweets: 78,
    likes: 234,
    replies: 23
  },
  {
    name: 'Saurabh Singh',
    handle: '@saurabh_data',
    avatar: 'SS',
    time: '3d',
    text: 'From non-tech to Data Engineer at @Flipkart in 6 months! 🚀 DataSense made it possible. The structured curriculum and hands-on projects are incredible! #DataSense #Flipkart #CareerTransition',
    retweets: 92,
    likes: 267,
    replies: 34
  }
];

// YouTube style testimonials
const youtubeTestimonials = [
  {
    name: 'TechWithRavi',
    subscribers: '45K',
    avatar: 'TR',
    title: 'How DataSense SQL Course Got Me a Job at Amazon - My Success Story',
    // views: '12K views',
    // time: '3 days ago',
    likes: 567,
    duration: '8:45'
  },
  {
    name: 'DataGirlPriya',
    subscribers: '28K',
    avatar: 'DG',
    title: 'DataSense Review: From Zero to Data Analyst at Microsoft',
    views: '8.2K views',
    time: '1 week ago',
    likes: 423,
    duration: '12:30'
  }
];

// Instagram style testimonials
const instagramTestimonials = [
  {
    name: 'data_with_amit',
    avatar: 'DA',
    time: '2 DAYS AGO',
    text: 'New job alert! 🎯 Just joined Flipkart as Data Scientist thanks to @datasense.india Amazing course content and placement support! #DataSense #Flipkart #DataScientist',
    likes: 234,
    location: 'Bangalore, India'
  },
  {
    name: 'sql_queen_neha',
    avatar: 'SQ',
    time: '1 WEEK AGO',
    text: 'From finance to tech! 💻 DataSense SQL course helped me transition to Google. Best decision ever! #CareerChange #DataSense #Google',
    likes: 189,
    location: 'Hyderabad, India'
  }
];

// Add a Topmate testimony (placeholder)
// const topmateTestimonial = {
//   name: 'Riya Verma',
//   role: 'Mentored via Topmate',
//   avatar: 'TM',
//   platform: 'Topmate',
//   text: 'Topmate mentorship was a game-changer for my career. The personalized guidance and support helped me land my dream job!',
//   likes: 98,
//   time: '1w',
// };

function Testimonial() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 3;
  const fixedHeight = 'min-h-[420px] md:min-h-[420px] lg:min-h-[420px]';

  // Scroll 1: 4 testimonies (LinkedIn, YouTube, Instagram, Topmate)
  const renderFourPlatformGrid = () => (
    <div className={`flex flex-row gap-6 max-w-6xl mx-auto ${fixedHeight}`}>
      {/* LinkedIn */}
      <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md flex flex-col justify-between flex-1">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-blue-600/80"></div>
          </div>
          <span className="text-cyan-300/70 text-sm">LinkedIn</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold text-sm">AM</span>
            </div>
            <div>
              <h4 className="text-cyan-100 font-semibold text-sm">Arjun Mehta</h4>
              <p className="text-cyan-400 text-xs">Senior Data Engineer at Netflix</p>
              <p className="text-cyan-500 text-xs">2w</p>
            </div>
          </div>
          <p className="text-cyan-300 text-sm mb-3 leading-relaxed flex-1">
            Just completed the DataSense Advanced SQL course! 🚀 The hands-on projects and real-world scenarios prepared me perfectly for my Netflix interview. Highly recommend to anyone looking to level up their data skills! #DataSense #SQL #CareerGrowth
          </p>
        </div>
      </div>
      {/* YouTube */}
      <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md flex flex-col justify-between flex-1">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-red-600/80"></div>
          </div>
          <span className="text-cyan-300/70 text-sm">YouTube</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold text-sm">TR</span>
            </div>
            <div>
              <h4 className="text-cyan-100 font-semibold text-sm">TechWithRavi</h4>
              <p className="text-cyan-400 text-xs">45K subscribers</p>
            </div>
          </div>
          <p className="text-cyan-300 text-sm mb-2 flex-1">How DataSense SQL Course Got Me a Job at Amazon</p>
          {/* <div className="flex items-center gap-2 text-cyan-400 text-xs">
            <span>12K views</span>
            <span>•</span>
            <span>3 days ago</span>
          </div> */}
        </div>
      </div>
      {/* Instagram */}
      <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md flex flex-col justify-between flex-1">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-purple-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-purple-600/80"></div>
          </div>
          <span className="text-cyan-300/70 text-sm">Instagram</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold text-sm">DA</span>
            </div>
            <div>
              <h4 className="text-cyan-100 font-semibold text-sm">data_with_amit</h4>
              <p className="text-cyan-400 text-xs">2 DAYS AGO</p>
            </div>
          </div>
          <p className="text-cyan-300 text-sm mb-2 flex-1">New job alert! 🎯 Just joined Flipkart as Data Scientist thanks to DataSense!</p>
          {/* <div className="flex items-center gap-2 text-cyan-400 text-xs">
            <AiOutlineHeart className="text-sm" />234 likes
          </div> */}
        </div>
      </div>
      {/* Topmate */}
      <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md flex flex-col justify-between flex-1">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-600/80"></div>
          </div>
          <span className="text-cyan-300/70 text-sm">Topmate</span>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold text-sm">TM</span>
            </div>
            <div>
              <h4 className="text-cyan-100 font-semibold text-sm">Riya Verma</h4>
              <p className="text-cyan-400 text-xs">Mentored via Topmate</p>
              <p className="text-cyan-500 text-xs">1w</p>
            </div>
          </div>
          <p className="text-cyan-300 text-sm mb-2 flex-1">Topmate mentorship was a game-changer for my career. The personalized guidance and support helped me land my dream job!</p>
          {/* <div className="flex items-center gap-2 text-cyan-400 text-xs">
            <AiOutlineHeart className="text-sm" />98 likes
          </div> */}
        </div>
      </div>
    </div>
  );

  // Scroll 2: One big screenshot
  const renderScreenshot = () => (
    <div className={`flex items-center justify-center ${fixedHeight}`}>
      <img src="/assets/images/thumbnails/it.jpg" alt="Testimonial Screenshot" className="max-h-[380px] w-auto rounded-xl shadow-2xl border border-cyan-900/30" />
    </div>
  );

  // Scroll 3: 6 testimonies, smaller cards
  const renderSixSmallCards = () => {
    // Pick 6 testimonies from all platforms
    const smallCards = [
      linkedinTestimonials[1], // Kavya Reddy
      twitterTestimonials[0],  // Vikash Kumar
      instagramTestimonials[1], // sql_queen_neha
      youtubeTestimonials[1], // DataGirlPriya
      testimonials[2], // Amit Kumar
      testimonials[3], // Neha Singh
    ];
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto ${fixedHeight}`}>
        {smallCards.map((t, idx) => (
          <div key={idx} className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md p-3 flex flex-col justify-between h-full">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-300 font-semibold text-xs">{('avatar' in t && t.avatar) ? t.avatar : t.name[0]}</span>
              </div>
              <div>
                <h4 className="text-cyan-100 font-semibold text-xs">{t.name}</h4>
                {'role' in t && t.role ? <p className="text-cyan-400 text-[10px]">{t.role}</p> : null}
                {'handle' in t && t.handle ? <p className="text-cyan-400 text-[10px]">{t.handle}</p> : null}
                {'time' in t && t.time ? <p className="text-cyan-500 text-[10px]">{t.time}</p> : null}
              </div>
            </div>
            <p className="text-cyan-300 text-xs mb-2 leading-relaxed flex-1">{'text' in t && t.text ? t.text : ('title' in t && t.title ? t.title : '')}</p>
            <div className="flex items-center gap-2 text-cyan-400 text-[10px] mt-auto">
              {'likes' in t && t.likes ? <span>👍 {t.likes}</span> : null}
              {'comments' in t && t.comments ? <span>💬 {t.comments}</span> : null}
              {'retweets' in t && t.retweets ? <span>🔁 {t.retweets}</span> : null}
              {'replies' in t && t.replies ? <span>💬 {t.replies}</span> : null}
              {'shares' in t && t.shares ? <span>↗️ {t.shares}</span> : null}
              {'subscribers' in t && t.subscribers ? <span>👥 {t.subscribers}</span> : null}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return renderFourPlatformGrid();
      case 1:
        return renderScreenshot();
      case 2:
        return renderSixSmallCards();
      default:
        return renderFourPlatformGrid();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Student Success Stories
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Hear from our alumni who transformed their careers with DataSense
        </p>

        <div className="relative min-h-[420px] md:min-h-[420px] lg:min-h-[420px]">
          <div className="transition-opacity duration-300">
            {renderSection()}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-12 gap-3">
            {[...Array(totalSections)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSection(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === idx ? 'bg-cyan-400 scale-125' : 'bg-cyan-900'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveSection((prev) => (prev - 1 + totalSections) % totalSections)}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full ml-6 w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 hover:bg-cyan-900/50 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-cyan-100 text-xl robotic-arrow" />
          </button>
          <button
            onClick={() => setActiveSection((prev) => (prev + 1) % totalSections)}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full mr-6 w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 hover:bg-cyan-900/50 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-cyan-100 text-xl robotic-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;