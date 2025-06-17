import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BiLike, BiComment, BiShare } from 'react-icons/bi';

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
    views: '12K views',
    time: '3 days ago',
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

function Testimonial() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 5;

  const handlePrevious = () => {
    setActiveSection((prev) => (prev - 1 + totalSections) % totalSections);
  };

  const handleNext = () => {
    setActiveSection((prev) => (prev + 1) % totalSections);
  };

  // Testimonial Grid Layout (Scroll 1 and 4)
  const renderTestimonialGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="p-8 bg-slate-800/30 rounded-xl
            border border-cyan-900/20 hover:border-cyan-500/30
            transition-all duration-300 hover:-translate-y-1
            backdrop-blur-sm"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold">
                {testimonial.avatar}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">
                {testimonial.name}
              </h3>
              <p className="text-cyan-400 text-sm">{testimonial.role}</p>
              <div className="flex gap-1 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-cyan-300 text-sm italic">
            "{testimonial.text}"
          </p>
        </div>
      ))}
    </div>
  );

  // LinkedIn Style Reviews (Scroll 2)
  const renderLinkedInReviews = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {linkedinTestimonials.slice(0, 4).map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md"
          >
            {/* LinkedIn Header */}
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-blue-600/80"></div>
              </div>
              <span className="text-cyan-300/70 text-sm">LinkedIn</span>
            </div>
            
            {/* LinkedIn Content */}
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-300 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-cyan-100 font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs">{testimonial.role}</p>
                  <p className="text-cyan-500 text-xs">{testimonial.time}</p>
                </div>
              </div>
              
              <p className="text-cyan-300 text-sm mb-3 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4 pt-2 border-t border-cyan-900/20">
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <BiLike className="text-sm" />
                  {testimonial.likes}
                </div>
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <BiComment className="text-sm" />
                  {testimonial.comments}
                </div>
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <BiShare className="text-sm" />
                  {testimonial.shares}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional testimonials row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md">
          <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-red-600/80"></div>
            </div>
            <span className="text-cyan-300/70 text-sm">YouTube</span>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-300 font-semibold text-sm">TR</span>
              </div>
              <div>
                <h4 className="text-cyan-100 font-semibold text-sm">TechWithRavi</h4>
                <p className="text-cyan-400 text-xs">45K subscribers</p>
              </div>
            </div>
            <p className="text-cyan-300 text-sm mb-2">How DataSense SQL Course Got Me a Job at Amazon</p>
            <div className="flex items-center gap-2 text-cyan-400 text-xs">
              <span>12K views</span>
              <span>•</span>
              <span>3 days ago</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md">
          <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-purple-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-pink-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-purple-600/80"></div>
            </div>
            <span className="text-cyan-300/70 text-sm">Instagram</span>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-300 font-semibold text-sm">DA</span>
              </div>
              <div>
                <h4 className="text-cyan-100 font-semibold text-sm">data_with_amit</h4>
                <p className="text-cyan-400 text-xs">2 DAYS AGO</p>
              </div>
            </div>
            <p className="text-cyan-300 text-sm mb-2">New job alert! 🎯 Just joined Flipkart as Data Scientist thanks to DataSense!</p>
            <div className="flex items-center gap-2 text-cyan-400 text-xs">
              <AiOutlineHeart className="text-sm" />
              <span>234 likes</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md">
          <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-sky-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-sky-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-sky-600/80"></div>
            </div>
            <span className="text-cyan-300/70 text-sm">Twitter</span>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-300 font-semibold text-sm">VK</span>
              </div>
              <div>
                <h4 className="text-cyan-100 font-semibold text-sm">Vikash Kumar</h4>
                <p className="text-cyan-400 text-xs">@vikash_data • 2h</p>
              </div>
            </div>
            <p className="text-cyan-300 text-sm mb-2">Just got my offer letter from @microsoft! 🎉 Thanks to @DataSenseIndia</p>
            <div className="flex items-center gap-4 text-cyan-400 text-xs">
              <span>45 retweets</span>
              <span>189 likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Twitter + Instagram Mixed Reviews (Scroll 4)
  const renderMixedReviews = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {twitterTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md"
          >
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-sky-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-sky-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-sky-600/80"></div>
              </div>
              <span className="text-cyan-300/70 text-sm">Twitter</span>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-300 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-cyan-100 font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs">{testimonial.handle} • {testimonial.time}</p>
                </div>
              </div>
              
              <p className="text-cyan-300 text-sm mb-3 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4 pt-2 border-t border-cyan-900/20">
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <AiOutlineComment className="text-sm" />
                  {testimonial.replies}
                </div>
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <AiOutlineShareAlt className="text-sm" />
                  {testimonial.retweets}
                </div>
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <AiOutlineHeart className="text-sm" />
                  {testimonial.likes}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {instagramTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md"
          >
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-purple-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-purple-600/80"></div>
              </div>
              <span className="text-cyan-300/70 text-sm">Instagram</span>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-300 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-cyan-100 font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs">{testimonial.time}</p>
                </div>
              </div>
              
              <p className="text-cyan-300 text-sm mb-3 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4 pt-2 border-t border-cyan-900/20">
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <AiOutlineHeart className="text-sm" />
                  {testimonial.likes} likes
                </div>
                <div className="text-cyan-500 text-xs">
                  📍 {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {youtubeTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-900/30 backdrop-blur-md"
          >
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-red-600/80"></div>
              </div>
              <span className="text-cyan-300/70 text-sm">YouTube</span>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-300 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-cyan-100 font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs">{testimonial.subscribers} subscribers</p>
                </div>
              </div>
              
              <p className="text-cyan-300 text-sm mb-2 leading-relaxed">
                {testimonial.title}
              </p>
              
              <div className="flex items-center gap-2 text-cyan-400 text-xs mb-2">
                <span>{testimonial.views}</span>
                <span>•</span>
                <span>{testimonial.time}</span>
              </div>
              
              <div className="flex items-center gap-4 pt-2 border-t border-cyan-900/20">
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <BiLike className="text-sm" />
                  {testimonial.likes}
                </div>
                <div className="text-cyan-500 text-xs">
                  ⏱️ {testimonial.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 0: // Scroll 1
        return renderTestimonialGrid();
      case 1: // Scroll 2 - LinkedIn Reviews
        return renderLinkedInReviews();
      case 2: // Scroll 3 - Mixed Reviews
        return renderMixedReviews();
      case 3: // Scroll 4 (same as scroll 1)
        return renderTestimonialGrid();
      case 4: // Scroll 5 - LinkedIn Reviews (same as scroll 2)
        return renderLinkedInReviews();
      default:
        return renderTestimonialGrid();
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

        <div className="relative min-h-[400px]">
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
            onClick={handlePrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-2 w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 hover:bg-cyan-900/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-cyan-100 text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-2 w-10 h-10 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30 hover:bg-cyan-900/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-cyan-100 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;