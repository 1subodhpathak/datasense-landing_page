import { useState, FormEvent } from 'react';
import { BiUser, BiEnvelope, BiPhone, BiMessageDetail } from 'react-icons/bi';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({
    type: '',
    message: ''
  });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Replace this with your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxRqBSMWQTtT-FfjEdfEPxcTHj6nlo4X2eSpcsv2ufO90KtuhCwfblpqwqiBDRyA1fo/exec';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowNotification(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });
      
      // Since we're using no-cors, we don't need to check response
      setNotificationData({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotificationData({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="max-w-3xl mx-auto">
          {showNotification && (
            <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
              notificationData.type === 'success' 
                ? 'bg-cyan-900/50 border border-cyan-500/50 text-cyan-100'
                : 'bg-red-900/50 border border-red-500/50 text-red-100'
            }`}>
              {notificationData.type === 'success' ? (
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400" />
              )}
              <p>{notificationData.message}</p>
            </div>
          )}

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
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold
                  py-3 px-8 rounded-lg transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center space-x-2 mx-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;