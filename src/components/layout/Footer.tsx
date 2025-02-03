import { BsLinkedin, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-cyan-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">DataSense</h3>
            <p className="text-cyan-300/80 mb-4">
              Empowering data enthusiasts with quality education and career
              guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <BsYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <BsTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-cyan-300/80 hover:text-cyan-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  SQL Training
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Mock Interviews
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Resume Review
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-300/80 hover:text-cyan-300">
                  Career Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-cyan-300/80">contact@datasense.com</li>
              <li className="text-cyan-300/80">+1 (555) 123-4567</li>
              <li className="text-cyan-300/80">Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-900/30">
          <div className="text-center text-cyan-300/60">
            <p>&copy; {currentYear} DataSense. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
