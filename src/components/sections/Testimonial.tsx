import { BsStarFill } from 'react-icons/bs';

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

function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Student Success Stories
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Hear from our alumni who transformed their careers with DataSense
        </p>

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
      </div>
    </section>
  );
}

export default Testimonial;