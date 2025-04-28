import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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

// Placeholder image URLs - replace with your actual screenshots
const reviewImages = [
  '/assets/images/ceo/CeoMessage/800/400', // Image 1 - for scroll 2
  '/api/placeholder/400/300', // Image 2 - for scroll 3 (first image)
  '/api/placeholder/400/300', // Image 3 - for scroll 3 (second image)
  '/api/placeholder/800/400', // Image 4 - for scroll 5
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

  // Single Image Layout (Scroll 2 and 5)
  const renderSingleImage = (imageIndex: number) => (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg">
        <img
          src={reviewImages[imageIndex]}
          alt="Platform Reviews"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-bold text-cyan-100 mb-2">Student Reviews</h3>
          <p className="text-cyan-300">
            See what our students are saying about DataSense courses on popular platforms
          </p>
        </div>
      </div>
    </div>
  );

  // Two Images Layout (Scroll 3)
  const renderTwoImages = () => (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg">
          <img
            src={reviewImages[1]}
            alt="Platform Reviews 1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-cyan-100 mb-1">LinkedIn Reviews</h3>
            <p className="text-cyan-300 text-sm">
              Career transformation stories from our LinkedIn community
            </p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg">
          <img
            src={reviewImages[2]}
            alt="Platform Reviews 2"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-cyan-100 mb-1">Coursera Reviews</h3>
            <p className="text-cyan-300 text-sm">
              Student feedback from our Coursera partnership
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 0: // Scroll 1
        return renderTestimonialGrid();
      case 1: // Scroll 2
        return renderSingleImage(0);
      case 2: // Scroll 3
        return renderTwoImages();
      case 3: // Scroll 4 (same as scroll 1)
        return renderTestimonialGrid();
      case 4: // Scroll 5 (same as scroll 2)
        return renderSingleImage(3);
      default:
        return renderTestimonialGrid();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 relative">
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