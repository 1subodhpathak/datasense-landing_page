import { useState } from 'react';
import { BiUser, BiEnvelope, BiPhone, BiMessageDetail } from 'react-icons/bi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative">
                <BiUser className="absolute top-3 left-4 text-cyan-400 text-xl" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-800/30 border border-cyan-900/20 
                    hover:border-cyan-500/30 rounded-lg py-3 px-12
                    text-cyan-100 placeholder-cyan-400/50 focus:outline-none
                    focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <BiEnvelope className="absolute top-3 left-4 text-cyan-400 text-xl" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-800/30 border border-cyan-900/20 
                    hover:border-cyan-500/30 rounded-lg py-3 px-12
                    text-cyan-100 placeholder-cyan-400/50 focus:outline-none
                    focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <BiPhone className="absolute top-3 left-4 text-cyan-400 text-xl" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-800/30 border border-cyan-900/20 
                  hover:border-cyan-500/30 rounded-lg py-3 px-12
                  text-cyan-100 placeholder-cyan-400/50 focus:outline-none
                  focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <BiMessageDetail className="absolute top-3 left-4 text-cyan-400 text-xl" />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-800/30 border border-cyan-900/20 
                  hover:border-cyan-500/30 rounded-lg py-3 px-12 min-h-[150px]
                  text-cyan-100 placeholder-cyan-400/50 focus:outline-none
                  focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold
                  py-3 px-8 rounded-lg transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;